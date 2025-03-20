import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  try {
    // Create a response indicating the user has logged out
    const response = NextResponse.json({ success: true, message: 'Logged out successfully' }, { status: 200 });

    // Remove the authToken cookie by setting its maxAge to 0
    response.cookies.set('authToken', '', {
      httpOnly: true,
      secure: true, // Ensure HTTPS
      sameSite: 'strict',
      maxAge: 0, // Set maxAge to 0 to delete the cookie
      path: '/',
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
