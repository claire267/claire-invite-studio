"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";

const translations = {
  en: {
    language: "Language",
    home: "Home",
    invitations: "Invitations",
    pricing: "Pricing",
    faq: "FAQ",
    about: "About",
    contact: "Contact",

    eyebrow: "Start Your Invitation",
    title: "Tell us about your celebration.",
    subtitle:
      "Complete the form below and your details will be saved with Claire Invite Studio and sent directly to WhatsApp.",

    yourDetails: "Your Details",
    knowYou: "Let's get to know you",
    yourName: "Your Name",
    enterName: "Enter your name",
    phone: "Phone Number",
    phonePlaceholder: "+256...",

    invitation: "Invitation",
    chooseDesign: "Choose your design",
    invitationStyle: "Invitation Style",
    selectInvitation: "Select invitation",
    timeless: "Timeless Elegance",
    cultural: "Cultural Romance",
    modern: "Modern Celebration",

    package: "Package",
    selectPackage: "Select package",
    essential: "Essential",
    luxury: "Luxury",
    premium: "Premium Bespoke",

    celebration: "Celebration Details",
    eventDetails: "Tell us about your event",
    eventDate: "Event Date",
    guests: "Number of Guests",
    guestPlaceholder: "e.g. 100",
    venue: "Venue / Location",
    venuePlaceholder: "Enter venue or location",
    additional: "Additional Details",
    additionalPlaceholder:
      "Tell us anything else you would like included...",

    send: "Send Order on WhatsApp",
    sending: "Preparing your order...",
    sent: "Your order has been saved and WhatsApp is opening.",
    error: "Something went wrong. Please try again.",
    disclaimer:
      "Your order details are securely saved so Claire Invite Studio can manage your request and confirm it with you on WhatsApp.",

    footer: "© 2026 Claire Invite Studio. All rights reserved.",
  },

  rw: {
    language: "Ururimi",
    home: "Ahabanza",
    invitations: "Ubutumire",
    pricing: "Ibiciro",
    faq: "Ibibazo",
    about: "Twebwe",
    contact: "Twandikire",

    eyebrow: "Tangira Ubutumire Bwawe",
    title: "Tubwire ibyerekeye ibirori byawe.",
    subtitle:
      "Uzuza iyi fomu maze amakuru yawe abikwe muri Claire Invite Studio kandi yohererezwe kuri WhatsApp.",

    yourDetails: "Amakuru Yawe",
    knowYou: "Reka tukumenye",
    yourName: "Amazina Yawe",
    enterName: "Andika amazina yawe",
    phone: "Numero ya Telefoni",
    phonePlaceholder: "+256...",

    invitation: "Ubutumire",
    chooseDesign: "Hitamo igishushanyo cyawe",
    invitationStyle: "Ubwoko bw'Ubutumire",
    selectInvitation: "Hitamo ubutumire",
    timeless: "Timeless Elegance",
    cultural: "Cultural Romance",
    modern: "Modern Celebration",

    package: "Porogaramu",
    selectPackage: "Hitamo porogaramu",
    essential: "Essential",
    luxury: "Luxury",
    premium: "Premium Bespoke",

    celebration: "Amakuru y'Ibirori",
    eventDetails: "Tubwire ibyerekeye ibirori byawe",
    eventDate: "Itariki y'Ibirori",
    guests: "Umubare w'Abashyitsi",
    guestPlaceholder: "Urugero: 100",
    venue: "Aho Ibirori Bizabera",
    venuePlaceholder: "Andika aho ibirori bizabera",
    additional: "Andi Makuru",
    additionalPlaceholder:
      "Tubwire ibindi wifuza ko byongerwa...",

    send: "Ohereza kuri WhatsApp",
    sending: "Tegura order yawe...",
    sent: "Order yawe yabitswe kandi WhatsApp irafunguka.",
    error: "Hari ikibazo cyabaye. Ongera ugerageze.",
    disclaimer:
      "Amakuru ya order yawe abikwa neza kugira ngo Claire Invite Studio ibashe kuyakurikirana no kwemeza ubusabe bwawe kuri WhatsApp.",

    footer: "© 2026 Claire Invite Studio. Uburenganzira bwose burabitswe.",
  },

  lg: {
    language: "Olulimi",
    home: "Awaka",
    invitations: "Obuyita",
    pricing: "Ebibalo",
    faq: "Ebibuuzo",
    about: "Ebikwata ku ffe",
    contact: "Tukwatagane",

    eyebrow: "Tandika Obuyita Bwo",
    title: "Tubuulire ku mukolo gwo.",
    subtitle:
      "Jjuza foomu eno era ebikwata ku mukolo gwo bijja kuterekebwa mu Claire Invite Studio era bisindikibwe ku WhatsApp.",

    yourDetails: "Ebikwata Kuwe",
    knowYou: "Tukutegeere",
    yourName: "Erinnya Lyo",
    enterName: "Yingiza erinnya lyo",
    phone: "Namba ya Ssimu",
    phonePlaceholder: "+256...",

    invitation: "Obuyita",
    chooseDesign: "Londa dizayini yo",
    invitationStyle: "Ekika ky'Obuyita",
    selectInvitation: "Londa obuyita",
    timeless: "Timeless Elegance",
    cultural: "Cultural Romance",
    modern: "Modern Celebration",

    package: "Pakiti",
    selectPackage: "Londa pakiti",
    essential: "Essential",
    luxury: "Luxury",
    premium: "Premium Bespoke",

    celebration: "Ebikwata ku Mukolo",
    eventDetails: "Tubuulire ku mukolo gwo",
    eventDate: "Olunaku lw'Omukolo",
    guests: "Omuwendo gw'Abagenyi",
    guestPlaceholder: "Okugeza: 100",
    venue: "Ekifo / Awo Omukolo Gunaabeera",
    venuePlaceholder: "Yingiza ekifo",
    additional: "Ebisingawo",
    additionalPlaceholder:
      "Tubuulire ekirala ky'oyagala okuteekamu...",

    send: "Sindika Order ku WhatsApp",
    sending: "Order yo etegekebwa...",
    sent: "Order yo eterekeddwa era WhatsApp etandise okugguka.",
    error: "Waliwo ekizibu. Gezaako nate.",
    disclaimer:
      "Ebikwata ku order yo biterekebwa bulungi okusobola Claire Invite Studio okugoberera order yo n'okukakasa nayo ku WhatsApp.",

    footer: "© 2026 Claire Invite Studio. Obuyinza bwonna bukwekeddwa.",
  },

  sw: {
    language: "Lugha",
    home: "Nyumbani",
    invitations: "Mialiko",
    pricing: "Bei",
    faq: "Maswali",
    about: "Kuhusu",
    contact: "Wasiliana",

    eyebrow: "Anza Mwaliko Wako",
    title: "Tuambie kuhusu sherehe yako.",
    subtitle:
      "Jaza fomu hapa chini na maelezo yako yatahifadhiwa Claire Invite Studio na kutumwa moja kwa moja kupitia WhatsApp.",

    yourDetails: "Maelezo Yako",
    knowYou: "Tukufahamu zaidi",
    yourName: "Jina Lako",
    enterName: "Weka jina lako",
    phone: "Namba ya Simu",
    phonePlaceholder: "+256...",

    invitation: "Mwaliko",
    chooseDesign: "Chagua muundo wako",
    invitationStyle: "Aina ya Mwaliko",
    selectInvitation: "Chagua mwaliko",
    timeless: "Timeless Elegance",
    cultural: "Cultural Romance",
    modern: "Modern Celebration",

    package: "Kifurushi",
    selectPackage: "Chagua kifurushi",
    essential: "Essential",
    luxury: "Luxury",
    premium: "Premium Bespoke",

    celebration: "Maelezo ya Sherehe",
    eventDetails: "Tuambie kuhusu tukio lako",
    eventDate: "Tarehe ya Tukio",
    guests: "Idadi ya Wageni",
    guestPlaceholder: "Mfano: 100",
    venue: "Ukumbi / Mahali",
    venuePlaceholder: "Weka mahali pa tukio",
    additional: "Maelezo ya Ziada",
    additionalPlaceholder:
      "Tuambie jambo lingine ungependa lijumuishwe...",

    send: "Tuma Oda kupitia WhatsApp",
    sending: "Inaandaa oda yako...",
    sent: "Oda yako imehifadhiwa na WhatsApp inafunguliwa.",
    error: "Kuna tatizo. Tafadhali jaribu tena.",
    disclaimer:
      "Maelezo ya oda yako yatahifadhiwa kwa usalama ili Claire Invite Studio iweze kuifuatilia na kuthibitisha ombi lako kupitia WhatsApp.",

    footer: "© 2026 Claire Invite Studio. Haki zote zimehifadhiwa.",
  },

  fr: {
    language: "Langue",
    home: "Accueil",
    invitations: "Invitations",
    pricing: "Tarifs",
    faq: "FAQ",
    about: "À propos",
    contact: "Contact",

    eyebrow: "Commencez Votre Invitation",
    title: "Parlez-nous de votre célébration.",
    subtitle:
      "Remplissez le formulaire ci-dessous. Vos informations seront enregistrées chez Claire Invite Studio et envoyées directement sur WhatsApp.",

    yourDetails: "Vos Informations",
    knowYou: "Faisons connaissance",
    yourName: "Votre Nom",
    enterName: "Entrez votre nom",
    phone: "Numéro de Téléphone",
    phonePlaceholder: "+256...",

    invitation: "Invitation",
    chooseDesign: "Choisissez votre design",
    invitationStyle: "Style d'Invitation",
    selectInvitation: "Sélectionnez une invitation",
    timeless: "Timeless Elegance",
    cultural: "Cultural Romance",
    modern: "Modern Celebration",

    package: "Forfait",
    selectPackage: "Sélectionnez un forfait",
    essential: "Essential",
    luxury: "Luxury",
    premium: "Premium Bespoke",

    celebration: "Détails de la Célébration",
    eventDetails: "Parlez-nous de votre événement",
    eventDate: "Date de l'Événement",
    guests: "Nombre d'Invités",
    guestPlaceholder: "Ex. 100",
    venue: "Lieu / Emplacement",
    venuePlaceholder: "Entrez le lieu de l'événement",
    additional: "Informations Supplémentaires",
    additionalPlaceholder:
      "Dites-nous ce que vous souhaitez ajouter...",

    send: "Envoyer la Commande sur WhatsApp",
    sending: "Préparation de votre commande...",
    sent: "Votre commande a été enregistrée et WhatsApp s'ouvre.",
    error: "Une erreur s'est produite. Veuillez réessayer.",
    disclaimer:
      "Les détails de votre commande sont enregistrés en toute sécurité afin que Claire Invite Studio puisse suivre votre demande et la confirmer sur WhatsApp.",

    footer: "© 2026 Claire Invite Studio. Tous droits réservés.",
  },
};

type Language = keyof typeof translations;

export default function OrderPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [selectedDesign, setSelectedDesign] = useState("");

  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const design = params.get("design");

    if (
      design === "Timeless Elegance" ||
      design === "Cultural Romance" ||
      design === "Modern Celebration"
    ) {
      setSelectedDesign(design);
    }
  }, []);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSending(true);
    setError("");
    setSent(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const invitation = String(formData.get("invitation") || "");
    const packageName = String(formData.get("package") || "");
    const eventDate = String(formData.get("eventDate") || "");
    const venue = String(formData.get("venue") || "");
    const guests = String(formData.get("guests") || "");
    const message = String(formData.get("message") || "");

    const whatsappMessage = `
Hello Claire Invite Studio! I would like to order a digital invitation.

Name: ${name}
Phone: ${phone}
Invitation: ${invitation}
Package: ${packageName}
Event Date: ${eventDate}
Venue: ${venue}
Number of Guests: ${guests}

Additional Details:
${message}
    `.trim();

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          invitation,
          packageName,
          eventDate,
          venue,
          guests: guests ? Number(guests) : null,
          message,
          language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Failed to create order"
        );
      }

      const whatsappUrl = `https://wa.me/256781095271?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      setSent(true);

      window.open(whatsappUrl, "_blank");
    } catch (err) {
      console.error("Order submission error:", err);
      setError(t.error);
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#174A3B]">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-wide"
        >
          Claire Invite Studio
        </Link>

        <div className="flex items-center gap-6 text-sm">

          <Link href="/" className="hover:text-[#B08D57]">
            {t.home}
          </Link>

          <Link
            href="/invitations"
            className="hover:text-[#B08D57]"
          >
            {t.invitations}
          </Link>

          <Link
            href="/pricing"
            className="hover:text-[#B08D57]"
          >
            {t.pricing}
          </Link>

          <Link
            href="/faq"
            className="hover:text-[#B08D57]"
          >
            {t.faq}
          </Link>

          <Link
            href="/about"
            className="hover:text-[#B08D57]"
          >
            {t.about}
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-[#174A3B] px-5 py-2.5 text-white hover:bg-[#B08D57]"
          >
            {t.contact}
          </Link>

          {/* Language Selector */}
          <div className="flex items-center gap-2">

            <span className="text-xs text-[#66756F]">
              {t.language}
            </span>

            <select
              value={language}
              onChange={(event) =>
                setLanguage(event.target.value as Language)
              }
              className="rounded-full border border-[#D9D2C6] bg-white px-3 py-2 text-xs outline-none focus:border-[#B08D57]"
              aria-label={t.language}
            >
              <option value="en">🇬🇧 English</option>
              <option value="rw">🇷🇼 Kinyarwanda</option>
              <option value="lg">🇺🇬 Luganda</option>
              <option value="sw">🇰🇪 Kiswahili</option>
              <option value="fr">🇫🇷 Français</option>
            </select>

          </div>

        </div>
      </nav>

      {/* Header */}
      <section className="px-6 pb-12 pt-16 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
          {t.eyebrow}
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-semibold md:text-6xl">
          {t.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66756F]">
          {t.subtitle}
        </p>

      </section>

      {/* Order Form */}
      <section className="mx-auto max-w-3xl px-6 pb-24">

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-[#E5DED2] bg-white p-7 shadow-sm md:p-10"
        >

          {/* Personal Details */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
              {t.yourDetails}
            </p>

            <h2 className="mt-2 font-serif text-3xl">
              {t.knowYou}
            </h2>

          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2">

            <div>
              <label className="text-sm font-medium">
                {t.yourName}
              </label>

              <input
                name="name"
                required
                type="text"
                placeholder={t.enterName}
                className="mt-2 w-full rounded-xl border border-[#D9D2C6] bg-[#FDFBF7] px-4 py-3 outline-none transition focus:border-[#B08D57]"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                {t.phone}
              </label>

              <input
                name="phone"
                required
                type="tel"
                placeholder={t.phonePlaceholder}
                className="mt-2 w-full rounded-xl border border-[#D9D2C6] bg-[#FDFBF7] px-4 py-3 outline-none transition focus:border-[#B08D57]"
              />
            </div>

          </div>

          {/* Invitation */}
          <div className="mt-12">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
              {t.invitation}
            </p>

            <h2 className="mt-2 font-serif text-3xl">
              {t.chooseDesign}
            </h2>

          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2">

            <div>
              <label className="text-sm font-medium">
                {t.invitationStyle}
              </label>

              <select
                name="invitation"
                required
                value={selectedDesign}
                onChange={(event) =>
                  setSelectedDesign(event.target.value)
                }
                className="mt-2 w-full rounded-xl border border-[#D9D2C6] bg-[#FDFBF7] px-4 py-3 outline-none focus:border-[#B08D57]"
              >
                <option value="">
                  {t.selectInvitation}
                </option>

                <option value="Timeless Elegance">
                  {t.timeless}
                </option>

                <option value="Cultural Romance">
                  {t.cultural}
                </option>

                <option value="Modern Celebration">
                  {t.modern}
                </option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">
                {t.package}
              </label>

              <select
                name="package"
                required
                className="mt-2 w-full rounded-xl border border-[#D9D2C6] bg-[#FDFBF7] px-4 py-3 outline-none focus:border-[#B08D57]"
              >
                <option value="">
                  {t.selectPackage}
                </option>

                <option value="Essential">
                  {t.essential}
                </option>

                <option value="Luxury">
                  {t.luxury}
                </option>

                <option value="Premium Bespoke">
                  {t.premium}
                </option>
              </select>
            </div>

          </div>

          {/* Event Details */}
          <div className="mt-12">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
              {t.celebration}
            </p>

            <h2 className="mt-2 font-serif text-3xl">
              {t.eventDetails}
            </h2>

          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2">

            <div>
              <label className="text-sm font-medium">
                {t.eventDate}
              </label>

              <input
                name="eventDate"
                required
                type="date"
                className="mt-2 w-full rounded-xl border border-[#D9D2C6] bg-[#FDFBF7] px-4 py-3 outline-none focus:border-[#B08D57]"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                {t.guests}
              </label>

              <input
                name="guests"
                type="number"
                min="1"
                placeholder={t.guestPlaceholder}
                className="mt-2 w-full rounded-xl border border-[#D9D2C6] bg-[#FDFBF7] px-4 py-3 outline-none focus:border-[#B08D57]"
              />
            </div>

          </div>

          <div className="mt-6">

            <label className="text-sm font-medium">
              {t.venue}
            </label>

            <input
              name="venue"
              type="text"
              placeholder={t.venuePlaceholder}
              className="mt-2 w-full rounded-xl border border-[#D9D2C6] bg-[#FDFBF7] px-4 py-3 outline-none focus:border-[#B08D57]"
            />

          </div>

          <div className="mt-6">

            <label className="text-sm font-medium">
              {t.additional}
            </label>

            <textarea
              name="message"
              rows={5}
              placeholder={t.additionalPlaceholder}
              className="mt-2 w-full rounded-xl border border-[#D9D2C6] bg-[#FDFBF7] px-4 py-3 outline-none focus:border-[#B08D57]"
            />

          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={sending}
            className="mt-8 w-full rounded-full bg-[#174A3B] px-8 py-4 font-medium text-white transition hover:bg-[#B08D57] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? t.sending : t.send}
          </button>

          {sent && (
            <p className="mt-5 text-center text-sm text-[#66756F]">
              {t.sent}
            </p>
          )}

          {error && (
            <p className="mt-5 text-center text-sm text-red-600">
              {error}
            </p>
          )}

          <p className="mt-5 text-center text-xs leading-5 text-[#66756F]">
            {t.disclaimer}
          </p>

        </form>

      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DED2] px-6 py-8 text-center text-sm text-[#66756F]">
        {t.footer}
      </footer>

    </main>
  );
}