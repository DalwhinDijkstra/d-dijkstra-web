export const translations = {
  de: {
    nav: {
      about: "Über mich",
      contact: "Kontakt",
      imprint: "Impressum",
    },
    hero: {
      role: "Projektmanager",
      subtitle: "Digitale Projekte. Klare Strukturen. Echte Ergebnisse.",
      cta: "LinkedIn-Profil ansehen",
    },
    about: {
      title: "Über mich",
      text: "Projektmanager mit Fokus auf digitale Produkte, Eventmanagement und strukturierte Prozesse. Ich bringe Ideen in die Umsetzung - von der Konzeption bis zum Go-Live.",
      location: "Berlin, Deutschland",
    },
    contact: {
      title: "Kontakt",
      email: "E-Mail",
      phone: "Telefon",
      web: "Web",
      address: "Adresse",
      addressValue: "Gudvanger Str. 52\n10439 Berlin",
    },
    social: {
      title: "Vernetzen",
      linkedin: "LinkedIn-Profil ansehen",
    },
    imprint: {
      title: "Impressum",
      responsible: "Verantwortlich",
      disclaimer: "Haftungsausschluss",
      disclaimerText:
        "Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.",
    },
    langSwitch: "EN",
  },
  en: {
    nav: {
      about: "About",
      contact: "Contact",
      imprint: "Imprint",
    },
    hero: {
      role: "Project Manager",
      subtitle: "Digital projects. Clear structures. Real results.",
      cta: "View LinkedIn Profile",
    },
    about: {
      title: "About",
      text: "Project manager focused on digital products, event management and structured processes. I turn ideas into reality - from concept to go-live.",
      location: "Berlin, Germany",
    },
    contact: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
      web: "Web",
      address: "Address",
      addressValue: "Gudvanger Str. 52\n10439 Berlin",
    },
    social: {
      title: "Connect",
      linkedin: "View LinkedIn Profile",
    },
    imprint: {
      title: "Imprint",
      responsible: "Responsible",
      disclaimer: "Disclaimer",
      disclaimerText:
        "The author assumes no liability for the accuracy, completeness, or timeliness of the information provided.",
    },
    langSwitch: "DE",
  },
} as const;

export type Lang = keyof typeof translations;
