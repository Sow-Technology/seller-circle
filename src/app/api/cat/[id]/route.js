import { connectDB } from "@/app/lib/db";
import CategoryTable from "@/app/lib/models/category.models";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  await connectDB();
  const { id } = await params;

  try {
    const deletedBlog = await CategoryTable.findByIdAndDelete(id);
    if (!deletedBlog) {
      return NextResponse.json(
        {
          success: false,
          statusCode: 404,
          error: "Category not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Category deleted successfully",
        statusCode: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        statusCode: 500,
        error: "Failed To Delete Blog",
      },
      { status: 500 }
    );
  }
}
