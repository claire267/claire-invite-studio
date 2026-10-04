// Couple manually answers (or edits the AI's answer to) a guest question.
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { answer } = await req.json();
  const updated = await prisma.guestQuestion.update({
    where: { id: params.id },
    data: { answer, answeredBy: "COUPLE", answeredAt: new Date() },
  });
  return NextResponse.json(updated);
}
