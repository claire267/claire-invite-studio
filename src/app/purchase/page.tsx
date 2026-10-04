"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function PurchaseContent() {
  const searchParams = useSearchParams();

  const design = searchParams.get("design") || "Your Invitation";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(
      `Hello Claire Invite Studio! I would like to order the "${design}" invitation.`
    );
  }, [design]);

  const whatsappMessage = encodeURIComponent(
    `${message}

My name: ${name || "I will provide my name"}
Phone: ${phone || "I will provide my phone number"}
Event type: ${eventType || "I will provide my event type"}

Please send me the price and next steps.`
  );

  const whatsappUrl = `https://wa.me/256781095271?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#174A3B]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-wide"
        >
          Claire Invite Studio
        </Link>

        <Link
          href="/invitations"
          className="text-sm hover:text-[#B08D57]"
        >
          ← Back to Invitations
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-10 pt-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
          Start Your Order
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-semibold md:text-6xl">
          Make your invitation yours.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66756F]">
          Tell us a little about your celebration and we will help you
          personalize your invitation beautifully.
        </p>
      </section>

      {/* Purchase Form */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#D9C7A3] bg-white p-6 shadow-xl md:p-10">

          {/* Selected Design */}
          <div className="rounded-2xl bg-[#174A3B] p-7 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D9C7A3]">
              Selected Design
            </p>

            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              {design}
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/70">
              You can personalize the names, colors, wording, date, venue,
              photos and RSVP information.
            </p>
          </div>

          {/* Form */}
          <div className="mt-10 space-y-7">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[#D9C7A3] bg-[#FDFBF7] px-4 py-3.5 outline-none transition focus:border-[#174A3B] focus:ring-2 focus:ring-[#D9C7A3]/40"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium"
              >
                Phone / WhatsApp Number
              </label>

              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+256..."
                className="w-full rounded-xl border border-[#D9C7A3] bg-[#FDFBF7] px-4 py-3.5 outline-none transition focus:border-[#174A3B] focus:ring-2 focus:ring-[#D9C7A3]/40"
              />
            </div>

            {/* Event Type */}
            <div>
              <label
                htmlFor="eventType"
                className="mb-2 block text-sm font-medium"
              >
                Event Type
              </label>

              <select
                id="eventType"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full rounded-xl border border-[#D9C7A3] bg-[#FDFBF7] px-4 py-3.5 outline-none transition focus:border-[#174A3B] focus:ring-2 focus:ring-[#D9C7A3]/40"
              >
                <option value="">Select your event</option>
                <option value="Wedding">Wedding</option>
                <option value="Traditional Introduction">
                  Traditional Introduction
                </option>
                <option value="Engagement">Engagement</option>
                <option value="Birthday">Birthday</option>
                <option value="Bridal Shower">Bridal Shower</option>
                <option value="Baby Shower">Baby Shower</option>
                <option value="Graduation">Graduation</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other Celebration">
                  Other Celebration
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>

              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full resize-none rounded-xl border border-[#D9C7A3] bg-[#FDFBF7] px-4 py-3.5 outline-none transition focus:border-[#174A3B] focus:ring-2 focus:ring-[#D9C7A3]/40"
              />
            </div>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-full bg-[#174A3B] px-8 py-4 text-center font-medium text-white transition hover:bg-[#B08D57]"
            >
              Continue on WhatsApp
            </a>

            <p className="text-center text-sm leading-6 text-[#66756F]">
              We will confirm your design, price and next steps with you
              directly on WhatsApp.
            </p>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#174A3B] px-6 py-20 text-center text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-[#D9C7A3]">
          Claire Invite Studio
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl md:text-5xl">
          Your celebration. Your story. Your invitation.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
          Elegant digital invitations designed to make your special moment
          unforgettable.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DED2] px-6 py-8 text-center text-sm text-[#66756F]">
        © 2026 Claire Invite Studio. All rights reserved.
      </footer>
    </main>
  );
}

export default function PurchasePage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#F8F5EF] text-[#174A3B]">
          <p className="font-serif text-2xl">
            Loading your invitation...
          </p>
        </main>
      }
    >
      <PurchaseContent />
    </Suspense>
  );
}