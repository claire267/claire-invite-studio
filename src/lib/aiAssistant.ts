// AI Wedding Assistant.
// Answers guest questions using ONLY the wedding's own stored data —
// it is given the wedding record as context and told not to invent facts.
import Anthropic from "@anthropic-ai/sdk";
import { prisma } from "./prisma";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function answerGuestQuestion(weddingId: string, question: string) {
  const wedding = await prisma.wedding.findUnique({
    where: { id: weddingId },
    include: { scheduleItems: true },
  });
  if (!wedding) throw new Error("Wedding not found");

  const context = `
Wedding of ${wedding.partner1Name} & ${wedding.partner2Name}
Date: ${wedding.weddingDate.toDateString()}
Venue: ${wedding.venueName}, ${wedding.venueAddress}
Dress code: ${wedding.dressCode ?? "Not specified"}
RSVP deadline: ${wedding.rsvpDeadline?.toDateString() ?? "Not specified"}
Schedule: ${wedding.scheduleItems.map(s => `${s.time} - ${s.title}`).join("; ")}
Contact: ${wedding.contactEmail ?? ""} ${wedding.contactPhone ?? ""}
`.trim();

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 300,
    system: `You are a friendly wedding assistant for this couple's wedding website.
Answer ONLY using the wedding details provided below. If the answer isn't in these
details, say you're not sure and suggest the guest contact the couple directly.
Never invent details that aren't given.

WEDDING DETAILS:
${context}`,
    messages: [{ role: "user", content: question }],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  return textBlock && "text" in textBlock ? textBlock.text : "Sorry, I couldn't find an answer.";
}
