"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ORDER_STATUSES = [
  "NEW",
  "CONTACTED",
  "CONFIRMED",
  "PAID",
  "IN_DESIGN",
  "DELIVERED",
  "COMPLETED",
  "CANCELLED",
];

const PAYMENT_STATUSES = [
  "unpaid",
  "pending",
  "paid",
];

export default function OrderControls({
  orderId,
  initialStatus,
  initialPaymentStatus,
  customerName,
  customerEmail,
}: {
  orderId: string;
  initialStatus: string;
  initialPaymentStatus: string;
  customerName: string;
  customerEmail: string | null;
}) {
  const router = useRouter();

  const [status, setStatus] = useState(initialStatus);
  const [paymentStatus, setPaymentStatus] =
    useState(initialPaymentStatus);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const [showClientForm, setShowClientForm] =
    useState(false);

  const [email, setEmail] = useState(
    customerEmail || ""
  );

  const [password, setPassword] = useState("");

  const [creatingClient, setCreatingClient] =
    useState(false);

  const [clientMessage, setClientMessage] =
    useState("");

  async function saveChanges() {
    setSaving(true);
    setSaved(false);
    setError("");

    try {
      const response = await fetch(
        `/api/admin/orders/${orderId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
            paymentStatus,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to update order"
        );
      }

      setSaved(true);
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  async function createClient() {
    setCreatingClient(true);
    setClientMessage("");
    setError("");

    try {
      if (!email || !password) {
        throw new Error(
          "Email and temporary password are required."
        );
      }

      const response = await fetch(
        "/api/admin/clients",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: customerName,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to create client."
        );
      }

      setClientMessage(
        `Client account created successfully for ${data.email}.`
      );

      setShowClientForm(false);
      setPassword("");

      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to create client."
      );
    } finally {
      setCreatingClient(false);
    }
  }

  return (
    <div className="space-y-6">

      {/* ORDER STATUS */}
      <div>
        <label className="mb-2 block text-xs uppercase tracking-wide text-gray-400">
          Order Status
        </label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="w-full rounded-xl border border-[#D9D2C6] bg-white px-4 py-3 text-sm outline-none focus:border-[#B08D57]"
        >
          {ORDER_STATUSES.map((item) => (
            <option key={item} value={item}>
              {item.replaceAll("_", " ")}
            </option>
          ))}
        </select>
      </div>

      {/* PAYMENT STATUS */}
      <div>
        <label className="mb-2 block text-xs uppercase tracking-wide text-gray-400">
          Payment Status
        </label>

        <select
          value={paymentStatus}
          onChange={(e) =>
            setPaymentStatus(e.target.value)
          }
          className="w-full rounded-xl border border-[#D9D2C6] bg-white px-4 py-3 text-sm outline-none focus:border-[#B08D57]"
        >
          {PAYMENT_STATUSES.map((item) => (
            <option key={item} value={item}>
              {item.replaceAll("_", " ")}
            </option>
          ))}
        </select>
      </div>

      {/* SAVE */}
      <button
        type="button"
        onClick={saveChanges}
        disabled={saving}
        className="w-full rounded-full bg-[#174A3B] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#B08D57] disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>

      {saved && (
        <p className="text-sm text-green-700">
          ✓ Order updated successfully.
        </p>
      )}

      {/* CREATE CLIENT */}
      <div className="border-t border-gray-100 pt-6">
        <h3 className="font-serif text-xl text-[#174A3B]">
          Client Account
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Create a couple login account from this order.
        </p>

        {!showClientForm ? (
          <button
            type="button"
            onClick={() =>
              setShowClientForm(true)
            }
            className="mt-4 w-full rounded-full border border-[#174A3B] px-5 py-3 text-sm font-medium text-[#174A3B] hover:bg-[#174A3B] hover:text-white"
          >
            + Create Client Account
          </button>
        ) : (
          <div className="mt-4 space-y-3 rounded-xl bg-[#FDFBF7] p-4">

            <div>
              <label className="mb-1 block text-xs uppercase tracking-wide text-gray-400">
                Client Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="customer@email.com"
                className="w-full rounded-xl border border-[#D9D2C6] px-4 py-3 text-sm"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs uppercase tracking-wide text-gray-400">
                Temporary Password
              </label>

              <input
                type="text"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Create temporary password"
                className="w-full rounded-xl border border-[#D9D2C6] px-4 py-3 text-sm"
              />
            </div>

            <button
              type="button"
              onClick={createClient}
              disabled={creatingClient}
              className="w-full rounded-full bg-[#174A3B] px-5 py-3 text-sm font-medium text-white hover:bg-[#B08D57] disabled:opacity-60"
            >
              {creatingClient
                ? "Creating Client..."
                : "Create Client"}
            </button>

            <button
              type="button"
              onClick={() =>
                setShowClientForm(false)
              }
              className="w-full rounded-full border px-5 py-3 text-sm"
            >
              Cancel
            </button>
          </div>
        )}

        {clientMessage && (
          <p className="mt-3 text-sm text-green-700">
            ✓ {clientMessage}
          </p>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}