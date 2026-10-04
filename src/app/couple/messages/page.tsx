import { getOwnWedding } from "@/lib/getOwnWedding";
import { prisma } from "@/lib/prisma";

export default async function CoupleMessagesPage() {
  const wedding = await getOwnWedding();
  const messages = await prisma.guestMessage.findMany({
    where: { weddingId: wedding.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="font-serif text-3xl text-emerald mb-6">Guest Messages ({messages.length})</h1>
      <div className="space-y-3">
        {messages.map((m) => (
          <div key={m.id} className="bg-white p-4 rounded-lg shadow text-sm">
            <p className="font-semibold">{m.fromName}</p>
            <p className="mt-1 italic">"{m.message}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
