// Bilingual dictionary. English is the default; Afrikaans is an opt-in toggle
// that can be removed later by deleting the `af` block and the LangToggle.

export type Locale = "en" | "af";

export const LOCALES: Locale[] = ["en", "af"];
export const DEFAULT_LOCALE: Locale = "en";

// Structural service order + numbering (text lives per-locale below, keyed by slug).
export const serviceSlugs = [
  "deure",
  "opknapping",
  "vensters",
  "palace-skuifdeure",
  "dakke-plafonne-afskortings",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

type ServiceCopy = {
  title: string;
  summary: string;
  description: string;
  points: string[];
};

const en = {
  langName: "English",
  location: "Cape Town, Western Cape",

  nav: {
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
  },

  cta: {
    quote: "Get a Quote",
    viewServices: "View our services",
    chat: "Chat to us",
  },

  hero: {
    line1: "Aluminium & glass,",
    red: "precisely",
    line2: "built.",
    sub: "Doors, windows, Palace sliding doors and renovations — custom-made and neatly installed for homes and businesses across Cape Town.",
    scroll: "Scroll to see more",
  },

  home: {
    whoEyebrow: "Who we are",
    introMain:
      "T&Q Aluminium & Glass designs, manufactures and installs aluminium and glass work that looks good and lasts for years. We work neatly, speak straight, and treat every project — ",
    introMuted: "big or small — with the same care.",
    servicesHeading: "Services",
    allServices: "All services",
    whyEyebrow: "Why T&Q",
    whyHeading: "Craftsmanship you can see and feel.",
    why: [
      {
        t: "Custom-made",
        d: "Every door, window and panel is built for your specific opening — not a standard size that almost fits.",
      },
      {
        t: "Honest quotes",
        d: "A clear price upfront, with no hidden costs. You decide whether to go ahead.",
      },
      {
        t: "Neat installation",
        d: "We arrive on time, work clean and tidy up afterwards. Your space is treated with respect.",
      },
    ],
    processEyebrow: "How it works",
    processHeading: "From first conversation to final installation.",
    testimonialsEyebrow: "What clients say",
    galleryEyebrow: "Our work",
    galleryHeading: "Recent projects.",
    galleryCta: "View gallery",
    ctaHeading: "Let's build something that lasts.",
  },

  services: {
    deure: {
      title: "Single & Double Doors",
      summary:
        "Aluminium doors that sit well, run smoothly and last for years — for homes and businesses.",
      description:
        "We manufacture and install single and double doors in aluminium with glass panels of your choice. Every door is built to measure so it fits the opening precisely, closes neatly and complements the rest of your space.",
      points: [
        "Made to measure for any opening size",
        "Choice of glass, colours and handles",
        "Neat finish and reliable locking",
      ],
    },
    opknapping: {
      title: "Renovation Services",
      summary:
        "From a single room to a full extension — we handle the aluminium and glass work.",
      description:
        "Planning a renovation? We work with you to handle the aluminium and glass elements of the project, from planning and measuring through to final installation, with the least disruption to your home or business.",
      points: [
        "Advice and measuring with no obligation",
        "We work with your timeline and budget",
        "Neat, responsible installation",
      ],
    },
    vensters: {
      title: "Windows",
      summary:
        "Aluminium windows that let in more light, seal better and need almost no maintenance.",
      description:
        "We supply a range of aluminium windows — fixed, casement, sliding or top-hung — with glass options to suit your needs. Aluminium doesn't rust and needs little maintenance, making it ideal for the Cape climate.",
      points: [
        "Various styles and opening options",
        "Strong seals against wind and rain",
        "Rust-free and virtually maintenance-free",
      ],
    },
    "palace-skuifdeure": {
      title: "Palace Sliding Doors",
      summary:
        "Large glass sliding doors that connect inside and out seamlessly and open up the view.",
      description:
        "Palace sliding doors are built for larger openings where you want wide glass panels and a smooth glide. Perfect for opening a living area onto a patio or garden so light and space flow freely.",
      points: [
        "Wide panels for an open, light feel",
        "Smooth, sturdy sliding mechanism",
        "Ideal for patios and living areas",
      ],
    },
    "dakke-plafonne-afskortings": {
      title: "Roofing, Ceilings & Partitioning",
      summary:
        "Structural and finishing work — roofing, ceilings and partitions for any space.",
      description:
        "Beyond aluminium and glass we also handle roofing, ceilings and partitioning. Whether you want to divide a space, install a ceiling or add covering, we complete the work neatly and solidly.",
      points: [
        "Partitions for offices and homes",
        "Ceiling installation and repairs",
        "Covering and roofing solutions",
      ],
    },
  } as Record<ServiceSlug, ServiceCopy>,

  process: [
    {
      title: "Talk & measure",
      body: "We come look at the space, listen to what you need and take accurate measurements.",
    },
    {
      title: "Quote",
      body: "You get a clear quote with no surprises — you decide yourself whether to proceed.",
    },
    {
      title: "Manufacture",
      body: "Your aluminium and glass is custom-built to the approved specification.",
    },
    {
      title: "Install",
      body: "We install neatly, clean up afterwards and make sure you're happy.",
    },
  ],

  testimonials: [
    {
      quote:
        "The team replaced our old wooden windows with aluminium and the difference is huge. Neat work and they did exactly what they said.",
      name: "Elmarie van Zyl",
      place: "Durbanville",
    },
    {
      quote:
        "Our Palace sliding doors open the whole living area onto the patio. The installation was fast and the finish is excellent.",
      name: "Johan Petersen",
      place: "Milnerton",
    },
    {
      quote:
        "From the first quote they were honest and professional. The new double doors look beautiful and close perfectly.",
      name: "Nadia Adams",
      place: "Bellville",
    },
  ],

  services_page: {
    eyebrow: "What we do",
    title: "Services",
    intro:
      "Everything in aluminium and glass — custom-made and neatly installed. Choose a service below or request a quote.",
    ask: "Ask about",
    ctaHeading: "Not sure which option is best? We'll help you choose.",
  },

  gallery_page: {
    eyebrow: "Our work",
    title: "Gallery",
    intro:
      "A look at recent aluminium and glass projects — doors, windows, sliding doors and more, installed for homes and businesses across Cape Town.",
  },

  about: {
    eyebrow: "About us",
    title: "Aluminium & glass, built with care.",
    intro:
      "T&Q Aluminium & Glass works across Cape Town on homes and businesses. We keep it simple: good materials, precise craftsmanship and a team that does what they say.",
    approachEyebrow: "Our approach",
    approachMain:
      "We believe good work starts with listening. We come look at the space, understand what you want to achieve and then give honest advice — ",
    approachMuted: "even when the simplest option is the best.",
    approachBody:
      "Every project is custom-manufactured, whether it's a single window or a full renovation. We work neatly, respect your time and your space, and leave a finish we're proud of.",
    valuesHeading: "What we stand for.",
    values: [
      {
        t: "Craftsmanship",
        d: "We take the time to do it right. Neat joinery, smooth operation and a finish that lasts.",
      },
      {
        t: "Honesty",
        d: "Clear quotes and straight advice. No surprises on the invoice.",
      },
      {
        t: "Reliability",
        d: "We show up, communicate and complete the work as agreed.",
      },
    ],
    processEyebrow: "Our process",
    processHeading: "Four simple steps.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Get a quote.",
    intro:
      "Fill in the form and press send — WhatsApp opens with your message already filled in. Or contact us directly using the details alongside.",
    directEyebrow: "Direct contact",
    callLabel: "Call or WhatsApp",
    emailLabel: "Email",
    areaLabel: "Service area",
    facebookLabel: "Facebook",
    followUs: "Follow us",
  },

  form: {
    name: "Name",
    namePlaceholder: "Your name",
    phone: "Contact number",
    phonePlaceholder: "E.g. 081 234 5678",
    service: "Service",
    servicePlaceholder: "Choose a service (optional)",
    details: "Details",
    detailsPlaceholder: "Tell us briefly what you need",
    submit: "Send via WhatsApp",
    note: "When you send, WhatsApp opens with your message already filled in — you just press send. No email is sent.",
  },

  footer: {
    statement:
      "Custom aluminium and glass work for homes and businesses across Cape Town. Honest advice, neat installation.",
    followFacebook: "Follow us on Facebook",
    browse: "Browse",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved.",
    tagline: "Aluminium & Glass · Cape Town",
  },

  whatsapp: {
    enquiry: "Hi T&Q Aluminium & Glass, I have an enquiry.",
    greeting: "Hello T&Q Aluminium & Glass, I'd like to request a quote.",
    fName: "Name",
    fPhone: "Contact number",
    fService: "Service",
    fDetails: "Details",
  },

  notFound: {
    title: "Page not found.",
    body: "The page you're looking for doesn't exist or has moved. Let's get you back to the right place.",
    button: "Back to home",
  },
};

export type Dict = typeof en;

const af: Dict = {
  langName: "Afrikaans",
  location: "Kaapstad, Wes-Kaap",

  nav: {
    home: "Tuis",
    services: "Dienste",
    gallery: "Galery",
    about: "Oor Ons",
    contact: "Kontak",
  },

  cta: {
    quote: "Kry 'n Kwotasie",
    viewServices: "Bekyk ons dienste",
    chat: "Gesels met ons",
  },

  hero: {
    line1: "Aluminium & glas,",
    red: "presies",
    line2: "gebou.",
    sub: "Deure, vensters, Palace skuifdeure en opknappings — op maat gemaak en netjies geïnstalleer vir huise en besighede regoor Kaapstad.",
    scroll: "Blaai af om meer te sien",
  },

  home: {
    whoEyebrow: "Wie ons is",
    introMain:
      "T&Q Aluminium & Glass ontwerp, vervaardig en installeer aluminium- en glaswerk wat mooi lyk en jare lank hou. Ons werk netjies, praat reguit en behandel elke projek — ",
    introMuted: "groot of klein — met dieselfde sorg.",
    servicesHeading: "Dienste",
    allServices: "Alle dienste",
    whyEyebrow: "Waarom T&Q",
    whyHeading: "Vakmanskap wat jy kan sien en voel.",
    why: [
      {
        t: "Op maat gemaak",
        d: "Elke deur, venster en paneel word gebou vir jou spesifieke opening — nie 'n standaard grootte wat amper pas nie.",
      },
      {
        t: "Eerlike kwotasies",
        d: "'n Duidelike prys vooraf, sonder verborge koste. Jy besluit self of jy wil voortgaan.",
      },
      {
        t: "Netjiese installasie",
        d: "Ons kom betyds, werk skoon en ruim agterna op. Jou ruimte word met respek hanteer.",
      },
    ],
    processEyebrow: "Hoe dit werk",
    processHeading: "Van eerste gesprek tot finale installasie.",
    testimonialsEyebrow: "Wat kliënte sê",
    galleryEyebrow: "Ons werk",
    galleryHeading: "Onlangse projekte.",
    galleryCta: "Sien galery",
    ctaHeading: "Kom ons bou iets wat hou.",
  },

  services: {
    deure: {
      title: "Enkel- & Dubbeldeure",
      summary:
        "Aluminiumdeure wat mooi sit, glad loop en jare lank hou — vir huise en besighede.",
      description:
        "Ons vervaardig en installeer enkel- en dubbeldeure in aluminium met glaspanele na jou keuse. Elke deur word op maat gebou sodat dit presies in die opening pas, netjies sluit en die res van jou ruimte komplementeer.",
      points: [
        "Op maat gemaak vir enige openingsgrootte",
        "Keuse van glas, kleure en handvatsels",
        "Netjiese afwerking en betroubare sluitwerk",
      ],
    },
    opknapping: {
      title: "Opknappingsdienste",
      summary:
        "Van 'n enkele kamer tot 'n volledige aanbouing — ons hanteer die aluminium- en glaswerk.",
      description:
        "Beplan jy 'n opknapping? Ons werk saam met jou om die aluminium- en glaselemente van die projek te behartig, vanaf beplanning en maatneem tot die finale installasie, met die minste ontwrigting vir jou huis of besigheid.",
      points: [
        "Advies en maatneem sonder verpligting",
        "Werk saam met jou tydlyn en begroting",
        "Netjiese, verantwoordelike installasie",
      ],
    },
    vensters: {
      title: "Vensters",
      summary:
        "Aluminiumvensters wat meer lig inlaat, beter seël en amper geen onderhoud verg nie.",
      description:
        "Ons voorsien 'n reeks aluminiumvensters — vasgesteek, draai, skuif of top-hang — met glasopsies wat by jou behoefte pas. Aluminium roes nie en verg min onderhoud, wat dit ideaal maak vir die Kaapse klimaat.",
      points: [
        "Verskeie style en openingsopsies",
        "Sterk seëls teen wind en reën",
        "Roesvry en feitlik onderhoudsvry",
      ],
    },
    "palace-skuifdeure": {
      title: "Palace Skuifdeure",
      summary:
        "Groot glas-skuifdeure wat binne en buite naatloos verbind en die uitsig oopmaak.",
      description:
        "Palace skuifdeure is gebou vir groter openinge waar jy wye glaspanele en 'n gladde loop wil hê. Perfek om 'n leefarea na 'n patio of tuin oop te maak sodat lig en ruimte vrylik vloei.",
      points: [
        "Wye panele vir 'n oop, lig gevoel",
        "Gladde, stewige loopmeganisme",
        "Ideaal vir patio's en leefareas",
      ],
    },
    "dakke-plafonne-afskortings": {
      title: "Dakke, Plafonne & Afskortings",
      summary:
        "Strukturele en afwerkingswerk — dakke, plafonne en afskortings vir enige ruimte.",
      description:
        "Buiten aluminium en glas hanteer ons ook dakwerk, plafonne en afskortings. Of jy nou 'n ruimte wil verdeel, 'n plafon wil installeer of oordekking benodig, ons voltooi die werk netjies en stewig.",
      points: [
        "Afskortings vir kantore en huise",
        "Plafon-installasie en herstelwerk",
        "Oordekking en dakoplossings",
      ],
    },
  },

  process: [
    {
      title: "Gesels & maatneem",
      body: "Ons kom kyk na die ruimte, luister na wat jy nodig het en neem akkurate mates.",
    },
    {
      title: "Kwotasie",
      body: "Jy kry 'n duidelike kwotasie sonder verrassings — jy besluit self of jy wil voortgaan.",
    },
    {
      title: "Vervaardig",
      body: "Jou aluminium en glas word op maat gebou volgens die goedgekeurde spesifikasie.",
    },
    {
      title: "Installeer",
      body: "Ons installeer netjies, ruim agterna op en maak seker jy is tevrede.",
    },
  ],

  testimonials: [
    {
      quote:
        "Die span het ons ou houtvensters met aluminium vervang en die verskil is enorm. Netjiese werk en hulle het presies gedoen wat hulle gesê het.",
      name: "Elmarie van Zyl",
      place: "Durbanville",
    },
    {
      quote:
        "Ons Palace skuifdeure maak die hele leefarea oop na die patio. Die installasie was vinnig en die afwerking is uitstekend.",
      name: "Johan Petersen",
      place: "Milnerton",
    },
    {
      quote:
        "Van die eerste kwotasie af was hulle eerlik en professioneel. Die nuwe dubbeldeure lyk pragtig en sluit perfek.",
      name: "Nadia Adams",
      place: "Bellville",
    },
  ],

  services_page: {
    eyebrow: "Wat ons doen",
    title: "Dienste",
    intro:
      "Alles in aluminium en glas — op maat gemaak en netjies geïnstalleer. Kies 'n diens hieronder of vra 'n kwotasie aan.",
    ask: "Vra oor",
    ctaHeading: "Nie seker watter opsie die beste is nie? Ons help jou kies.",
  },

  gallery_page: {
    eyebrow: "Ons werk",
    title: "Galery",
    intro:
      "'n Kyk na onlangse aluminium- en glasprojekte — deure, vensters, skuifdeure en meer, geïnstalleer vir huise en besighede regoor Kaapstad.",
  },

  about: {
    eyebrow: "Oor ons",
    title: "Aluminium & glas, met sorg gebou.",
    intro:
      "T&Q Aluminium & Glass werk regoor Kaapstad aan huise en besighede. Ons hou dit eenvoudig: goeie materiaal, presiese vakmanskap en 'n span wat doen wat hulle sê.",
    approachEyebrow: "Ons benadering",
    approachMain:
      "Ons glo goeie werk begin met luister. Ons kom kyk na die ruimte, verstaan wat jy wil bereik en gee dan eerlike raad — ",
    approachMuted: "ook wanneer die eenvoudigste opsie die beste is.",
    approachBody:
      "Elke projek word op maat vervaardig, of dit nou 'n enkele venster of 'n volledige opknapping is. Ons werk netjies, respekteer jou tyd en jou ruimte, en laat 'n afwerking agter waarop ons trots is.",
    valuesHeading: "Waarvoor ons staan.",
    values: [
      {
        t: "Vakmanskap",
        d: "Ons neem tyd om dit reg te doen. Netjiese voegwerk, gladde loop en 'n afwerking wat hou.",
      },
      {
        t: "Eerlikheid",
        d: "Duidelike kwotasies en reguit advies. Geen verrassings op die faktuur nie.",
      },
      {
        t: "Betroubaarheid",
        d: "Ons daag op, kommunikeer en voltooi die werk soos ons ooreengekom het.",
      },
    ],
    processEyebrow: "Ons proses",
    processHeading: "Vier eenvoudige stappe.",
  },

  contact: {
    eyebrow: "Kontak",
    title: "Kry 'n kwotasie.",
    intro:
      "Vul die vorm in en druk stuur — WhatsApp maak oop met jou boodskap reeds ingevul. Of kontak ons direk met die besonderhede hier langsaan.",
    directEyebrow: "Direkte kontak",
    callLabel: "Bel of WhatsApp",
    emailLabel: "E-pos",
    areaLabel: "Diensgebied",
    facebookLabel: "Facebook",
    followUs: "Volg ons",
  },

  form: {
    name: "Naam",
    namePlaceholder: "Jou naam",
    phone: "Kontaknommer",
    phonePlaceholder: "Bv. 081 234 5678",
    service: "Diens",
    servicePlaceholder: "Kies 'n diens (opsioneel)",
    details: "Besonderhede",
    detailsPlaceholder: "Vertel ons kortliks wat jy benodig",
    submit: "Stuur via WhatsApp",
    note: "Wanneer jy stuur, maak WhatsApp oop met jou boodskap reeds ingevul — jy hoef net op stuur te druk. Geen e-pos word gestuur nie.",
  },

  footer: {
    statement:
      "Op maat aluminium- en glaswerk vir huise en besighede regoor Kaapstad. Eerlike advies, netjiese installasie.",
    followFacebook: "Volg ons op Facebook",
    browse: "Blaai",
    services: "Dienste",
    contact: "Kontak",
    rights: "Alle regte voorbehou.",
    tagline: "Aluminium & Glas · Kaapstad",
  },

  whatsapp: {
    enquiry: "Hallo T&Q Aluminium & Glass, ek het 'n navraag.",
    greeting: "Hallo T&Q Aluminium & Glass, ek wil graag 'n kwotasie aanvra.",
    fName: "Naam",
    fPhone: "Kontaknommer",
    fService: "Diens",
    fDetails: "Besonderhede",
  },

  notFound: {
    title: "Bladsy nie gevind nie.",
    body: "Die bladsy wat jy soek bestaan nie of is geskuif. Kom ons kry jou weer op die regte plek.",
    button: "Terug na tuis",
  },
};

export const translations: Record<Locale, Dict> = { en, af };
