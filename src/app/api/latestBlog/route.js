import { connectDB } from "@/app/lib/db.js";
import { BlogModel } from "@/app/lib/models/blog.models.js";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();

    // Get the latest 5 blogs sorted by creation date (newest first)
    const getData = await BlogModel.find()
      .populate("authID", "-token")
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order
      .limit(5); // Limit to the latest 5 blogs
    if (!getData || getData.length === 0) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: getData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
