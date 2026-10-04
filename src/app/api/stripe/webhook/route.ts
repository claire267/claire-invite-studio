// Stripe calls THIS endpoint directly (not the browser) when a payment
// succeeds or fails. This is the only trustworthy place to mark a
// Payment as "paid" — never trust the browser redirect alone, since a
// user could just navigate to the success URL without actually paying.
//
// Setup: in the Stripe Dashboard -> Developers -> Webhooks, add an
// endpoint pointing to https://yourdomain.com/api/stripe/webhook,
// subscribed to "checkout.session.completed". Copy the signing secret
// it gives you into STRIPE_WEBHOOK_SECRET in your .env.
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text(); // raw body — required for signature verification
  const signature = req.headers.get("stripe-signature");

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature!, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const paymentId = session.metadata?.paymentId;
    if (paymentId) {
      await prisma.payment.update({
        where: { id: paymentId },
        data: { status: "paid" },
      });
    }
  }

  if (event.type === "checkout.session.expired") {
    const session = event.data.object as Stripe.Checkout.Session;
    const paymentId = session.metadata?.paymentId;
    if (paymentId) {
      await prisma.payment.update({
        where: { id: paymentId },
        data: { status: "failed" },
      });
    }
  }

  return NextResponse.json({ received: true });
}
