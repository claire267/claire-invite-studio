export const dynamic = "force-dynamic";

// List all weddings with quick links to edit each one.

import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminWeddingsList() {
  const weddings = await prisma.wedding.findMany({
    include: {
      owner: true,
      _count: {
        select: {
          rsvps: true,
          messages: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-serif text-3xl text-emerald">
          Weddings
        </h1>

        <Link
          href="/admin/weddings/new"
          className="bg-emerald text-white px-4 py-2 rounded text-sm"
        >
          + New Wedding
        </Link>
      </div>

      <table className="w-full bg-white rounded-lg shadow overflow-hidden text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="p-3">Couple</th>
            <th className="p-3">Slug</th>
            <th className="p-3">Owner</th>
            <th className="p-3">RSVPs</th>
            <th className="p-3">Published</th>
            <th className="p-3"></th>
          </tr>
        </thead>

        <tbody>
          {weddings.map((w) => (
            <tr key={w.id} className="border-t">
              <td className="p-3">
                {w.partner1Name} &amp; {w.partner2Name}
              </td>

              <td className="p-3">
                /w/{w.slug}
              </td>

              <td className="p-3">
                {w.owner.email}
              </td>

              <td className="p-3">
                {w._count.rsvps}
              </td>

              <td className="p-3">
                {w.published ? "Yes" : "Draft"}
              </td>

              <td className="p-3">
                <Link
                  href={`/admin/weddings/${w.id}`}
                  className="text-emerald underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}