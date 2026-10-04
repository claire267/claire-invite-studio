export const dynamic = "force-dynamic";

import Link from "next/link";
import { prisma } from "@/lib/prisma";
import NewClientForm from "@/components/NewClientForm";

export default async function AdminClientsPage() {
  const clients =
    await prisma.user.findMany({
      where: {
        role: "COUPLE",
      },
      include: {
        wedding: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div>

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h1 className="font-serif text-3xl text-emerald">
            Clients
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage couple accounts and their weddings.
          </p>
        </div>

      </div>

      <NewClientForm />

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white shadow">

        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-left">

            <tr>
              <th className="p-4">
                Name
              </th>

              <th className="p-4">
                Email
              </th>

              <th className="p-4">
                Wedding
              </th>

              <th className="p-4">
                Joined
              </th>

              <th className="p-4">
              </th>
            </tr>

          </thead>

          <tbody>

            {clients.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-10 text-center text-gray-500"
                >
                  No clients yet.
                </td>
              </tr>
            ) : (
              clients.map((client) => (
                <tr
                  key={client.id}
                  className="border-t"
                >

                  <td className="p-4 font-medium">
                    {client.name}
                  </td>

                  <td className="p-4">
                    {client.email}
                  </td>

                  <td className="p-4">
                    {client.wedding
                      ? `${client.wedding.partner1Name} & ${client.wedding.partner2Name}`
                      : "—"}
                  </td>

                  <td className="p-4">
                    {client.createdAt.toDateString()}
                  </td>

                  <td className="p-4">
                    <Link
                      href={`/admin/clients/${client.id}`}
                      className="text-[#174A3B] underline"
                    >
                      View
                    </Link>
                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}