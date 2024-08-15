import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { token } = req.body;

  try {
    const response = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      new URLSearchParams({
        secret: process.env.CLOUDFLARE_SECRET_KEY,
        response: token,
      })
    );
    console.log(response);

    if (response.status == 200) {
      console.log(true);
      return NextResponse.json({ success: true, status: 200 });
    } else {
      return NextResponse.json({ success: false, status: 400 });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      status: 500,
    });
  }
}
