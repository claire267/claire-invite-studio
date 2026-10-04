"use client";

export default function WhatsAppButton() {
  const phoneNumber = "256781095271";

  const message = encodeURIComponent(
    "Hello Claire Invite Studio! I would like to create a beautiful digital invitation."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Claire Invite Studio on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 font-medium text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
    >
      <span className="text-xl">💬</span>

      <span className="hidden sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}