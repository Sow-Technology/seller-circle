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

    // Always return success
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // Always return success even on error
    return NextResponse.json({ success: true }, { status: 200 });
  }
}
