// Public endpoint — guests submit their RSVP here. No login required,
// since guests never create accounts (that's the whole point of a
// wedding site: frictionless for guests).
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const extraGuestSchema = z.object({
  meal: z.enum(["BEEF", "CHICKEN", "VEGETARIAN", "VEGAN"]),
  salad: z.enum(["GARDEN", "CAESAR", "NONE"]),
  drink: z.enum(["RED_WINE", "WHITE_WINE", "COCKTAIL", "NON_ALCOHOLIC"]),
});

const rsvpSchema = z.object({
  weddingSlug: z.string(),
  guestName: z.string().min(1),
  guestPhone: z.string().optional(),
  attendance: z.enum(["ATTENDING", "DECLINED"]),
  guestCount: z.number().min(0).max(3).default(0),
  meal: z.enum(["BEEF", "CHICKEN", "VEGETARIAN", "VEGAN"]).optional(),
  salad: z.enum(["GARDEN", "CAESAR", "NONE"]).optional(),
  drink: z.enum(["RED_WINE", "WHITE_WINE", "COCKTAIL", "NON_ALCOHOLIC"]).optional(),
  gift: z.enum(["CASH", "BANK_TRANSFER", "MOBILE_MONEY", "BOXED_GIFT", "REGISTRY"]).optional(),
  extraGuests: z.array(extraGuestSchema).optional(),
  dietaryNotes: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = rsvpSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const data = parsed.data;

  const wedding = await prisma.wedding.findUnique({ where: { slug: data.weddingSlug } });
  if (!wedding) return NextResponse.json({ error: "Wedding not found" }, { status: 404 });

  const rsvp = await prisma.rsvp.create({
    data: {
      weddingId: wedding.id,
      guestName: data.guestName,
      guestPhone: data.guestPhone,
      attendance: data.attendance,
      guestCount: data.guestCount,
      meal: data.meal,
      salad: data.salad,
      drink: data.drink,
      gift: data.gift,
      extraGuests: data.extraGuests ?? undefined,
      dietaryNotes: data.dietaryNotes,
      message: data.message,
    },
  });

  return NextResponse.json(rsvp, { status: 201 });
}

// Couples/admins fetch RSVPs for their wedding via ?weddingId=
export async function GET(req: NextRequest) {
  const weddingId = req.nextUrl.searchParams.get("weddingId");
  if (!weddingId) return NextResponse.json({ error: "weddingId required" }, { status: 400 });
  const rsvps = await prisma.rsvp.findMany({
    where: { weddingId },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(rsvps);
}
