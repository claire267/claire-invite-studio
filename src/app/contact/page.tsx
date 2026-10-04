"use client";

import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";

const translations = {
  en: {
    home: "Home",
    invitations: "Invitations",
    pricing: "Pricing",
    faq: "FAQ",
    about: "About",
    contact: "Contact",

    heroLabel: "Let's Create Something Beautiful",
    heroTitle:
      "Your celebration deserves an invitation they will remember.",
    heroText:
      "Tell us about your event and Claire Invite Studio will help you create a beautiful digital invitation designed around your story.",

    whatsapp: "WhatsApp",
    letsTalk: "Let's Talk",
    whatsappText:
      "Message us directly on WhatsApp to discuss your invitation, event details, design preferences and pricing.",
    chatWhatsapp: "Chat on WhatsApp",

    email: "Email",
    sendEmail: "Send an Email",
    emailText:
      "Send us your event information and we will get back to you with the next steps for your invitation.",
    sendEmailButton: "Send Email",

    startOrder: "Start Your Order",
    whatNeed: "What we need from you",
    whatNeedText:
      "Once you contact us, we will collect the details needed to create your personalized invitation.",

    names: "Your Names",
    namesText: "The names you want displayed on your invitation.",
    eventDetails: "Event Details",
    eventDetailsText:
      "Date, time, venue and other important information.",
    style: "Your Style",
    styleText:
      "Tell us your preferred colors, mood and invitation style.",
    photos: "Photos",
    photosText:
      "Share photos you would like included in your invitation.",
    rsvpDetails: "RSVP Details",
    rsvpText:
      "Your preferred RSVP phone number, WhatsApp or email.",
    specialRequests: "Special Requests",
    specialText:
      "Any wording, program or special details you want included.",

    studio: "Claire Invite Studio",
    finalTitle:
      "Let's turn your special moment into a beautiful digital experience.",
    startInvitation: "Start My Invitation",

    footer: "© 2026 Claire Invite Studio. All rights reserved.",
  },

  rw: {
    home: "Ahabanza",
    invitations: "Ubutumire",
    pricing: "Ibiciro",
    faq: "Ibibazo",
    about: "Abo Turi",
    contact: "Twandikire",

    heroLabel: "Reka Dukore Ikintu Cyiza",
    heroTitle:
      "Ibirori byawe bikwiye ubutumire abashyitsi bawe bazibuka.",
    heroText:
      "Tubwire ibijyanye n'ibirori byawe kandi Claire Invite Studio izagufasha gukora ubutumire bwiza bwa digital bushingiye ku nkuru yawe.",

    whatsapp: "WhatsApp",
    letsTalk: "Tuganire",
    whatsappText:
      "Twandikire kuri WhatsApp kugira ngo tuganire ku butumire bwawe, amakuru y'ibirori, design ukunda n'ibiciro.",
    chatWhatsapp: "Tuganire kuri WhatsApp",

    email: "Email",
    sendEmail: "Ohereza Email",
    emailText:
      "Twoherereze amakuru y'ibirori byawe kandi tuzakugarukira tukubwire intambwe ikurikira.",
    sendEmailButton: "Ohereza Email",

    startOrder: "Tangira Order Yawe",
    whatNeed: "Ibyo Dukeneye Kuri Wowe",
    whatNeedText:
      "Umaze kutwandikira, tuzakusaba amakuru akenewe kugira ngo dukore ubutumire bwawe bwihariye.",

    names: "Amazina Yawe",
    namesText: "Amazina ushaka ko agaragara ku butumire bwawe.",
    eventDetails: "Amakuru y'Ibirori",
    eventDetailsText:
      "Itariki, isaha, aho ibirori bizabera n'andi makuru y'ingenzi.",
    style: "Style Yawe",
    styleText:
      "Tubwire amabara, mood na style y'ubutumire ukunda.",
    photos: "Amafoto",
    photosText:
      "Sangiza amafoto ushaka ko ashyirwa mu butumire bwawe.",
    rsvpDetails: "Amakuru ya RSVP",
    rsvpText:
      "Numero ya telefoni, WhatsApp cyangwa email ushaka ko abashyitsi bakoresha kuri RSVP.",
    specialRequests: "Ibyifuzo Byihariye",
    specialText:
      "Amagambo, gahunda cyangwa andi makuru yihariye ushaka ko ashyirwa mu butumire.",

    studio: "Claire Invite Studio",
    finalTitle:
      "Reka duhindure igihe cyawe cyihariye ubunararibonye bwiza bwa digital.",
    startInvitation: "Tangira Ubutumire Bwanjye",

    footer: "© 2026 Claire Invite Studio. Uburenganzira bwose burabitswe.",
  },

  lg: {
    home: "Awaka",
    invitations: "Bubaka",
    pricing: "Ebiciro",
    faq: "Ebibuuzo",
    about: "Ebikwata ku Ffe",
    contact: "Tukubirire",

    heroLabel: "Tukole Ekintu Ekirungi",
    heroTitle:
      "Omukolo gwo gusaanidde invitation abagenyi bo bajja okujjukira.",
    heroText:
      "Tubuulire ku mukolo gwo era Claire Invite Studio ejja kukuyamba okukola digital invitation ennungi etegeke okusinziira ku story yo.",

    whatsapp: "WhatsApp",
    letsTalk: "Tukubagane",
    whatsappText:
      "Tukubirire butereevu ku WhatsApp tugambe ku invitation yo, omukolo gwo, design gy'oyagala n'ebbeeyi.",
    chatWhatsapp: "Tukubire ku WhatsApp",

    email: "Email",
    sendEmail: "Weereza Email",
    emailText:
      "Tuweereze amawulire g'omukolo gwo era tujja kuddamu okukutegeeza ekiddako.",
    sendEmailButton: "Weereza Email",

    startOrder: "Tandika Order Yo",
    whatNeed: "Bye Tukwetaaga",
    whatNeedText:
      "Bw'otumaze okutukubira, tujja kukusaba amawulire ge twetaaga okukola invitation yo ey'enjawulo.",

    names: "Amannya Go",
    namesText: "Amannya g'oyagala okulabika ku invitation yo.",
    eventDetails: "Amawulire g'Omukolo",
    eventDetailsText:
      "Olunaku, essaawa, ekifo n'amawulire amalala ag'omugaso.",
    style: "Style Yo",
    styleText:
      "Tubuulire langi, mood ne style y'invitation gy'oyagala.",
    photos: "Ebifaananyi",
    photosText:
      "Tuweereze ebifaananyi by'oyagala okuteeka mu invitation yo.",
    rsvpDetails: "Amawulire ga RSVP",
    rsvpText:
      "Namba ya ssimu, WhatsApp oba email abagenyi bo be balina okukozesa ku RSVP.",
    specialRequests: "Ebyetaago Eby'enjawulo",
    specialText:
      "Bigambo, program oba amawulire amalala g'oyagala okuteeka mu invitation.",

    studio: "Claire Invite Studio",
    finalTitle:
      "Tufuule akaseera ko ak'enjawulo digital experience ennungi.",
    startInvitation: "Tandika Invitation Yange",

    footer: "© 2026 Claire Invite Studio. All rights reserved.",
  },

  sw: {
    home: "Nyumbani",
    invitations: "Mialiko",
    pricing: "Bei",
    faq: "Maswali",
    about: "Kuhusu Sisi",
    contact: "Wasiliana",

    heroLabel: "Tengeneze Kitu Kizuri",
    heroTitle:
      "Sherehe yako inastahili mwaliko ambao wageni wako watakumbuka.",
    heroText:
      "Tuambie kuhusu tukio lako na Claire Invite Studio itakusaidia kutengeneza mwaliko mzuri wa kidigitali uliobuniwa kulingana na hadithi yako.",

    whatsapp: "WhatsApp",
    letsTalk: "Tuzungumze",
    whatsappText:
      "Tutumie ujumbe moja kwa moja kupitia WhatsApp kuhusu mwaliko wako, maelezo ya tukio, design unayopendelea na bei.",
    chatWhatsapp: "Ongea nasi WhatsApp",

    email: "Barua Pepe",
    sendEmail: "Tuma Barua Pepe",
    emailText:
      "Tutumie taarifa za tukio lako na tutakujibu kuhusu hatua zinazofuata za mwaliko wako.",
    sendEmailButton: "Tuma Barua Pepe",

    startOrder: "Anza Oda Yako",
    whatNeed: "Tunachohitaji kutoka kwako",
    whatNeedText:
      "Baada ya kuwasiliana nasi, tutakusanya taarifa tunazohitaji kutengeneza mwaliko wako binafsi.",

    names: "Majina Yako",
    namesText: "Majina unayotaka yaonekane kwenye mwaliko wako.",
    eventDetails: "Maelezo ya Tukio",
    eventDetailsText:
      "Tarehe, muda, ukumbi na taarifa nyingine muhimu.",
    style: "Mtindo Wako",
    styleText:
      "Tuambie rangi, mood na mtindo wa mwaliko unaopendelea.",
    photos: "Picha",
    photosText:
      "Tushirikishe picha unazotaka ziwekwe kwenye mwaliko wako.",
    rsvpDetails: "Maelezo ya RSVP",
    rsvpText:
      "Namba ya simu, WhatsApp au barua pepe unayopendelea kwa RSVP.",
    specialRequests: "Maombi Maalum",
    specialText:
      "Maneno, programu au maelezo maalum unayotaka yawekwe.",

    studio: "Claire Invite Studio",
    finalTitle:
      "Tugeuze wakati wako maalum kuwa uzoefu mzuri wa kidigitali.",
    startInvitation: "Anza Mwaliko Wangu",

    footer: "© 2026 Claire Invite Studio. Haki zote zimehifadhiwa.",
  },

  fr: {
    home: "Accueil",
    invitations: "Invitations",
    pricing: "Tarifs",
    faq: "FAQ",
    about: "À propos",
    contact: "Contact",

    heroLabel: "Créons Quelque Chose de Magnifique",
    heroTitle:
      "Votre célébration mérite une invitation dont vos invités se souviendront.",
    heroText:
      "Parlez-nous de votre événement et Claire Invite Studio vous aidera à créer une magnifique invitation numérique conçue autour de votre histoire.",

    whatsapp: "WhatsApp",
    letsTalk: "Parlons-en",
    whatsappText:
      "Écrivez-nous directement sur WhatsApp pour discuter de votre invitation, des détails de votre événement, de vos préférences de design et des tarifs.",
    chatWhatsapp: "Discuter sur WhatsApp",

    email: "Email",
    sendEmail: "Envoyer un Email",
    emailText:
      "Envoyez-nous les informations de votre événement et nous vous répondrons avec les prochaines étapes.",
    sendEmailButton: "Envoyer un Email",

    startOrder: "Commencez Votre Commande",
    whatNeed: "Ce dont nous avons besoin",
    whatNeedText:
      "Une fois que vous nous contactez, nous recueillons les informations nécessaires pour créer votre invitation personnalisée.",

    names: "Vos Noms",
    namesText:
      "Les noms que vous souhaitez afficher sur votre invitation.",
    eventDetails: "Détails de l'Événement",
    eventDetailsText:
      "Date, heure, lieu et autres informations importantes.",
    style: "Votre Style",
    styleText:
      "Indiquez-nous vos couleurs, votre ambiance et votre style d'invitation préféré.",
    photos: "Photos",
    photosText:
      "Partagez les photos que vous souhaitez intégrer à votre invitation.",
    rsvpDetails: "Détails RSVP",
    rsvpText:
      "Votre numéro de téléphone, WhatsApp ou email préféré pour les RSVP.",
    specialRequests: "Demandes Spéciales",
    specialText:
      "Tout texte, programme ou détail particulier que vous souhaitez inclure.",

    studio: "Claire Invite Studio",
    finalTitle:
      "Transformons votre moment spécial en une magnifique expérience numérique.",
    startInvitation: "Commencer Mon Invitation",

    footer: "© 2026 Claire Invite Studio. Tous droits réservés.",
  },
};

export default function ContactPage() {
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

        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="transition hover:text-[#B08D57]">
            {t.home}
          </Link>

          <Link
            href="/invitations"
            className="transition hover:text-[#B08D57]"
          >
            {t.invitations}
          </Link>

          <Link
            href="/pricing"
            className="transition hover:text-[#B08D57]"
          >
            {t.pricing}
          </Link>

          <Link href="/faq" className="transition hover:text-[#B08D57]">
            {t.faq}
          </Link>

          <Link
            href="/about"
            className="transition hover:text-[#B08D57]"
          >
            {t.about}
          </Link>

          <Link
            href="/contact"
            className="font-semibold text-[#B08D57]"
          >
            {t.contact}
          </Link>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(
                e.target.value as
                  | "en"
                  | "rw"
                  | "lg"
                  | "sw"
                  | "fr"
              )
            }
            className="rounded-full border border-[#D9C7A3] bg-white px-3 py-2 text-sm text-[#174A3B] outline-none"
            aria-label="Select language"
          >
            <option value="en">🇬🇧 English</option>
            <option value="rw">🇷🇼 Kinyarwanda</option>
            <option value="lg">🇺🇬 Luganda</option>
            <option value="sw">🇰🇪 Kiswahili</option>
            <option value="fr">🇫🇷 Français</option>
          </select>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
          {t.heroLabel}
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-semibold md:text-6xl">
          {t.heroTitle}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66756F]">
          {t.heroText}
        </p>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {/* WhatsApp */}
          <a
            href="https://wa.me/256781095271?text=Hello%20Claire%20Invite%20Studio!%20I%20would%20like%20to%20create%20a%20digital%20invitation."
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[2rem] bg-[#174A3B] p-10 text-white shadow-xl transition hover:-translate-y-1"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#D9C7A3]">
              {t.whatsapp}
            </p>

            <h2 className="mt-5 font-serif text-4xl">
              {t.letsTalk}
            </h2>

            <p className="mt-5 leading-7 text-white/75">
              {t.whatsappText}
            </p>

            <div className="mt-8 inline-block rounded-full bg-[#D9C7A3] px-7 py-3 text-sm font-medium text-[#174A3B] transition group-hover:bg-white">
              {t.chatWhatsapp}
            </div>

            <p className="mt-6 text-sm text-white/60">
              +256 781 095 271
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:digitalwithclere@gmail.com"
            className="group rounded-[2rem] border border-[#D9C7A3] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#B08D57]">
              {t.email}
            </p>

            <h2 className="mt-5 font-serif text-4xl">
              {t.sendEmail}
            </h2>

            <p className="mt-5 leading-7 text-[#66756F]">
              {t.emailText}
            </p>

            <div className="mt-8 inline-block rounded-full bg-[#174A3B] px-7 py-3 text-sm font-medium text-white transition group-hover:bg-[#B08D57]">
              {t.sendEmailButton}
            </div>

            <p className="mt-6 break-all text-sm text-[#66756F]">
              digitalwithclere@gmail.com
            </p>
          </a>
        </div>
      </section>

      {/* What We Need */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#B08D57]">
            {t.startOrder}
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            {t.whatNeed}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#66756F]">
            {t.whatNeedText}
          </p>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-[#F8F5EF] p-7">
              <span className="font-serif text-2xl text-[#B08D57]">
                01
              </span>

              <h3 className="mt-4 font-serif text-xl">
                {t.names}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#66756F]">
                {t.namesText}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8F5EF] p-7">
              <span className="font-serif text-2xl text-[#B08D57]">
                02
              </span>

              <h3 className="mt-4 font-serif text-xl">
                {t.eventDetails}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#66756F]">
                {t.eventDetailsText}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8F5EF] p-7">
              <span className="font-serif text-2xl text-[#B08D57]">
                03
              </span>

              <h3 className="mt-4 font-serif text-xl">
                {t.style}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#66756F]">
                {t.styleText}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8F5EF] p-7">
              <span className="font-serif text-2xl text-[#B08D57]">
                04
              </span>

              <h3 className="mt-4 font-serif text-xl">
                {t.photos}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#66756F]">
                {t.photosText}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8F5EF] p-7">
              <span className="font-serif text-2xl text-[#B08D57]">
                05
              </span>

              <h3 className="mt-4 font-serif text-xl">
                {t.rsvpDetails}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#66756F]">
                {t.rsvpText}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8F5EF] p-7">
              <span className="font-serif text-2xl text-[#B08D57]">
                06
              </span>

              <h3 className="mt-4 font-serif text-xl">
                {t.specialRequests}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#66756F]">
                {t.specialText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#174A3B] px-6 py-24 text-center text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-[#D9C7A3]">
          {t.studio}
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl md:text-5xl">
          {t.finalTitle}
        </h2>

        <a
          href="https://wa.me/256781095271?text=Hello%20Claire%20Invite%20Studio!%20I%20am%20ready%20to%20order%20my%20invitation."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-full bg-[#D9C7A3] px-9 py-4 font-medium text-[#174A3B] transition hover:bg-white"
        >
          {t.startInvitation}
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DED2] px-6 py-8 text-center text-sm text-[#66756F]">
        {t.footer}
      </footer>
    </main>
  );
}