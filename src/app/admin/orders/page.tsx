export const dynamic = "force-dynamic";

import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#B08D57]">
            Claire Invite Studio
          </p>

          <h1 className="mt-2 font-serif text-4xl text-[#174A3B]">
            Orders
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage customer invitation orders.
          </p>
        </div>

        <Link
          href="/admin"
          className="rounded-full border border-[#D9D2C6] px-5 py-2.5 text-sm hover:bg-white"
        >
          ← Dashboard
        </Link>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-4">Customer</th>
              <th className="p-4">Invitation</th>
              <th className="p-4">Package</th>
              <th className="p-4">Event Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Payment</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="p-10 text-center text-gray-500"
                >
                  No orders yet.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-gray-100"
                >
                  <td className="p-4">
                    <div className="font-medium">
                      {order.customerName}
                    </div>

                    <div className="text-xs text-gray-500">
                      {order.customerPhone}
                    </div>

                    {order.customerEmail && (
                      <div className="mt-1 text-xs text-gray-400">
                        {order.customerEmail}
                      </div>
                    )}
                  </td>

                  <td className="p-4">
                    {order.invitation}
                  </td>

                  <td className="p-4">
                    {order.package}
                  </td>

                  <td className="p-4">
                    {order.eventDate
                      ? new Date(
                          order.eventDate
                        ).toLocaleDateString()
                      : "—"}
                  </td>

                  <td className="p-4">
                    <span className="rounded-full bg-[#F8F5EF] px-3 py-1 text-xs">
                      {order.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="rounded-full bg-[#F8F5EF] px-3 py-1 text-xs">
                      {order.paymentStatus}
                    </span>
                  </td>

                  <td className="p-4">
                    <Link
                      href={`/admin/orders/${order.id}`}
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