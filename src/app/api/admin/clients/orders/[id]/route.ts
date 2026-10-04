import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const ORDER_STATUSES = [
  "NEW",
  "CONTACTED",
  "PAYMENT_PENDING",
  "PAID",
  "IN_PROGRESS",
  "COMPLETED",
  "CANCELLED",
] as const;

const PAYMENT_STATUSES = [
  "PENDING",
  "PAID",
] as const;

export async function PATCH(
  req: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  try {
    const session = await getServerSession(authOptions);

    if (
      !session ||
      (session.user as any).role !== "ADMIN"
    ) {
      return NextResponse.json(
        { error: "Admin access required" },
        { status: 403 }
      );
    }

    const body = await req.json();

    const status = body.status;
    const paymentStatus = body.paymentStatus;

    const data: {
      status?: string;
      paymentStatus?: string;
    } = {};

    if (status !== undefined) {
      if (!ORDER_STATUSES.includes(status)) {
        return NextResponse.json(
          { error: "Invalid order status" },
          { status: 400 }
        );
      }

      data.status = status;
    }

    if (paymentStatus !== undefined) {
      if (!PAYMENT_STATUSES.includes(paymentStatus)) {
        return NextResponse.json(
          { error: "Invalid payment status" },
          { status: 400 }
        );
      }

      data.paymentStatus = paymentStatus;
    }

    if (
      data.status === undefined &&
      data.paymentStatus === undefined
    ) {
      return NextResponse.json(
        { error: "Nothing to update" },
        { status: 400 }
      );
    }

    const order = await prisma.order.update({
      where: {
        id: params.id,
      },
      data: data as any,
    });

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Order update error:", error);

    return NextResponse.json(
      {
        error: "Failed to update order",
      },
      { status: 500 }
    );
  }
}