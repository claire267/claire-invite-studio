// Cross-wedding analytics: RSVP totals, attendance rate, meal breakdown.

export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";

export default async function AnalyticsPage() {
  const rsvps = await prisma.rsvp.findMany();

  const attending = rsvps.filter(
    (r) => r.attendance === "ATTENDING"
  ).length;

  const declined = rsvps.filter(
    (r) => r.attendance === "DECLINED"
  ).length;

  const mealCounts: Record<string, number> = {};

  rsvps.forEach((r) => {
    if (r.meal) {
      mealCounts[r.meal] = (mealCounts[r.meal] ?? 0) + 1;
    }
  });

  return (
    <div>
      <h1 className="font-serif text-3xl text-emerald mb-6">
        Analytics
      </h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-3xl font-serif text-emerald">
            {rsvps.length}
          </div>
          <div className="text-sm opacity-70 uppercase">
            Total RSVPs
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-3xl font-serif text-emerald">
            {attending}
          </div>
          <div className="text-sm opacity-70 uppercase">
            Attending
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-3xl font-serif text-emerald">
            {declined}
          </div>
          <div className="text-sm opacity-70 uppercase">
            Declined
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="font-serif text-xl text-emerald mb-4">
          Meal breakdown
        </h2>

        {Object.entries(mealCounts).map(([meal, count]) => (
          <div
            key={meal}
            className="flex justify-between border-t py-2 text-sm"
          >
            <span>{meal}</span>
            <span>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}