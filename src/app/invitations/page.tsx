"use client";

import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";

type Language = "en" | "rw" | "lg" | "sw" | "fr";

const translations = {
  en: {
    home: "Home",
    invitations: "Invitations",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",

    collection: "Our Collection",
    title: "Invitations designed for your moment",
    intro:
      "Choose a style that reflects your story. Every invitation is designed to feel elegant, personal, and unforgettable.",

    wedding: "Wedding",
    weddingTitle: "Timeless Elegance",
    weddingText:
      "A luxurious invitation for couples who want their love story to begin with elegance.",

    introduction: "Introduction",
    introductionTitle: "Cultural Romance",
    introductionText:
      "A sophisticated design for traditional introductions and family celebrations.",

    celebration: "Celebration",
    celebrationTitle: "Modern Celebration",
    celebrationText:
      "Perfect for birthdays, bridal showers, anniversaries and unforgettable celebrations.",

    order: "Order This Invitation",

    previewWedding: "The Wedding",
    previewIntroduction: "Our Families",
    previewCelebration: "You Are Invited",
    previewCelebrate: "Celebrate",
    previewLove: "Love • Joy • Memories",
    previewSpecial: "Your Special Day",
    previewTogether:
      "Together we celebrate love, family and tradition.",

    ctaTitle: "Ready to create yours?",
    ctaText:
      "Tell us about your celebration and let Claire Invite Studio create an invitation your guests will remember.",
    ctaButton: "Start Your Invitation",

    footer: "© 2026 Claire Invite Studio. All rights reserved.",
  },

  rw: {
    home: "Ahabanza",
    invitations: "Ubutumire",
    pricing: "Ibiciro",
    about: "Abo turi bo",
    contact: "Twandikire",

    collection: "Ibyo Dufite",
    title: "Ubutumire bwateguwe ku mwanya wawe wihariye",
    intro:
      "Hitamo uburyo bujyanye n'inkuru yawe. Buri butumire butegurwa kugira ngo bube bwiza, bwihariye kandi butazibagirana.",

    wedding: "Ubukwe",
    weddingTitle: "Elegance Itajya Ishira",
    weddingText:
      "Ubutumire buhebuje ku bakundana bashaka gutangiza inkuru yabo y'urukundo mu buryo bwiza.",

    introduction: "Gusaba no Gukwa",
    introductionTitle: "Urukundo n'Umuco",
    introductionText:
      "Igishushanyo cyiza gikwiriye imihango gakondo, imiryango n'ibirori byihariye.",

    celebration: "Ibirori",
    celebrationTitle: "Ibirori Bigezweho",
    celebrationText:
      "Bikwiriye iminsi y'amavuko, bridal shower, anniversaries n'indi minsi y'ingenzi.",

    order: "Tegeka Ubu Butumire",

    previewWedding: "Ubukwe",
    previewIntroduction: "Imiryango Yacu",
    previewCelebration: "Watumiwe",
    previewCelebrate: "Twizihize",
    previewLove: "Urukundo • Umunezero • Kwibuka",
    previewSpecial: "Umunsi Wawe Wihariye",
    previewTogether:
      "Twese twishimira urukundo, umuryango n'umuco.",

    ctaTitle: "Witeguye gukora ubwawe?",
    ctaText:
      "Tubwire ibijyanye n'ibirori byawe, maze Claire Invite Studio ikore ubutumire abashyitsi bawe bazibuka.",
    ctaButton: "Tangira Ubutumire Bwawe",

    footer: "© 2026 Claire Invite Studio. Uburenganzira bwose burabitswe.",
  },

  lg: {
    home: "Awaka",
    invitations: "Bubaka",
    pricing: "Bbeeyi",
    about: "Ebikwata ku Ffe",
    contact: "Tukwatagane",

    collection: "Bubaka Bwaffe",
    title: "Bubaka obukolebwa ku mukolo gwo",
    intro:
      "Londa style ekwatagana n'olugero lwo. Buli bubaka bukolebwa nga bulungi, bwa njawulo era obujjukirwa.",

    wedding: "Mbaga",
    weddingTitle: "Timeless Elegance",
    weddingText:
      "Bubaka obw'omulembe eri abafumbo abaagala okutandika olugero lwabwe olw'okwagala mu ngeri ennungi.",

    introduction: "Introduction",
    introductionTitle: "Cultural Romance",
    introductionText:
      "Design ennungi eri introduction ez'obuwangwa n'emikolo gy'amaka.",

    celebration: "Mikolo",
    celebrationTitle: "Modern Celebration",
    celebrationText:
      "Bubaka obulungi ku mazaalibwa, bridal showers, anniversaries n'emikolo emirala.",

    order: "Tegeka Bubaka Buno",

    previewWedding: "Mbaga",
    previewIntroduction: "Amaka Gaffe",
    previewCelebration: "Okiwuliddwa",
    previewCelebrate: "Tukuzze",
    previewLove: "Okwagala • Essanyu • Ebiseera",
    previewSpecial: "Olunaku Lwo Olw'enjawulo",
    previewTogether:
      "Tujaguza awamu okwagala, amaka n'obuwangwa.",

    ctaTitle: "Otegefu okukola obubwo?",
    ctaText:
      "Tubulire ku mukolo gwo era Claire Invite Studio ekole bubaka abagenyi bo bajja kujjukira.",
    ctaButton: "Tandika Bubaka Bwo",

    footer: "© 2026 Claire Invite Studio. Obuyinza bwonna busigadde.",
  },

  sw: {
    home: "Nyumbani",
    invitations: "Mialiko",
    pricing: "Bei",
    about: "Kuhusu Sisi",
    contact: "Wasiliana Nasi",

    collection: "Mkusanyiko Wetu",
    title: "Mialiko iliyoundwa kwa ajili ya wakati wako",
    intro:
      "Chagua mtindo unaoendana na hadithi yako. Kila mwaliko umeundwa kuwa wa kifahari, wa kipekee na usiosahaulika.",

    wedding: "Harusi",
    weddingTitle: "Elegance Isiyopitwa na Wakati",
    weddingText:
      "Mwaliko wa kifahari kwa wanandoa wanaotaka kuanza hadithi yao ya upendo kwa uzuri.",

    introduction: "Utambulisho",
    introductionTitle: "Romance ya Utamaduni",
    introductionText:
      "Muundo wa kifahari kwa utambulisho wa jadi na sherehe za familia.",

    celebration: "Sherehe",
    celebrationTitle: "Sherehe ya Kisasa",
    celebrationText:
      "Unafaa kwa siku za kuzaliwa, bridal shower, anniversaries na sherehe zisizosahaulika.",

    order: "Agiza Mwaliko Huu",

    previewWedding: "Harusi",
    previewIntroduction: "Familia Zetu",
    previewCelebration: "Umealikwa",
    previewCelebrate: "Sherehekea",
    previewLove: "Upendo • Furaha • Kumbukumbu",
    previewSpecial: "Siku Yako Maalum",
    previewTogether:
      "Pamoja tunaadhimisha upendo, familia na mila.",

    ctaTitle: "Uko tayari kuunda wako?",
    ctaText:
      "Tuambie kuhusu sherehe yako na Claire Invite Studio itengeneze mwaliko ambao wageni wako watakumbuka.",
    ctaButton: "Anza Mwaliko Wako",

    footer: "© 2026 Claire Invite Studio. Haki zote zimehifadhiwa.",
  },

  fr: {
    home: "Accueil",
    invitations: "Invitations",
    pricing: "Tarifs",
    about: "À propos",
    contact: "Contact",

    collection: "Notre Collection",
    title: "Des invitations conçues pour votre moment",
    intro:
      "Choisissez un style qui reflète votre histoire. Chaque invitation est conçue pour être élégante, personnelle et inoubliable.",

    wedding: "Mariage",
    weddingTitle: "Élégance Intemporelle",
    weddingText:
      "Une invitation luxueuse pour les couples qui souhaitent commencer leur histoire d'amour avec élégance.",

    introduction: "Présentation",
    introductionTitle: "Romance Culturelle",
    introductionText:
      "Une création sophistiquée pour les présentations traditionnelles et les célébrations familiales.",

    celebration: "Célébration",
    celebrationTitle: "Célébration Moderne",
    celebrationText:
      "Parfaite pour les anniversaires, bridal showers, anniversaires de mariage et autres célébrations.",

    order: "Commander Cette Invitation",

    previewWedding: "Le Mariage",
    previewIntroduction: "Nos Familles",
    previewCelebration: "Vous Êtes Invité",
    previewCelebrate: "Célébrons",
    previewLove: "Amour • Joie • Souvenirs",
    previewSpecial: "Votre Jour Spécial",
    previewTogether:
      "Ensemble, nous célébrons l'amour, la famille et les traditions.",

    ctaTitle: "Prêt à créer la vôtre ?",
    ctaText:
      "Parlez-nous de votre célébration et Claire Invite Studio créera une invitation dont vos invités se souviendront.",
    ctaButton: "Commencer Votre Invitation",

    footer: "© 2026 Claire Invite Studio. Tous droits réservés.",
  },
};

export default function InvitationsPage() {
  const { language, setLanguage } = useLanguage();

  const t = translations[language];

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

        <div className="flex flex-wrap items-center justify-end gap-4 text-sm">
          <Link href="/" className="hover:text-[#B08D57]">
            {t.home}
          </Link>

          <Link
            href="/invitations"
            className="font-semibold text-[#B08D57]"
          >
            {t.invitations}
          </Link>

          <Link href="/pricing" className="hover:text-[#B08D57]">
            {t.pricing}
          </Link>

          <Link href="/about" className="hover:text-[#B08D57]">
            {t.about}
          </Link>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value as Language)
            }
            className="rounded-full border border-[#D9C7A3] bg-[#FDFBF7] px-3 py-2 text-sm text-[#174A3B] outline-none focus:ring-2 focus:ring-[#B08D57]"
            aria-label="Select language"
          >
            <option value="en">🇬🇧 English</option>
            <option value="rw">🇷🇼 Kinyarwanda</option>
            <option value="lg">🇺🇬 Luganda</option>
            <option value="sw">🇰🇪 Kiswahili</option>
            <option value="fr">🇫🇷 Français</option>
          </select>

          <Link
            href="/contact"
            className="rounded-full bg-[#174A3B] px-5 py-2.5 text-white transition hover:bg-[#B08D57]"
          >
            {t.contact}
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
          {t.collection}
        </p>

        <h1 className="mt-4 font-serif text-5xl font-semibold md:text-6xl">
          {t.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66756F]">
          {t.intro}
        </p>
      </section>

      {/* Collection */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Wedding */}
          <div className="overflow-hidden rounded-[2rem] border border-[#E5DED2] bg-white shadow-sm">
            <div className="flex h-80 items-center justify-center bg-[#FDFBF7] p-8">
              <div className="w-full max-w-[220px] rounded-xl border border-[#D9C7A3] bg-white p-6 text-center shadow-lg">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#B08D57]">
                  {t.previewWedding}
                </p>

                <h2 className="mt-8 font-serif text-3xl">
                  Timeless
                </h2>

                <p className="my-2 font-serif text-lg italic text-[#B08D57]">
                  Elegance
                </p>

                <div className="mx-auto mt-6 h-px w-12 bg-[#D9C7A3]" />

                <p className="mt-6 text-[9px] uppercase tracking-widest">
                  {t.previewSpecial}
                </p>
              </div>
            </div>

            <div className="p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57]">
                {t.wedding}
              </p>

              <h2 className="mt-2 font-serif text-2xl">
                {t.weddingTitle}
              </h2>

              <p className="mt-3 leading-7 text-[#66756F]">
                {t.weddingText}
              </p>

              <Link
                href="/order?design=Timeless%20Elegance"
                className="mt-6 inline-block rounded-full bg-[#174A3B] px-6 py-3 text-sm text-white transition hover:bg-[#B08D57]"
              >
                {t.order}
              </Link>
            </div>
          </div>

          {/* Introduction */}
          <div className="overflow-hidden rounded-[2rem] border border-[#E5DED2] bg-white shadow-sm">
            <div className="flex h-80 items-center justify-center bg-[#F4F1E9] p-8">
              <div className="w-full max-w-[220px] rounded-xl border border-[#B08D57] bg-[#FFFDF8] p-6 text-center shadow-lg">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#B08D57]">
                  {t.previewIntroduction}
                </p>

                <div className="my-6 h-px bg-[#D9C7A3]" />

                <h2 className="font-serif text-3xl">
                  Cultural
                </h2>

                <p className="mt-2 font-serif text-2xl text-[#B08D57]">
                  Romance
                </p>

                <p className="mt-4 text-xs leading-5 text-[#66756F]">
                  {t.previewTogether}
                </p>
              </div>
            </div>

            <div className="p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57]">
                {t.introduction}
              </p>

              <h2 className="mt-2 font-serif text-2xl">
                {t.introductionTitle}
              </h2>

              <p className="mt-3 leading-7 text-[#66756F]">
                {t.introductionText}
              </p>

              <Link
                href="/order?design=Cultural%20Romance"
                className="mt-6 inline-block rounded-full bg-[#174A3B] px-6 py-3 text-sm text-white transition hover:bg-[#B08D57]"
              >
                {t.order}
              </Link>
            </div>
          </div>

          {/* Celebration */}
          <div className="overflow-hidden rounded-[2rem] border border-[#E5DED2] bg-white shadow-sm">
            <div className="flex h-80 items-center justify-center bg-[#F9F5F0] p-8">
              <div className="w-full max-w-[220px] rounded-xl border border-[#D9C7A3] bg-white p-6 text-center shadow-lg">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#B08D57]">
                  {t.previewCelebration}
                </p>

                <h2 className="mt-8 font-serif text-3xl">
                  {t.previewCelebrate}
                </h2>

                <p className="mt-4 text-xs leading-5 text-[#66756F]">
                  {t.previewLove}
                </p>

                <div className="my-6 h-px bg-[#D9C7A3]" />

                <p className="font-serif text-lg">
                  {t.previewSpecial}
                </p>
              </div>
            </div>

            <div className="p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57]">
                {t.celebration}
              </p>

              <h2 className="mt-2 font-serif text-2xl">
                {t.celebrationTitle}
              </h2>

              <p className="mt-3 leading-7 text-[#66756F]">
                {t.celebrationText}
              </p>

              <Link
                href="/order?design=Modern%20Celebration"
                className="mt-6 inline-block rounded-full bg-[#174A3B] px-6 py-3 text-sm text-white transition hover:bg-[#B08D57]"
              >
                {t.order}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#174A3B] px-6 py-20 text-center text-white">
        <h2 className="font-serif text-4xl md:text-5xl">
          {t.ctaTitle}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
          {t.ctaText}
        </p>

        <Link
          href="/order"
          className="mt-8 inline-block rounded-full bg-[#D9C7A3] px-8 py-3.5 font-medium text-[#174A3B] transition hover:bg-white"
        >
          {t.ctaButton}
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DED2] px-6 py-8 text-center text-sm text-[#66756F]">
        {t.footer}
      </footer>
    </main>
  );
}