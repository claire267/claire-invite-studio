// Admin/couple uploads a wedding photo or video.
// Expects JSON: { weddingId, base64File, type }
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { uploadImage } from "@/lib/cloudStorage";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { weddingId, base64File, type } = await req.json();
  if (!weddingId || !base64File) {
    return NextResponse.json({ error: "weddingId and base64File are required" }, { status: 400 });
  }

  const url = await uploadImage(base64File, `weddings/${weddingId}`);

  const count = await prisma.weddingImage.count({ where: { weddingId } });
  const image = await prisma.weddingImage.create({
    data: { weddingId, url, type: type ?? "photo", sortOrder: count },
  });

  return NextResponse.json(image, { status: 201 });
}
