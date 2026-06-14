import type { CampsiteConfig } from "../types";

/**
 * Camping PINK am Birkmoarhof — Spielberg (Steiermark), direkt am Red Bull Ring.
 * Familiengeführtes Event-Camping zu den Renn-Wochenenden (Formel 1 + MotoGP).
 * Inhalte zu 100 % aus raw/digest abgeleitet. Preise sind PRO EVENT-WOCHENENDE
 * (nicht pro Nacht) → im booking-Widget bewusst „auf Anfrage", echte ab-Preise im priceNote.
 */
const IMG = "/campsites/spielberg-camping";

const spielbergCamping: CampsiteConfig = {
  name: "Camping PINK am Birkmoarhof",
  shortName: "PINK",
  slug: "spielberg-camping",
  ort: "Spielberg",
  region: "Steiermark",
  brandKind: "Camping am Red Bull Ring",
  regionLong: "am Red Bull Ring · Murtal · Steiermark",

  heroVariant: "center",

  claim: "Dein Motorsport-Wochenende direkt am Red Bull Ring",
  claimEmphasis: "am Red Bull Ring",
  emailDetail: "der weite Blick ins Murtal von euren Stellplätzen",
  intro:
    "Seit über 20 Jahren familiengeführt, direkt neben dem Red Bull Ring: großzügige Wiesenstellplätze mit Blick ins Murtal, eigene Gastronomie und nur wenige Gehminuten bis zur Akkreditierung an der Strecke.",

  logo: { src: `${IMG}/logo.png`, alt: "Camping PINK Logo" },

  statement: {
    text: "Bei uns stehst du mit dem Vorzelt im Grünen — und die Rennstrecke liegt nur ein paar Schritte weiter.",
    emphasis: "ein paar Schritte",
  },

  pillars: [
    {
      title: "Wenige Gehminuten zur Strecke",
      text: "Camping PINK liegt unmittelbar neben dem Ringgelände — zur Akkreditierung an Eingang Nord/Schönberg und am Haupteingang Start-Ziel sind es nur ein paar Minuten zu Fuß.",
      image: { src: `${IMG}/weg-zum-red-bull-ring.webp`, alt: "Weg über den Campingplatz Richtung Red Bull Ring mit Blick ins Murtal" },
    },
    {
      title: "Stellplätze mit Murtal-Blick",
      text: "Saftig grüne Campingwiesen mit ebener Fläche oder leichter Hanglage — und vom Birkmoarhof aus der weite Blick über das Murtal mit Wiesen, Wäldern und Bergen.",
      image: { src: `${IMG}/stellplatz-murtalblick.webp`, alt: "Stellplatz mit Zelt und Auto und Blick über das Murtal" },
    },
    {
      title: "Familienbetrieb seit über 20 Jahren",
      text: "Das Team PINK besteht großteils aus Familie und Freunden — schon zu Zeiten des Österreichrings haben wir für die Großveranstaltungen unseren Platz geöffnet.",
      image: { src: `${IMG}/team-pink.webp`, alt: "Team von Camping PINK in pinken Westen vor der Murtaler Bergkulisse" },
    },
  ],

  usps: ["Direkt am Red Bull Ring", "Wiesenstellplätze mit Strom", "Eigene Gastronomie", "Gepflegte Sanitäranlagen", "Familiengeführt"],

  trust: {
    heading: "Warum Fans bei PINK ihr Lager aufschlagen",
    headingEmphasis: "ihr Lager",
    intro:
      "Seit über zwei Jahrzehnten öffnen wir rund um die Rennen am Red Bull Ring unsere Wiesen — mit kurzen Wegen zur Strecke, ehrlicher Gastronomie und einem Team, das dich beim Check-in persönlich einweist.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-ausblick-murtal.webp`, alt: "Campingplatz Birkmoar mit Wohnmobil und weitem Blick über das Murtal" },
  },

  breather: {
    image: { src: `${IMG}/camping-wiese-abendsonne.webp`, alt: "Grüne Campingwiese mit Zelten in der Abendsonne am Birkmoarhof" },
    line: "Grüne Wiesen, Blick ins Murtal — und abends Renn-Atmosphäre am Lagerfeuer.",
  },

  camping: {
    heading: "Camping am Birkmoarhof",
    intro:
      "Rund 200.000 m² Campingfläche, aufgeteilt in den Birkmoarhof und die Kneissl Area — mit allem, was ein gutes Renn-Wochenende braucht.",
    features: [
      {
        title: "Großzügige Stellplätze",
        text: "Ebene Wiesenflächen mit 63 m² oder 85 m² und Stromanschluss — Platz für Zelt, Wohnwagen und Wohnmobil. Die Zuteilung erfolgt durch das Team, nach First-Come-First-Serve.",
        image: { src: `${IMG}/stellplaetze-kneissl.webp`, alt: "Großzügige Wiesenstellplätze mit Zelten und Autos in der Abendsonne" },
      },
      {
        title: "Inmitten der Natur",
        text: "Das Areal liegt zwischen Wiesen und Wäldern, gepflegt und weitläufig — mit freiem Blick über das Murtal bis zu den umliegenden Bergen.",
        image: { src: `${IMG}/campingareal-natur.webp`, alt: "Campingareal am Waldrand mit Bergblick über das Murtal" },
      },
      {
        title: "Ganztägige Gastronomie",
        text: "Das ganze Wochenende kulinarische Rund-um-Versorgung: regionale Spezialitäten und internationale Küche, teils unter freiem Himmel, teils überdacht.",
        image: { src: `${IMG}/gastronomie-gastgarten.webp`, alt: "Gastgarten mit Getränkestand, Bierbänken und Lichterketten am Abend" },
      },
      {
        title: "Abende am Lagerfeuer",
        text: "Wenn die Rennen vorbei sind, wird zusammengesessen — Lagerfeuer, ein kühles Getränk und Camperinnen und Camper aus halb Europa direkt nebenan.",
        image: { src: `${IMG}/lagerfeuer-abend.webp`, alt: "Campinggäste auf einer Couch rund ums Lagerfeuer am Zeltplatz" },
      },
      {
        title: "Check-in mit Lächeln",
        text: "Das Team weist dich schon beim Check-in mit einem Lächeln ein und zeigt dir den Weg zu deinem Areal — gerne auch zweimal.",
        image: { src: `${IMG}/check-in-team.webp`, alt: "Camping-PINK-Mitarbeiterinnen beim Check-in der Gäste am Campingplatz" },
      },
      {
        title: "Partyprogramm am Innenhof",
        text: "Der überdachte Innenhof am Birkmoarhof lädt zu Speis und Trank ein und bietet abends Livemusik und Partyprogramm — bis zur vereinbarten Nachtruhe.",
        image: { src: `${IMG}/partyprogramm-innenhof.webp`, alt: "Abendliche Party am überdachten Innenhof von Camping PINK am Birkmoarhof" },
      },
    ],
  },

  mobilheime: {
    heading: "Lieber ein festes Dach?",
    intro: "Kein eigenes Equipment dabei? Diese bezugsfertige Unterkunft steht für dein Renn-Wochenende bereit.",
    items: [],
  },

  aktivitaeten: {
    heading: "Renngeschehen hautnah",
    intro: "Camping PINK öffnet zu den zwei großen Wochenenden am Red Bull Ring — den Motorsport erlebst du direkt vor der Haustür.",
    items: [
      {
        title: "Formel 1 GP 2026",
        text: "Vom 26. bis 28. Juni dreht die Formel 1 ihre Runden am Red Bull Ring — von deinem Stellplatz sind es nur Minuten zur Strecke.",
        image: { src: `${IMG}/formel-1-red-bull-ring.webp`, alt: "Formel-1-Rennwagen auf der Strecke des Red Bull Ring" },
      },
      {
        title: "MotoGP 2026",
        text: "Am Wochenende vom 18. bis 20. September gehört der Ring den schnellsten Motorrädern der Welt.",
        image: { src: `${IMG}/motogp-red-bull-ring.webp`, alt: "MotoGP-Startfeld auf dem Red Bull Ring in Spielberg mit grüner Alpenkulisse" },
      },
      {
        title: "Feiern mit Fans",
        text: "Zwischen den Sessions gehört das Areal den Fans: Entertainment, Musik und beste Stimmung mit Motorsportbegeisterten aus aller Welt.",
        image: { src: `${IMG}/feiern-motorsportfans.webp`, alt: "Jubelnde Motorsportfans mit Getränken in der Abendstimmung" },
      },
    ],
  },

  anreise: {
    heading: "Anreise nach Spielberg",
    modes: [
      { title: "Mit dem Auto", text: "Über die S36 Murtal Schnellstraße nach Spielberg; in der Rennwoche sind das Ringgelände und Camping PINK rundum ausgeschildert." },
      { title: "Mit der Bahn", text: "Die Bahnhöfe Zeltweg und Knittelfeld liegen wenige Kilometer entfernt — von dort weiter per Shuttle oder Taxi." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Graz ist rund eine Autostunde entfernt, Salzburg und Wien jeweils etwa zwei Stunden." },
    ],
  },

  galerie: {
    heading: "Camping PINK in Bildern",
    headingEmphasis: "in Bildern",
    intro: "Wiesen, Gastronomie und Renn-Atmosphäre — ein paar Eindrücke vom Areal am Birkmoarhof.",
    tag: "Red Bull Ring · Spielberg",
    moreCount: 20,
    images: [
      { src: `${IMG}/galerie-abendstimmung.webp`, alt: "Zwei Gäste feiern abends am Camping PINK unter bunten Lichterketten" },
      { src: `${IMG}/galerie-aussicht.webp`, alt: "Luftaufnahme des Red Bull Ring mit dem Camping-Areal von Camping PINK im Hintergrund" },
      { src: `${IMG}/galerie-gaeste-abend.webp`, alt: "Campinggäste vor ihrem Wohnmobil am Abend" },
      { src: `${IMG}/galerie-gastro-kaffee.webp`, alt: "Gäste beim Kaffee an den Bierbänken der Gastronomie" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Ring",
    headingEmphasis: "deinen Platz",
    intro: "Wähle dein Areal und deine Unterkunft — das Team PINK meldet sich persönlich mit der Verfügbarkeit für dein Renn-Wochenende.",
    pricesArePlaceholder: false,
    priceNote:
      "Preise pro Event-Wochenende, nicht pro Nacht — Stellplatz Birkmoarhof ab € 93 (MotoGP) bzw. € 356 (Formel 1), Kneissl Area ab € 475, Prefab Tent ab € 697, Event Lodge ab € 1.799. Stand laut Website — bitte bestätigen.",
    highlight: {
      title: "Wenige Minuten zur Strecke",
      text: "Von deinem Stellplatz erreichst du die Akkreditierung zum Red Bull Ring in wenigen Gehminuten.",
    },
    categories: [
      { id: "birkmoarhof", label: "Birkmoarhof" },
      { id: "kneissl", label: "Kneissl Area" },
      { id: "unterkuenfte", label: "Prefab Tent & Lodge" },
    ],
  },

  kontakt: {
    coords: { lat: 47.230679, lng: 14.77213 },
    tel: "+43 (0) 660 65 87 122",
    telHref: "tel:+436606587122",
    mail: "info@spielberg-camping.at",
    adresse: "Birkachweg 19 · 8724 Spielberg · Steiermark",
  },

  languages: ["DE", "EN", "IT", "NL"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Areale", href: "#camping" },
    ]},
    { label: "Unterkünfte", href: "#mobilheime" },
    { label: "Events", href: "#aktivitaeten" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default spielbergCamping;
