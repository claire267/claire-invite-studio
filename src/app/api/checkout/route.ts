// Creates a Stripe Checkout Session for a wedding package.
// Called from the purchase page when someone clicks "Pay now".
//
// Flow:
//   1. Look up (or require) the wedding this payment is for
//   2. Create a `Payment` row with status "pending"
//   3. Create a Stripe Checkout Session, tagging it with that Payment's id
//   4. Return the Checkout URL — the browser redirects the client to Stripe
//   5. Stripe redirects back to /purchase/success (or cancel) after payment
//   6. The webhook (separate route) confirms payment and flips status to "paid"
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stripe, PACKAGES, PackageKey } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const { weddingId, packageKey } = await req.json();

  if (!weddingId || !packageKey || !(packageKey in PACKAGES)) {
    return NextResponse.json({ error: "weddingId and a valid packageKey are required" }, { status: 400 });
  }

  const wedding = await prisma.wedding.findUnique({ where: { id: weddingId } });
  if (!wedding) return NextResponse.json({ error: "Wedding not found" }, { status: 404 });

  const pkg = PACKAGES[packageKey as PackageKey];

  // Create the Payment row FIRST (status: pending) so we have something
  // to update once Stripe confirms the charge via webhook.
  const payment = await prisma.payment.create({
    data: {
      weddingId,
      amountCents: pkg.amountCents,
      package: packageKey,
      status: "pending",
    },
  });

  const baseUrl = process.env.NEXTAUTH_URL ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${pkg.label} — ${wedding.partner1Name} & ${wedding.partner2Name}`,
          },
          unit_amount: pkg.amountCents,
        },
        quantity: 1,
      },
    ],
    // Store our own Payment id so the webhook can find and update this
    // exact record when Stripe confirms the charge.
    metadata: { paymentId: payment.id, weddingId, packageKey },
    success_url: `${baseUrl}/purchase/success?payment_id=${payment.id}`,
    cancel_url: `${baseUrl}/purchase?weddingId=${weddingId}`,
  });

  // Save Stripe's session id on our record so we can look it up later if needed
  await prisma.payment.update({
    where: { id: payment.id },
    data: { stripeSessionId: session.id },
  });

  return NextResponse.json({ url: session.url });
}
