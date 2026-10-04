import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      invitation,
      packageName,
      eventDate,
      venue,
      guests,
      message,
    } = body;

    if (!name || !phone || !invitation || !packageName) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, phone, invitation and package are required.",
        },
        { status: 400 }
      );
    }

    const order = await prisma.order.create({
      data: {
        customerName: name,
        customerPhone: phone,
        customerEmail: email || null,
        invitation,
        package: packageName,
        eventDate: eventDate
          ? new Date(eventDate)
          : null,
        venue: venue || null,
        guests:
          guests !== undefined &&
          guests !== null &&
          guests !== ""
            ? Number(guests)
            : null,
        message: message || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        order,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order creation error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create order.",
      },
      { status: 500 }
    );
  }
}