import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/userSchema";
import { pepperPasword } from "@/utils/pepperPassword";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import z from "zod";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const validatedData = registerSchema.parse(body);

    if (!validatedData) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validatedData.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { name, email, password } = validatedData.data;
    const normalizedEmail = email.toLowerCase();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already in use" },
        { status: 400 },
      );
    }

    const PEPPER = process.env.PASSWORD_PEPPER;

    if (!PEPPER) {
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 },
      );
    }

    const pepperedPassword = await pepperPasword(password);

    const hashedPassword = await bcrypt.hash(pepperedPassword, 8);

    const newUser = await User.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 },
    );
    //
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to register" },
      { status: 500 },
    );
  }
}
