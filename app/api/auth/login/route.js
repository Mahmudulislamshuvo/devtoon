import User from "@/models/userSchema";
import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import crypto from "crypto";
import { z } from "zod";
import { comparePepperedPassword } from "@/utils/pepperPassword";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    const validatedData = loginSchema.safeParse({ email, password });

    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Invalid email or password." },
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

    // If login is successful, you can generate a token or set a session here
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while processing the login request." },
      { status: 500 },
    );
  }
}
