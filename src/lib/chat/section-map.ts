export interface SectionInfo {
  title: string;
  description: string;
}

export const sectionMap: Record<string, SectionInfo> = {
  einleitung: {
    title: "Einleitung",
    description: "Wichtige Informationen zur Bedienungsanleitung",
  },
  lieferumfang: {
    title: "1. Lieferumfang",
    description: "Übersicht der mitgelieferten Komponenten",
  },
  sicherheit: {
    title: "2. Sicherheit",
    description: "Wichtige Sicherheitshinweise für den sicheren Betrieb",
  },
  signalwoerter: {
    title: "Verwendete Signalwörter und Symbole",
    description: "Erklärung der Warnstufen GEFAHR, WARNUNG, VORSICHT, HINWEIS",
  },
  bestimmung: {
    title: "2.1 Bestimmungsgemäße Verwendung",
    description: "Bestimmungsgemäße Verwendung des 3D-Displays",
  },
  voraussetzungen: {
    title: "2.2 Bevor Sie das Gerät verwenden",
    description: "Voraussetzungen vor der Gerätenutzung",
  },
  uebergreifend: {
    title: "2.3 Übergreifende Sicherheitshinweise",
    description: "Allgemeine Sicherheitsregeln",
  },
  spezifisch: {
    title: "2.4 Spezifische Sicherheitshinweise",
    description: "Spezifische Sicherheitshinweise für Montage, Benutzung, Reinigung, Entsorgung",
  },
  notfall: {
    title: "2.5 Verhalten im Notfall",
    description: "Notfallverhalten bei Rauch, Brand, medizinischen Notfällen",
  },
  leistung: {
    title: "3. Produktübersicht",
    description: "Aufbau, Merkmale und Einsatzmöglichkeiten des Geräts",
  },
  merkmale: {
    title: "3.1 Technische Hauptmerkmale",
    description: "MultiView, Hybrid-Betrieb, Autostereoskopie",
  },
  schnittstellen: {
    title: "3.2 Schnittstellen und Signalübertragung",
    description: "HDMI- und USB-Verbindungen",
  },
  anwendung: {
    title: "3.3 Anwendung und Nutzen",
    description: "Räumliche Analyse, kollaboratives Arbeiten, Prozessoptimierung",
  },
  geraet: {
    title: "3.4 Gerätebeschreibung",
    description: "Geräteansichten, Anschlüsse, Fernbedienung",
  },
  taetigkeit: {
    title: "4. Bedienung",
    description: "Schritt-für-Schritt-Anleitungen für alle Aufgaben",
  },
  auspacken: {
    title: "4.1 3D-Display auspacken",
    description: "Anleitung zum sicheren Auspacken",
  },
  positionieren: {
    title: "4.2 3D-Display positionieren",
    description: "Optimale Positionierung für den 3D-Effekt",
  },
  verkabeln: {
    title: "4.3 3D-Display verkabeln",
    description: "Kabelverbindungen und Stromversorgung",
  },
  einschalten: {
    title: "4.4 3D-Display einschalten",
    description: "Gerät einschalten und in Betrieb nehmen",
  },
  ausschalten: {
    title: "4.5 3D-Display ausschalten",
    description: "Gerät in Bereitschaftsmodus versetzen",
  },
  eingangsquelle: {
    title: "4.6 Eingangsquelle wählen",
    description: "Zwischen angeschlossenen Geräten wechseln",
  },
  displaymenue: {
    title: "4.7 3D-Displaymenü bedienen",
    description: "Bild-, Ton- und Systemeinstellungen",
  },
  reinigung: {
    title: "4.8 3D-Display reinigen",
    description: "Reinigungsanleitung und geeignete Mittel",
  },
  problemloesung: {
    title: "5. Problemlösung",
    description: "Häufige Probleme und ihre Lösungen",
  },
  technisch: {
    title: "6. Technische Daten",
    description: "Spezifikationen und Anforderungen",
  },
  spezifikationen: {
    title: "6.1 3D-Display-Spezifikationen",
    description: "Displaygröße, Auflösung, Panel-Technologie",
  },
  anschluesse: {
    title: "6.2 Anschlüsse und Schnittstellen",
    description: "HDMI 2.0, USB 3.0",
  },
  stromversorgung: {
    title: "6.3 Stromversorgung",
    description: "Eingangsspannung 100-240V AC",
  },
  umgebung: {
    title: "6.4 Umgebungsbedingungen",
    description: "Temperatur- und Luftfeuchtigkeitsgrenzen",
  },
  normen: {
    title: "6.5 Normen und Zertifizierungen",
    description: "CE, RoHS, WEEE",
  },
  herstellerinfo: {
    title: "7. Herstellerinformationen",
    description: "Kontaktdaten und Support",
  },
  garantie: {
    title: "8. Garantiebedingungen",
    description: "Garantieumfang und -abwicklung",
  },
  entsorgung: {
    title: "9. Entsorgungshinweise",
    description: "Umweltgerechte Entsorgung nach WEEE und BattG",
  },
  konformitaet: {
    title: "10. EU-Konformitätserklärung",
    description: "Rechtliche Konformität mit EU-Richtlinien",
  },
};
