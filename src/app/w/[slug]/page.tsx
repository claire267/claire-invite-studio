// The public wedding website — this is what guests see.
// Server component: fetches the wedding by slug at request time.
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import CountdownTimer from "@/components/CountdownTimer";
import RsvpForm from "@/components/RsvpForm";
import GuestBook from "@/components/GuestBook";
import AiAssistantWidget from "@/components/AiAssistantWidget";

export default async function WeddingPage({ params }: { params: { slug: string } }) {
  const wedding = await prisma.wedding.findUnique({
    where: { slug: params.slug },
    include: { images: { orderBy: { sortOrder: "asc" } }, scheduleItems: { orderBy: { sortOrder: "asc" } } },
  });

  if (!wedding || !wedding.published) notFound();

  const mapUrl =
    wedding.mapUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(wedding.venueAddress)}`;

  return (
    <main style={{ ["--primary" as any]: wedding.primaryColor, ["--accent" as any]: wedding.accentColor }}>
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6"
        style={{ background: "#FBF7F0" }}>
        {wedding.monogramLine && (
          <p className="uppercase text-sm tracking-widest mb-4" style={{ color: wedding.primaryColor }}>
            {wedding.monogramLine}
          </p>
        )}
        <h1 className="font-serif text-5xl md:text-7xl" style={{ color: wedding.primaryColor }}>
          {wedding.partner1Name} <span style={{ color: wedding.accentColor }}>&amp;</span> {wedding.partner2Name}
        </h1>
        <p className="mt-6 uppercase tracking-widest text-sm">
          {wedding.weddingDate.toDateString()}
        </p>
        <p className="mt-2" style={{ color: wedding.primaryColor }}>{wedding.venueName}</p>
        <div className="mt-10">
          <CountdownTimer targetDate={wedding.weddingDate.toISOString()} accentColor={wedding.accentColor} />
        </div>
      </section>

      {/* GALLERY */}
      {wedding.images.length > 0 && (
        <section className="py-20 px-6 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-8" style={{ color: wedding.primaryColor }}>A few favorites</h2>
          <div className="grid grid-cols-3 gap-2">
            {wedding.images.map((img) => (
              img.type === "video" ? (
                <video key={img.id} src={img.url} controls className="w-full h-36 object-cover rounded" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={img.id} src={img.url} alt="Wedding photo" className="w-full h-36 object-cover rounded" />
              )
            ))}
          </div>
        </section>
      )}

      {/* STORY */}
      {wedding.storyText && (
        <section className="py-20 px-6 max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-4" style={{ color: wedding.primaryColor }}>Our story</h2>
          <p className="italic opacity-80">{wedding.storyText}</p>
        </section>
      )}

      {/* PROGRAM */}
      {wedding.scheduleItems.length > 0 && (
        <section className="py-20 px-6 text-center text-white" style={{ background: wedding.primaryColor }}>
          <h2 className="font-serif text-3xl mb-8">The Day</h2>
          <div className="max-w-md mx-auto text-left space-y-4">
            {wedding.scheduleItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <span className="w-24 text-right font-serif" style={{ color: wedding.accentColor }}>{item.time}</span>
                <span>{item.title}{item.location ? ` — ${item.location}` : ""}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* DETAILS + MAP + DRESS CODE */}
      <section className="py-20 px-6 max-w-xl mx-auto text-center">
        <h2 className="font-serif text-3xl mb-8" style={{ color: wedding.primaryColor }}>Good to know</h2>
        <div className="grid grid-cols-2 gap-6 text-left">
          <div>
            <h4 className="text-xs uppercase tracking-wide mb-1" style={{ color: wedding.accentColor }}>Dress Code</h4>
            <p>{wedding.dressCode ?? "Semi-formal"}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wide mb-1" style={{ color: wedding.accentColor }}>Venue</h4>
            <p>{wedding.venueName}<br />{wedding.venueAddress}</p>
          </div>
        </div>
        <a href={mapUrl} target="_blank" rel="noopener" className="inline-block mt-6 underline text-sm font-semibold"
          style={{ color: wedding.primaryColor }}>
          Get Directions →
        </a>
      </section>

      {/* RSVP */}
      <section className="py-20 px-6 text-white text-center" style={{ background: wedding.primaryColor }}>
        <h2 className="font-serif text-3xl mb-8">RSVP</h2>
        <RsvpForm weddingSlug={wedding.slug} accentColor={wedding.accentColor} />
      </section>

      {/* GUEST BOOK */}
      <section className="py-20 px-6 max-w-xl mx-auto text-center">
        <h2 className="font-serif text-3xl mb-8" style={{ color: wedding.primaryColor }}>Leave a message</h2>
        <GuestBook weddingSlug={wedding.slug} />
      </section>

      {/* AI ASSISTANT */}
      <AiAssistantWidget weddingSlug={wedding.slug} primaryColor={wedding.primaryColor} />

      <footer className="py-10 text-center text-sm opacity-70">
        Questions? {wedding.contactEmail} {wedding.contactPhone}
      </footer>
    </main>
  );
}
