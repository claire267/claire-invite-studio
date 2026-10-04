import { getOwnWedding } from "@/lib/getOwnWedding";
import { prisma } from "@/lib/prisma";
import ReplyToQuestion from "@/components/ReplyToQuestion";

export default async function CoupleQuestionsPage() {
  const wedding = await getOwnWedding();
  const questions = await prisma.guestQuestion.findMany({
    where: { weddingId: wedding.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="font-serif text-3xl text-emerald mb-6">Guest Questions ({questions.length})</h1>
      <div className="space-y-3">
        {questions.map((q) => (
          <div key={q.id} className="bg-white p-4 rounded-lg shadow text-sm">
            <p className="font-semibold">{q.fromName} asked:</p>
            <p className="mt-1">{q.question}</p>
            {q.answer ? (
              <p className="mt-2 text-emerald">
                <span className="text-xs uppercase opacity-60">{q.answeredBy === "AI" ? "AI reply" : "Your reply"}: </span>
                {q.answer}
              </p>
            ) : (
              <ReplyToQuestion questionId={q.id} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
