import { sendEmail } from "@/lib/actions/mailer";
import { Client, Databases, ID } from "appwrite";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
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

  // Select the collection based on the form type
  let collectionId = "";
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
    case "DSP":
      collectionId = "dsp";
      break;
    case "strategyAndConsulting":
      collectionId = "strategyAndConsulting";
      break;
    case "globalLaunch":
      collectionId = "globalLaunch";
      break;
    case "marketplacesExpansion":
      collectionId = "marketplacesExpansion";
      break;
    case "basicA+":
      collectionId = "basicA";
      break;
    case "premiumA":
      collectionId = "premiumA";
      break;
    case "brandStore":
      collectionId = "brandStore";
      break;
    case "brandStory":
      collectionId = "brandStory";
      break;
    case "brandVideo":
      collectionId = "brandVideo";
      break;
    case "listingImageDesign":
      collectionId = "listingImageDesign";
      break;
    case "newsletter":
      collectionId = "newsletter";
      break;
    // Add more cases for additional forms
    default:
      return NextResponse.json(
        { message: "Invalid form type" },
        { status: 400 }
      );
  }
  // Save the form data to Appwrite
  const result = await databases.createDocument(
    "forms",
    collectionId,
    ID.unique(), // Unique ID for the document
    { ...data }
  );
  function formatObjectToReadableHTML(obj, indent = 2, level = 0) {
    let result = "";
    const indentation = "&nbsp;".repeat(indent * level * 4); // Replace spaces with &nbsp; for HTML indentation

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (Array.isArray(value)) {
          result += `${indentation}<strong>${key}:</strong><br/>${indentation}&nbsp;- ${value.join(
            `<br/>${indentation}&nbsp;- `
          )}<br/>`;
        } else if (typeof value === "object" && value !== null) {
          result += `${indentation}<strong>${key}:</strong><br/>${formatObjectToReadableHTML(
            value,
            indent,
            level + 1
          )}`;
        } else {
          result += `${indentation}<strong>${key}:</strong> ${value}<br/>`;
        }
      }
    }

    return result;
  }

  // Example usage

  const htmlString = formatObjectToReadableHTML(data);
  console.log(htmlString);

  const stringData = formatObjectToReadableHTML(data);
  // const resultString = await databases.createDocument(
  //   "forms",
  //   "stringData",
  //   ID.unique(), // Unique ID for the document
  //   { data: formatObjectToReadableString(data) }
  await sendEmail(stringData);
  // );
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
