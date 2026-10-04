// Guest book: guests POST messages, couples GET them for their dashboard.
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const messageSchema = z.object({
  weddingSlug: z.string(),
  fromName: z.string().min(1),
  message: z.string().min(1),
});

export async function POST(req: NextRequest) {
  const parsed = messageSchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const wedding = await prisma.wedding.findUnique({ where: { slug: parsed.data.weddingSlug } });
  if (!wedding) return NextResponse.json({ error: "Wedding not found" }, { status: 404 });

  const msg = await prisma.guestMessage.create({
    data: { weddingId: wedding.id, fromName: parsed.data.fromName, message: parsed.data.message },
  });
  return NextResponse.json(msg, { status: 201 });
}

export async function GET(req: NextRequest) {
  const weddingId = req.nextUrl.searchParams.get("weddingId");
  if (!weddingId) return NextResponse.json({ error: "weddingId required" }, { status: 400 });
  const messages = await prisma.guestMessage.findMany({
    where: { weddingId },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(messages);
}
