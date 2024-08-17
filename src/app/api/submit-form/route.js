import { Client, Databases, ID } from "appwrite";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  console.log(data);
  if (!data) {
    return NextResponse.json(
      {
        message: "Form type and data are required",
      },
      { status: 400 }
    );
  }

  // Initialize Appwrite Client
  const client = new Client();
  client
    .setEndpoint(process.env.APPWRITE_PROJECT_API)
    .setProject(process.env.APPWRITE_PROJECT_ID);

  // Initialize Appwrite Databases
  const databases = new Databases(client);
  console.log("before try");

  // Select the collection based on the form type
  let collectionId = "";
  console.log("try");
  console.log(data.formType);
  switch (data.formType) {
    case "contact":
      collectionId = "contact";
      break;
    case "advertising":
      collectionId = "advertising";
      break;
    case "footer":
      collectionId = "advertising";
      break;
    case "fullServiceManagement":
      collectionId = "fullServiceManagement";
      break;
    // Add more cases for additional forms
    default:
      return NextResponse.json(
        { message: "Invalid form type" },
        { status: 400 }
      );
  }
  console.log("here");
  console.log(collectionId);
  console.log({ ...data });
  // Save the form data to Appwrite
  const result = await databases.createDocument(
    "forms",
    collectionId,
    ID.unique(), // Unique ID for the document
    { ...data }
  );
  console.log(result);
  console.log("result");
  if (result.$id) {
    return NextResponse.json(
      {
        message: "Form data submitted successfully",
        data: result,
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        message: "Failed to submit form data",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
