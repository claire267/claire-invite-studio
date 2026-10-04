import { getOwnWedding } from "@/lib/getOwnWedding";
import { prisma } from "@/lib/prisma";

export default async function CoupleDashboard() {
  const wedding = await getOwnWedding();
  const [rsvpCount, attending, messageCount, questionCount] = await Promise.all([
    prisma.rsvp.count({ where: { weddingId: wedding.id } }),
    prisma.rsvp.count({ where: { weddingId: wedding.id, attendance: "ATTENDING" } }),
    prisma.guestMessage.count({ where: { weddingId: wedding.id } }),
    prisma.guestQuestion.count({ where: { weddingId: wedding.id, answer: null } }),
  ]);

  return (
    <div>
      <h1 className="font-serif text-3xl text-emerald mb-2">
        {wedding.partner1Name} &amp; {wedding.partner2Name}
      </h1>
      <p className="text-sm opacity-70 mb-6">Your site is live at /w/{wedding.slug}</p>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow"><div className="text-3xl font-serif text-emerald">{rsvpCount}</div><div className="text-sm opacity-70 uppercase">RSVPs</div></div>
        <div className="bg-white p-6 rounded-lg shadow"><div className="text-3xl font-serif text-emerald">{attending}</div><div className="text-sm opacity-70 uppercase">Attending</div></div>
        <div className="bg-white p-6 rounded-lg shadow"><div className="text-3xl font-serif text-emerald">{messageCount}</div><div className="text-sm opacity-70 uppercase">Messages</div></div>
        <div className="bg-white p-6 rounded-lg shadow"><div className="text-3xl font-serif text-emerald">{questionCount}</div><div className="text-sm opacity-70 uppercase">Unanswered Qs</div></div>
      </div>
    </div>
  );
}
