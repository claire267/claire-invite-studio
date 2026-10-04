// Landing page after a successful Stripe payment. The webhook (not
// this page) is what actually confirms payment in the database — this
// page just shows a friendly confirmation and looks up the current
// status to display it accurately.
import { prisma } from "@/lib/prisma";

export default async function PurchaseSuccessPage({ searchParams }: { searchParams: { payment_id?: string } }) {
  const payment = searchParams.payment_id
    ? await prisma.payment.findUnique({ where: { id: searchParams.payment_id } })
    : null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-ivory px-6 text-center">
      <h1 className="font-serif text-4xl text-emerald mb-4">Thank you! 🎉</h1>
      {payment?.status === "paid" ? (
        <p className="opacity-70">Your payment has been confirmed. We'll be in touch to get started.</p>
      ) : (
        <p className="opacity-70">We're confirming your payment now — this usually takes just a few seconds.</p>
      )}
    </main>
  );
}
