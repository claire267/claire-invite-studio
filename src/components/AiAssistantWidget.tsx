"use client";
// Floating chat widget guests can use to ask questions like
// "what time should I arrive" or "is there parking" — answered by AI
// using that wedding's real stored details.
import { useState } from "react";

export default function AiAssistantWidget({ weddingSlug, primaryColor }: { weddingSlug: string; primaryColor: string }) {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask() {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");
    const res = await fetch("/api/ai-assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weddingSlug, question }),
    });
    const data = await res.json();
    setAnswer(data.answer ?? "Sorry, something went wrong.");
    setLoading(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-72 bg-white rounded-lg shadow-2xl p-4 mb-3 border">
          <p className="text-sm font-semibold mb-2" style={{ color: primaryColor }}>Ask a question</p>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g. What time should I arrive?"
            className="w-full text-sm p-2 border rounded mb-2"
            rows={2}
          />
          <button onClick={ask} disabled={loading} className="text-sm w-full py-2 rounded font-medium text-white"
            style={{ background: primaryColor }}>
            {loading ? "Thinking..." : "Ask"}
          </button>
          {answer && <p className="text-sm mt-3 opacity-80">{answer}</p>}
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="w-14 h-14 rounded-full text-white text-xl shadow-lg"
        style={{ background: primaryColor }}>
        💬
      </button>
    </div>
  );
}
