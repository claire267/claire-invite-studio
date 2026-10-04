// Shared Stripe client. Uses the SECRET key — never expose this in
// browser code, only use it in API routes (server-side).
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

// The three packages you sell, and their prices in cents.
// Keep this as the single source of truth so the price shown to the
// customer always matches what Stripe actually charges.
export const PACKAGES = {
  save_the_date: { label: "Save the Date", amountCents: 18000 },
  invitation: { label: "Invitation Suite", amountCents: 42000 },
  thank_you: { label: "Thank-You", amountCents: 15000 },
} as const;

export type PackageKey = keyof typeof PACKAGES;
