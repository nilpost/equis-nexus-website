export const locales = ["en", "ca", "es", "ja"] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  en: "English",
  ca: "Català",
  es: "Español",
  ja: "日本語",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return normalized;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function pathForLocale(pathname: string, locale: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && isLocale(parts[0])) parts.shift();
  const base = parts.length ? `/${parts.join("/")}` : "/";
  return localizedPath(locale, base);
}

const shared = {
  companyName: "Equis Nexus",
  legalName: "Ｅｑｕｉｓ　Ｎｅｘｕｓ合同会社",
  corporateNumber: "8011003023839",
  email: "icontact@equis-nexus.com",
};

export const copy = {
  en: {
    ...shared,
    languageLabel: "Language",
    nav: {
      purpose: "Purpose",
      focus: "Focus",
      portfolio: "Portfolio",
      vision: "Vision",
      login: "Investor Login",
      contact: "Contact",
    },
    footer: {
      location: "Tokyo, Japan",
      login: "Investor Login",
      top: "Back to top ↑",
    },
    home: {
      hero: {
        eyebrow: "Japanese real estate · Long-term value",
        titleA: "Rooted in Japan.",
        titleB: "Built for what’s next.",
        intro:
          "Equis Nexus is a Tokyo-based investment and asset-management company. We acquire, improve and steward Japanese real estate as the foundation for a broader international platform.",
        purpose: "Explore our purpose",
        asset: "View our first asset",
        indexA: "Foundation",
        valueA: "Real assets",
        indexB: "Perspective",
        valueB: "Long term",
        focusLabel: "Company focus",
      },
      purpose: {
        number: "01 / Purpose",
        kicker: "Why we exist",
        titleA: "To turn real assets into",
        titleB: "enduring value.",
        lead:
          "Equis Nexus was established in Japan as a dedicated platform for acquiring, financing, owning, improving and managing real estate.",
        detail:
          "Our mission is to create lasting value through disciplined investment, active stewardship and a thoughtful understanding of place. We favour clear fundamentals over short-term noise—and build every asset as part of a stronger whole.",
      },
      name: {
        number: "02 / Our name",
        kicker: "Equis · Nexus",
        titleA: "Where opportunity",
        titleB: "and connection meet.",
        first:
          "Equis represents the X—the point where paths, perspectives and opportunities intersect. Nexus is the connection that turns those intersections into lasting value.",
        second:
          "Together, Equis Nexus expresses our role as a bridge between Japan, real assets, international capital, expertise and new enterprise.",
        meaning: "Name meaning",
        equis: "Equis / Intersection",
        nexus: "Nexus / Connection",
      },
      focus: {
        number: "03 / Focus",
        status: "Our foundation today",
        title: "Japanese real estate, actively stewarded.",
        intro:
          "We approach ownership as an active practice—from initial evaluation to improvement, operation and long-term management.",
        pillars: [
          {
            title: "Acquire",
            text: "Identify real-estate opportunities in Japan with durable fundamentals and a clear investment rationale.",
          },
          {
            title: "Improve",
            text: "Enhance assets through considered design, renovation, positioning and operational discipline.",
          },
          {
            title: "Steward",
            text: "Own and manage for the long term, balancing performance, resilience and responsible care.",
          },
        ],
      },
      portfolio: {
        number: "04 / Portfolio",
        owned: "Owned asset · Japan",
        titleA: "Jingumae",
        titleB: "Residence.",
        summary:
          "The first asset in the Equis Nexus portfolio—and the working expression of our acquire, improve and steward model.",
        explore: "Explore the asset",
        login: "Investor Login →",
      },
      vision: {
        number: "05 / Vision",
        kicker: "Where we are going",
        titleA: "A bridge between Japan",
        titleB: "and the world.",
        lead:
          "Our long-term vision is to become a trusted platform where capital, assets, expertise and new enterprise connect across borders.",
        note:
          "Real estate is the foundation. As Equis Nexus grows, we intend to extend that disciplined approach into carefully selected opportunities that connect Japan with international markets.",
        horizon: "Future horizon",
        items: [
          "Selective cross-border investment",
          "Strategic partnerships and advisory",
          "Technology-informed new ventures",
        ],
        disclaimer:
          "These areas express our long-term direction and are not presented as current operating divisions.",
      },
      principles: {
        number: "06 / Principles",
        title: "How we think",
        items: [
          {
            title: "Patient capital",
            text: "Decisions shaped by long-term value, not short-term pressure.",
          },
          {
            title: "Active stewardship",
            text: "Ownership with care, accountability and continuous attention.",
          },
          {
            title: "Connected perspective",
            text: "Japanese insight informed by an international point of view.",
          },
        ],
      },
      company: {
        number: "07 / Company",
        title: "Built on a formal Japanese structure.",
        registered: "Registered name",
        form: "Legal form",
        formValue: "Godo Kaisha · GK",
        numberLabel: "Corporate number",
        office: "Registered office",
        officeValue: "Jingumae, Shibuya-ku · Tokyo, Japan",
      },
      contact: {
        number: "08 / Contact",
        kicker: "Investment · Partnerships · Enquiries",
        titleA: "Let’s build",
        titleB: "what’s next.",
      },
    },
    asset: {
      metaTitle: "Jingumae Residence | Equis Nexus Portfolio",
      metaDescription:
        "Jingumae Residence is the first asset in the Equis Nexus Japanese real-estate portfolio.",
      eyebrow: "Asset 01 · Equis Nexus Portfolio",
      titleA: "Jingumae",
      titleB: "Residence.",
      location: "Jingumae · Shibuya · Tokyo",
      statusLabel: "Status",
      status: "Active stewardship",
      strategyLabel: "Strategy",
      strategy: "Company use · Long-term hold · Active improvement",
      thesisNumber: "01 / Investment thesis",
      thesisTitleA: "A first asset.",
      thesisTitleB: "A working model.",
      thesis: [
        "A central Tokyo location connecting Shibuya, Omotesando and the wider Jingumae district.",
        "A durable reinforced-concrete asset suited to considered improvement and long-term ownership.",
        "A first operating asset through which Equis Nexus applies disciplined acquisition, improvement and stewardship.",
      ],
      profileNumber: "02 / Asset profile",
      profileTitle: "Verified fundamentals",
      profileIntro:
        "Public information is intentionally limited to approved company records and corroborated building-level facts.",
      facts: {
        Location: ["Location", "Jingumae, Shibuya, Tokyo"],
        Acquired: ["Acquired", "2026"],
        Completion: ["Completion", "2002"],
        Structure: ["Structure", "Reinforced concrete"],
        "Building scale": ["Building scale", "Five floors"],
        Connectivity: ["Connectivity", "Shibuya · Omotesando"],
      },
      timelineNumber: "03 / Value creation",
      timelineTitle: "From acquisition to stewardship.",
      timeline: [
        [
          "2026",
          "Acquisition",
          "Equis Nexus established its real-estate platform through the acquisition and corporate ownership of its first Japanese asset.",
        ],
        [
          "2026",
          "Improvement",
          "A considered programme of renovation, furnishing and operational preparation is advancing the asset’s long-term use.",
        ],
        [
          "Ongoing",
          "Stewardship",
          "The property is held for company use and managed with a long-term perspective on condition, utility and value.",
        ],
      ],
      performanceNumber: "04 / Performance",
      performanceTitleA: "Evidence before",
      performanceTitleB: "exposure.",
      performanceIntro:
        "Equis Nexus publishes percentage-based asset performance only after the underlying information, reporting date and valuation basis have been independently supported and approved.",
      reportingStatus: "Public reporting status",
      pending: "Independent verification pending",
      pendingDetail:
        "No asset-level financial percentage is currently approved for public release. Exact JPY figures remain private.",
      asOf: "As of",
      metrics: [
        [
          "Capital-improvement progress",
          "Expenditure to date divided by approved improvement budget.",
        ],
        [
          "Loan-to-value",
          "Outstanding secured debt divided by independently supported current value.",
        ],
        ["Net-equity ratio", "Current value less debt, divided by current value."],
        [
          "Unrealized value uplift",
          "Independently supported current value less total cost basis, divided by total cost basis.",
        ],
      ],
      briefNumber: "05 / Investor brief",
      briefTitleA: "The complete picture,",
      briefTitleB: "shared with care.",
      briefText:
        "Qualified investors and strategic partners may request the current private brief, including approved acquisition, capitalization, improvement, valuation and risk information.",
      requestBrief: "Request investor brief",
      login: "Investor Login →",
      important: "Important information",
      disclosure:
        "This page is provided for general information only and does not constitute an offer, solicitation or investment recommendation. Financial information, when published, may be unaudited and may include unrealized valuation changes. Past or indicative performance is not a guarantee of future results. Information is subject to verification, revision and approval.",
      sources: "Building-level references:",
      authoritative: "Company records remain authoritative.",
    },
    login: {
      metaTitle: "Investor Access | Equis Nexus",
      metaDescription:
        "A preview of the private Equis Nexus investor portal for approved investors and partners.",
      eyebrow: "Private capital · Approved access",
      titleA: "Investor",
      titleB: "Access.",
      intro:
        "A private space for approved Equis Nexus investors and partners. The portal experience shown here is currently a preview.",
      portfolio: "View portfolio",
      home: "Return home",
      email: "Email address",
      emailPlaceholder: "name@company.com",
      code: "Investor access code",
      codePlaceholder: "Enter your access code",
      privacy: "This preview does not accept or store real credentials.",
      continue: "Continue",
      notice: "EN / Notice",
      message:
        "The Equis Nexus Investor Portal is currently in preparation. No account was created and no information was submitted. To request the current investor brief, please contact icontact@equis-nexus.com.",
      request: "Request the investor brief ↗",
    },
  },
  ca: {
    ...shared,
    languageLabel: "Idioma",
    nav: {
      purpose: "Propòsit",
      focus: "Enfocament",
      portfolio: "Cartera",
      vision: "Visió",
      login: "Accés d’inversors",
      contact: "Contacte",
    },
    footer: {
      location: "Tòquio, Japó",
      login: "Accés d’inversors",
      top: "Tornar a dalt ↑",
    },
    home: {
      hero: {
        eyebrow: "Immobiliari japonès · Valor a llarg termini",
        titleA: "Arrelats al Japó.",
        titleB: "Preparats per al que ve.",
        intro:
          "Equis Nexus és una companyia d’inversió i gestió d’actius amb seu a Tòquio. Adquirim, millorem i cuidem actius immobiliaris japonesos com a base d’una plataforma internacional més àmplia.",
        purpose: "Descobriu el nostre propòsit",
        asset: "Vegeu el nostre primer actiu",
        indexA: "Base",
        valueA: "Actius reals",
        indexB: "Perspectiva",
        valueB: "Llarg termini",
        focusLabel: "Enfocament de la companyia",
      },
      purpose: {
        number: "01 / Propòsit",
        kicker: "Per què existim",
        titleA: "Convertir actius reals en",
        titleB: "valor durador.",
        lead:
          "Equis Nexus es va establir al Japó com una plataforma dedicada a adquirir, finançar, posseir, millorar i gestionar actius immobiliaris.",
        detail:
          "La nostra missió és crear valor durador mitjançant una inversió disciplinada, una gestió activa i una comprensió profunda del lloc. Prioritzem els fonaments sòlids davant del soroll a curt termini i construïm cada actiu com a part d’un conjunt més fort.",
      },
      name: {
        number: "02 / El nostre nom",
        kicker: "Equis · Nexus",
        titleA: "On es troben",
        titleB: "l’oportunitat i la connexió.",
        first:
          "Equis representa la X: el punt on s’encreuen camins, perspectives i oportunitats. Nexus és la connexió que transforma aquestes interseccions en valor durador.",
        second:
          "Junts, Equis Nexus expressa el nostre paper com a pont entre el Japó, els actius reals, el capital internacional, el coneixement i les noves iniciatives.",
        meaning: "Significat del nom",
        equis: "Equis / Intersecció",
        nexus: "Nexus / Connexió",
      },
      focus: {
        number: "03 / Enfocament",
        status: "La nostra base actual",
        title: "Immobiliari japonès, gestionat activament.",
        intro:
          "Entenem la propietat com una pràctica activa: des de l’avaluació inicial fins a la millora, l’operació i la gestió a llarg termini.",
        pillars: [
          {
            title: "Adquirir",
            text: "Identificar oportunitats immobiliàries al Japó amb fonaments duradors i una tesi d’inversió clara.",
          },
          {
            title: "Millorar",
            text: "Potenciar els actius mitjançant disseny, renovació, posicionament i disciplina operativa.",
          },
          {
            title: "Gestionar",
            text: "Posseir i gestionar a llarg termini, equilibrant rendiment, resiliència i cura responsable.",
          },
        ],
      },
      portfolio: {
        number: "04 / Cartera",
        owned: "Actiu en propietat · Japó",
        titleA: "Jingumae",
        titleB: "Residence.",
        summary:
          "El primer actiu de la cartera d’Equis Nexus i l’expressió pràctica del nostre model d’adquirir, millorar i gestionar.",
        explore: "Descobriu l’actiu",
        login: "Accés d’inversors →",
      },
      vision: {
        number: "05 / Visió",
        kicker: "Cap on anem",
        titleA: "Un pont entre el Japó",
        titleB: "i el món.",
        lead:
          "La nostra visió a llarg termini és convertir-nos en una plataforma de confiança on el capital, els actius, el coneixement i les noves iniciatives connectin més enllà de les fronteres.",
        note:
          "L’immobiliari és la base. A mesura que Equis Nexus creixi, volem aplicar el mateix rigor a oportunitats seleccionades que connectin el Japó amb els mercats internacionals.",
        horizon: "Horitzó de futur",
        items: [
          "Inversió transfronterera selectiva",
          "Aliances estratègiques i assessorament",
          "Noves iniciatives guiades per la tecnologia",
        ],
        disclaimer:
          "Aquestes àrees expressen la nostra direcció a llarg termini i no es presenten com a divisions operatives actuals.",
      },
      principles: {
        number: "06 / Principis",
        title: "Com pensem",
        items: [
          {
            title: "Capital pacient",
            text: "Decisions guiades pel valor a llarg termini, no per la pressió immediata.",
          },
          {
            title: "Gestió activa",
            text: "Propietat amb cura, responsabilitat i atenció constant.",
          },
          {
            title: "Perspectiva connectada",
            text: "Coneixement del Japó amb una mirada internacional.",
          },
        ],
      },
      company: {
        number: "07 / Companyia",
        title: "Construïda sobre una estructura jurídica japonesa.",
        registered: "Nom registrat",
        form: "Forma jurídica",
        formValue: "Godo Kaisha · GK",
        numberLabel: "Número corporatiu",
        office: "Domicili social",
        officeValue: "Jingumae, Shibuya-ku · Tòquio, Japó",
      },
      contact: {
        number: "08 / Contacte",
        kicker: "Inversió · Aliances · Consultes",
        titleA: "Construïm",
        titleB: "el que ve.",
      },
    },
    asset: {
      metaTitle: "Jingumae Residence | Cartera d’Equis Nexus",
      metaDescription:
        "Jingumae Residence és el primer actiu de la cartera immobiliària japonesa d’Equis Nexus.",
      eyebrow: "Actiu 01 · Cartera d’Equis Nexus",
      titleA: "Jingumae",
      titleB: "Residence.",
      location: "Jingumae · Shibuya · Tòquio",
      statusLabel: "Estat",
      status: "Gestió activa",
      strategyLabel: "Estratègia",
      strategy: "Ús corporatiu · Tinença a llarg termini · Millora activa",
      thesisNumber: "01 / Tesi d’inversió",
      thesisTitleA: "Un primer actiu.",
      thesisTitleB: "Un model en acció.",
      thesis: [
        "Una ubicació cèntrica a Tòquio que connecta Shibuya, Omotesando i el conjunt del districte de Jingumae.",
        "Un actiu de formigó armat durador, adequat per a una millora acurada i una propietat a llarg termini.",
        "Un primer actiu operatiu on Equis Nexus aplica disciplina en l’adquisició, la millora i la gestió.",
      ],
      profileNumber: "02 / Perfil de l’actiu",
      profileTitle: "Fonaments verificats",
      profileIntro:
        "La informació pública es limita deliberadament a registres corporatius aprovats i dades de l’edifici corroborades.",
      facts: {
        Location: ["Ubicació", "Jingumae, Shibuya, Tòquio"],
        Acquired: ["Adquisició", "2026"],
        Completion: ["Finalització", "2002"],
        Structure: ["Estructura", "Formigó armat"],
        "Building scale": ["Escala de l’edifici", "Cinc plantes"],
        Connectivity: ["Connectivitat", "Shibuya · Omotesando"],
      },
      timelineNumber: "03 / Creació de valor",
      timelineTitle: "De l’adquisició a la gestió.",
      timeline: [
        [
          "2026",
          "Adquisició",
          "Equis Nexus va establir la seva plataforma immobiliària mitjançant l’adquisició i la propietat corporativa del seu primer actiu japonès.",
        ],
        [
          "2026",
          "Millora",
          "Un programa acurat de renovació, mobiliari i preparació operativa fa avançar l’ús de l’actiu a llarg termini.",
        ],
        [
          "En curs",
          "Gestió",
          "La propietat es manté per a ús corporatiu i es gestiona amb una perspectiva a llarg termini sobre l’estat, la utilitat i el valor.",
        ],
      ],
      performanceNumber: "04 / Rendiment",
      performanceTitleA: "Evidència abans de",
      performanceTitleB: "divulgació.",
      performanceIntro:
        "Equis Nexus només publica percentatges de rendiment quan la informació, la data d’informe i la base de valoració han estat verificades i aprovades de manera independent.",
      reportingStatus: "Estat de la informació pública",
      pending: "Verificació independent pendent",
      pendingDetail:
        "Actualment no hi ha cap percentatge financer de l’actiu aprovat per a publicació. Les xifres exactes en JPY continuen sent privades.",
      asOf: "A data de",
      metrics: [
        ["Progrés de les millores de capital", "Despesa fins avui dividida pel pressupost de millora aprovat."],
        ["Relació préstec-valor", "Deute garantit pendent dividit pel valor actual verificat independentment."],
        ["Ràtio de patrimoni net", "Valor actual menys deute, dividit pel valor actual."],
        ["Increment de valor no realitzat", "Valor actual verificat menys el cost total, dividit pel cost total."],
      ],
      briefNumber: "05 / Dossier per a inversors",
      briefTitleA: "La imatge completa,",
      briefTitleB: "compartida amb cura.",
      briefText:
        "Els inversors qualificats i els socis estratègics poden sol·licitar el dossier privat actual, amb informació aprovada sobre adquisició, capitalització, millores, valoració i risc.",
      requestBrief: "Sol·licitar el dossier",
      login: "Accés d’inversors →",
      important: "Informació important",
      disclosure:
        "Aquesta pàgina és només informativa i no constitueix una oferta, sol·licitud ni recomanació d’inversió. La informació financera, quan es publiqui, pot no estar auditada i pot incloure canvis de valoració no realitzats. El rendiment passat o indicatiu no garanteix resultats futurs. La informació està subjecta a verificació, revisió i aprovació.",
      sources: "Referències de l’edifici:",
      authoritative: "Els registres de la companyia són la font autoritzada.",
    },
    login: {
      metaTitle: "Accés d’inversors | Equis Nexus",
      metaDescription:
        "Vista prèvia del portal privat d’Equis Nexus per a inversors i socis aprovats.",
      eyebrow: "Capital privat · Accés aprovat",
      titleA: "Accés",
      titleB: "d’inversors.",
      intro:
        "Un espai privat per a inversors i socis aprovats d’Equis Nexus. L’experiència que es mostra és actualment una vista prèvia.",
      portfolio: "Veure la cartera",
      home: "Tornar a l’inici",
      email: "Adreça electrònica",
      emailPlaceholder: "nom@empresa.com",
      code: "Codi d’accés d’inversor",
      codePlaceholder: "Introduïu el codi d’accés",
      privacy: "Aquesta vista prèvia no accepta ni desa credencials reals.",
      continue: "Continuar",
      notice: "CA / Avís",
      message:
        "El Portal d’Inversors d’Equis Nexus està en preparació. No s’ha creat cap compte ni s’ha enviat cap informació. Per sol·licitar el dossier actual per a inversors, contacteu amb icontact@equis-nexus.com.",
      request: "Sol·licitar el dossier ↗",
    },
  },
  es: {
    ...shared,
    languageLabel: "Idioma",
    nav: {
      purpose: "Propósito",
      focus: "Enfoque",
      portfolio: "Cartera",
      vision: "Visión",
      login: "Acceso inversores",
      contact: "Contacto",
    },
    footer: {
      location: "Tokio, Japón",
      login: "Acceso inversores",
      top: "Volver arriba ↑",
    },
    home: {
      hero: {
        eyebrow: "Inmobiliario japonés · Valor a largo plazo",
        titleA: "Arraigados en Japón.",
        titleB: "Preparados para lo que viene.",
        intro:
          "Equis Nexus es una compañía de inversión y gestión de activos con sede en Tokio. Adquirimos, mejoramos y cuidamos activos inmobiliarios japoneses como base de una plataforma internacional más amplia.",
        purpose: "Conozca nuestro propósito",
        asset: "Ver nuestro primer activo",
        indexA: "Base",
        valueA: "Activos reales",
        indexB: "Perspectiva",
        valueB: "Largo plazo",
        focusLabel: "Enfoque de la compañía",
      },
      purpose: {
        number: "01 / Propósito",
        kicker: "Por qué existimos",
        titleA: "Convertir activos reales en",
        titleB: "valor duradero.",
        lead:
          "Equis Nexus se estableció en Japón como una plataforma dedicada a adquirir, financiar, poseer, mejorar y gestionar activos inmobiliarios.",
        detail:
          "Nuestra misión es crear valor duradero mediante inversión disciplinada, gestión activa y una comprensión cuidadosa del lugar. Preferimos fundamentos claros al ruido de corto plazo y desarrollamos cada activo como parte de un conjunto más sólido.",
      },
      name: {
        number: "02 / Nuestro nombre",
        kicker: "Equis · Nexus",
        titleA: "Donde se encuentran",
        titleB: "la oportunidad y la conexión.",
        first:
          "Equis representa la X: el punto donde se cruzan caminos, perspectivas y oportunidades. Nexus es la conexión que convierte esas intersecciones en valor duradero.",
        second:
          "Juntos, Equis Nexus expresa nuestro papel como puente entre Japón, los activos reales, el capital internacional, el conocimiento y las nuevas iniciativas.",
        meaning: "Significado del nombre",
        equis: "Equis / Intersección",
        nexus: "Nexus / Conexión",
      },
      focus: {
        number: "03 / Enfoque",
        status: "Nuestra base actual",
        title: "Inmobiliario japonés, gestionado activamente.",
        intro:
          "Entendemos la propiedad como una práctica activa: desde la evaluación inicial hasta la mejora, la operación y la gestión a largo plazo.",
        pillars: [
          {
            title: "Adquirir",
            text: "Identificar oportunidades inmobiliarias en Japón con fundamentos duraderos y una tesis de inversión clara.",
          },
          {
            title: "Mejorar",
            text: "Potenciar los activos mediante diseño, renovación, posicionamiento y disciplina operativa.",
          },
          {
            title: "Gestionar",
            text: "Poseer y gestionar a largo plazo, equilibrando rendimiento, resiliencia y cuidado responsable.",
          },
        ],
      },
      portfolio: {
        number: "04 / Cartera",
        owned: "Activo en propiedad · Japón",
        titleA: "Jingumae",
        titleB: "Residence.",
        summary:
          "El primer activo de la cartera de Equis Nexus y la expresión práctica de nuestro modelo de adquirir, mejorar y gestionar.",
        explore: "Conocer el activo",
        login: "Acceso inversores →",
      },
      vision: {
        number: "05 / Visión",
        kicker: "Hacia dónde vamos",
        titleA: "Un puente entre Japón",
        titleB: "y el mundo.",
        lead:
          "Nuestra visión a largo plazo es convertirnos en una plataforma de confianza donde el capital, los activos, el conocimiento y las nuevas iniciativas se conecten a través de las fronteras.",
        note:
          "El sector inmobiliario es la base. A medida que Equis Nexus crezca, aplicaremos el mismo rigor a oportunidades seleccionadas que conecten Japón con los mercados internacionales.",
        horizon: "Horizonte futuro",
        items: [
          "Inversión transfronteriza selectiva",
          "Alianzas estratégicas y asesoramiento",
          "Nuevas iniciativas impulsadas por tecnología",
        ],
        disclaimer:
          "Estas áreas expresan nuestra dirección a largo plazo y no se presentan como divisiones operativas actuales.",
      },
      principles: {
        number: "06 / Principios",
        title: "Cómo pensamos",
        items: [
          {
            title: "Capital paciente",
            text: "Decisiones guiadas por el valor a largo plazo, no por la presión inmediata.",
          },
          {
            title: "Gestión activa",
            text: "Propiedad con cuidado, responsabilidad y atención continua.",
          },
          {
            title: "Perspectiva conectada",
            text: "Conocimiento de Japón informado por una mirada internacional.",
          },
        ],
      },
      company: {
        number: "07 / Compañía",
        title: "Construida sobre una estructura jurídica japonesa.",
        registered: "Nombre registrado",
        form: "Forma jurídica",
        formValue: "Godo Kaisha · GK",
        numberLabel: "Número corporativo",
        office: "Domicilio social",
        officeValue: "Jingumae, Shibuya-ku · Tokio, Japón",
      },
      contact: {
        number: "08 / Contacto",
        kicker: "Inversión · Alianzas · Consultas",
        titleA: "Construyamos",
        titleB: "lo que viene.",
      },
    },
    asset: {
      metaTitle: "Jingumae Residence | Cartera de Equis Nexus",
      metaDescription:
        "Jingumae Residence es el primer activo de la cartera inmobiliaria japonesa de Equis Nexus.",
      eyebrow: "Activo 01 · Cartera de Equis Nexus",
      titleA: "Jingumae",
      titleB: "Residence.",
      location: "Jingumae · Shibuya · Tokio",
      statusLabel: "Estado",
      status: "Gestión activa",
      strategyLabel: "Estrategia",
      strategy: "Uso corporativo · Tenencia a largo plazo · Mejora activa",
      thesisNumber: "01 / Tesis de inversión",
      thesisTitleA: "Un primer activo.",
      thesisTitleB: "Un modelo en acción.",
      thesis: [
        "Una ubicación central en Tokio que conecta Shibuya, Omotesando y el conjunto del distrito de Jingumae.",
        "Un activo duradero de hormigón armado, adecuado para una mejora cuidada y una propiedad a largo plazo.",
        "Un primer activo operativo donde Equis Nexus aplica disciplina en adquisición, mejora y gestión.",
      ],
      profileNumber: "02 / Perfil del activo",
      profileTitle: "Fundamentos verificados",
      profileIntro:
        "La información pública se limita deliberadamente a registros corporativos aprobados y datos corroborados del edificio.",
      facts: {
        Location: ["Ubicación", "Jingumae, Shibuya, Tokio"],
        Acquired: ["Adquisición", "2026"],
        Completion: ["Finalización", "2002"],
        Structure: ["Estructura", "Hormigón armado"],
        "Building scale": ["Escala del edificio", "Cinco plantas"],
        Connectivity: ["Conectividad", "Shibuya · Omotesando"],
      },
      timelineNumber: "03 / Creación de valor",
      timelineTitle: "De la adquisición a la gestión.",
      timeline: [
        [
          "2026",
          "Adquisición",
          "Equis Nexus estableció su plataforma inmobiliaria mediante la adquisición y propiedad corporativa de su primer activo japonés.",
        ],
        [
          "2026",
          "Mejora",
          "Un programa cuidadoso de renovación, mobiliario y preparación operativa impulsa el uso del activo a largo plazo.",
        ],
        [
          "En curso",
          "Gestión",
          "La propiedad se mantiene para uso corporativo y se gestiona con una perspectiva a largo plazo sobre su estado, utilidad y valor.",
        ],
      ],
      performanceNumber: "04 / Rendimiento",
      performanceTitleA: "Evidencia antes de",
      performanceTitleB: "divulgación.",
      performanceIntro:
        "Equis Nexus solo publica porcentajes de rendimiento cuando la información, la fecha de reporte y la base de valoración han sido respaldadas y aprobadas de forma independiente.",
      reportingStatus: "Estado de información pública",
      pending: "Verificación independiente pendiente",
      pendingDetail:
        "Actualmente no hay ningún porcentaje financiero del activo aprobado para publicación. Las cifras exactas en JPY siguen siendo privadas.",
      asOf: "A fecha de",
      metrics: [
        ["Progreso de mejoras de capital", "Gasto hasta la fecha dividido por el presupuesto de mejora aprobado."],
        ["Relación préstamo-valor", "Deuda garantizada pendiente dividida por el valor actual respaldado independientemente."],
        ["Ratio de patrimonio neto", "Valor actual menos deuda, dividido por el valor actual."],
        ["Incremento de valor no realizado", "Valor actual respaldado menos el coste total, dividido por el coste total."],
      ],
      briefNumber: "05 / Informe para inversores",
      briefTitleA: "La imagen completa,",
      briefTitleB: "compartida con cuidado.",
      briefText:
        "Los inversores cualificados y socios estratégicos pueden solicitar el informe privado actual, con información aprobada sobre adquisición, capitalización, mejoras, valoración y riesgo.",
      requestBrief: "Solicitar informe",
      login: "Acceso inversores →",
      important: "Información importante",
      disclosure:
        "Esta página se ofrece únicamente con fines informativos y no constituye una oferta, solicitud ni recomendación de inversión. La información financiera, cuando se publique, puede no estar auditada e incluir cambios de valoración no realizados. El rendimiento pasado o indicativo no garantiza resultados futuros. La información está sujeta a verificación, revisión y aprobación.",
      sources: "Referencias del edificio:",
      authoritative: "Los registros de la compañía siguen siendo la fuente autorizada.",
    },
    login: {
      metaTitle: "Acceso inversores | Equis Nexus",
      metaDescription:
        "Vista previa del portal privado de Equis Nexus para inversores y socios aprobados.",
      eyebrow: "Capital privado · Acceso aprobado",
      titleA: "Acceso",
      titleB: "inversores.",
      intro:
        "Un espacio privado para inversores y socios aprobados de Equis Nexus. La experiencia que se muestra es actualmente una vista previa.",
      portfolio: "Ver cartera",
      home: "Volver al inicio",
      email: "Correo electrónico",
      emailPlaceholder: "nombre@empresa.com",
      code: "Código de acceso de inversor",
      codePlaceholder: "Introduzca su código de acceso",
      privacy: "Esta vista previa no acepta ni almacena credenciales reales.",
      continue: "Continuar",
      notice: "ES / Aviso",
      message:
        "El Portal de Inversores de Equis Nexus está en preparación. No se ha creado ninguna cuenta ni se ha enviado información. Para solicitar el informe actual para inversores, contacte con icontact@equis-nexus.com.",
      request: "Solicitar el informe ↗",
    },
  },
  ja: {
    ...shared,
    languageLabel: "言語",
    nav: {
      purpose: "目的",
      focus: "事業領域",
      portfolio: "ポートフォリオ",
      vision: "ビジョン",
      login: "投資家ログイン",
      contact: "お問い合わせ",
    },
    footer: {
      location: "日本・東京",
      login: "投資家ログイン",
      top: "ページ上部へ ↑",
    },
    home: {
      hero: {
        eyebrow: "日本の不動産 · 長期的価値",
        titleA: "日本に根ざし、",
        titleB: "次の未来を築く。",
        intro:
          "Equis Nexusは、東京を拠点とする投資・資産運用会社です。日本の不動産を取得し、価値を高め、長期的に管理することで、より広い国際プラットフォームの基盤を築きます。",
        purpose: "私たちの目的",
        asset: "最初の資産を見る",
        indexA: "基盤",
        valueA: "実物資産",
        indexB: "視点",
        valueB: "長期",
        focusLabel: "会社の重点領域",
      },
      purpose: {
        number: "01 / 目的",
        kicker: "私たちの存在意義",
        titleA: "実物資産を",
        titleB: "永続的な価値へ。",
        lead:
          "Equis Nexusは、不動産の取得、資金調達、保有、改良、運営を行う専門プラットフォームとして日本で設立されました。",
        detail:
          "規律ある投資、積極的な資産管理、そして場所への深い理解を通じて、持続する価値を創出することが私たちの使命です。短期的な動きよりも確かな本質を重視し、一つひとつの資産をより強い全体の一部として育てます。",
      },
      name: {
        number: "02 / 社名の意味",
        kicker: "Equis · Nexus",
        titleA: "機会とつながりが",
        titleB: "交わる場所。",
        first:
          "EquisはX、すなわち道、視点、機会が交差する地点を表します。Nexusは、その交差を永続的な価値へと変える「つながり」です。",
        second:
          "Equis Nexusという名には、日本、実物資産、国際資本、専門知識、新しい事業を結ぶ架け橋としての役割を込めています。",
        meaning: "社名の意味",
        equis: "Equis / 交差",
        nexus: "Nexus / つながり",
      },
      focus: {
        number: "03 / 事業領域",
        status: "現在の事業基盤",
        title: "日本の不動産を、主体的に運用する。",
        intro:
          "初期評価から改良、運営、長期管理まで、所有を継続的かつ主体的な営みとして捉えています。",
        pillars: [
          {
            title: "取得",
            text: "持続性のある基礎条件と明確な投資根拠を備えた、日本の不動産機会を見極めます。",
          },
          {
            title: "改良",
            text: "丁寧な設計、改修、ポジショニング、運営規律によって資産価値を高めます。",
          },
          {
            title: "運用",
            text: "収益性、耐久性、責任ある管理のバランスを取りながら長期保有・運用します。",
          },
        ],
      },
      portfolio: {
        number: "04 / ポートフォリオ",
        owned: "保有資産 · 日本",
        titleA: "Jingumae",
        titleB: "Residence.",
        summary:
          "Equis Nexusの最初のポートフォリオ資産であり、「取得・改良・運用」モデルを実践するプロジェクトです。",
        explore: "資産の詳細",
        login: "投資家ログイン →",
      },
      vision: {
        number: "05 / ビジョン",
        kicker: "目指す未来",
        titleA: "日本と世界を",
        titleB: "つなぐ架け橋へ。",
        lead:
          "資本、資産、専門知識、新しい事業が国境を越えてつながる、信頼されるプラットフォームを目指します。",
        note:
          "不動産はその基盤です。Equis Nexusの成長に伴い、同じ規律あるアプローチを、日本と国際市場を結ぶ厳選された機会へ広げていきます。",
        horizon: "将来の展望",
        items: [
          "選択的なクロスボーダー投資",
          "戦略的パートナーシップとアドバイザリー",
          "テクノロジーを生かした新規事業",
        ],
        disclaimer:
          "これらは長期的な方向性を示すもので、現在の事業部門として提示するものではありません。",
      },
      principles: {
        number: "06 / 原則",
        title: "私たちの考え方",
        items: [
          {
            title: "長期志向の資本",
            text: "短期的な圧力ではなく、長期的な価値に基づいて判断します。",
          },
          {
            title: "主体的な資産管理",
            text: "責任、配慮、継続的な注意をもって所有します。",
          },
          {
            title: "つながる視点",
            text: "日本への理解に国際的な視点を重ねます。",
          },
        ],
      },
      company: {
        number: "07 / 会社概要",
        title: "日本の正式な法人基盤。",
        registered: "登記名",
        form: "法人形態",
        formValue: "合同会社 · GK",
        numberLabel: "法人番号",
        office: "登記所在地",
        officeValue: "東京都渋谷区神宮前",
      },
      contact: {
        number: "08 / お問い合わせ",
        kicker: "投資 · パートナーシップ · 各種お問い合わせ",
        titleA: "次の価値を、",
        titleB: "ともに築く。",
      },
    },
    asset: {
      metaTitle: "Jingumae Residence | Equis Nexus ポートフォリオ",
      metaDescription:
        "Jingumae Residenceは、Equis Nexusの日本不動産ポートフォリオ第1号資産です。",
      eyebrow: "資産 01 · Equis Nexus ポートフォリオ",
      titleA: "Jingumae",
      titleB: "Residence.",
      location: "東京 · 渋谷 · 神宮前",
      statusLabel: "状況",
      status: "運用・価値向上中",
      strategyLabel: "戦略",
      strategy: "会社利用 · 長期保有 · 積極的な価値向上",
      thesisNumber: "01 / 投資仮説",
      thesisTitleA: "最初の資産。",
      thesisTitleB: "実践されるモデル。",
      thesis: [
        "渋谷、表参道、神宮前エリアを結ぶ東京都心の立地。",
        "丁寧な価値向上と長期保有に適した、耐久性の高い鉄筋コンクリート資産。",
        "Equis Nexusが規律ある取得・改良・運用を実践する最初の事業資産。",
      ],
      profileNumber: "02 / 資産概要",
      profileTitle: "確認済みの基本情報",
      profileIntro:
        "公開情報は、承認済みの会社記録および裏付けのある建物単位の事実に限定しています。",
      facts: {
        Location: ["所在地", "東京都渋谷区神宮前"],
        Acquired: ["取得年", "2026年"],
        Completion: ["竣工", "2002年"],
        Structure: ["構造", "鉄筋コンクリート造"],
        "Building scale": ["建物規模", "5階建て"],
        Connectivity: ["アクセス", "渋谷 · 表参道"],
      },
      timelineNumber: "03 / 価値創造",
      timelineTitle: "取得から長期運用へ。",
      timeline: [
        [
          "2026",
          "取得",
          "Equis Nexusは、日本での最初の資産を法人として取得・保有し、不動産プラットフォームを始動しました。",
        ],
        [
          "2026",
          "改良",
          "改修、家具・設備、運営準備を丁寧に進め、資産の長期利用価値を高めています。",
        ],
        [
          "継続中",
          "運用",
          "会社利用のために保有し、状態、実用性、価値を長期的な視点で管理しています。",
        ],
      ],
      performanceNumber: "04 / パフォーマンス",
      performanceTitleA: "開示より先に、",
      performanceTitleB: "確かな根拠を。",
      performanceIntro:
        "Equis Nexusは、基礎情報、報告日、評価根拠が独立して確認・承認された場合にのみ、資産パフォーマンスを割合で公開します。",
      reportingStatus: "公開報告の状況",
      pending: "独立した検証を実施中",
      pendingDetail:
        "現在、公開承認済みの資産別財務比率はありません。正確な円建て金額は非公開です。",
      asOf: "基準日",
      metrics: [
        ["資本的改良の進捗", "承認済み改良予算に対する支出済み金額の割合。"],
        ["LTV（借入比率）", "独立した根拠のある現在価値に対する担保付債務残高の割合。"],
        ["純資産比率", "現在価値から債務を差し引き、現在価値で除した割合。"],
        ["未実現価値上昇率", "独立した根拠のある現在価値から総原価を差し引き、総原価で除した割合。"],
      ],
      briefNumber: "05 / 投資家向け資料",
      briefTitleA: "全体像を、",
      briefTitleB: "慎重に共有する。",
      briefText:
        "適格投資家および戦略的パートナーは、取得、資本構成、改良、評価、リスクに関する承認済み情報を含む最新の非公開資料を請求できます。",
      requestBrief: "投資家向け資料を請求",
      login: "投資家ログイン →",
      important: "重要事項",
      disclosure:
        "本ページは一般的な情報提供のみを目的としており、募集、勧誘、投資推奨を構成するものではありません。公開される財務情報は未監査の場合があり、未実現の評価変動を含むことがあります。過去または参考パフォーマンスは将来の成果を保証しません。情報は確認、修正、承認の対象となります。",
      sources: "建物情報の参照元：",
      authoritative: "会社記録を正式な情報源とします。",
    },
    login: {
      metaTitle: "投資家アクセス | Equis Nexus",
      metaDescription:
        "承認済みの投資家およびパートナー向けEquis Nexus非公開ポータルのプレビューです。",
      eyebrow: "プライベート資本 · 承認制アクセス",
      titleA: "投資家",
      titleB: "アクセス。",
      intro:
        "承認済みのEquis Nexus投資家およびパートナー専用スペースです。現在表示されているものは準備中のプレビューです。",
      portfolio: "ポートフォリオを見る",
      home: "ホームへ戻る",
      email: "メールアドレス",
      emailPlaceholder: "name@company.com",
      code: "投資家アクセスコード",
      codePlaceholder: "アクセスコードを入力",
      privacy: "このプレビューでは実際の認証情報を受け付けず、保存もしません。",
      continue: "続ける",
      notice: "JA / お知らせ",
      message:
        "Equis Nexus投資家ポータルは現在準備中です。アカウントは作成されず、情報も送信されていません。最新の投資家向け資料をご希望の場合は、icontact@equis-nexus.comまでご連絡ください。",
      request: "投資家向け資料を請求 ↗",
    },
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}

export const languageAlternates = {
  en: "/",
  ca: "/ca",
  es: "/es",
  ja: "/ja",
  "x-default": "/",
};
