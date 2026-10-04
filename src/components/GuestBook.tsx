"use client";
import { useState } from "react";

export default function GuestBook({ weddingSlug }: { weddingSlug: string }) {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        weddingSlug,
        fromName: form.get("fromName"),
        message: form.get("message"),
      }),
    });
    setSent(true);
  }

  if (sent) return <p>Thank you for your kind words! 💌</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-4">
      <input name="fromName" placeholder="Your name" required className="w-full p-3 rounded border" />
      <textarea name="message" placeholder="Your message..." required rows={4} className="w-full p-3 rounded border" />
      <button type="submit" className="w-full py-3 rounded font-semibold bg-emerald text-white">Send Message</button>
    </form>
  );
}
