import { sendEmail } from "@/lib/actions/mailer";
import { Client, Databases, ID } from "appwrite";
import axios from "axios";
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
  const zohoData = data.zohoData;
  data.zohoData = undefined;
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
  // );
  await sendEmail(stringData);
  async function getAccessTokenFromRefreshToken() {
    const tokenEndpoint = "https://accounts.zoho.in/oauth/v2/token"; // Replace with your token endpoint if different
    const clientId = process.env.ZOHO_CLIENT_ID; // Replace with your client ID
    const clientSecret = process.env.ZOHO_CLIENT_SECRET; // Replace with your client secret
    const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

    const params = new URLSearchParams({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
    });

    try {
      const response = await fetch(tokenEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error fetching access token:", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }

  console.log(await getAccessTokenFromRefreshToken());
  // const oAuthToken = await getAccessTokenFromRefreshToken();
  // const response = await axios.post(
  //   "https://www.zohoapis.in/crm/v2/Leads", // Replace with the correct endpoint or module
  //   { data: [{ ...zohoData, Form_Type: data.formType }] },
  //   {
  //     headers: {
  //       Authorization: `Zoho-oauthtoken ${oAuthToken}`, // OAuth token
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );
  // console.log(response);
  // console.log("Form data sent to Zoho CRM successfully");
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
