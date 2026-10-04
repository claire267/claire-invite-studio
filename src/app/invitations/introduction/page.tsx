import Link from "next/link";

export default function IntroductionInvitationPage() {
  return (
    <main className="min-h-screen bg-[#F4F1E9] text-[#174A3B]">

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

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#B08D57] bg-white p-3 shadow-2xl md:p-6">

          <div className="border border-[#D9C7A3] bg-[#FFFDF8] px-7 py-16 text-center md:px-20 md:py-24">

            {/* Cultural Header */}
            <div className="mx-auto flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#B08D57]" />
              <span className="text-xl text-[#B08D57]">✦</span>
              <span className="h-px w-12 bg-[#B08D57]" />
            </div>

            <p className="mt-7 text-xs uppercase tracking-[0.45em] text-[#B08D57]">
              Gusaba • Introduction Ceremony
            </p>

            <h1 className="mt-8 font-serif text-5xl leading-tight md:text-7xl">
              A Celebration
            </h1>

            <p className="mt-3 font-serif text-2xl italic text-[#B08D57]">
              of Love & Family
            </p>

            <div className="mx-auto my-10 h-px w-24 bg-[#D9C7A3]" />

            {/* Family Message */}
            <p className="mx-auto max-w-2xl text-lg leading-8 text-[#66756F]">
              With joyful hearts and grateful families, we invite you to
              witness and celebrate the beautiful joining of two families
              through love, tradition and culture.
            </p>

            {/* Couple */}
            <div className="mt-14">

              <p className="text-xs uppercase tracking-[0.35em] text-[#B08D57]">
                The Families of
              </p>

              <h2 className="mt-5 font-serif text-5xl md:text-6xl">
                Claire
              </h2>

              <p className="my-4 font-serif text-3xl italic text-[#B08D57]">
                &
              </p>

              <h2 className="font-serif text-5xl md:text-6xl">
                Aristote
              </h2>

            </div>

            {/* Date */}
            <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-[#E5DED2] bg-white p-7 shadow-sm">

              <p className="text-xs uppercase tracking-[0.3em] text-[#B08D57]">
                Save The Date
              </p>

              <p className="mt-4 font-serif text-3xl">
                Saturday, 19 December 2026
              </p>

              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#66756F]">
                Introduction Ceremony
              </p>

            </div>

            {/* Culture */}
            <div className="mt-14">

              <div className="mx-auto flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-[#D9C7A3]" />
                <span className="text-[#B08D57]">❦</span>
                <span className="h-px w-10 bg-[#D9C7A3]" />
              </div>

              <h3 className="mt-7 font-serif text-3xl">
                Love. Culture. Family.
              </h3>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#66756F]">
                This special gathering is a celebration of heritage,
                family bonds, respect and the beautiful traditions that
                bring two families together.
              </p>

            </div>

            {/* Ceremony Details */}
            <div className="mt-14 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-[#E5DED2] bg-[#FDFBF7] p-7">

                <p className="text-xs uppercase tracking-[0.3em] text-[#B08D57]">
                  Ceremony
                </p>

                <h3 className="mt-4 font-serif text-2xl">
                  Gusaba
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#66756F]">
                  A meaningful family gathering celebrating love,
                  respect and tradition.
                </p>

              </div>

              <div className="rounded-2xl border border-[#E5DED2] bg-[#FDFBF7] p-7">

                <p className="text-xs uppercase tracking-[0.3em] text-[#B08D57]">
                  Location
                </p>

                <h3 className="mt-4 font-serif text-2xl">
                  Kampala, Uganda
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#66756F]">
                  Venue details will be shared with invited guests.
                </p>

              </div>

            </div>

            {/* Closing */}
            <div className="mx-auto mt-14 max-w-2xl">

              <p className="font-serif text-2xl italic leading-9">
                “When families come together, love becomes a legacy.”
              </p>

              <p className="mt-5 text-sm text-[#66756F]">
                Your presence will make this celebration even more special.
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

              <a
                href="https://wa.me/256781095271?text=Hello%20Claire%20Invite%20Studio%2C%20I%20would%20like%20to%20RSVP%20for%20the%20Introduction%20Ceremony."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-[#174A3B] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#B08D57]"
              >
                RSVP on WhatsApp
              </a>

            </div>

            {/* Bottom Decoration */}
            <div className="mx-auto mt-14 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#B08D57]" />
              <span className="text-xl text-[#B08D57]">✦</span>
              <span className="h-px w-12 bg-[#B08D57]" />
            </div>

          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-[#174A3B] px-6 py-20 text-center text-white">

        <p className="text-sm uppercase tracking-[0.3em] text-[#D9C7A3]">
          Cultural Romance
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl md:text-5xl">
          Make this cultural invitation yours.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
          Personalize the families, names, date, location, wording and
          RSVP details for your own introduction ceremony.
        </p>

        <Link
          href="/order?design=Cultural%20Romance"
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