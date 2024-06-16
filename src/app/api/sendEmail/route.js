import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.FROM_EMAIL_PASSWORD,
  },
});

export async function POST(req, res) {
  if (req.method === "POST") {
    const formData = await req.json();
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "New Form Submission",
      html: `
      <p><strong>Full Name:</strong> ${formData.fullName}</p>
      <p><strong>Work Email:</strong> ${formData.workEmail}</p>
      <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
      <p><strong>Brand Name:</strong> ${formData.brandName}</p>
      <p><strong>Service1</strong> ${formData.service}</p>
      <p><strong>Service2</strong> ${formData.service2}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
     
    `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 500 }
    );
  }
}
