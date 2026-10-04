// Full RSVP list including meal/salad/drink for the guest AND anyone
// they're bringing (stored in the extraGuests JSON column).
import { getOwnWedding } from "@/lib/getOwnWedding";
import { prisma } from "@/lib/prisma";

export default async function CoupleRsvpsPage() {
  const wedding = await getOwnWedding();
  const rsvps = await prisma.rsvp.findMany({
    where: { weddingId: wedding.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="font-serif text-3xl text-emerald mb-6">RSVPs ({rsvps.length})</h1>
      <div className="space-y-3">
        {rsvps.map((r) => (
          <div key={r.id} className="bg-white p-4 rounded-lg shadow text-sm">
            <div className="flex justify-between">
              <span className="font-semibold">{r.guestName}</span>
              <span className={r.attendance === "ATTENDING" ? "text-emerald" : "text-red-600"}>{r.attendance}</span>
            </div>
            {r.attendance === "ATTENDING" && (
              <>
                <p className="opacity-70 mt-1">Party size: {r.guestCount + 1} · Meal: {r.meal} · Salad: {r.salad} · Drink: {r.drink}</p>
                {Array.isArray(r.extraGuests) && (r.extraGuests as any[]).length > 0 && (
                  <p className="opacity-70">Extra guests: {(r.extraGuests as any[]).map((g, i) => `#${i + 1} ${g.meal}/${g.salad}/${g.drink}`).join(", ")}</p>
                )}
                {r.gift && <p className="opacity-70">Gift: {r.gift}</p>}
                {r.dietaryNotes && <p className="opacity-70">Dietary: {r.dietaryNotes}</p>}
              </>
            )}
            {r.message && <p className="mt-2 italic">"{r.message}"</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
