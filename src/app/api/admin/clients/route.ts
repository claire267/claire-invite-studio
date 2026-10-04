import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);

    const setupToken = url.searchParams.get("token");

    const expectedToken = process.env.ADMIN_SETUP_TOKEN;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!expectedToken || !adminPassword) {
      return NextResponse.json(
        { error: "Admin setup is not configured." },
        { status: 500 }
      );
    }

    if (!setupToken || setupToken !== expectedToken) {
      return NextResponse.json(
        { error: "Unauthorized." },
        { status: 401 }
      );
    }

    if (adminPassword.length < 8) {
      return NextResponse.json(
        { error: "ADMIN_PASSWORD must be at least 8 characters." },
        { status: 500 }
      );
    }

    const email = "claireinvitestudio@gmail.com";

    const passwordHash = await bcrypt.hash(adminPassword, 12);

    const admin = await prisma.user.upsert({
      where: { email },
      update: {
        passwordHash,
        name: "Claire Invite Studio Admin",
        role: "ADMIN",
      },
      create: {
        email,
        passwordHash,
        name: "Claire Invite Studio Admin",
        role: "ADMIN",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Admin account created successfully.",
      email: admin.email,
      role: admin.role,
    });
  } catch (error) {
    console.error("ADMIN SETUP ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to create admin account.",
      },
      { status: 500 }
    );
  }
}