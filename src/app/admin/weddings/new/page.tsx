"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type OrderData = {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string | null;
  invitation: string;
  package: string;
  eventDate: string | null;
  venue: string | null;
  guests: number | null;
  message: string | null;
};

type WeddingForm = {
  slug: string;
  partner1Name: string;
  partner2Name: string;
  weddingDate: string;
  venueName: string;
  venueAddress: string;
  ownerEmail: string;
};

function NewWeddingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const emailFromUrl =
    searchParams.get("email") ||
    searchParams.get("ownerEmail") ||
    "";

  const [order, setOrder] = useState<OrderData | null>(null);

  const [form, setForm] = useState<WeddingForm>({
    slug: "",
    partner1Name: "",
    partner2Name: "",
    weddingDate: "",
    venueName: "",
    venueAddress: "",
    ownerEmail: emailFromUrl,
  });

  const [loadingOrder, setLoadingOrder] = useState(
    Boolean(orderId)
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!orderId) {
      setLoadingOrder(false);
      return;
    }

    async function loadOrder() {
      try {
        const res = await fetch(
          `/api/admin/orders/${orderId}`
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(
            data?.error || "Failed to load order."
          );
        }

        const loadedOrder: OrderData = data.order;

        setOrder(loadedOrder);

        const generatedSlug =
          loadedOrder.customerName
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")
            .slice(0, 50);

        const weddingDate = loadedOrder.eventDate
          ? new Date(loadedOrder.eventDate)
              .toISOString()
              .split("T")[0]
          : "";

        setForm((current) => ({
          ...current,
          slug: generatedSlug || "our-wedding",
          partner1Name: loadedOrder.customerName,
          weddingDate,
          venueName: loadedOrder.venue || "",
          ownerEmail:
            loadedOrder.customerEmail ||
            emailFromUrl ||
            "",
        }));
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load order."
        );
      } finally {
        setLoadingOrder(false);
      }
    }

    loadOrder();
  }, [orderId, emailFromUrl]);

  function update(
    key: keyof WeddingForm,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));

    setError("");
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "/api/weddings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            orderId,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "Failed to create wedding."
        );
      }

      if (orderId) {
        router.push(
          `/admin/orders/${orderId}`
        );
      } else {
        router.push("/admin/weddings");
      }

      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
      setLoading(false);
    }
  }

  if (loadingOrder) {
    return (
      <div className="p-6 text-gray-500">
        Loading order details...
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#B08D57]">
          Claire Invite Studio
        </p>

        <h1 className="mt-2 font-serif text-3xl text-[#174A3B]">
          Create Wedding
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Create the couple's wedding invitation website.
        </p>
      </div>

      {order && (
        <div className="mb-6 rounded-2xl border border-[#E5DED2] bg-[#FDFBF7] p-5">
          <p className="text-xs uppercase tracking-wide text-[#B08D57]">
            From Customer Order
          </p>

          <h2 className="mt-2 font-serif text-xl text-[#174A3B]">
            {order.customerName}
          </h2>

          <div className="mt-3 grid gap-2 text-sm text-gray-600">
            <p>
              <strong>Invitation:</strong>{" "}
              {order.invitation}
            </p>

            <p>
              <strong>Package:</strong>{" "}
              {order.package}
            </p>

            <p>
              <strong>Guests:</strong>{" "}
              {order.guests ?? "—"}
            </p>

            {order.message && (
              <p>
                <strong>Details:</strong>{" "}
                {order.message}
              </p>
            )}
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl bg-white p-6 shadow-sm"
      >
        <div>
          <label className="text-xs uppercase tracking-wide text-gray-500">
            Invitation URL Slug
          </label>

          <input
            required
            value={form.slug}
            onChange={(e) =>
              update("slug", e.target.value)
            }
            placeholder="mary-and-john"
            className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3 outline-none focus:border-[#B08D57]"
          />

          <p className="mt-1 text-xs text-gray-400">
            Guest link will be /w/{form.slug || "..."}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-xs uppercase tracking-wide text-gray-500">
              Partner 1
            </label>

            <input
              required
              value={form.partner1Name}
              onChange={(e) =>
                update(
                  "partner1Name",
                  e.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-gray-500">
              Partner 2
            </label>

            <input
              required
              value={form.partner2Name}
              onChange={(e) =>
                update(
                  "partner2Name",
                  e.target.value
                )
              }
              placeholder="Enter second partner name"
              className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3"
            />
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wide text-gray-500">
            Wedding Date
          </label>

          <input
            type="date"
            required
            value={form.weddingDate}
            onChange={(e) =>
              update(
                "weddingDate",
                e.target.value
              )
            }
            className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3"
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-wide text-gray-500">
            Venue Name
          </label>

          <input
            required
            value={form.venueName}
            onChange={(e) =>
              update(
                "venueName",
                e.target.value
              )
            }
            placeholder="Venue name"
            className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3"
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-wide text-gray-500">
            Venue Address
          </label>

          <input
            required
            value={form.venueAddress}
            onChange={(e) =>
              update(
                "venueAddress",
                e.target.value
              )
            }
            placeholder="Full venue address"
            className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3"
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-wide text-gray-500">
            Couple Login Email
          </label>

          <input
            type="email"
            required
            value={form.ownerEmail}
            onChange={(e) =>
              update(
                "ownerEmail",
                e.target.value
              )
            }
            placeholder="couple@email.com"
            className="mt-2 w-full rounded-xl border border-[#D9D2C6] p-3"
          />
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[#174A3B] px-6 py-3.5 font-semibold text-white transition hover:bg-[#B08D57] disabled:opacity-60"
        >
          {loading
            ? "Creating Wedding..."
            : "Create Wedding"}
        </button>
      </form>
    </div>
  );
}

export default function NewWeddingPage() {
  return (
    <Suspense
      fallback={
        <div className="p-6 text-gray-500">
          Loading...
        </div>
      }
    >
      <NewWeddingForm />
    </Suspense>
  );
}