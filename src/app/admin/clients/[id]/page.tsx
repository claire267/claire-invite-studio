export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function ClientDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const client =
    await prisma.user.findUnique({
      where: {
        id: params.id,
      },
      include: {
        wedding: true,
      },
    });

  if (!client || client.role !== "COUPLE") {
    notFound();
  }

  const orders =
    await prisma.order.findMany({
      where: {
        OR: [
          {
            customerEmail: client.email,
          },
          {
            customerName: client.name,
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div className="max-w-5xl">

      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#B08D57]">
            Client
          </p>

          <h1 className="mt-2 font-serif text-4xl text-[#174A3B]">
            {client.name}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Client since{" "}
            {client.createdAt.toLocaleDateString()}
          </p>
        </div>

        <Link
          href="/admin/clients"
          className="rounded-full border border-[#D9D2C6] px-5 py-2.5 text-sm"
        >
          ← Clients
        </Link>

      </div>

      {/* CLIENT INFORMATION */}
      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-white p-7 shadow-sm">

          <h2 className="font-serif text-2xl text-[#174A3B]">
            Account
          </h2>

          <div className="mt-5 space-y-4">

            <Info
              label="Name"
              value={client.name}
            />

            <Info
              label="Email"
              value={client.email}
            />

            <Info
              label="Role"
              value={client.role}
            />

          </div>

        </div>

        {/* WEDDING */}
        <div className="rounded-2xl bg-white p-7 shadow-sm">

          <h2 className="font-serif text-2xl text-[#174A3B]">
            Wedding
          </h2>

          {client.wedding ? (
            <div className="mt-5">

              <p className="font-serif text-xl text-[#174A3B]">
                {client.wedding.partner1Name}
                {" & "}
                {client.wedding.partner2Name}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                /w/{client.wedding.slug}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {client.wedding.weddingDate.toLocaleDateString()}
              </p>

              <Link
                href={`/admin/weddings/${client.wedding.id}`}
                className="mt-5 inline-flex rounded-full bg-[#174A3B] px-5 py-2.5 text-sm text-white"
              >
                Edit Wedding
              </Link>

            </div>
          ) : (
            <div className="mt-5">

              <p className="text-sm text-gray-500">
                No wedding has been created yet.
              </p>

              <Link
                href={`/admin/weddings/new?ownerEmail=${encodeURIComponent(
                  client.email
                )}&partner1Name=${encodeURIComponent(
                  client.name
                )}`}
                className="mt-5 inline-flex rounded-full bg-[#174A3B] px-5 py-2.5 text-sm text-white"
              >
                + Create Wedding
              </Link>

            </div>
          )}

        </div>
      </div>

      {/* ORDERS */}
      <div className="mt-6 rounded-2xl bg-white p-7 shadow-sm">

        <div className="flex items-center justify-between">

          <h2 className="font-serif text-2xl text-[#174A3B]">
            Orders
          </h2>

          <span className="rounded-full bg-[#F8F5EF] px-3 py-1 text-xs">
            {orders.length} order
            {orders.length === 1 ? "" : "s"}
          </span>

        </div>

        {orders.length === 0 ? (
          <p className="mt-6 text-sm text-gray-500">
            No orders found for this client.
          </p>
        ) : (
          <div className="mt-5 overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="border-b text-left">
                <tr>
                  <th className="p-3">
                    Invitation
                  </th>

                  <th className="p-3">
                    Package
                  </th>

                  <th className="p-3">
                    Status
                  </th>

                  <th className="p-3">
                    Payment
                  </th>

                  <th className="p-3"></th>
                </tr>
              </thead>

              <tbody>

                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-100"
                  >

                    <td className="p-3">
                      {order.invitation}
                    </td>

                    <td className="p-3">
                      {order.package}
                    </td>

                    <td className="p-3">
                      {order.status}
                    </td>

                    <td className="p-3">
                      {order.paymentStatus}
                    </td>

                    <td className="p-3">
                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="text-[#174A3B] underline"
                      >
                        View
                      </Link>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>

          </div>
        )}

      </div>

    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-5 border-b border-gray-100 pb-3">

      <span className="text-xs uppercase tracking-wide text-gray-400">
        {label}
      </span>

      <span className="text-right text-sm font-medium text-gray-700">
        {value}
      </span>

    </div>
  );
}