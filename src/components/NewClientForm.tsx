"use client";
// Creates a login account for a new couple. This must happen BEFORE
// you can create their wedding on the "New Wedding" screen, since a
// wedding is always linked to an existing owner account.
import { useState } from "react";

export default function NewClientForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "Client created!" : "Error creating client.");
    if (res.ok) setForm({ name: "", email: "", password: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow flex gap-3 items-end flex-wrap">
      <div>
        <label className="text-xs uppercase tracking-wide block">Name</label>
        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="p-2 border rounded" />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide block">Email</label>
        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="p-2 border rounded" />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide block">Temp Password</label>
        <input required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="p-2 border rounded" />
      </div>
      <button type="submit" className="bg-emerald text-white px-4 py-2 rounded text-sm">Create Client</button>
      {status && <span className="text-sm ml-2">{status}</span>}
    </form>
  );
}
