"use client";
// Full RSVP form: attendance, guest count, meal/salad/drink per person,
// gift preference, and a message. Submits to /api/rsvp.
import { useState } from "react";

const MEALS = ["BEEF", "CHICKEN", "VEGETARIAN", "VEGAN"];
const SALADS = ["GARDEN", "CAESAR", "NONE"];
const DRINKS = ["RED_WINE", "WHITE_WINE", "COCKTAIL", "NON_ALCOHOLIC"];
const GIFTS = ["CASH", "BANK_TRANSFER", "MOBILE_MONEY", "BOXED_GIFT", "REGISTRY"];

export default function RsvpForm({ weddingSlug, accentColor }: { weddingSlug: string; accentColor: string }) {
  const [attendance, setAttendance] = useState("ATTENDING");
  const [guestCount, setGuestCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);

    const extraGuests = Array.from({ length: guestCount }, (_, i) => ({
      meal: form.get(`meal_guest${i}`),
      salad: form.get(`salad_guest${i}`),
      drink: form.get(`drink_guest${i}`),
    }));

    const payload = {
      weddingSlug,
      guestName: form.get("guestName"),
      guestPhone: form.get("guestPhone"),
      attendance,
      guestCount,
      meal: form.get("meal_you") || undefined,
      salad: form.get("salad_you") || undefined,
      drink: form.get("drink_you") || undefined,
      gift: form.get("gift") || undefined,
      extraGuests: attendance === "ATTENDING" ? extraGuests : undefined,
      dietaryNotes: form.get("dietaryNotes"),
      message: form.get("message"),
    };

    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSubmitting(false);
    if (res.ok) setSubmitted(true);
  }

  if (submitted) return <p className="text-lg">Thank you — your RSVP has been received! 🎉</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-4">
      <div>
        <label className="text-xs uppercase tracking-wide">Full name</label>
        <input name="guestName" required className="w-full p-3 rounded text-ink" />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide">Phone</label>
        <input name="guestPhone" className="w-full p-3 rounded text-ink" />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide">Will you attend?</label>
        <select value={attendance} onChange={(e) => setAttendance(e.target.value)} className="w-full p-3 rounded text-ink">
          <option value="ATTENDING">Joyfully accepts</option>
          <option value="DECLINED">Regretfully declines</option>
        </select>
      </div>

      {attendance === "ATTENDING" && (
        <>
          <div>
            <label className="text-xs uppercase tracking-wide">Additional guests</label>
            <select value={guestCount} onChange={(e) => setGuestCount(Number(e.target.value))} className="w-full p-3 rounded text-ink">
              {[0, 1, 2, 3].map((n) => <option key={n} value={n}>{n === 0 ? "Just me" : `+${n}`}</option>)}
            </select>
          </div>

          <fieldset className="border border-white/30 rounded p-3">
            <legend className="text-xs uppercase px-1">Your meal</legend>
            <select name="meal_you" className="w-full p-2 rounded text-ink mt-1">
              {MEALS.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
            <select name="salad_you" className="w-full p-2 rounded text-ink mt-2">
              {SALADS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select name="drink_you" className="w-full p-2 rounded text-ink mt-2">
              {DRINKS.map((d) => <option key={d} value={d}>{d.replace("_", " ")}</option>)}
            </select>
          </fieldset>

          {Array.from({ length: guestCount }).map((_, i) => (
            <fieldset key={i} className="border border-white/30 rounded p-3">
              <legend className="text-xs uppercase px-1">Guest {i + 1}</legend>
              <select name={`meal_guest${i}`} className="w-full p-2 rounded text-ink mt-1">
                {MEALS.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
              <select name={`salad_guest${i}`} className="w-full p-2 rounded text-ink mt-2">
                {SALADS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <select name={`drink_guest${i}`} className="w-full p-2 rounded text-ink mt-2">
                {DRINKS.map((d) => <option key={d} value={d}>{d.replace("_", " ")}</option>)}
              </select>
            </fieldset>
          ))}

          <div>
            <label className="text-xs uppercase tracking-wide">Gift preference</label>
            <select name="gift" className="w-full p-3 rounded text-ink">
              {GIFTS.map((g) => <option key={g} value={g}>{g.replace("_", " ")}</option>)}
            </select>
          </div>
        </>
      )}

      <div>
        <label className="text-xs uppercase tracking-wide">Dietary notes</label>
        <input name="dietaryNotes" className="w-full p-3 rounded text-ink" />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide">Message to the couple</label>
        <textarea name="message" className="w-full p-3 rounded text-ink" rows={3} />
      </div>

      <button type="submit" disabled={submitting} className="w-full py-3 rounded font-semibold"
        style={{ background: accentColor, color: "#242019" }}>
        {submitting ? "Sending..." : "Send RSVP"}
      </button>
    </form>
  );
}
