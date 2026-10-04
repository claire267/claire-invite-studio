"use client";

import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";

type Language = "en" | "rw" | "lg" | "sw" | "fr";

const translations = {
  en: {
    home: "Home",
    invitations: "Invitations",
    pricing: "Pricing",
    faq: "FAQ",
    about: "About",
    contact: "Contact",
    eyebrow: "Simple & Elegant",
    title: "Choose the experience that fits your celebration.",
    intro:
      "Every Claire Invite Studio invitation is designed to make your special moment feel beautiful, personal and unforgettable.",
    essential: "Essential",
    digital: "Digital Invitation",
    essentialText:
      "A beautiful digital invitation for customers who want something elegant and simple.",
    essentialFeatures: [
      "Choose from our invitation designs",
      "Personalized names and event details",
      "Digital invitation",
      "WhatsApp delivery",
      "One revision",
    ],
    chooseEssential: "Choose Essential",
    luxury: "Luxury",
    signature: "Signature Invitation",
    luxuryText:
      "A more refined invitation experience for weddings, introductions and important celebrations.",
    popular: "Most Popular",
    luxuryFeatures: [
      "Premium invitation design",
      "Full personalization",
      "Custom wording",
      "RSVP information",
      "Up to three revisions",
      "WhatsApp delivery",
    ],
    chooseLuxury: "Choose Luxury",
    premium: "Premium",
    bespoke: "Bespoke Experience",
    premiumText:
      "A fully customized invitation created around your personal story and celebration.",
    premiumFeatures: [
      "Bespoke invitation design",
      "Custom colors and typography",
      "Personalized wording",
      "Photo integration",
      "Multiple revisions",
      "Priority service",
    ],
    choosePremium: "Choose Premium",
    howEyebrow: "How It Works",
    howTitle: "Your invitation in four simple steps.",
    choose: "Choose",
    chooseText: "Select your favorite invitation design or package.",
    personalize: "Personalize",
    personalizeText:
      "Send us your names, date, venue and celebration details.",
    approve: "Approve",
    approveText:
      "We prepare your invitation and make the requested revisions.",
    celebrate: "Celebrate",
    celebrateText:
      "Receive your finished digital invitation and share it with your guests.",
    ctaTitle: "Ready to create something beautiful?",
    ctaText:
      "Choose a package and let Claire Invite Studio bring your celebration to life.",
    startOrder: "Start Your Order",
    footer: "© 2026 Claire Invite Studio. All rights reserved.",
  },

  rw: {
    home: "Ahabanza",
    invitations: "Ubutumire",
    pricing: "Ibiciro",
    faq: "Ibibazo",
    about: "Abo turi bo",
    contact: "Twandikire",
    eyebrow: "Byoroshye kandi Byiza",
    title: "Hitamo serivisi ijyanye n'ibirori byawe.",
    intro:
      "Buri butumire bwa Claire Invite Studio butegurwa kugira ngo umunsi wawe wihariye ube mwiza, wihariye kandi utazibagirana.",
    essential: "Essential",
    digital: "Ubutumire bwa Digital",
    essentialText:
      "Ubutumire bwiza kandi bworoshye ku bashaka ikintu cyiza kandi cy'umwimerere.",
    essentialFeatures: [
      "Hitamo mu butumire dufite",
      "Amazina n'amakuru y'umuhango",
      "Ubutumire bwa digital",
      "Koherezwa kuri WhatsApp",
      "Guhindura inshuro imwe",
    ],
    chooseEssential: "Hitamo Essential",
    luxury: "Luxury",
    signature: "Ubutumire bwa Signature",
    luxuryText:
      "Serivisi ihanitse ku bukwe, gusaba no gukwa ndetse n'ibirori by'ingenzi.",
    popular: "Icyamamare",
    luxuryFeatures: [
      "Igishushanyo cyihariye",
      "Gutunganya amakuru yose",
      "Amagambo yihariye",
      "Amakuru ya RSVP",
      "Guhindura inshuro eshatu",
      "Koherezwa kuri WhatsApp",
    ],
    chooseLuxury: "Hitamo Luxury",
    premium: "Premium",
    bespoke: "Ubutumire Bwihariye",
    premiumText:
      "Ubutumire bukorwa hashingiwe ku nkuru yawe bwite n'ibirori byawe.",
    premiumFeatures: [
      "Igishushanyo cyihariye",
      "Amabara n'imyandikire wihitiyemo",
      "Amagambo yihariye",
      "Gushyiramo amafoto",
      "Guhindura inshuro nyinshi",
      "Serivisi yihuse",
    ],
    choosePremium: "Hitamo Premium",
    howEyebrow: "Uko Bikora",
    howTitle: "Ubutumire bwawe mu ntambwe enye.",
    choose: "Hitamo",
    chooseText: "Hitamo igishushanyo cyangwa package ukunda.",
    personalize: "Bikore Byihariye",
    personalizeText:
      "Twoherereze amazina, itariki, ahazabera umuhango n'andi makuru.",
    approve: "Emeza",
    approveText:
      "Dutegura ubutumire bwawe kandi tugakora impinduka wasabye.",
    celebrate: "Izihize",
    celebrateText:
      "Akira ubutumire bwawe bwuzuye kandi ubusangize abashyitsi.",
    ctaTitle: "Witeguye gukora ikintu cyiza?",
    ctaText:
      "Hitamo package, Claire Invite Studio izafasha gutuma ibirori byawe biba byiza.",
    startOrder: "Tangira Gutumiza",
    footer: "© 2026 Claire Invite Studio. Uburenganzira bwose burabitswe.",
  },

  lg: {
    home: "Awaka",
    invitations: "Bubaka",
    pricing: "Bbeeyi",
    faq: "FAQ",
    about: "Ebikwata ku Ffe",
    contact: "Tukwatagane",
    eyebrow: "Kyangu era Kirungi",
    title: "Londa obuweereza obukwatagana n'omukolo gwo.",
    intro:
      "Buli bubaka bwa Claire Invite Studio bukolebwa okufuula olunaku lwo olw'enjawulo olulungi, olw'obuntu era olujjukirwa.",
    essential: "Essential",
    digital: "Bubaka bwa Digital",
    essentialText:
      "Bubaka obulungi eri abantu abaagala ekintu eky'ekitiibwa era ekyangu.",
    essentialFeatures: [
      "Londa mu bubaka bwaffe",
      "Amannya n'amawulire g'omukolo",
      "Bubaka bwa digital",
      "Okuweereza ku WhatsApp",
      "Okukyusa omulundi gumu",
    ],
    chooseEssential: "Londa Essential",
    luxury: "Luxury",
    signature: "Bubaka bwa Signature",
    luxuryText:
      "Obuweereza obw'omulembe eri embaga, introduction n'emikolo emikulu.",
    popular: "Kisinga Okwagalibwa",
    luxuryFeatures: [
      "Design ey'omutindo",
      "Personalization enzijuvu",
      "Obubaka obw'enjawulo",
      "Amawulire ga RSVP",
      "Okukyusa emirundi esatu",
      "Okuweereza ku WhatsApp",
    ],
    chooseLuxury: "Londa Luxury",
    premium: "Premium",
    bespoke: "Bubaka Obw'enjawulo",
    premiumText:
      "Bubaka obukolebwa nga businziira ku lugero lwo n'omukolo gwo.",
    premiumFeatures: [
      "Design ey'enjawulo",
      "Amabara n'empandiika z'oyagala",
      "Obubaka obw'obuntu",
      "Okuteekamu ebifaananyi",
      "Okukyusa emirundi mingi",
      "Obuweereza obw'amangu",
    ],
    choosePremium: "Londa Premium",
    howEyebrow: "Engeri Gyekikolebwamu",
    howTitle: "Bubaka bwo mu mitendera ena egyangu.",
    choose: "Londa",
    chooseText: "Londa design oba package gy'oyagala.",
    personalize: "Kola Obw'obuntu",
    personalizeText:
      "Tuweereze amannya, olunaku, ekifo n'amawulire g'omukolo.",
    approve: "Kakasa",
    approveText:
      "Tuteekateeka bubaka bwo era tukola enkyukakyuka z'osabye.",
    celebrate: "Jaguza",
    celebrateText:
      "Funa bubaka bwo obumaliriziddwa era obugabane n'abagenyi bo.",
    ctaTitle: "Otegefu okukola ekintu ekirungi?",
    ctaText:
      "Londa package era Claire Invite Studio ekole omukolo gwo okubeera ogw'enjawulo.",
    startOrder: "Tandika Okutegeka",
    footer: "© 2026 Claire Invite Studio. Obuyinza bwonna busigadde.",
  },

  sw: {
    home: "Nyumbani",
    invitations: "Mialiko",
    pricing: "Bei",
    faq: "Maswali",
    about: "Kuhusu Sisi",
    contact: "Wasiliana Nasi",
    eyebrow: "Rahisi na Kifahari",
    title: "Chagua huduma inayofaa sherehe yako.",
    intro:
      "Kila mwaliko wa Claire Invite Studio umeundwa kufanya wakati wako maalum uwe mzuri, wa kipekee na usiosahaulika.",
    essential: "Essential",
    digital: "Mwaliko wa Kidijitali",
    essentialText:
      "Mwaliko mzuri wa kidijitali kwa wanaotaka kitu rahisi na cha kifahari.",
    essentialFeatures: [
      "Chagua kutoka kwenye miundo yetu",
      "Majina na maelezo ya tukio",
      "Mwaliko wa kidijitali",
      "Kutumwa kupitia WhatsApp",
      "Marekebisho moja",
    ],
    chooseEssential: "Chagua Essential",
    luxury: "Luxury",
    signature: "Mwaliko wa Signature",
    luxuryText:
      "Huduma ya kiwango cha juu kwa harusi, utambulisho na sherehe muhimu.",
    popular: "Maarufu Zaidi",
    luxuryFeatures: [
      "Muundo wa kiwango cha juu",
      "Personalization kamili",
      "Maneno maalum",
      "Taarifa za RSVP",
      "Marekebisho hadi mara tatu",
      "Kutumwa kupitia WhatsApp",
    ],
    chooseLuxury: "Chagua Luxury",
    premium: "Premium",
    bespoke: "Mwaliko Maalum",
    premiumText:
      "Mwaliko uliotengenezwa kulingana na hadithi yako na sherehe yako.",
    premiumFeatures: [
      "Muundo maalum",
      "Rangi na fonti unazochagua",
      "Maneno maalum",
      "Kuongeza picha",
      "Marekebisho mengi",
      "Huduma ya kipaumbele",
    ],
    choosePremium: "Chagua Premium",
    howEyebrow: "Jinsi Inavyofanya Kazi",
    howTitle: "Mwaliko wako katika hatua nne rahisi.",
    choose: "Chagua",
    chooseText: "Chagua muundo au kifurushi unachopenda.",
    personalize: "Binafsisha",
    personalizeText:
      "Tutumie majina, tarehe, eneo na maelezo ya sherehe.",
    approve: "Thibitisha",
    approveText:
      "Tunaandaa mwaliko wako na kufanya marekebisho uliyoomba.",
    celebrate: "Sherehekea",
    celebrateText:
      "Pokea mwaliko wako uliokamilika na uwashirikishe wageni wako.",
    ctaTitle: "Uko tayari kuunda kitu kizuri?",
    ctaText:
      "Chagua kifurushi na Claire Invite Studio italeta sherehe yako kuwa hai.",
    startOrder: "Anza Kuagiza",
    footer: "© 2026 Claire Invite Studio. Haki zote zimehifadhiwa.",
  },

  fr: {
    home: "Accueil",
    invitations: "Invitations",
    pricing: "Tarifs",
    faq: "FAQ",
    about: "À propos",
    contact: "Contact",
    eyebrow: "Simple & Élégant",
    title: "Choisissez l'expérience qui correspond à votre célébration.",
    intro:
      "Chaque invitation Claire Invite Studio est conçue pour rendre votre moment spécial beau, personnel et inoubliable.",
    essential: "Essential",
    digital: "Invitation Digitale",
    essentialText:
      "Une belle invitation digitale pour ceux qui recherchent quelque chose d'élégant et simple.",
    essentialFeatures: [
      "Choisissez parmi nos créations",
      "Noms et détails personnalisés",
      "Invitation digitale",
      "Livraison WhatsApp",
      "Une révision",
    ],
    chooseEssential: "Choisir Essential",
    luxury: "Luxury",
    signature: "Invitation Signature",
    luxuryText:
      "Une expérience plus raffinée pour les mariages, présentations et célébrations importantes.",
    popular: "Plus Populaire",
    luxuryFeatures: [
      "Design d'invitation premium",
      "Personnalisation complète",
      "Texte personnalisé",
      "Informations RSVP",
      "Jusqu'à trois révisions",
      "Livraison WhatsApp",
    ],
    chooseLuxury: "Choisir Luxury",
    premium: "Premium",
    bespoke: "Expérience Sur Mesure",
    premiumText:
      "Une invitation entièrement personnalisée autour de votre histoire et de votre célébration.",
    premiumFeatures: [
      "Design sur mesure",
      "Couleurs et typographies personnalisées",
      "Texte personnalisé",
      "Intégration de photos",
      "Révisions multiples",
      "Service prioritaire",
    ],
    choosePremium: "Choisir Premium",
    howEyebrow: "Comment Ça Marche",
    howTitle: "Votre invitation en quatre étapes simples.",
    choose: "Choisir",
    chooseText: "Sélectionnez votre création ou votre formule préférée.",
    personalize: "Personnaliser",
    personalizeText:
      "Envoyez-nous vos noms, date, lieu et détails de la célébration.",
    approve: "Approuver",
    approveText:
      "Nous préparons votre invitation et effectuons les modifications demandées.",
    celebrate: "Célébrer",
    celebrateText:
      "Recevez votre invitation finale et partagez-la avec vos invités.",
    ctaTitle: "Prêt à créer quelque chose de magnifique ?",
    ctaText:
      "Choisissez une formule et laissez Claire Invite Studio donner vie à votre célébration.",
    startOrder: "Commencer Votre Commande",
    footer: "© 2026 Claire Invite Studio. Tous droits réservés.",
  },
};

export default function PricingPage() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const packages = [
    {
      name: t.essential,
      title: t.digital,
      text: t.essentialText,
      price: "UGX 50,000",
      features: t.essentialFeatures,
      button: t.chooseEssential,
      href: "/order?package=Essential",
      dark: false,
    },
    {
      name: t.luxury,
      title: t.signature,
      text: t.luxuryText,
      price: "UGX 100,000",
      features: t.luxuryFeatures,
      button: t.chooseLuxury,
      href: "/order?package=Luxury",
      dark: true,
    },
    {
      name: t.premium,
      title: t.bespoke,
      text: t.premiumText,
      price: "From UGX 200,000",
      features: t.premiumFeatures,
      button: t.choosePremium,
      href: "/order?package=Premium%20Bespoke",
      dark: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#174A3B]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-wide"
        >
          Claire Invite Studio
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3 text-sm">
          <Link href="/" className="hover:text-[#B08D57]">
            {t.home}
          </Link>

          <Link href="/invitations" className="hover:text-[#B08D57]">
            {t.invitations}
          </Link>

          <Link
            href="/pricing"
            className="font-semibold text-[#B08D57]"
          >
            {t.pricing}
          </Link>

          <Link href="/faq" className="hover:text-[#B08D57]">
            {t.faq}
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
          {t.eyebrow}
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-semibold md:text-6xl">
          {t.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66756F]">
          {t.intro}
        </p>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-[2rem] p-8 shadow-sm ${
                pkg.dark
                  ? "border-2 border-[#B08D57] bg-[#174A3B] text-white shadow-xl"
                  : "border border-[#E5DED2] bg-white"
              }`}
            >
              {pkg.dark && (
                <div className="absolute right-6 top-6 rounded-full bg-[#D9C7A3] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#174A3B]">
                  {t.popular}
                </div>
              )}

              <p
                className={`text-xs uppercase tracking-[0.25em] ${
                  pkg.dark ? "text-[#D9C7A3]" : "text-[#B08D57]"
                }`}
              >
                {pkg.name}
              </p>

              <h2 className="mt-4 font-serif text-3xl">
                {pkg.title}
              </h2>

              <p
                className={`mt-4 leading-7 ${
                  pkg.dark ? "text-white/70" : "text-[#66756F]"
                }`}
              >
                {pkg.text}
              </p>

              <div className="mt-8">
                <span className="font-serif text-4xl">
                  {pkg.price}
                </span>
              </div>

              <div
                className={`my-8 h-px ${
                  pkg.dark ? "bg-white/20" : "bg-[#E5DED2]"
                }`}
              />

              <ul
                className={`space-y-4 text-sm ${
                  pkg.dark ? "text-white/80" : "text-[#66756F]"
                }`}
              >
                {pkg.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <Link
                href={pkg.href}
                className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-medium transition ${
                  pkg.dark
                    ? "bg-[#D9C7A3] text-[#174A3B] hover:bg-white"
                    : "border border-[#174A3B] hover:bg-[#174A3B] hover:text-white"
                }`}
              >
                {pkg.button}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#B08D57]">
            {t.howEyebrow}
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            {t.howTitle}
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {[
              [1, t.choose, t.chooseText],
              [2, t.personalize, t.personalizeText],
              [3, t.approve, t.approveText],
              [4, t.celebrate, t.celebrateText],
            ].map(([number, title, text]) => (
              <div key={number}>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#174A3B] font-serif text-xl text-white">
                  {number}
                </div>

                <h3 className="mt-5 font-serif text-xl">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#66756F]">
                  {text}
                </p>
              </div>
            ))}
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
          {t.startOrder}
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DED2] px-6 py-8 text-center text-sm text-[#66756F]">
        {t.footer}
      </footer>
    </main>
  );
}