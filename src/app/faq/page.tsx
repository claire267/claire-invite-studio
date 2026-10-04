"use client";

import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";

const translations = {
  en: {
    navHome: "Home",
    navInvitations: "Invitations",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navAbout: "About",
    navContact: "Contact",

    label: "Frequently Asked Questions",
    title: "Everything you need to know.",
    intro:
      "We want creating your invitation to feel simple, personal and stress-free.",

    faqs: [
      {
        question: "How do I order an invitation?",
        answer:
          "Choose your favorite invitation, select your package, and complete the order form. We will receive your details and contact you on WhatsApp to confirm your order.",
      },
      {
        question: "Can I personalize my invitation?",
        answer:
          "Yes. Your names, date, venue, wording, RSVP details and other event information can be personalized.",
      },
      {
        question: "Can I change the colors?",
        answer:
          "Yes. Color customization is available with our Premium Bespoke package. Some color changes may also be available on other packages depending on the design.",
      },
      {
        question: "Can I add photos?",
        answer:
          "Yes. Photo integration is included in the Premium Bespoke package. You can send your photos after placing your order.",
      },
      {
        question: "How many revisions do I receive?",
        answer:
          "Our Essential package includes one revision, Luxury includes up to three revisions, and Premium includes multiple revisions.",
      },
      {
        question: "How will I receive my invitation?",
        answer:
          "Your finished digital invitation will be delivered electronically, making it easy for you to share it with your guests through WhatsApp and other platforms.",
      },
      {
        question: "How long does an invitation take?",
        answer:
          "Delivery time depends on the package and complexity of the design. We will confirm the expected completion time when your order is received.",
      },
      {
        question: "How do I pay?",
        answer:
          "After you submit your order, we will contact you through WhatsApp with the payment instructions and confirm your order before work begins.",
      },
      {
        question: "Can I order a completely different design?",
        answer:
          "Yes. Our Premium Bespoke package is designed for customers who want an invitation created specifically around their celebration.",
      },
    ],

    ctaTitle: "Still have a question?",
    ctaText:
      "We are happy to help you choose the right invitation for your celebration.",
    ctaButton: "Ask Us on WhatsApp",

    footer: "© 2026 Claire Invite Studio. All rights reserved.",
  },

  rw: {
    navHome: "Ahabanza",
    navInvitations: "Ubutumire",
    navPricing: "Ibiciro",
    navFaq: "Ibibazo",
    navAbout: "Abo Turi",
    navContact: "Twandikire",

    label: "Ibibazo Bikunze Kubazwa",
    title: "Ibyo ukeneye kumenya byose.",
    intro:
      "Turashaka ko gukora ubutumire bwawe biba ibintu byoroshye, byihariye kandi bidatera stress.",

    faqs: [
      {
        question: "Nte ntegeka ubutumire?",
        answer:
          "Hitamo ubutumire ukunda, hitamo package yawe, hanyuma wuzuze form yo gutumiza. Tuzakira amakuru yawe kandi tukwandikire kuri WhatsApp kugira ngo twemeze order yawe.",
      },
      {
        question: "Nshobora guhindura ubutumire bwanjye?",
        answer:
          "Yego. Amazina, itariki, aho ibirori bizabera, amagambo, RSVP n'andi makuru y'ibirori bishobora guhindurwa.",
      },
      {
        question: "Nshobora guhindura amabara?",
        answer:
          "Yego. Guhindura amabara birimo muri Premium Bespoke package. Ku zindi package, impinduka zimwe z'amabara zishobora gukorwa bitewe n'igishushanyo wahisemo.",
      },
      {
        question: "Nshobora gushyiramo amafoto?",
        answer:
          "Yego. Gushyiramo amafoto biri muri Premium Bespoke package. Ushobora kohereza amafoto yawe nyuma yo gutanga order.",
      },
      {
        question: "Mbahabwa revisions zingahe?",
        answer:
          "Essential package igira revision imwe, Luxury igira revisions zigera kuri eshatu, naho Premium igira revisions nyinshi.",
      },
      {
        question: "Ubutumire bwanjye nzabubona gute?",
        answer:
          "Ubutumire bwawe bwuzuye buzoherezwa mu buryo bwa digital, ku buryo ushobora kubusangiza abashyitsi bawe kuri WhatsApp n'izindi mbuga.",
      },
      {
        question: "Ubutumire bumara igihe kingana iki gukorwa?",
        answer:
          "Igihe cyo gutegura ubutumire giterwa na package n'uburemere bw'igishushanyo. Tuzakubwira igihe bwo kurangiza order yawe tumaze kuyakira.",
      },
      {
        question: "Nishyura nte?",
        answer:
          "Nyuma yo kohereza order yawe, tuzakwandikira kuri WhatsApp tukaguha amabwiriza yo kwishyura kandi twemeze order mbere yo gutangira akazi.",
      },
      {
        question: "Nshobora gusaba design itandukanye n'iziri hano?",
        answer:
          "Yego. Premium Bespoke package igenewe abakiriya bashaka ubutumire bwakozwe mu buryo bwihariye cyane ku birori byabo.",
      },
    ],

    ctaTitle: "Uracyafite ikibazo?",
    ctaText:
      "Twishimiye kugufasha guhitamo ubutumire bukubereye mu birori byawe.",
    ctaButton: "Tubaze kuri WhatsApp",

    footer: "© 2026 Claire Invite Studio. Uburenganzira bwose burabitswe.",
  },

  lg: {
    navHome: "Awaka",
    navInvitations: "Bubaka",
    navPricing: "Ebiciro",
    navFaq: "Ebibuuzo",
    navAbout: "Ebikwata ku Ffe",
    navContact: "Tukubirire",

    label: "Ebibuuzo Ebibuuzibwa Ennyo",
    title: "Buli kimu ky'olina okumanya.",
    intro:
      "Twagala okukola invitation yo kubeere kwangu, kwa muntu kinnoomu era nga tekukuleetera stress.",

    faqs: [
      {
        question: "Ntya okuteeka order ya invitation?",
        answer:
          "Londa invitation gy'oyagala, londa package yo, era ojjuze order form. Tujja kufuna ebikwata ku order yo era tukukubire ku WhatsApp okukakasa order.",
      },
      {
        question: "Nsobola okukyusa invitation yange?",
        answer:
          "Yee. Amannya, olunaku, ekifo, bigambo, RSVP n'amawulire amalala ag'emikolo bisobola okukyusibwa.",
      },
      {
        question: "Nsobola okukyusa langi?",
        answer:
          "Yee. Okukyusa langi kulimu mu Premium Bespoke package. Ku packages endala, okukyusa langi okumu kuyinza okukolebwa okusinziira ku design.",
      },
      {
        question: "Nsobola okuteekamu ebifaananyi?",
        answer:
          "Yee. Photo integration eri mu Premium Bespoke package. Osobola okutuweereza ebifaananyi byo nga omaze okuteeka order.",
      },
      {
        question: "Nfuna revisions mmeka?",
        answer:
          "Essential package erimu revision emu, Luxury erimu revisions eziwera ku ssatu, ate Premium erimu revisions nnyingi.",
      },
      {
        question: "Invitation yange ngifuna ntya?",
        answer:
          "Invitation yo ejja kuweebwa mu digital format, ekikusobozesa okugigabana n'abagenyi bo nga okozesa WhatsApp n'emikutu emirala.",
      },
      {
        question: "Invitation etwala bbanga ki okukolebwa?",
        answer:
          "Obudde butera okusinziira ku package n'obuzibu bwa design. Tujja kukakasa obudde bw'okumaliriza nga tumaze okufuna order yo.",
      },
      {
        question: "Nsaasula ntya?",
        answer:
          "Oluvannyuma lw'okuweereza order, tujja kukukubira ku WhatsApp n'amagezi agakwata ku kusasula era tukakase order nga tetunnatandika mulimu.",
      },
      {
        question: "Nsobola okusaba design empya ddala?",
        answer:
          "Yee. Premium Bespoke package yakolebwa eri abantu abaagala invitation ekolebwa mu ngeri ey'enjawulo okusinziira ku mukolo gwabwe.",
      },
    ],

    ctaTitle: "Okyalina ekibuuzo?",
    ctaText:
      "Tuli basanyufu okukuyamba okulonda invitation entuufu ey'omukolo gwo.",
    ctaButton: "Tubuuze ku WhatsApp",

    footer: "© 2026 Claire Invite Studio. All rights reserved.",
  },

  sw: {
    navHome: "Nyumbani",
    navInvitations: "Mialiko",
    navPricing: "Bei",
    navFaq: "Maswali",
    navAbout: "Kuhusu Sisi",
    navContact: "Wasiliana",

    label: "Maswali Yanayoulizwa Mara kwa Mara",
    title: "Kila kitu unachohitaji kujua.",
    intro:
      "Tunataka kutengeneza mwaliko wako kuwe rahisi, wa kipekee na bila msongo wa mawazo.",

    faqs: [
      {
        question: "Ninawezaje kuagiza mwaliko?",
        answer:
          "Chagua mwaliko unaoupenda, chagua kifurushi chako, kisha jaza fomu ya oda. Tutapokea taarifa zako na tutawasiliana nawe kupitia WhatsApp kuthibitisha oda yako.",
      },
      {
        question: "Je, ninaweza kubinafsisha mwaliko wangu?",
        answer:
          "Ndiyo. Majina yako, tarehe, ukumbi, maneno, RSVP na taarifa nyingine za tukio zinaweza kubadilishwa.",
      },
      {
        question: "Je, ninaweza kubadilisha rangi?",
        answer:
          "Ndiyo. Kubadilisha rangi kunapatikana kwenye Premium Bespoke package. Mabadiliko fulani ya rangi yanaweza pia kufanyika kwenye vifurushi vingine kulingana na design.",
      },
      {
        question: "Je, ninaweza kuongeza picha?",
        answer:
          "Ndiyo. Kuunganisha picha kunapatikana kwenye Premium Bespoke package. Unaweza kutuma picha zako baada ya kuweka oda.",
      },
      {
        question: "Ninapata marekebisho mangapi?",
        answer:
          "Essential package ina marekebisho moja, Luxury ina hadi marekebisho matatu, na Premium ina marekebisho mengi.",
      },
      {
        question: "Nitapokeaje mwaliko wangu?",
        answer:
          "Mwaliko wako uliokamilika utatumwa kwa njia ya kidigitali, hivyo utaweza kuushirikisha na wageni wako kupitia WhatsApp na majukwaa mengine.",
      },
      {
        question: "Mwaliko huchukua muda gani?",
        answer:
          "Muda wa kukamilisha hutegemea package na ugumu wa design. Tutakuthibitishia muda wa kukamilisha baada ya kupokea oda yako.",
      },
      {
        question: "Ninalipaje?",
        answer:
          "Baada ya kutuma oda yako, tutawasiliana nawe kupitia WhatsApp na kukupa maelekezo ya malipo na kuthibitisha oda kabla ya kuanza kazi.",
      },
      {
        question: "Je, ninaweza kuagiza design tofauti kabisa?",
        answer:
          "Ndiyo. Premium Bespoke package imeundwa kwa wateja wanaotaka mwaliko uliotengenezwa mahsusi kulingana na sherehe yao.",
      },
    ],

    ctaTitle: "Bado una swali?",
    ctaText:
      "Tuna furaha kukusaidia kuchagua mwaliko unaofaa kwa sherehe yako.",
    ctaButton: "Tuulize kupitia WhatsApp",

    footer: "© 2026 Claire Invite Studio. Haki zote zimehifadhiwa.",
  },

  fr: {
    navHome: "Accueil",
    navInvitations: "Invitations",
    navPricing: "Tarifs",
    navFaq: "FAQ",
    navAbout: "À propos",
    navContact: "Contact",

    label: "Questions Fréquemment Posées",
    title: "Tout ce que vous devez savoir.",
    intro:
      "Nous voulons que la création de votre invitation soit simple, personnelle et sans stress.",

    faqs: [
      {
        question: "Comment commander une invitation ?",
        answer:
          "Choisissez votre invitation préférée, sélectionnez votre formule et remplissez le formulaire de commande. Nous recevrons vos informations et vous contacterons sur WhatsApp pour confirmer votre commande.",
      },
      {
        question: "Puis-je personnaliser mon invitation ?",
        answer:
          "Oui. Vos noms, la date, le lieu, le texte, les informations RSVP et autres détails de votre événement peuvent être personnalisés.",
      },
      {
        question: "Puis-je changer les couleurs ?",
        answer:
          "Oui. La personnalisation des couleurs est disponible avec la formule Premium Bespoke. Certains changements de couleurs peuvent également être disponibles avec d'autres formules selon le design.",
      },
      {
        question: "Puis-je ajouter des photos ?",
        answer:
          "Oui. L'intégration de photos est incluse dans la formule Premium Bespoke. Vous pouvez envoyer vos photos après avoir passé votre commande.",
      },
      {
        question: "Combien de modifications sont incluses ?",
        answer:
          "La formule Essential comprend une modification, Luxury jusqu'à trois modifications et Premium comprend plusieurs modifications.",
      },
      {
        question: "Comment vais-je recevoir mon invitation ?",
        answer:
          "Votre invitation numérique finale vous sera livrée électroniquement, ce qui vous permettra de la partager facilement avec vos invités via WhatsApp et d'autres plateformes.",
      },
      {
        question: "Combien de temps faut-il pour créer une invitation ?",
        answer:
          "Le délai dépend de la formule et de la complexité du design. Nous vous confirmerons le délai prévu lorsque nous recevrons votre commande.",
      },
      {
        question: "Comment puis-je payer ?",
        answer:
          "Après avoir envoyé votre commande, nous vous contacterons via WhatsApp avec les instructions de paiement et confirmerons votre commande avant de commencer le travail.",
      },
      {
        question: "Puis-je commander un design complètement différent ?",
        answer:
          "Oui. La formule Premium Bespoke est conçue pour les clients qui souhaitent une invitation créée spécialement pour leur célébration.",
      },
    ],

    ctaTitle: "Vous avez encore une question ?",
    ctaText:
      "Nous sommes heureux de vous aider à choisir l'invitation idéale pour votre célébration.",
    ctaButton: "Nous contacter sur WhatsApp",

    footer: "© 2026 Claire Invite Studio. Tous droits réservés.",
  },
};

export default function FAQPage() {
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
          <Link href="/" className="hover:text-[#B08D57]">
            {t.navHome}
          </Link>

          <Link href="/invitations" className="hover:text-[#B08D57]">
            {t.navInvitations}
          </Link>

          <Link href="/pricing" className="hover:text-[#B08D57]">
            {t.navPricing}
          </Link>

          <Link
            href="/faq"
            className="font-semibold text-[#B08D57]"
          >
            {t.navFaq}
          </Link>

          <Link href="/about" className="hover:text-[#B08D57]">
            {t.navAbout}
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-[#174A3B] px-5 py-2.5 text-white hover:bg-[#B08D57]"
          >
            {t.navContact}
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

      {/* Header */}
      <section className="px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
          {t.label}
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-semibold md:text-6xl">
          {t.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66756F]">
          {t.intro}
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="space-y-5">
          {t.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-[#E5DED2] bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl">
                {faq.question}

                <span className="text-2xl text-[#B08D57] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 max-w-3xl leading-7 text-[#66756F]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[#174A3B] px-6 py-20 text-center text-white">
        <h2 className="font-serif text-4xl md:text-5xl">
          {t.ctaTitle}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
          {t.ctaText}
        </p>

        <a
          href="https://wa.me/256781095271?text=Hello%20Claire%20Invite%20Studio!%20I%20have%20a%20question%20about%20your%20invitations."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-[#D9C7A3] px-8 py-3.5 font-medium text-[#174A3B] hover:bg-white"
        >
          {t.ctaButton}
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DED2] px-6 py-8 text-center text-sm text-[#66756F]">
        {t.footer}
      </footer>
    </main>
  );
}