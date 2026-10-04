export const dynamic = "force-dynamic";

import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminHome() {
  const [
    weddingCount,
    rsvpCount,
    clientCount,
    orderCount,
    newOrders,
    paidOrders,
  ] = await Promise.all([
    prisma.wedding.count(),

    prisma.rsvp.count(),

    prisma.user.count({
      where: {
        role: "COUPLE",
      },
    }),

    prisma.order.count(),

    prisma.order.count({
      where: {
        status: "NEW",
      },
    }),

    prisma.order.count({
      where: {
        paymentStatus: "PAID",
      },
    }),
  ]);

  return (
    <div>
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-[#B08D57]">
          Claire Invite Studio
        </p>

        <h1 className="mt-2 font-serif text-4xl text-[#174A3B]">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Your invitation business at a glance.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          label="Total Orders"
          value={orderCount}
          href="/admin/orders"
        />

        <StatCard
          label="New Orders"
          value={newOrders}
          href="/admin/orders"
        />

        <StatCard
          label="Paid Orders"
          value={paidOrders}
          href="/admin/orders"
        />

        <StatCard
          label="Weddings"
          value={weddingCount}
          href="/admin/weddings"
        />

        <StatCard
          label="Total RSVPs"
          value={rsvpCount}
          href="/admin/analytics"
        />

        <StatCard
          label="Clients"
          value={clientCount}
          href="/admin/clients"
        />
      </div>

      <div className="mt-10 rounded-2xl bg-white p-7 shadow-sm">
        <h2 className="font-serif text-2xl text-[#174A3B]">
          Business Workflow
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <Workflow
            number="01"
            title="Receive Order"
            text="Customer submits the order form."
          />

          <Workflow
            number="02"
            title="Confirm"
            text="Confirm details and payment on WhatsApp."
          />

          <Workflow
            number="03"
            title="Create"
            text="Build the customer's digital invitation."
          />

          <Workflow
            number="04"
            title="Deliver"
            text="Send the finished invitation link."
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  href,
}: {
  label: string;
  value: number;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="font-serif text-4xl text-[#174A3B]">
        {value}
      </div>

      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
        {label}
      </div>

      <div className="mt-4 text-xs text-[#B08D57]">
        View →
      </div>
    </Link>
  );
}

function Workflow({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-[#E5DED2] bg-[#FDFBF7] p-5">
      <div className="text-xs font-semibold tracking-[0.2em] text-[#B08D57]">
        {number}
      </div>

      <h3 className="mt-2 font-serif text-xl text-[#174A3B]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {text}
      </p>
    </div>
  );
}