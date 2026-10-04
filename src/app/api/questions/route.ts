// Guest questions. POST = guest asks a question (optionally auto-answered
// by AI immediately). PATCH = couple manually replies later.
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { answerGuestQuestion } from "@/lib/aiAssistant";
import { z } from "zod";

const questionSchema = z.object({
  weddingSlug: z.string(),
  fromName: z.string().min(1),
  question: z.string().min(1),
  useAI: z.boolean().default(true),
});

export async function POST(req: NextRequest) {
  const parsed = questionSchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const { weddingSlug, fromName, question, useAI } = parsed.data;

  const wedding = await prisma.wedding.findUnique({ where: { slug: weddingSlug } });
  if (!wedding) return NextResponse.json({ error: "Wedding not found" }, { status: 404 });

  let answer: string | null = null;
  let answeredBy: string | null = null;

  if (useAI) {
    try {
      answer = await answerGuestQuestion(wedding.id, question);
      answeredBy = "AI";
    } catch {
      // If the AI call fails, the question is simply left for the couple to answer manually.
    }
  }

  const saved = await prisma.guestQuestion.create({
    data: {
      weddingId: wedding.id,
      fromName,
      question,
      answer,
      answeredBy,
      answeredAt: answer ? new Date() : null,
    },
  });
  return NextResponse.json(saved, { status: 201 });
}

export async function GET(req: NextRequest) {
  const weddingId = req.nextUrl.searchParams.get("weddingId");
  if (!weddingId) return NextResponse.json({ error: "weddingId required" }, { status: 400 });
  const questions = await prisma.guestQuestion.findMany({
    where: { weddingId },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(questions);
}
