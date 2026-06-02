import User from "@/models/userSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 },
      );
    }

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 },
      );
    }

    // Check if the password matches
    const isMatch = await comparePepperedPassword(password, findUser.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while processing the login request." },
      { status: 500 },
    );
  }
}
