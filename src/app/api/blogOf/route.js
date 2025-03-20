import { connectDB } from "@/app/lib/db";
import authModels from "@/app/lib/models/auth.models";
import { BlogModel } from "@/app/lib/models/blog.models.js";
import { validateToken } from "@/app/middleware/validate.middleware.js";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connectDB();

    const authHeader = request.headers.get('authorization');
    const token = authHeader?.split(' ')[1];
// console.log(token)
    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const adminPayload = validateToken(token);
    request.user = adminPayload;
    const { id, role } = request.user;
    const adminData = await authModels.findById(id);
   

    try {
        const blogs = await BlogModel.find({ authID: id }).populate('authID', 'name email');
        if (!blogs || blogs.length === 0) {
            return NextResponse.json({
                success: false,
                statusCode: 404,
                error: "No blogs found",
            }, { status: 404 });
        }
        return NextResponse.json({
            success: true,
            message: "Blogs fetched successfully",
            data: blogs,
            statusCode: 200,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            statusCode: 500,
            error: "Failed to fetch blogs",
        }, { status: 500 });
    }
}
