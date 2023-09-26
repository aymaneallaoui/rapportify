import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

//Define a schema for input validation

const userSchema = z.object({
  username: z.string().min(6, "Username should be +5 characters").max(100),
  email: z.string().min(3, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    //checking if the email already exist

    const existingUserByEmail = await prisma.users.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User already exist with this email",
        },
        { status: 409 }
      );
    }

    //checking if the username already exist

    const existingUserByUsername = await prisma.users.findUnique({
      where: { username: username },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "User already exist with this username",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        username: username,
        email: email,
        password_hash: hashedPassword,
      },
    });

    const { password_hash: newPass, ...rest } = newUser;
    return NextResponse.json({
      user: rest,
      message: "User created successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Something went wrong ${error}`,
      },
      { status: 500 }
    );
  }
}
