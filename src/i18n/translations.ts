export const translations = {
  de: {
    hero: {
      role: "projektmanager",
      cta: "linkedin-profil ansehen",
    },
    contact: {
      title: "kontakt",
      email: "e-mail",
      phone: "telefon",
      web: "web",
      address: "adresse",
      addressValue: "Gudvanger Str. 52\n10439 Berlin",
    },
    imprint: {
      title: "impressum",
      responsible: "verantwortlich",
      disclaimer: "haftungsausschluss",
      disclaimerText:
        "Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.",
    },
  },
  en: {
    hero: {
      role: "project manager",
      cta: "view linkedin profile",
    },
    contact: {
      title: "contact",
      email: "email",
      phone: "phone",
      web: "web",
      address: "address",
      addressValue: "Gudvanger Str. 52\n10439 Berlin",
    },
    imprint: {
      title: "imprint",
      responsible: "responsible",
      disclaimer: "disclaimer",
      disclaimerText:
        "The author assumes no liability for the accuracy, completeness, or timeliness of the information provided.",
    },
  },
} as const;

export type Lang = keyof typeof translations;
