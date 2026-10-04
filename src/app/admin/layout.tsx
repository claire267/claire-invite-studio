import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-ivory">
      <aside className="w-56 bg-emerald text-white p-6">
        <h2 className="font-serif text-xl mb-8">
          Claire Invite Studio
        </h2>

        <nav className="flex flex-col gap-4 text-sm">
          <Link
            href="/admin"
            className="hover:text-[#C6A15B]"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/orders"
            className="hover:text-[#C6A15B]"
          >
            Orders
          </Link>

          <Link
            href="/admin/weddings"
            className="hover:text-[#C6A15B]"
          >
            Weddings
          </Link>

          <Link
            href="/admin/clients"
            className="hover:text-[#C6A15B]"
          >
            Clients
          </Link>

          <Link
            href="/admin/analytics"
            className="hover:text-[#C6A15B]"
          >
            Analytics
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}