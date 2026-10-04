import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export const dynamic = "force-dynamic";

const createWeddingSchema = z.object({
  slug: z.string().min(3),
  partner1Name: z.string().min(1),
  partner2Name: z.string().min(1),
  weddingDate: z.string().min(1),
  venueName: z.string().min(1),
  venueAddress: z.string().min(1),
  ownerEmail: z.string().email(),
  orderId: z.string().optional().nullable(),
});

export async function GET() {
  const session =
    await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const role = (session.user as any).role;

  if (role === "ADMIN") {
    const weddings =
      await prisma.wedding.findMany({
        include: {
          owner: true,
          _count: {
            select: {
              rsvps: true,
              messages: true,
              questions: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

    return NextResponse.json(weddings);
  }

  const wedding =
    await prisma.wedding.findUnique({
      where: {
        ownerId: (session.user as any).id,
      },
      include: {
        images: {
          orderBy: {
            sortOrder: "asc",
          },
        },
        scheduleItems: {
          orderBy: {
            sortOrder: "asc",
          },
        },
      },
    });

  return NextResponse.json(
    wedding ? [wedding] : []
  );
}

export async function POST(
  req: NextRequest
) {
  const session =
    await getServerSession(authOptions);

  if (
    !session ||
    (session.user as any).role !== "ADMIN"
  ) {
    return NextResponse.json(
      { error: "Admin access required" },
      { status: 403 }
    );
  }

  try {
    const body = await req.json();

    const parsed =
      createWeddingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const ownerEmail =
      data.ownerEmail.toLowerCase().trim();

    const owner =
      await prisma.user.findUnique({
        where: {
          email: ownerEmail,
        },
      });

    if (!owner) {
      return NextResponse.json(
        {
          error:
            "No couple account found with that email. Create the client account first.",
        },
        { status: 404 }
      );
    }

    if (owner.role !== "COUPLE") {
      return NextResponse.json(
        {
          error:
            "The selected email does not belong to a couple account.",
        },
        { status: 400 }
      );
    }

    const existingWedding =
      await prisma.wedding.findUnique({
        where: {
          ownerId: owner.id,
        },
      });

    if (existingWedding) {
      return NextResponse.json(
        {
          error:
            "This couple already has a wedding assigned to their account.",
        },
        { status: 409 }
      );
    }

    const existingSlug =
      await prisma.wedding.findUnique({
        where: {
          slug: data.slug,
        },
      });

    if (existingSlug) {
      return NextResponse.json(
        {
          error:
            "This invitation URL slug is already in use. Choose another one.",
        },
        { status: 409 }
      );
    }

    const weddingDate =
      new Date(data.weddingDate);

    if (Number.isNaN(weddingDate.getTime())) {
      return NextResponse.json(
        {
          error: "Invalid wedding date.",
        },
        { status: 400 }
      );
    }

    let order = null;

    if (data.orderId) {
      order =
        await prisma.order.findUnique({
          where: {
            id: data.orderId,
          },
        });

      if (!order) {
        return NextResponse.json(
          {
            error: "Order not found.",
          },
          { status: 404 }
        );
      }

      if (order.weddingId) {
        return NextResponse.json(
          {
            error:
              "This order already has a wedding website.",
          },
          { status: 409 }
        );
      }
    }

    const wedding =
      await prisma.$transaction(
        async (tx) => {
          const createdWedding =
            await tx.wedding.create({
              data: {
                slug: data.slug,
                partner1Name:
                  data.partner1Name,
                partner2Name:
                  data.partner2Name,
                weddingDate,
                venueName:
                  data.venueName,
                venueAddress:
                  data.venueAddress,
                ownerId: owner.id,

                contactEmail:
                  owner.email,

                contactPhone:
                  order?.customerPhone ||
                  null,

                published: false,
              },
            });

          if (data.orderId) {
            await tx.order.update({
              where: {
                id: data.orderId,
              },
              data: {
                weddingId:
                  createdWedding.id,

                invitationUrl:
                  `/w/${createdWedding.slug}`,

                status: "IN_DESIGN",
              },
            });
          }

          return createdWedding;
        }
      );

    return NextResponse.json(
      {
        success: true,
        wedding,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(
      "CREATE WEDDING ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to create wedding.",
      },
      { status: 500 }
    );
  }
}