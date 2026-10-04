"use client";

import { useState } from "react";

export default function EditWeddingForm({
  wedding,
}: {
  wedding: any;
}) {
  const [form, setForm] = useState({
    storyText: wedding.storyText ?? "",
    dressCode: wedding.dressCode ?? "",
    monogramLine: wedding.monogramLine ?? "",
    primaryColor: wedding.primaryColor ?? "#1F3A2E",
    accentColor: wedding.accentColor ?? "#C6A15B",
    contactEmail: wedding.contactEmail ?? "",
    contactPhone: wedding.contactPhone ?? "",
    published: wedding.published ?? false,
  });

  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const invitationUrl = `/w/${wedding.slug}`;

  function update(key: string, value: any) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));

    setSaved(false);
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);
    setSaved(false);
    setError("");

    try {
      const res = await fetch(`/api/weddings/${wedding.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(
          data?.error || "Failed to save wedding."
        );
      }

      setSaved(true);
    } catch (err: any) {
      setError(
        err?.message || "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  async function copyLink() {
    try {
      const fullUrl =
        window.location.origin + invitationUrl;

      await navigator.clipboard.writeText(fullUrl);

      alert("Invitation link copied!");
    } catch {
      alert("Could not copy the link.");
    }
  }

  return (
    <div className="space-y-6">

      {/* Wedding Information */}
      <div className="rounded-2xl border border-[#E5DED2] bg-[#FDFBF7] p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57]">
          Wedding Invitation
        </p>

        <p className="mt-2 text-sm text-gray-600">
          /w/{wedding.slug}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">

          <a
            href={invitationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#174A3B] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#B08D57]"
          >
            Preview Invitation →
          </a>

          <button
            type="button"
            onClick={copyLink}
            className="rounded-full border border-[#D9D2C6] bg-white px-5 py-2.5 text-sm font-medium text-[#174A3B] hover:bg-[#F8F5EF]"
          >
            Copy Link
          </button>

        </div>
      </div>

      {/* Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white p-6 shadow-sm space-y-5"
      >

        {/* Monogram */}
        <div>
          <label className="text-xs uppercase tracking-wide">
            Monogram line
          </label>

          <input
            value={form.monogramLine}
            onChange={(e) =>
              update("monogramLine", e.target.value)
            }
            placeholder="Together with their families"
            className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3 outline-none focus:border-[#B08D57]"
          />
        </div>

        {/* Story */}
        <div>
          <label className="text-xs uppercase tracking-wide">
            Couple Story
          </label>

          <textarea
            value={form.storyText}
            onChange={(e) =>
              update("storyText", e.target.value)
            }
            rows={5}
            placeholder="Tell the couple's love story..."
            className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3 outline-none focus:border-[#B08D57]"
          />
        </div>

        {/* Dress Code */}
        <div>
          <label className="text-xs uppercase tracking-wide">
            Dress Code
          </label>

          <input
            value={form.dressCode}
            onChange={(e) =>
              update("dressCode", e.target.value)
            }
            placeholder="Black Tie / Formal / Smart Casual"
            className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3 outline-none focus:border-[#B08D57]"
          />
        </div>

        {/* Colors */}
        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="text-xs uppercase tracking-wide">
              Primary Color
            </label>

            <input
              type="color"
              value={form.primaryColor}
              onChange={(e) =>
                update("primaryColor", e.target.value)
              }
              className="mt-2 h-12 w-full cursor-pointer rounded-xl border"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide">
              Accent Color
            </label>

            <input
              type="color"
              value={form.accentColor}
              onChange={(e) =>
                update("accentColor", e.target.value)
              }
              className="mt-2 h-12 w-full cursor-pointer rounded-xl border"
            />
          </div>

        </div>

        {/* Contact */}
        <div className="grid gap-4 md:grid-cols-2">

          <div>
            <label className="text-xs uppercase tracking-wide">
              Contact Email
            </label>

            <input
              type="email"
              value={form.contactEmail}
              onChange={(e) =>
                update("contactEmail", e.target.value)
              }
              placeholder="couple@email.com"
              className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3 outline-none focus:border-[#B08D57]"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide">
              Contact Phone
            </label>

            <input
              type="tel"
              value={form.contactPhone}
              onChange={(e) =>
                update("contactPhone", e.target.value)
              }
              placeholder="+256..."
              className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3 outline-none focus:border-[#B08D57]"
            />
          </div>

        </div>

        {/* Publish */}
        <div className="rounded-xl border border-[#E5DED2] bg-[#FDFBF7] p-4">

          <label className="flex cursor-pointer items-center gap-3">

            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) =>
                update("published", e.target.checked)
              }
              className="h-5 w-5"
            />

            <div>
              <div className="font-medium text-[#174A3B]">
                {form.published
                  ? "Published — Live for guests"
                  : "Draft — Hidden from guests"}
              </div>

              <div className="mt-1 text-xs text-gray-500">
                Guests can only access the invitation when it
                is published.
              </div>
            </div>

          </label>

        </div>

        {/* Messages */}
        {saved && (
          <div className="rounded-xl bg-green-50 p-4 text-sm text-green-700">
            ✓ Wedding saved successfully.
          </div>
        )}

        {error && (
          <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Save */}
        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-full bg-[#174A3B] px-6 py-3.5 font-semibold text-white transition hover:bg-[#B08D57] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving
            ? "Saving..."
            : form.published
            ? "Save & Publish Wedding"
            : "Save Wedding Draft"}
        </button>

      </form>
    </div>
  );
}