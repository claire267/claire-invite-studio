"use client";
import { useState } from "react";

export default function ReplyToQuestion({ questionId }: { questionId: string }) {
  const [reply, setReply] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSend() {
    const res = await fetch(`/api/questions/${questionId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: reply }),
    });
    if (res.ok) setSent(true);
  }

  if (sent) return <p className="text-emerald mt-2 text-sm">Reply sent!</p>;

  return (
    <div className="mt-2 flex gap-2">
      <input value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Type your reply..."
        className="flex-1 p-2 border rounded text-sm" />
      <button onClick={handleSend} className="bg-emerald text-white px-3 py-2 rounded text-sm">Reply</button>
    </div>
  );
}
