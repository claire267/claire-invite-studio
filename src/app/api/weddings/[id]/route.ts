// GET/PATCH a single wedding by id — used by both admin edit screen
// and the couple's own settings page.
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function canAccess(weddingId: string) {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  const wedding = await prisma.wedding.findUnique({ where: { id: weddingId } });
  if (!wedding) return null;
  const role = (session.user as any).role;
  const userId = (session.user as any).id;
  if (role === "ADMIN" || wedding.ownerId === userId) return wedding;
  return null;
}

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const wedding = await canAccess(params.id);
  if (!wedding) return NextResponse.json({ error: "Not found or unauthorized" }, { status: 404 });
  return NextResponse.json(wedding);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const wedding = await canAccess(params.id);
  if (!wedding) return NextResponse.json({ error: "Not found or unauthorized" }, { status: 404 });

  const updates = await req.json();
  const updated = await prisma.wedding.update({ where: { id: params.id }, data: updates });
  return NextResponse.json(updated);
}
