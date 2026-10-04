// Public endpoint the guest wedding site calls when a visitor asks
// the AI assistant a question directly (chat-style, not saved as a
// formal "question" unless they choose to submit it).
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { answerGuestQuestion } from "@/lib/aiAssistant";

export async function POST(req: NextRequest) {
  const { weddingSlug, question } = await req.json();
  if (!weddingSlug || !question) {
    return NextResponse.json({ error: "weddingSlug and question are required" }, { status: 400 });
  }

  const wedding = await prisma.wedding.findUnique({ where: { slug: weddingSlug } });
  if (!wedding) return NextResponse.json({ error: "Wedding not found" }, { status: 404 });

  const answer = await answerGuestQuestion(wedding.id, question);
  return NextResponse.json({ answer });
}
