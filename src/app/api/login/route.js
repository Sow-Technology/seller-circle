import { connectDB } from "@/app/lib/db.js";
import authModels from "@/app/lib/models/auth.models.js";
import { createToken } from "@/app/middleware/validate.middleware.js";
import { NextResponse } from "next/server";
// import { checkAuth } from "@/app/middleware/auth.middleware.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
export const POST = async (req) => {
  try {
    await connectDB();
    // const data = await req.formData();

    // const email = data.get('email');
    // const password = data.get('password');
    // const {email, password}= req.body



    const { email, password } = await req.json(); //chang that suggested by the chat gpt .
    // Admin Login
    // if (email === process.env.AdminEmail) {
    //   if (password !== process.env.AdminPassword) {
    //     return NextResponse.json(
    //       { error: "Invalid credentials for admin" },
    //       { status: 401 }
    //     );
    //   }
    //   const adminData = {
    //     _id:new mongoose.Types.ObjectId("64d5d3f42fae3b2fc8f0b123"),
    //     name: "Admin",
    //     email: process.env.AdminEmail,
    //     authType: "admin",
    //   };

    //   const token = createToken(adminData);
    //   const adminResponse = {
    //     id: "admin",
    //     name: "Admin",
    //     email: process.env.AdminEmail,
    //     authType: "admin",
    //     token,
    //   };

    //   const response = NextResponse.json(
    //     { success: true, data: adminResponse },
    //     { status: 200 }
    //   );
    //   response.cookies.set("authToken", token, {
    //     httpOnly: true,
    //     secure: true, // Ensure HTTPS
    //     sameSite: "strict",
    //     maxAge: 60 * 60 * 24, // 1 day
    //     path: "/",
    //   });

    //   return response;
    // }

    // User Login
    const getData = await authModels.findOne({ email });
    // console.log(getData)
    if (!getData) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Check the hashed password for user

    // console.log(password);

    // if (!password==getData?.password) {
    //   return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    // }

    // if (email === "mainadmin@i.com" && password === 123456) {

    //   const admindata = {
    //     _id: "admin",
    //     name: "Admin",
    //     email,
    //     authType: "admin",
    //   }

    //   const token = createToken(admindata);
    //   console.log(token,"token of login")

    //   let adminResponse = {
    //     id: "admin",
    //     name: "Admin",
    //     email: email,
    //     authType: "admin",
    //     token
    //   }
    //   const response = NextResponse.json(
    //     { success: true, data: adminResponse },
    //     { status: 200 }
    //   );

    //   response.cookies.set("authToken", token, {
    //     httpOnly: true,
    //     secure: true, // Ensure HTTPS
    //     sameSite: "strict",
    //     maxAge: 60 * 60 * 24, // 1 day
    //     path: "/",
    //   });

    //   return response;
    // } else {

      const isPasswordValid = await bcrypt.compare(password, getData.password);
      // console.log(isPasswordValid)
      if (!isPasswordValid) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      const token = createToken(getData);
      // console.log(token);+
      getData.token = token;
      await getData.save();

      const response = NextResponse.json(
        { success: true, data: getData },
        { status: 200 }
      );

      response.cookies.set("authToken", token, {
        httpOnly: true,
        secure: true, // Ensure HTTPS
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });

      return response;
    
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
