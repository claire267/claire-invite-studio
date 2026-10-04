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

    story: "Our Story",
    heroTitle: "Beautiful invitations for beautiful beginnings.",
    heroText:
      "Claire Invite Studio creates elegant digital invitations that transform important moments into experiences your guests will remember.",

    whyLabel: "Why Claire Invite Studio",
    whyTitle:
      "Your invitation is the first impression of your celebration.",
    whyText1:
      "We believe an invitation should do more than announce a date. It should create anticipation, communicate the feeling of the occasion and give your guests a glimpse of what is to come.",
    whyText2:
      "From weddings and traditional introductions to birthdays, bridal showers and special celebrations, we create designs that feel personal, elegant and intentional.",
    quote: "Every beautiful celebration begins with an invitation.",

    createLabel: "What We Create",
    createTitle: "Designed around your moment",
    weddings: "Weddings",
    weddingsText:
      "Elegant digital invitations designed for unforgettable wedding celebrations.",
    introductions: "Traditional Introductions",
    introductionsText:
      "Sophisticated invitations that honor family, culture, tradition and love.",
    celebrations: "Celebrations",
    celebrationsText:
      "Modern invitations for birthdays, bridal showers, anniversaries and special occasions.",

    promiseLabel: "Our Promise",
    promiseTitle: "Elegant. Personal. Memorable.",
    promiseText:
      "We focus on the details that make your invitation feel like yours. Your story, your style, your people and your celebration come together in one beautiful digital experience.",
    elegant: "Elegant Design",
    personal: "Personal Touch",
    rsvp: "Easy RSVP",
    mobile: "Mobile Friendly",

    experienceLabel: "The Experience",
    experienceTitle: "From idea to invitation",
    choose: "Choose",
    chooseText:
      "Explore our invitation styles and choose the design that speaks to your celebration.",
    personalize: "Personalize",
    personalizeText:
      "Tell us your names, date, venue, wording and special details.",
    approve: "Approve",
    approveText:
      "We prepare your invitation and make the agreed revisions.",
    celebrate: "Celebrate",
    celebrateText:
      "Receive your finished invitation and share your special moment with your guests.",

    ctaLabel: "Your Moment Starts Here",
    ctaTitle:
      "Ready to create an invitation your guests will remember?",
    ctaText:
      "Explore our collection and find the design that feels right for your celebration.",
    ctaButton: "Explore Invitations",

    footer: "© 2026 Claire Invite Studio. All rights reserved.",
  },

  rw: {
    home: "Ahabanza",
    invitations: "Ubutumire",
    pricing: "Ibiciro",
    faq: "Ibibazo",
    about: "Abo Turi",
    contact: "Twandikire",

    story: "Amateka Yacu",
    heroTitle: "Ubutumire bwiza ku ntangiriro nziza.",
    heroText:
      "Claire Invite Studio ikora ubutumire bwiza bwa digital buhindura ibihe by'ingenzi bukaba ibintu abashyitsi bawe bazibuka.",

    whyLabel: "Impamvu Claire Invite Studio",
    whyTitle:
      "Ubutumire bwawe ni bwo butanga ishusho ya mbere y'ibirori byawe.",
    whyText1:
      "Twizera ko ubutumire bugomba gukora ibirenze gutangaza itariki. Bugomba gutera amatsiko, kugaragaza uko ibirori bizaba bimeze no guha abashyitsi igitekerezo cy'ibizaza.",
    whyText2:
      "Kuva ku bukwe no ku mihango yo gusaba no gukwa kugeza ku mavuko, bridal shower n'indi minsi mikuru, dukora designs z'umwimerere, nziza kandi zitekerejweho.",
    quote: "Buri birori byiza bitangirira ku butumire bwiza.",

    createLabel: "Ibyo Dukora",
    createTitle: "Byateguwe bijyanye n'igihe cyawe",
    weddings: "Ubukwe",
    weddingsText:
      "Ubutumire bwa digital bwiza bwateguwe ku bukwe butazibagirana.",
    introductions: "Gusaba no Gukwa",
    introductionsText:
      "Ubutumire bwiza bwubaha umuryango, umuco, imigenzo n'urukundo.",
    celebrations: "Ibirori",
    celebrationsText:
      "Ubutumire bugezweho ku mavuko, bridal showers, anniversaries n'ibindi birori.",

    promiseLabel: "Isezerano Ryacu",
    promiseTitle: "Bwiza. Bwihariye. Buzibagirana.",
    promiseText:
      "Twita ku tuntu duto dutuma ubutumire bwawe buba ubwawe. Inkuru yawe, style yawe, abantu bawe n'ibirori byawe bihurira mu bunararibonye bumwe bwiza bwa digital.",
    elegant: "Design Nziza",
    personal: "Ubwihariye",
    rsvp: "RSVP Yoroshye",
    mobile: "Ikora Kuri Telefoni",

    experienceLabel: "Uko Tubikora",
    experienceTitle: "Kuva ku gitekerezo kugeza ku butumire",
    choose: "Hitamo",
    chooseText:
      "Reba styles zacu z'ubutumire uhitemo design ijyanye n'ibirori byawe.",
    personalize: "Gira Ubwihariye",
    personalizeText:
      "Duhe amazina, itariki, aho ibirori bizabera, amagambo n'andi makuru yihariye.",
    approve: "Emeza",
    approveText:
      "Dutegura ubutumire bwawe kandi tugakora revisions mwemeranyijeho.",
    celebrate: "Sangira Ibyishimo",
    celebrateText:
      "Akira ubutumire bwawe bwuzuye kandi usangize abashyitsi bawe ibihe byiza.",

    ctaLabel: "Igihe Cyawe Gitangirira Hano",
    ctaTitle: "Witeguye gukora ubutumire abashyitsi bawe bazibuka?",
    ctaText:
      "Reba collection yacu uhitemo design ijyanye n'ibirori byawe.",
    ctaButton: "Reba Ubutumire",

    footer: "© 2026 Claire Invite Studio. Uburenganzira bwose burabitswe.",
  },

  lg: {
    home: "Awaka",
    invitations: "Bubaka",
    pricing: "Ebiciro",
    faq: "Ebibuuzo",
    about: "Ebikwata ku Ffe",
    contact: "Tukubirire",

    story: "Ebyafaayo Byaffe",
    heroTitle: "Bubaka obulungi ku ntandikwa ennungi.",
    heroText:
      "Claire Invite Studio ekola digital invitations ennungi ezifuula ebiseera ebikulu okuba eby'enjawulo abagenyi bo bye bajja okujjukira.",

    whyLabel: "Lwaki Claire Invite Studio",
    whyTitle: "Invitation yo ye ndabirwamu esooka ey'emikolo gyo.",
    whyText1:
      "Tukkiriza nti invitation erina okukola ebisingawo ku kulangirira olunaku. Erina okuleeta essanyu, okutegeeza engeri omukolo gye gunabaamu n'okulaga abagenyi bo ekintu kye basuubira.",
    whyText2:
      "Okuva ku mbaga n'emikolo gy'okwanjula okutuuka ku birthdays, bridal showers n'emikolo emirala, tukola designs ezirina obuntu, obulungi n'enteekateeka ennungi.",
    quote: "Buli mukolo omulungi gutandikira ku invitation ennungi.",

    createLabel: "Bye Tukola",
    createTitle: "Bitegekeddwa okusinziira ku kiseera kyo",
    weddings: "Embaga",
    weddingsText:
      "Digital invitations ennungi ezitegekeddwa ku mbaga ezitasobola kwerabirwa.",
    introductions: "Emikolo gy'Okunoonya Obufumbo",
    introductionsText:
      "Invitations ez'obuwangwa ezissa ekitiibwa mu maka, obuwangwa, empisa n'okwagala.",
    celebrations: "Emikolo",
    celebrationsText:
      "Invitations ez'omulembe ku birthdays, bridal showers, anniversaries n'emikolo emirala.",

    promiseLabel: "Ekisuubizo Byaffe",
    promiseTitle: "Obulungi. Obuntu. Okujjukirwa.",
    promiseText:
      "Tussa essira ku details ezifuula invitation yo okuba eyiyo. Story yo, style yo, abantu bo n'omukolo gwo bigattibwa mu digital experience emu ennungi.",
    elegant: "Design Ennungi",
    personal: "Obuntu Obw'enjawulo",
    rsvp: "RSVP Ennyangu",
    mobile: "Ekola Ku Ssimu",

    experienceLabel: "Experience",
    experienceTitle: "Okuva ku kirowoozo okutuuka ku invitation",
    choose: "Londa",
    chooseText:
      "Laba invitation styles zaffe olonde design ekwatagana n'omukolo gwo.",
    personalize: "Teekamu Obuntu",
    personalizeText:
      "Tuwe amannya, olunaku, ekifo, bigambo n'amawulire amalala.",
    approve: "Kakasa",
    approveText:
      "Tutegeka invitation yo era tukola revisions ze mwakkiriziganyako.",
    celebrate: "Sanyuka",
    celebrateText:
      "Funa invitation yo ewedde era ogigabane n'abagenyi bo.",

    ctaLabel: "Ekiseera Kyo Kitandikira Wano",
    ctaTitle: "Oli mwetegefu okukola invitation abagenyi bo bajja okujjukira?",
    ctaText:
      "Laba collection yaffe olonde design ekwatagana n'omukolo gwo.",
    ctaButton: "Laba Invitations",

    footer: "© 2026 Claire Invite Studio. All rights reserved.",
  },

  sw: {
    home: "Nyumbani",
    invitations: "Mialiko",
    pricing: "Bei",
    faq: "Maswali",
    about: "Kuhusu Sisi",
    contact: "Wasiliana",

    story: "Hadithi Yetu",
    heroTitle: "Mialiko mizuri kwa mwanzo mzuri.",
    heroText:
      "Claire Invite Studio hutengeneza mialiko ya kidigitali yenye uzuri inayobadilisha nyakati muhimu kuwa kumbukumbu ambazo wageni wako watakumbuka.",

    whyLabel: "Kwa Nini Claire Invite Studio",
    whyTitle:
      "Mwaliko wako ni taswira ya kwanza ya sherehe yako.",
    whyText1:
      "Tunaamini mwaliko unapaswa kufanya zaidi ya kutangaza tarehe. Unapaswa kujenga matarajio, kuonyesha hisia za tukio na kuwapa wageni wako picha ya kile kitakachokuja.",
    whyText2:
      "Kuanzia harusi na sherehe za utambulisho hadi birthday, bridal shower na sherehe nyingine, tunatengeneza designs zenye utu, uzuri na mpangilio mzuri.",
    quote: "Kila sherehe nzuri huanza na mwaliko mzuri.",

    createLabel: "Tunachotengeneza",
    createTitle: "Umetengenezwa kwa ajili ya wakati wako",
    weddings: "Harusi",
    weddingsText:
      "Mialiko ya kidigitali yenye uzuri kwa sherehe za harusi zisizosahaulika.",
    introductions: "Utambulisho wa Kimila",
    introductionsText:
      "Mialiko yenye heshima inayoadhimisha familia, utamaduni, mila na upendo.",
    celebrations: "Sherehe",
    celebrationsText:
      "Mialiko ya kisasa kwa birthday, bridal shower, anniversaries na matukio maalum.",

    promiseLabel: "Ahadi Yetu",
    promiseTitle: "Nzuri. Binafsi. Ya Kukumbukwa.",
    promiseText:
      "Tunazingatia maelezo yanayofanya mwaliko wako uwe wako. Hadithi yako, mtindo wako, watu wako na sherehe yako huunganishwa katika uzoefu mmoja mzuri wa kidigitali.",
    elegant: "Design Nzuri",
    personal: "Mguso Binafsi",
    rsvp: "RSVP Rahisi",
    mobile: "Inafanya Kazi Kwenye Simu",

    experienceLabel: "Uzoefu",
    experienceTitle: "Kutoka kwenye wazo hadi mwaliko",
    choose: "Chagua",
    chooseText:
      "Tazama mitindo yetu ya mialiko na uchague design inayolingana na sherehe yako.",
    personalize: "Binafsisha",
    personalizeText:
      "Tuambie majina yako, tarehe, ukumbi, maneno na maelezo maalum.",
    approve: "Thibitisha",
    approveText:
      "Tunatayarisha mwaliko wako na kufanya marekebisho mliyokubaliana.",
    celebrate: "Sherehekea",
    celebrateText:
      "Pokea mwaliko wako uliokamilika na ushirikishe wageni wako wakati wako maalum.",

    ctaLabel: "Wakati Wako Unaaza Hapa",
    ctaTitle:
      "Uko tayari kutengeneza mwaliko ambao wageni wako watakumbuka?",
    ctaText:
      "Angalia collection yetu na upate design inayofaa kwa sherehe yako.",
    ctaButton: "Angalia Mialiko",

    footer: "© 2026 Claire Invite Studio. Haki zote zimehifadhiwa.",
  },

  fr: {
    home: "Accueil",
    invitations: "Invitations",
    pricing: "Tarifs",
    faq: "FAQ",
    about: "À propos",
    contact: "Contact",

    story: "Notre Histoire",
    heroTitle: "De belles invitations pour de beaux commencements.",
    heroText:
      "Claire Invite Studio crée des invitations numériques élégantes qui transforment les moments importants en expériences dont vos invités se souviendront.",

    whyLabel: "Pourquoi Claire Invite Studio",
    whyTitle:
      "Votre invitation est la première impression de votre célébration.",
    whyText1:
      "Nous pensons qu'une invitation doit faire plus qu'annoncer une date. Elle doit créer de l'anticipation, transmettre l'esprit de l'occasion et donner à vos invités un aperçu de ce qui les attend.",
    whyText2:
      "Des mariages et cérémonies traditionnelles aux anniversaires, bridal showers et autres célébrations, nous créons des designs personnels, élégants et réfléchis.",
    quote:
      "Chaque belle célébration commence par une belle invitation.",

    createLabel: "Ce Que Nous Créons",
    createTitle: "Conçu autour de votre moment",
    weddings: "Mariages",
    weddingsText:
      "Des invitations numériques élégantes pour des mariages inoubliables.",
    introductions: "Cérémonies Traditionnelles",
    introductionsText:
      "Des invitations sophistiquées qui honorent la famille, la culture, la tradition et l'amour.",
    celebrations: "Célébrations",
    celebrationsText:
      "Des invitations modernes pour anniversaires, bridal showers, anniversaires de mariage et occasions spéciales.",

    promiseLabel: "Notre Promesse",
    promiseTitle: "Élégant. Personnel. Mémorable.",
    promiseText:
      "Nous accordons une grande importance aux détails qui rendent votre invitation unique. Votre histoire, votre style, vos proches et votre célébration se réunissent dans une magnifique expérience numérique.",
    elegant: "Design Élégant",
    personal: "Touche Personnelle",
    rsvp: "RSVP Facile",
    mobile: "Compatible Mobile",

    experienceLabel: "L'Expérience",
    experienceTitle: "De l'idée à l'invitation",
    choose: "Choisir",
    chooseText:
      "Découvrez nos styles d'invitations et choisissez le design qui correspond à votre célébration.",
    personalize: "Personnaliser",
    personalizeText:
      "Donnez-nous vos noms, la date, le lieu, le texte et les détails particuliers.",
    approve: "Approuver",
    approveText:
      "Nous préparons votre invitation et effectuons les modifications convenues.",
    celebrate: "Célébrer",
    celebrateText:
      "Recevez votre invitation terminée et partagez votre moment spécial avec vos invités.",

    ctaLabel: "Votre Moment Commence Ici",
    ctaTitle:
      "Prêt à créer une invitation dont vos invités se souviendront ?",
    ctaText:
      "Découvrez notre collection et trouvez le design qui correspond à votre célébration.",
    ctaButton: "Découvrir les Invitations",

    footer: "© 2026 Claire Invite Studio. Tous droits réservés.",
  },
};

export default function AboutPage() {
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
          <Link
            href="/"
            className="transition hover:text-[#B08D57]"
          >
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

          <Link
            href="/faq"
            className="transition hover:text-[#B08D57]"
          >
            {t.faq}
          </Link>

          <Link
            href="/about"
            className="font-semibold text-[#B08D57]"
          >
            {t.about}
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-[#174A3B] px-5 py-2.5 text-white transition hover:bg-[#B08D57]"
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
      <section className="px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
          {t.story}
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-semibold md:text-6xl">
          {t.heroTitle}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#66756F]">
          {t.heroText}
        </p>
      </section>

      {/* Our Philosophy */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#B08D57]">
              {t.whyLabel}
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              {t.whyTitle}
            </h2>

            <p className="mt-6 leading-8 text-[#66756F]">
              {t.whyText1}
            </p>

            <p className="mt-5 leading-8 text-[#66756F]">
              {t.whyText2}
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#174A3B] p-10 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9C7A3]" />
              <span className="text-[#D9C7A3]">✦</span>
              <span className="h-px w-10 bg-[#D9C7A3]" />
            </div>

            <p className="mt-8 font-serif text-3xl italic leading-10 text-[#D9C7A3]">
              “{t.quote}”
            </p>

            <div className="mt-10 h-px bg-[#D9C7A3]/40" />

            <p className="mt-8 text-sm uppercase tracking-[0.25em] text-white/60">
              Claire Invite Studio
            </p>
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#B08D57]">
            {t.createLabel}
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            {t.createTitle}
          </h2>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            <div className="rounded-[2rem] border border-[#E5DED2] bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="font-serif text-3xl text-[#B08D57]">
                01
              </p>

              <h3 className="mt-5 font-serif text-2xl">
                {t.weddings}
              </h3>

              <p className="mt-3 leading-7 text-[#66756F]">
                {t.weddingsText}
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E5DED2] bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="font-serif text-3xl text-[#B08D57]">
                02
              </p>

              <h3 className="mt-5 font-serif text-2xl">
                {t.introductions}
              </h3>

              <p className="mt-3 leading-7 text-[#66756F]">
                {t.introductionsText}
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E5DED2] bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="font-serif text-3xl text-[#B08D57]">
                03
              </p>

              <h3 className="mt-5 font-serif text-2xl">
                {t.celebrations}
              </h3>

              <p className="mt-3 leading-7 text-[#66756F]">
                {t.celebrationsText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-[#F4F1E9] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#B08D57]">
            {t.promiseLabel}
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            {t.promiseTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#66756F]">
            {t.promiseText}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-white px-6 py-3 text-sm shadow-sm">
              {t.elegant}
            </span>

            <span className="rounded-full bg-white px-6 py-3 text-sm shadow-sm">
              {t.personal}
            </span>

            <span className="rounded-full bg-white px-6 py-3 text-sm shadow-sm">
              {t.rsvp}
            </span>

            <span className="rounded-full bg-white px-6 py-3 text-sm shadow-sm">
              {t.mobile}
            </span>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#B08D57]">
            {t.experienceLabel}
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            {t.experienceTitle}
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#174A3B] font-serif text-xl text-white">
                1
              </div>

              <h3 className="mt-5 font-serif text-xl">
                {t.choose}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#66756F]">
                {t.chooseText}
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#174A3B] font-serif text-xl text-white">
                2
              </div>

              <h3 className="mt-5 font-serif text-xl">
                {t.personalize}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#66756F]">
                {t.personalizeText}
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#174A3B] font-serif text-xl text-white">
                3
              </div>

              <h3 className="mt-5 font-serif text-xl">
                {t.approve}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#66756F]">
                {t.approveText}
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#174A3B] font-serif text-xl text-white">
                4
              </div>

              <h3 className="mt-5 font-serif text-xl">
                {t.celebrate}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#66756F]">
                {t.celebrateText}
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

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl md:text-5xl">
          {t.ctaTitle}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
          {t.ctaText}
        </p>

        <Link
          href="/invitations"
          className="mt-9 inline-block rounded-full bg-[#D9C7A3] px-9 py-4 font-medium text-[#174A3B] transition hover:bg-white"
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