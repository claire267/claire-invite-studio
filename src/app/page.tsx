"use client";

import Link from "next/link";
import { useLanguage } from "./components/LanguageProvider";

type Language = "en" | "rw" | "lg" | "sw" | "fr";

const translations = {
  en: {
    language: "English",
    navHome: "Home",
    navInvitations: "Invitations",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navAbout: "About",
    navContact: "Contact",

    eyebrow: "Digital Invitations • Beautifully Designed",
    heroTitle: "Your beautiful story begins with an invitation.",
    heroText:
      "Elegant digital invitations created for weddings, introductions, birthdays, bridal showers and the moments you never want to forget.",
    explore: "Explore Invitations",
    pricing: "View Pricing",

    previewLabel: "Your Special Day",
    previewTitle: "A Beautiful Beginning",
    previewText: "Your story. Your style. Your invitation.",

    collectionLabel: "Our Collection",
    collectionTitle: "Designed for every beautiful moment",

    wedding: "Wedding",
    weddingTitle: "Timeless Elegance",
    weddingText:
      "Sophisticated invitations for couples beginning their forever.",
    introduction: "Introduction",
    introductionTitle: "Cultural Romance",
    introductionText:
      "Elegant designs celebrating love, family and tradition.",
    celebration: "Celebration",
    celebrationTitle: "Modern Celebration",
    celebrationText:
      "Beautiful invitations for birthdays, showers, anniversaries and more.",
    viewInvitation: "View Invitation →",

    experienceLabel: "The Claire Experience",
    experienceTitle: "Designed with intention.",
    experienceText:
      "From the first click to the final invitation, every detail is created to make your celebration feel personal and unforgettable.",

    beautifulTitle: "Beautifully Designed",
    beautifulText:
      "Elegant layouts, refined typography and carefully selected details designed to make your invitation feel special.",

    storyTitle: "Made for Your Story",
    storyText:
      "Your names, colors, wording and celebration details come together to create an invitation that feels uniquely yours.",

    simpleTitle: "Simple & Seamless",
    simpleText:
      "Choose your design, send your details, review your invitation and receive the finished digital invitation ready to share.",

    ctaLabel: "Your Moment Starts Here",
    ctaTitle: "Let's create an invitation your guests will remember.",

    footer: "© 2026 Claire Invite Studio. All rights reserved.",
  },

  rw: {
    language: "Kinyarwanda",
    navHome: "Ahabanza",
    navInvitations: "Ubutumire",
    navPricing: "Ibiciro",
    navFaq: "Ibibazo",
    navAbout: "Abo turi bo",
    navContact: "Twandikire",

    eyebrow: "Ubutumire bwa Digital • Bwateguwe neza",
    heroTitle: "Inkuru yawe nziza itangirana n'ubutumire.",
    heroText:
      "Ubutumire bwiza bwa digital butegurirwa ubukwe, gusaba no gukwa, iminsi y'amavuko, bridal shower n'indi minsi y'ingenzi utazigera wifuza kwibagirwa.",
    explore: "Reba Ubutumire",
    pricing: "Reba Ibiciro",

    previewLabel: "Umunsi Wawe Wihariye",
    previewTitle: "Intangiriro Nziza",
    previewText: "Inkuru yawe. Imiterere yawe. Ubutumire bwawe.",

    collectionLabel: "Ibyo Dufite",
    collectionTitle: "Byateguwe ku bihe byose byiza",

    wedding: "Ubukwe",
    weddingTitle: "Elegance Itajya Ishira",
    weddingText:
      "Ubutumire buhebuje ku bakundana batangiye urugendo rwabo rw'iteka.",
    introduction: "Gusaba no Gukwa",
    introductionTitle: "Urukundo n'Umuco",
    introductionText:
      "Ibishushanyo byiza byizihiza urukundo, umuryango n'umuco.",
    celebration: "Ibirori",
    celebrationTitle: "Ibirori Bigezweho",
    celebrationText:
      "Ubutumire bwiza bw'amavuko, bridal shower, isabukuru y'umuryango n'ibindi.",
    viewInvitation: "Reba Ubutumire →",

    experienceLabel: "Claire Experience",
    experienceTitle: "Byateguwe mu buryo bwihariye.",
    experienceText:
      "Kuva ku ntambwe ya mbere kugeza ku butumire bwa nyuma, buri kintu gitegurwa kugira ngo ibirori byawe bibe iby'umwihariko kandi bitazibagirana.",

    beautifulTitle: "Byateguwe Neza",
    beautifulText:
      "Imiterere myiza, inyandiko nziza n'ibisobanuro byatoranyijwe neza kugira ngo ubutumire bwawe bube budasanzwe.",

    storyTitle: "Inkuru Yawe Yihariye",
    storyText:
      "Amazina yawe, amabara, amagambo n'ibisobanuro by'ibirori byawe bihuzwa kugira ngo ubutumire bube ubwawe.",

    simpleTitle: "Byoroshye kandi Bisobanutse",
    simpleText:
      "Hitamo igishushanyo, twohereze ibisobanuro byawe, usuzume ubutumire bwawe hanyuma ubone ubutumire bwa digital bwiteguye gusangizwa abandi.",

    ctaLabel: "Umwanya Wawe Utangiriye Hano",
    ctaTitle: "Reka dukore ubutumire abashyitsi bawe bazibuka.",

    footer: "© 2026 Claire Invite Studio. Uburenganzira bwose burabitswe.",
  },

  lg: {
    language: "Luganda",
    navHome: "Awaka",
    navInvitations: "Bubaka",
    navPricing: "Bbeeyi",
    navFaq: "Ebibuuzo",
    navAbout: "Ebikwata ku Ffe",
    navContact: "Tukwatagane",

    eyebrow: "Bubaka bwa Digital • Bukolebwa mu Ngeri Ey'obukugu",
    heroTitle: "Olugendo lwo olulungi lutandikira ku bubaka.",
    heroText:
      "Bubaka bwa digital obulungi obukolebwa ku mbaga, introduction, amazaalibwa, bridal showers n'emikolo emirala gy'oyagala okujjukira emirembe gyonna.",
    explore: "Laba Bubaka",
    pricing: "Laba Bbeeyi",

    previewLabel: "Olunaku Lwo Olw'enjawulo",
    previewTitle: "Entandikwa Ennungi",
    previewText: "Olugero lwo. Style yo. Bubaka bwo.",

    collectionLabel: "Bubaka Bwaffe",
    collectionTitle: "Bukolebwa ku buli mukolo omulungi",

    wedding: "Mbaga",
    weddingTitle: "Timeless Elegance",
    weddingText:
      "Bubaka obw'omulembe eri abafumbo abatandika obulamu bwabwe obupya.",
    introduction: "Introduction",
    introductionTitle: "Cultural Romance",
    introductionText:
      "Design ennungi ezikuzza okwagala, amaka n'obuwangwa.",
    celebration: "Mikolo",
    celebrationTitle: "Modern Celebration",
    celebrationText:
      "Bubaka obulungi ku mazaalibwa, showers, anniversaries n'emikolo emirala.",
    viewInvitation: "Laba Bubaka →",

    experienceLabel: "The Claire Experience",
    experienceTitle: "Bukolebwa n'obwegendereza.",
    experienceText:
      "Okuva ku kusooka okuggulawo okutuuka ku bubaka obusembayo, buli kintu tukikola okufuula omukolo gwo ogw'enjawulo era ogujjukirwa.",

    beautifulTitle: "Bukolebwa Bulungi",
    beautifulText:
      "Design ennungi, okuwandiika okulongoofu n'ebintu ebirondeddwa obwegendereza okufuula bubaka bwo obw'enjawulo.",

    storyTitle: "Bukolebwa ku Lugero Lwo",
    storyText:
      "Amannya go, langi, bigambo n'ebikwata ku mukolo gwo bigattibwa okukola bubaka obukukwatako ggwe.",

    simpleTitle: "Kyangu era Kirongoofu",
    simpleText:
      "Londa design, twereza ebikwata ku mukolo gwo, kebera bubaka bwo era ofune bubaka bwo obwetegefu okusindikibwa.",

    ctaLabel: "Omukolo Gwo Gutandikira Wano",
    ctaTitle: "Tukole bubaka abagenyi bo bajja kujjukira.",

    footer: "© 2026 Claire Invite Studio. Obuyinza bwonna busigadde.",
  },

  sw: {
    language: "Kiswahili",
    navHome: "Nyumbani",
    navInvitations: "Mialiko",
    navPricing: "Bei",
    navFaq: "Maswali",
    navAbout: "Kuhusu Sisi",
    navContact: "Wasiliana Nasi",

    eyebrow: "Mialiko ya Kidijitali • Iliyoundwa kwa Uzuri",
    heroTitle: "Hadithi yako nzuri inaanza na mwaliko.",
    heroText:
      "Mialiko maridadi ya kidijitali kwa harusi, utambulisho, siku za kuzaliwa, bridal shower na nyakati ambazo hutaki kusahau.",
    explore: "Tazama Mialiko",
    pricing: "Tazama Bei",

    previewLabel: "Siku Yako Maalum",
    previewTitle: "Mwanzo Mzuri",
    previewText: "Hadithi yako. Mtindo wako. Mwaliko wako.",

    collectionLabel: "Mkusanyiko Wetu",
    collectionTitle: "Imeundwa kwa kila wakati mzuri",

    wedding: "Harusi",
    weddingTitle: "Timeless Elegance",
    weddingText:
      "Mialiko ya kifahari kwa wanandoa wanaoanza safari yao ya maisha pamoja.",
    introduction: "Utambulisho",
    introductionTitle: "Cultural Romance",
    introductionText:
      "Miundo mizuri inayoadhimisha upendo, familia na mila.",
    celebration: "Sherehe",
    celebrationTitle: "Modern Celebration",
    celebrationText:
      "Mialiko mizuri kwa siku za kuzaliwa, bridal shower, anniversaries na zaidi.",
    viewInvitation: "Tazama Mwaliko →",

    experienceLabel: "The Claire Experience",
    experienceTitle: "Imeundwa kwa umakini.",
    experienceText:
      "Kuanzia hatua ya kwanza hadi mwaliko wa mwisho, kila kitu kinaandaliwa ili kufanya sherehe yako iwe ya kipekee na isiyosahaulika.",

    beautifulTitle: "Imeundwa kwa Uzuri",
    beautifulText:
      "Miundo maridadi, maandishi yaliyopangiliwa vizuri na maelezo yaliyochaguliwa kwa uangalifu.",

    storyTitle: "Imeundwa kwa Hadithi Yako",
    storyText:
      "Majina yako, rangi, maneno na maelezo ya sherehe yako huunganishwa ili kuunda mwaliko wako wa kipekee.",

    simpleTitle: "Rahisi na Bila Usumbufu",
    simpleText:
      "Chagua muundo, tuma maelezo yako, kagua mwaliko wako na upokee mwaliko wa kidijitali ulio tayari kushirikiwa.",

    ctaLabel: "Wakati Wako Unaaanza Hapa",
    ctaTitle: "Hebu tuunde mwaliko ambao wageni wako wataukumbuka.",

    footer: "© 2026 Claire Invite Studio. Haki zote zimehifadhiwa.",
  },

  fr: {
    language: "Français",
    navHome: "Accueil",
    navInvitations: "Invitations",
    navPricing: "Tarifs",
    navFaq: "FAQ",
    navAbout: "À propos",
    navContact: "Contact",

    eyebrow: "Invitations numériques • Magnifiquement conçues",
    heroTitle: "Votre belle histoire commence par une invitation.",
    heroText:
      "Des invitations numériques élégantes pour les mariages, présentations familiales, anniversaires, bridal showers et tous les moments que vous souhaitez garder en mémoire.",
    explore: "Découvrir les invitations",
    pricing: "Voir les tarifs",

    previewLabel: "Votre Jour Spécial",
    previewTitle: "Un Magnifique Début",
    previewText: "Votre histoire. Votre style. Votre invitation.",

    collectionLabel: "Notre Collection",
    collectionTitle: "Conçues pour chaque beau moment",

    wedding: "Mariage",
    weddingTitle: "Élégance Intemporelle",
    weddingText:
      "Des invitations sophistiquées pour les couples qui commencent leur vie ensemble.",
    introduction: "Présentation",
    introductionTitle: "Romance Culturelle",
    introductionText:
      "De magnifiques créations célébrant l'amour, la famille et les traditions.",
    celebration: "Célébration",
    celebrationTitle: "Célébration Moderne",
    celebrationText:
      "De belles invitations pour les anniversaires, showers, anniversaires de mariage et plus encore.",
    viewInvitation: "Voir l'invitation →",

    experienceLabel: "L'expérience Claire",
    experienceTitle: "Conçue avec intention.",
    experienceText:
      "Du premier clic à l'invitation finale, chaque détail est pensé pour rendre votre célébration personnelle et inoubliable.",

    beautifulTitle: "Magnifiquement Conçue",
    beautifulText:
      "Des mises en page élégantes, une typographie raffinée et des détails soigneusement sélectionnés.",

    storyTitle: "Créée pour Votre Histoire",
    storyText:
      "Vos noms, vos couleurs, vos mots et les détails de votre célébration sont réunis pour créer une invitation qui vous ressemble.",

    simpleTitle: "Simple et Fluide",
    simpleText:
      "Choisissez votre modèle, envoyez vos informations, vérifiez votre invitation et recevez votre invitation numérique prête à être partagée.",

    ctaLabel: "Votre Moment Commence Ici",
    ctaTitle: "Créons une invitation dont vos invités se souviendront.",

    footer: "© 2026 Claire Invite Studio. Tous droits réservés.",
  },
};

export default function Home() {
  const { language, setLanguage } = useLanguage();

  const t = translations[language];

  function changeLanguage(value: Language) {
    setLanguage(value);
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

          <Link
            href="/"
            className="font-semibold text-[#B08D57]"
          >
            {t.navHome}
          </Link>

          <Link
            href="/invitations"
            className="hover:text-[#B08D57]"
          >
            {t.navInvitations}
          </Link>

          <Link
            href="/pricing"
            className="hover:text-[#B08D57]"
          >
            {t.navPricing}
          </Link>

          <Link
            href="/faq"
            className="hover:text-[#B08D57]"
          >
            {t.navFaq}
          </Link>

          <Link
            href="/about"
            className="hover:text-[#B08D57]"
          >
            {t.navAbout}
          </Link>

          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) =>
              changeLanguage(e.target.value as Language)
            }
            className="rounded-full border border-[#D9C7A3] bg-[#FDFBF7] px-4 py-2 text-sm text-[#174A3B] outline-none focus:ring-2 focus:ring-[#B08D57]"
            aria-label={t.language}
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
            {t.navContact}
          </Link>

        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-24 pt-20">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
              {t.eyebrow}
            </p>

            <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight md:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#66756F]">
              {t.heroText}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/invitations"
                className="rounded-full bg-[#174A3B] px-8 py-4 font-medium text-white transition hover:bg-[#B08D57]"
              >
                {t.explore}
              </Link>

              <Link
                href="/pricing"
                className="rounded-full border border-[#174A3B] px-8 py-4 font-medium transition hover:bg-[#174A3B] hover:text-white"
              >
                {t.pricing}
              </Link>

            </div>
          </div>

          {/* Professional Invitation Preview */}
          <div className="flex justify-center">

            <div className="w-full max-w-md rounded-[2rem] border border-[#D9C7A3] bg-white p-5 shadow-2xl">

              <div className="border border-[#E5DED2] bg-[#FDFBF7] px-8 py-16 text-center">

                <p className="text-xs uppercase tracking-[0.35em] text-[#B08D57]">
                  {t.previewLabel}
                </p>

                <h2 className="mt-8 font-serif text-5xl">
                  {t.previewTitle}
                </h2>

                <div className="mx-auto my-8 h-px w-20 bg-[#D9C7A3]" />

                <p className="font-serif text-xl italic text-[#174A3B]">
                  {t.previewText}
                </p>

                <div className="mx-auto mt-8 flex justify-center">
                  <span className="text-4xl text-[#B08D57]">✦</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Collections */}
      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-[#B08D57]">
              {t.collectionLabel}
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              {t.collectionTitle}
            </h2>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {/* Wedding */}
            <Link
              href="/invitations/wedding"
              className="group rounded-[2rem] border border-[#E5DED2] bg-[#FDFBF7] p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57]">
                {t.wedding}
              </p>

              <h3 className="mt-4 font-serif text-3xl">
                {t.weddingTitle}
              </h3>

              <p className="mt-4 leading-7 text-[#66756F]">
                {t.weddingText}
              </p>

              <span className="mt-7 inline-block text-sm font-semibold group-hover:text-[#B08D57]">
                {t.viewInvitation}
              </span>
            </Link>

            {/* Introduction */}
            <Link
              href="/invitations/introduction"
              className="group rounded-[2rem] border border-[#E5DED2] bg-[#FDFBF7] p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57]">
                {t.introduction}
              </p>

              <h3 className="mt-4 font-serif text-3xl">
                {t.introductionTitle}
              </h3>

              <p className="mt-4 leading-7 text-[#66756F]">
                {t.introductionText}
              </p>

              <span className="mt-7 inline-block text-sm font-semibold group-hover:text-[#B08D57]">
                {t.viewInvitation}
              </span>
            </Link>

            {/* Celebration */}
            <Link
              href="/invitations/celebration"
              className="group rounded-[2rem] border border-[#E5DED2] bg-[#FDFBF7] p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57]">
                {t.celebration}
              </p>

              <h3 className="mt-4 font-serif text-3xl">
                {t.celebrationTitle}
              </h3>

              <p className="mt-4 leading-7 text-[#66756F]">
                {t.celebrationText}
              </p>

              <span className="mt-7 inline-block text-sm font-semibold group-hover:text-[#B08D57]">
                {t.viewInvitation}
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* Claire Experience */}
      <section className="bg-white px-6 pb-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-[#B08D57]">
              {t.experienceLabel}
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              {t.experienceTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#66756F]">
              {t.experienceText}
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {/* Beautiful */}
            <div className="rounded-[2rem] border border-[#E5DED2] bg-[#FDFBF7] p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D9C7A3] font-serif text-2xl text-[#B08D57]">
                ✦
              </div>

              <h3 className="mt-6 font-serif text-2xl">
                {t.beautifulTitle}
              </h3>

              <p className="mt-4 leading-7 text-[#66756F]">
                {t.beautifulText}
              </p>

            </div>

            {/* Story */}
            <div className="rounded-[2rem] border border-[#E5DED2] bg-[#FDFBF7] p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D9C7A3] font-serif text-2xl text-[#B08D57]">
                ♡
              </div>

              <h3 className="mt-6 font-serif text-2xl">
                {t.storyTitle}
              </h3>

              <p className="mt-4 leading-7 text-[#66756F]">
                {t.storyText}
              </p>

            </div>

            {/* Simple */}
            <div className="rounded-[2rem] border border-[#E5DED2] bg-[#FDFBF7] p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D9C7A3] font-serif text-2xl text-[#B08D57]">
                ✧
              </div>

              <h3 className="mt-6 font-serif text-2xl">
                {t.simpleTitle}
              </h3>

              <p className="mt-4 leading-7 text-[#66756F]">
                {t.simpleText}
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#174A3B] px-6 py-24 text-center text-white">

        <p className="text-sm uppercase tracking-[0.3em] text-[#D9C7A3]">
          {t.ctaLabel}
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl md:text-6xl">
          {t.ctaTitle}
        </h2>

        <div className="mt-9 flex flex-wrap justify-center gap-4">

          <Link
            href="/invitations"
            className="rounded-full bg-[#D9C7A3] px-8 py-4 font-medium text-[#174A3B] transition hover:bg-white"
          >
            {t.explore}
          </Link>

          <Link
            href="/pricing"
            className="rounded-full border border-white/40 px-8 py-4 font-medium text-white transition hover:bg-white hover:text-[#174A3B]"
          >
            {t.pricing}
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DED2] px-6 py-8 text-center text-sm text-[#66756F]">
        {t.footer}
      </footer>

    </main>
  );
}