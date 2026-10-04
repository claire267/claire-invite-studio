import Link from "next/link";

export default function CoupleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-ivory">
      <aside className="w-56 bg-emerald text-white p-6 space-y-4">
        <h2 className="font-serif text-xl mb-6">Your Wedding</h2>
        <nav className="flex flex-col gap-3 text-sm">
          <Link href="/couple/dashboard">Overview</Link>
          <Link href="/couple/rsvps">RSVPs</Link>
          <Link href="/couple/messages">Guest Messages</Link>
          <Link href="/couple/questions">Questions</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
