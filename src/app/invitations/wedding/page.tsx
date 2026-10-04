import Link from "next/link";

export default function WeddingInvitationPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#174A3B]">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-wide"
        >
          Claire Invite Studio
        </Link>

        <Link
          href="/invitations"
          className="text-sm transition hover:text-[#B08D57]"
        >
          ← Back to Invitations
        </Link>
      </nav>

      {/* Invitation */}
      <section className="px-6 pb-20 pt-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D9C7A3] bg-white p-3 shadow-2xl md:p-6">

          <div className="border border-[#E5DED2] bg-[#FDFBF7] px-7 py-16 text-center md:px-20 md:py-24">

            {/* Decorative Top */}
            <div className="mx-auto flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#D9C7A3]" />
              <span className="text-xl text-[#B08D57]">✦</span>
              <span className="h-px w-12 bg-[#D9C7A3]" />
            </div>

            <p className="mt-7 text-xs uppercase tracking-[0.45em] text-[#B08D57]">
              Together With Their Families
            </p>

            <p className="mt-8 font-serif text-lg italic text-[#66756F]">
              Joyfully invite you to celebrate
            </p>

            {/* Names */}
            <h1 className="mt-8 font-serif text-6xl leading-none md:text-8xl">
              Claire
            </h1>

            <p className="my-5 font-serif text-3xl italic text-[#B08D57]">
              &
            </p>

            <h1 className="font-serif text-6xl leading-none md:text-8xl">
              Aristote
            </h1>

            {/* Date */}
            <div className="mx-auto my-10 h-px w-24 bg-[#D9C7A3]" />

            <p className="text-sm uppercase tracking-[0.3em] text-[#B08D57]">
              Saturday
            </p>

            <p className="mt-3 font-serif text-3xl">
              19 December 2026
            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#66756F]">
              At Two O&apos;Clock In The Afternoon
            </p>

            {/* Venue */}
            <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-[#E5DED2] bg-white p-7 shadow-sm">

              <p className="text-xs uppercase tracking-[0.3em] text-[#B08D57]">
                The Celebration
              </p>

              <h2 className="mt-4 font-serif text-3xl">
                Kampala, Uganda
              </h2>

              <p className="mt-3 leading-7 text-[#66756F]">
                Venue details will be shared with our guests.
              </p>

            </div>

            {/* Love Message */}
            <div className="mx-auto mt-14 max-w-2xl">

              <div className="mx-auto mb-6 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-[#D9C7A3]" />
                <span className="text-[#B08D57]">❦</span>
                <span className="h-px w-10 bg-[#D9C7A3]" />
              </div>

              <p className="font-serif text-2xl italic leading-9">
                “Two hearts, one beautiful journey, and a lifetime of
                memories waiting to be written.”
              </p>

            </div>

            {/* RSVP */}
            <div className="mt-14">

              <p className="text-xs uppercase tracking-[0.3em] text-[#B08D57]">
                Kindly RSVP
              </p>

              <p className="mt-4 font-serif text-xl">
                +256 781 095 271
              </p>

              <p className="mt-2 text-sm text-[#66756F]">
                We look forward to celebrating with you.
              </p>

              <a
                href="https://wa.me/256781095271?text=Hello%20Claire%20Invite%20Studio%2C%20I%20would%20like%20to%20RSVP%20for%20the%20wedding."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-[#174A3B] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#B08D57]"
              >
                RSVP on WhatsApp
              </a>

            </div>

            {/* Bottom Decoration */}
            <div className="mx-auto mt-14 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#D9C7A3]" />
              <span className="text-xl text-[#B08D57]">✦</span>
              <span className="h-px w-12 bg-[#D9C7A3]" />
            </div>

          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-[#174A3B] px-6 py-20 text-center text-white">

        <p className="text-sm uppercase tracking-[0.3em] text-[#D9C7A3]">
          Timeless Elegance
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl md:text-5xl">
          Make this invitation yours.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
          Personalize the names, date, venue, wording and RSVP details
          for your own celebration.
        </p>

        <Link
          href="/order?design=Timeless%20Elegance"
          className="mt-9 inline-block rounded-full bg-[#D9C7A3] px-9 py-4 font-medium text-[#174A3B] transition hover:bg-white"
        >
          Order This Invitation
        </Link>

      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DED2] px-6 py-8 text-center text-sm text-[#66756F]">
        © 2026 Claire Invite Studio. All rights reserved.
      </footer>

    </main>
  );
}