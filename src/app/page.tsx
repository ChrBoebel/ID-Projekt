import Image from "next/image";
import {
  Navigation,
  Section,
  SubSection,
  WarningBox,
  Table,
  SpecTable,
  StepList,
  Checklist,
  SingleImage,
  Footer,
  FeatureCard,
  FeatureGrid,
} from "@/components";
import { Users, Eye, Box, ImageIcon, Cable } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="lg:ml-[280px] min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-white via-white to-[#73C7D4]/5 border-b border-gray-100 overflow-hidden min-h-screen flex flex-col justify-center">
          {/* Subtle Background Accents */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#73C7D4]/10 to-transparent rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#003E77]/5 to-transparent rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-16 lg:py-24 pt-20 lg:pt-24 w-full">
            <div className="grid lg:grid-cols-2 gap-y-12 gap-x-4 lg:gap-8 items-center">
              {/* Left: Text Content */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-light font-heading text-[#003E77] mb-3 sm:mb-8 leading-[1.1] animate-slideUp tracking-tight">
                  MultiView <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003E77] to-[#73C7D4] font-normal">3D-Display</span>
                </h1>
                <p className="text-xs sm:text-base text-gray-400 font-light mb-4 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                  Brillenfreie 3D-Visualisierung für professionelle Anwendungen.
                </p>
                {/* User Intent Navigation */}
                <p className="text-xs sm:text-sm text-slate-400 mb-3 font-light">Was möchten Sie tun?</p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
                  <a
                    href="#taetigkeit"
                    className="group flex flex-col items-center lg:items-start p-3 sm:p-6 rounded-xl border border-slate-200 hover:border-[#003E77] hover:bg-[#003E77]/5 transition-all"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#73C7D4] mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <span className="text-xs sm:text-base font-medium text-[#003E77]">Gerät einrichten</span>
                    <span className="text-xs text-slate-400 hidden lg:block mt-1">Ersteinrichtung & Anschluss</span>
                  </a>

                  <a
                    href="#problemloesung"
                    className="group flex flex-col items-center lg:items-start p-3 sm:p-6 rounded-xl border border-slate-200 hover:border-[#003E77] hover:bg-[#003E77]/5 transition-all"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#73C7D4] mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-xs sm:text-base font-medium text-[#003E77]">Problem lösen</span>
                    <span className="text-xs text-slate-400 hidden lg:block mt-1">Fehlerdiagnose & Hilfe</span>
                  </a>

                  <a
                    href="#sicherheit"
                    className="group flex flex-col items-center lg:items-start p-3 sm:p-6 rounded-xl border border-slate-200 hover:border-[#003E77] hover:bg-[#003E77]/5 transition-all"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#73C7D4] mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <span className="text-xs sm:text-base font-medium text-[#003E77]">Sicherheit</span>
                    <span className="text-xs text-slate-400 hidden lg:block mt-1">Wichtige Hinweise</span>
                  </a>

                  <a
                    href="#technisch"
                    className="group flex flex-col items-center lg:items-start p-3 sm:p-6 rounded-xl border border-slate-200 hover:border-[#003E77] hover:bg-[#003E77]/5 transition-all"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#73C7D4] mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <span className="text-xs sm:text-base font-medium text-[#003E77]">Technische Daten</span>
                    <span className="text-xs text-slate-400 hidden lg:block mt-1">Spezifikationen</span>
                  </a>
                </div>
              </div>

              {/* Right: Title Image */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#003E77]/10 to-[#73C7D4]/20 rounded-3xl blur-2xl opacity-60"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl shadow-[#003E77]/10 overflow-hidden border border-slate-100">
                    <Image
                      src="/images/Titelblatt.jpeg"
                      alt="3D Bildschirm - Bedienungsanleitung"
                      width={400}
                      height={500}
                      className="w-full max-w-[160px] sm:max-w-[280px] lg:max-w-[380px] h-auto object-contain"
                      priority
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-[#003E77] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-lg">
                    <p className="text-[10px] sm:text-xs font-medium">3D Global</p>
                    <p className="text-xs sm:text-sm font-bold">2025 Serie</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-8 lg:mt-12">
              <a
                href="#sicherheit"
                className="flex flex-col items-center text-slate-400 hover:text-[#003E77] transition-colors animate-bounce"
              >
                <span className="text-xs mb-2">Zur Anleitung</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

          {/* Kapitel 1: Lieferumfang */}
          <Section
            id="lieferumfang"
            title="1. Lieferumfang"
            subtitle="Übersicht der mitgelieferten Komponenten"
          >
            <p className="text-slate-600 mb-4">
              Prüfen Sie nach dem Auspacken, ob alle Teile vollständig geliefert wurden.
            </p>

            <Table
              headers={["Anzahl", "Bezeichnung", "Verwendung"]}
              rows={[
                ["1", "43\" MultiView 3D-Bildschirm", "Hauptgerät zur Darstellung von 3D-Inhalten"],
                ["1", "Fernbedienung", "Steuerung des Bildschirms (inkl. Batterien)"],
                ["1", "Netzteil", "Stromversorgung des Bildschirms"],
                ["1", "HDMI-Kabel", "Verbindung zwischen Computer und Bildschirm"],
                ["1", "USB-Kabel", "Datenverbindung zwischen Computer und Bildschirm"],
                ["1", "Schnellstartanleitung", "Erste Schritte zur Inbetriebnahme"],
              ]}
            />
          </Section>

          {/* Kapitel 2: Sicherheit */}
          <Section
            id="sicherheit"
            title="2. Sicherheit"
            subtitle="Wichtige Sicherheitshinweise für den sicheren Betrieb"
          >
            <SubSection title="Bestimmungsgemäße Verwendung">
              <p className="text-slate-600">
                Dieses Gerät dient zur brillenlosen 3D-Visualisierung für Einzelnutzer und Gruppen
                in trockenen Innenräumen. Der Betrieb ist montiert auf zertifizierten VESA-Halterungen zulässig.
              </p>
            </SubSection>

            <SubSection title="Gesundheitshinweise (3D-spezifisch)">
              <WarningBox type="warnung" title="Epilepsie" icon="auge">
                Bestimmte 3D-Muster können Anfälle auslösen. Bei Schwindel oder Muskelzuckungen
                Nutzung sofort abbrechen. Bei einem länger als 15 Minuten andauernden epileptischen
                Anfall einen Notruf absetzen.
              </WarningBox>

              <Checklist
                items={[
                  "Visuelle Belastung: Die MultiView-Darstellung kann bei langem Gebrauch zu Augenermüdung führen. Tipp: 15 Minuten Pause nach 60 Minuten Betrieb.",
                  "Unwohlsein: Die räumliche Darstellung kann Schwindel oder Übelkeit verursachen. Bei ersten Anzeichen von Unwohlsein die Betrachtung sofort beenden und den Blick dauerhaft vom Bildschirm abwenden. Nicht weiterverwenden, bis die Symptome vollständig abgeklungen sind.",
                  "Altersbeschränkung: Nicht empfohlen für Kinder unter 6 Jahren, da sich das Sehvermögen noch in der Entwicklung befindet.",
                ]}
              />
            </SubSection>

            <SubSection title="Elektrische Sicherheit">
              <WarningBox type="gefahr" title="Stromschlag- und Brandgefahr" icon="strom">
                Um die Gefahr von Stromschlägen oder Bränden zu vermeiden, beachten Sie
                folgende Hinweise:
              </WarningBox>

              <Checklist
                items={[
                  "Stromquelle: Schließen Sie das Gerät nur an eine ordnungsgemäß geerdete Steckdose mit der auf dem Typenschild angegebenen Spannung an.",
                  "Netzkabel: Achten Sie darauf, dass das Netzkabel nicht eingeklemmt, geknickt oder über scharfe Kanten geführt wird. Ziehen Sie das Kabel immer am Stecker aus der Steckdose, niemals am Kabel selbst.",
                  "Gehäuse: Um die Gefahr von Stromschlägen oder Bränden zu vermeiden, öffnen Sie niemals das Gehäuse. Wartungsarbeiten dürfen nur von qualifiziertem Personal durchgeführt werden.",
                  "Überlastung: Schließen Sie nicht zu viele Geräte an dieselbe Steckdose oder Verlängerungsschnur an.",
                  "Feuchtigkeit: Betreiben Sie das Gerät niemals in der Nähe von Wasser oder im Freien. Schützen Sie es vor Tropf- und Spritzwasser.",
                  "Fremdkörper: Schieben Sie niemals Fremdkörper in die Öffnungen am Monitorgehäuse. Dies kann Kurzschlüsse verursachen, welche zu Bränden oder Stromschlägen führen können.",
                ]}
              />
            </SubSection>

            <SubSection title="Aufstellung und Montage">
              <p className="text-slate-600 mb-4">
                Das Gerät wird an einer VESA-kompatiblen Wandhalterung oder einem Standfuß montiert.
              </p>

              <WarningBox type="hinweis">
                Verwenden Sie ausschließlich Halterungen, die für das VESA-Maß und das
                spezifische Gewicht dieses 43&quot;-Bildschirms zertifiziert sind.
              </WarningBox>

              <Checklist
                items={[
                  "Tragfähigkeit: Die Halterung und ggf. die Wand selbst müssen das Gewicht des Bildschirms sicher tragen können.",
                  "Belüftung: Decken Sie die Lüftungsöffnungen niemals ab und achten Sie auf einen ausreichenden Abstand zur Wand. Ein Wärmestau kann das Gerät beschädigen oder Brände verursachen.",
                  "Stabiler Standplatz: Achten Sie auf einen stabilen Standplatz, damit der Monitor nicht umkippt. Verwenden Sie nur vom Hersteller empfohlene Halterungen oder Tische, da instabile Unterlagen zu Unfällen und Geräteschäden führen können.",
                  "Montage: Folgen Sie bei der Montage bitte genau der Anleitung und nutzen Sie das Original-Zubehör.",
                  "Transport auf Wagen: Wenn Sie das Gerät auf einem Wagen bewegen, fahren Sie besonders vorsichtig, um ein Umfallen bei Unebenheiten zu vermeiden.",
                ]}
              />
            </SubSection>

            <SubSection title="Umgang mit der Glasscheibe">
              <WarningBox type="vorsicht" title="Bruchgefahr" icon="allgemein">
                Trotz der robusten Bauweise besteht bei massiver mechanischer Einwirkung Bruchgefahr.
              </WarningBox>

              <Checklist
                items={[
                  "Bruchschäden: Sollte die Glasscheibe springen oder zerbrechen, ziehen Sie sofort den Netzstecker.",
                  "Verletzungsgefahr: Berühren Sie keine Glassplitter mit bloßen Händen. Es besteht akute Schnittgefahr. Entsorgen Sie defekte Teile fachgerecht unter Verwendung von Schutzhandschuhen.",
                  "Druckeinwirkung: Vermeiden Sie starken Druck oder Schläge auf die Oberfläche des Bildschirms.",
                ]}
              />
            </SubSection>

            <SubSection title="Betriebsumgebung und Belüftung">
              <Checklist
                items={[
                  "Lüftungsschlitze: Decken Sie die Lüftungsöffnungen niemals ab (z. B. mit Zeitschriften oder Decken). Ein Wärmestau kann das Gerät beschädigen oder Brände verursachen.",
                  "Wärmequellen: Stellen Sie das Gerät nicht in die Nähe von Heizkörpern, Öfen oder direkter Sonneneinstrahlung.",
                ]}
              />
            </SubSection>
          </Section>

          {/* Kapitel 2: Leistungsbeschreibung */}
          <Section
            id="leistung"
            title="3. Leistungsbeschreibung"
            subtitle="Was kann das Gerät und welchen Nutzen bietet es?"
          >
            <SubSection title="3.1 Zentrale Funktionen">
              <p className="text-slate-600 mb-6">
                Der 43&quot; MultiView 3D-Bildschirm ermöglicht die brillenfreie 3D-Darstellung
                von Inhalten für Einzelbenutzer und Gruppen. Durch die autostereoskopische
                Technologie (spezielle Linsen im Bildschirm) sehen Sie 3D-Bilder ohne 3D-Brille.
                Mehrere Benutzer können gleichzeitig dreidimensionale Bilder aus verschiedenen
                Positionen sehen.
              </p>

              <SingleImage
                src="/images/Leistungsbeschreibung.jpeg"
                alt="MultiView 3D-Technologie"
                caption="MultiView 3D-Technologie ermöglicht mehreren Benutzern gleichzeitig den 3D-Effekt"
              />

              <h4 className="font-semibold text-slate-700 mt-8 mb-4">Hauptmerkmale:</h4>
              <FeatureGrid>
                <FeatureCard
                  icon={<Users className="w-6 h-6 " strokeWidth={1.5} />}
                  title="MultiView-Technologie"
                  description="Mehrere Benutzer können gleichzeitig den 3D-Effekt aus verschiedenen Blickwinkeln erleben – ohne dass jeder eine bestimmte Position einnehmen muss."
                />
                <FeatureCard
                  icon={<Eye className="w-6 h-6 " strokeWidth={1.5} />}
                  title="Brillenfreie 3D-Darstellung"
                  description="Spezielle Linsen sorgen für einen räumlichen Effekt ohne zusätzliche Hardware."
                />
                <FeatureCard
                  icon={<Box className="w-6 h-6 " strokeWidth={1.5} />}
                  title="3D-Effekt über Computer"
                  description="Der 3D-Effekt entsteht durch passende Inhalte vom Computer. Spielen Sie die vorgesehene 3D-Datei ab."
                />
                <FeatureCard
                  icon={<ImageIcon className="w-6 h-6 " strokeWidth={1.5} />}
                  title="Hohe Bildqualität"
                  description="Darstellung in 4K-Auflösung (3840 x 2160 Pixel) für scharfe Details."
                />
                <FeatureCard
                  icon={<Cable className="w-6 h-6 " strokeWidth={1.5} />}
                  title="Konnektivität"
                  description="Anschluss über HDMI und USB für Bild- und Datenübertragung."
                />
              </FeatureGrid>
            </SubSection>

            <SubSection title="3.2 Einsatzmöglichkeiten">
              <p className="text-slate-600 mb-6">
                Der Benutzer kann digitale Inhalte räumlich betrachten und präsentieren –
                allein oder in Gruppen, ohne durch Zusatzhardware eingeschränkt zu sein.
              </p>

              <h4 className="font-semibold text-slate-700 mb-4">Anwendungsmöglichkeiten:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-[#0B3D5C]/5 to-[#00B4D8]/10 rounded-lg border border-[#4A90A4]/20">
                  <h5 className="font-semibold text-[#0B3D5C] mb-2">Visualisieren</h5>
                  <p className="text-slate-600 text-sm">
                    Betrachten von 3D-Modellen, CAD-Zeichnungen oder medizinischen Daten
                    (z. B. MRT-Scans) mit realer Tiefenwirkung.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#0B3D5C]/5 to-[#00B4D8]/10 rounded-lg border border-[#4A90A4]/20">
                  <h5 className="font-semibold text-[#0B3D5C] mb-2">Präsentieren</h5>
                  <p className="text-slate-600 text-sm">
                    Vorführung von Design-Entwürfen und Produkten in 3D für Kunden,
                    Kollegen oder Gruppen.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#0B3D5C]/5 to-[#00B4D8]/10 rounded-lg border border-[#4A90A4]/20">
                  <h5 className="font-semibold text-[#0B3D5C] mb-2">Unterhaltung</h5>
                  <p className="text-slate-600 text-sm">
                    Wiedergabe von stereoskopischen Spielen und Filmen.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#0B3D5C]/5 to-[#00B4D8]/10 rounded-lg border border-[#4A90A4]/20">
                  <h5 className="font-semibold text-[#0B3D5C] mb-2">Gruppenarbeit</h5>
                  <p className="text-slate-600 text-sm">
                    Gemeinsame Betrachtung und Diskussion von 3D-Inhalten im Team.
                  </p>
                </div>
              </div>
            </SubSection>

            <SubSection title="3.3 Anwendervorteile">
              <p className="text-slate-600 mb-6">
                Der Einsatz des 43&quot; MultiView 3D-Bildschirms steigert die Effizienz und
                Qualität bei der Arbeit mit räumlichen Daten – sowohl für Einzelbenutzer
                als auch für Teams.
              </p>

              <h4 className="font-semibold text-slate-700 mb-4">Vorteile:</h4>
              <Checklist
                items={[
                  "Komfort & Freiheit: brillenfreie 3D-Darstellung macht längeres Arbeiten angenehmer, da keine störende 3D-Brille erforderlich ist.",
                  "MultiView für Gruppen: Mehrere Personen können gleichzeitig den 3D-Effekt erleben – ideal für Präsentationen und Teamarbeit.",
                  "Intuitives Verständnis: Räumliche Zusammenhänge werden schneller und natürlicher erfasst als auf flachen 2D-Bildschirmen.",
                  "Flexibilität: Ein einziges Gerät für Standard-Büroaufgaben (2D) und spezialisierte 3D-Anwendungen.",
                  "Professionelle Ergebnisse: Präzise Beurteilung von Proportionen und Tiefe vermeidet Fehler in frühen Entwicklungsphasen.",
                ]}
              />
            </SubSection>
          </Section>

          {/* Kapitel 4: Gerätebeschreibung */}
          <Section
            id="geraet"
            title="4. Gerätebeschreibung"
            subtitle="Geräteansichten und Anschlüsse"
          >
            <h4 className="font-semibold text-slate-700 mb-4">Vorderansicht</h4>
            <SingleImage
              src="/images/Vorderansicht.jpeg"
              alt="Vorderansicht des Bildschirms"
              caption="Vorderansicht des 43&quot; MultiView 3D-Bildschirms"
            />

            <Table
              headers={["Nr.", "Bezeichnung", "Funktion"]}
              rows={[
                ["1", "Bildschirm-Panel", "Zeigt 3D-Inhalte als brillenfreie MultiView 3D-Darstellung an. Der Bildschirm erzeugt räumliche Bilder für mehrere Benutzer gleichzeitig."],
              ]}
            />

            <h4 className="font-semibold text-slate-700 mt-8 mb-4">Rückansicht</h4>
            <SingleImage
              src="/images/rueckansicht.jpg"
              alt="Rückansicht des Bildschirms"
              caption="Rückansicht mit Anschlüssen"
            />

            <Table
              headers={["Nr.", "Bezeichnung", "Funktion"]}
              rows={[
                ["3", "HDMI-Anschluss", "Verbindet den Bildschirm mit der Bildquelle (Computer, Laptop). Überträgt Bildsignale."],
                ["4", "USB-Anschluss", "Überträgt Daten. Ermöglicht die bidirektionale Kommunikation mit dem Computer."],
                ["5", "Netzteilanschluss", "Stromversorgung: Schließen Sie hier das mitgelieferte Netzteil an."],
                ["6", "VESA-Montagepunkte", "Standardisierte Befestigungspunkte für Wandhalterungen oder Standfüße."],
                ["7", "Typenschild", "Enthält wichtige Geräteinformationen: Seriennummer, Modellbezeichnung, elektrische Daten."],
                ["8", "Power-Taste", "Ein-/Ausschalten des Bildschirms."],
              ]}
            />

            <h4 className="font-semibold text-slate-700 mt-8 mb-4">Fernbedienung</h4>
            <SingleImage
              src="/images/Fernbedienung.jpg"
              alt="Fernbedienung"
              caption="Fernbedienung des 3D-Bildschirms"
            />

            <Table
              headers={["Nr.", "Bezeichnung", "Funktion"]}
              rows={[
                ["14", "Power-Taste", "Bildschirm ein-/ausschalten. Befindet sich oben an der Fernbedienung."],
                ["15", "MENU-Taste", "Bildschirmmenü öffnen/schließen."],
                ["16", "Eingangsquellen-Taste", "Eingangsquelle wählen. Wechselt zwischen angeschlossenen Geräten."],
                ["17", "Pfeiltasten", "Navigation im Bildschirmmenü. Ermöglicht die Auswahl von Menüpunkten."],
                ["18", "OK-Taste", "Auswahl bestätigen. Befindet sich in der Mitte des Navigationskreuzes."],
                ["19", "Lautstärke-Tasten", "Lautstärke verringern (−) oder erhöhen (+)."],
                ["20", "Play/Pause-Taste", "Wiedergabe starten oder pausieren. Für Medieninhalte."],
                ["21", "Zurück-Taste", "Zurück zum vorherigen Menü oder Bildschirmmenü verlassen."],
                ["22", "Stumm-Taste", "Ton stumm schalten. Befindet sich unten an der Fernbedienung."],
              ]}
            />

            <p className="text-slate-600 mt-4">
              Die Bedienung des Bildschirmmenüs ist in <strong>Kapitel 5.8</strong> beschrieben.
            </p>

            <WarningBox type="hinweis" title="Beschädigung der Fernbedienung">
              <p className="mb-2"><strong>Beschädigung der Fernbedienung durch unsachgemäße Bedienung.</strong></p>
              <p className="mb-2">Defekte Tasten und Funktionsverlust können die Folge sein.</p>
              <p>Drücken Sie die Tasten nicht mit spitzen Gegenständen. Verwenden Sie nur Ihre Finger.</p>
            </WarningBox>
          </Section>

          {/* Kapitel 4: Tätigkeitsbeschreibung */}
          <Section
            id="taetigkeit"
            title="5. Tätigkeitsbeschreibung"
            subtitle="Schritt-für-Schritt-Anleitungen für alle Aufgaben"
          >
            <SubSection title="5.1 Bildschirm auspacken">
              <p className="text-slate-600 mb-4">
                Nehmen Sie den Bildschirm sicher aus der Verpackung und prüfen Sie alle Komponenten.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Sie haben eine saubere, ebene Arbeitsfläche",
                  "Sie öffnen die Verpackung nicht mit scharfen Gegenständen",
                  "Sie haben Platz für alle Komponenten",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Schritte:</h4>
              <StepList
                steps={[
                  { content: "Öffnen Sie den Versandkarton vorsichtig von oben." },
                  { content: "Entnehmen Sie die Schnellstartanleitung und legen Sie diese bereit." },
                  { content: "Nehmen Sie den Bildschirm mit beiden Händen aus der Verpackung." },
                  { content: "Entnehmen Sie alle weiteren Komponenten aus der Verpackung." },
                  { content: "Vergleichen Sie den Inhalt mit der Tabelle im Kapitel 1 (Lieferumfang) und prüfen Sie alle Teile auf sichtbare Transportschäden." },
                  { content: "Bei fehlenden oder beschädigten Teilen: Kontaktieren Sie umgehend den Händler." },
                ]}
                result="Jetzt haben Sie den Bildschirm ausgepackt und den Lieferumfang geprüft."
              />
            </SubSection>

            <SubSection title="5.2 Bildschirm positionieren">
              <p className="text-slate-600 mb-4">
                Positionieren Sie den Bildschirm für den optimalen MultiView 3D-Effekt.
                Abstand, Höhe und Neigung sind entscheidend.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Der Bildschirm ist an einer geeigneten Halterung montiert",
                  "Ausreichend Platz für mehrere Benutzer ist vorhanden",
                  "Keine direkte Sonneneinstrahlung fällt auf den Bildschirm",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Schritte:</h4>
              <StepList
                steps={[
                  { content: "Positionieren Sie den Bildschirm so, dass der optimale Betrachtungsabstand eingehalten werden kann." },
                  { content: "Stellen Sie den Bildschirm so auf, dass die Bildschirm-Mitte auf Augenhöhe der stehenden oder sitzenden Benutzer liegt." },
                  { content: "Neigen Sie den Bildschirm bei Bedarf leicht (5 bis 10 Grad) für einen optimalen Betrachtungswinkel." },
                  { content: "Prüfen Sie, ob von den Betrachtungspositionen aus kein störendes Licht auf dem Bildschirm reflektiert." },
                  { content: "Bei Gruppenbetrachtung: Stellen Sie sicher, dass alle Benutzer innerhalb des MultiView-Bereichs positioniert sind (siehe Bild in Kapitel 3)." },
                ]}
              />
            </SubSection>

            <SubSection title="5.3 Bildschirm verkabeln">
              <p className="text-slate-600 mb-4">
                Verbinden Sie den Bildschirm mit einem Computer und schließen Sie die Stromversorgung an.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Der Bildschirm ist montiert",
                  "Eine Steckdose (230 V) ist in Reichweite",
                  "Alle Kabel liegen bereit (HDMI, USB, Netzteil)",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Schritte:</h4>
              <StepList
                steps={[
                  { content: "Verbinden Sie den Computer per HDMI-Kabel mit dem Bildschirm." },
                  {
                    content: "Verbinden Sie den Computer per USB-Kabel mit dem Bildschirm.",
                    substeps: ["Hintergrund: Die USB-Verbindung ist notwendig für die Datenübertragung."]
                  },
                  { content: "Verbinden Sie das Netzkabel mit dem Bildschirm-Netzteil und stecken Sie den runden Stecker in den Netzteilanschluss an der Rückseite des Bildschirms." },
                  { content: "Stecken Sie das Netzkabel in die Steckdose." },
                ]}
              />
            </SubSection>

            <SubSection title="5.4 Ersteinrichtung durchführen">
              <p className="text-slate-600 mb-4">
                Konfigurieren Sie Sprache und Bildqualität nach dem ersten Einschalten.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Der Bildschirm ist verkabelt (siehe vorherige Abschnitte)",
                  "Die Fernbedienung liegt bereit",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Schritte:</h4>
              <StepList
                steps={[
                  { content: "Drücken Sie die Power-Taste am Bildschirm." },
                  { content: "Schalten Sie den angeschlossenen Computer ein." },
                  {
                    title: "Sprache wählen",
                    content: "Der Bildschirm zeigt beim ersten Start automatisch die Sprachauswahl. Wählen Sie mit den Pfeiltasten ▲/▼ Ihre bevorzugte Sprache und bestätigen Sie mit OK."
                  },
                  { content: "Drücken Sie die Taste MENU auf der Fernbedienung, um das Bildschirmmenü zu öffnen." },
                  { content: "Navigieren Sie mit den Pfeiltasten zu Bild und drücken Sie OK." },
                  {
                    content: "Passen Sie Helligkeit und Kontrast mit den Tasten ◄/► an Ihre Umgebung an.",
                    substeps: ["Hintergrund: In hellen Räumen empfiehlt sich eine höhere Helligkeit, in dunklen Räumen eine niedrigere."]
                  },
                  { content: "Drücken Sie BACK oder MENU, um das Menü zu schließen." },
                ]}
                result="Der Bildschirm ist eingerichtet und einsatzbereit."
              />
            </SubSection>

            <SubSection title="5.5 Bildschirm einschalten">
              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Das Netzteil ist mit dem Bildschirm verbunden",
                  "Das Netzteil ist an eine funktionierende Steckdose angeschlossen",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Schritte:</h4>
              <StepList
                steps={[
                  { content: "Drücken Sie die Power-Taste am rechten Rand des Bildschirms kurz." },
                  { content: "Schalten Sie den angeschlossenen Computer ein." },
                ]}
                result="Der Bildschirm zeigt nach wenigen Sekunden das Bild des angeschlossenen Computers."
              />
            </SubSection>

            <SubSection title="5.6 Bildschirm ausschalten">
              <p className="text-slate-600 mb-4">
                Versetzen Sie den Bildschirm in den Bereitschaftsmodus oder schalten Sie ihn vollständig aus.
              </p>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Schritte:</h4>
              <StepList
                steps={[
                  { content: "Drücken Sie die Power-Taste am rechten Rand des Bildschirms kurz (weniger als 2 Sekunden)." },
                  { content: "Warten Sie, bis der Bildschirm dunkel wird." },
                ]}
                result="Der Bildschirm befindet sich im Bereitschaftsmodus und verbraucht minimal Strom."
              />

            </SubSection>

            <SubSection title="5.7 Eingangsquelle wählen">
              <p className="text-slate-600 mb-4">
                Wechseln Sie zwischen angeschlossenen Geräten. In den meisten Fällen erkennt
                der Bildschirm das aktive Signal automatisch.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Mindestens ein Gerät ist mit dem Bildschirm verbunden und eingeschaltet",
                  "Die Fernbedienung ist einsatzbereit",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Schritte:</h4>
              <StepList
                steps={[
                  { content: "Drücken Sie auf der Fernbedienung die Eingangsquellen-Taste. Ein Auswahlmenü erscheint." },
                  { content: "Drücken Sie die Eingangsquellen-Taste wiederholt, um durch die Quellen zu schalten." },
                  { content: "Warten Sie 3 Sekunden, ohne eine Taste zu drücken. Der Bildschirm wechselt zur ausgewählten Quelle." },
                ]}
              />
            </SubSection>

            <SubSection title="5.8 Bildschirmmenü bedienen">
              <p className="text-slate-600 mb-4">
                Das Bildschirmmenü ist die zentrale Steuerungsebene für Bild-, Ton- und Systemeinstellungen.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Bildschirmmenü öffnen und schließen:</h4>
              <StepList
                steps={[
                  { content: "Drücken Sie die Taste MENU auf der Fernbedienung." },
                  { content: "Um das Menü zu schließen, drücken Sie erneut MENU oder BACK." },
                ]}
                result="Das Hauptmenü erscheint auf der linken Seite des Bildschirms."
              />

              <div className="mt-4 p-4 bg-[#0B3D5C]/5 border border-[#4A90A4]/30 rounded-lg">
                <p className="text-[#0B3D5C] text-sm">
                  <strong>Tipp:</strong> Das Menü schließt sich automatisch nach 30 Sekunden Inaktivität.
                </p>
              </div>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Im Bildschirmmenü navigieren:</h4>
              <div className="space-y-2 text-slate-600">
                <p>Verwenden Sie die Pfeiltasten zur Navigation:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>▲ / ▼:</strong> Zwischen Menüpunkten wechseln</li>
                  <li><strong>◀ / ▶:</strong> Werte ändern oder Untermenüs öffnen</li>
                  <li><strong>OK:</strong> Auswahl bestätigen</li>
                </ul>
                <p className="mt-4">Drücken Sie <strong>OK</strong> auf einem Menüpunkt mit Pfeil, um ein Untermenü zu öffnen.</p>
                <p>Drücken Sie <strong>BACK</strong>, um eine Ebene zurückzugehen.</p>
                <p>Menüpunkte mit <strong>[ ]</strong> sind Kontrollkästchen. Drücken Sie <strong>OK</strong> zum Aktivieren/Deaktivieren.</p>
              </div>
            </SubSection>

            <SubSection id="reinigung" title="5.9 Bildschirm reinigen">
              <p className="text-slate-600 mb-4">
                Halten Sie den Bildschirm sauber für optimale Bildqualität. Reinigen Sie das Gehäuse
                regelmäßig mit einem weichen Tuch.
              </p>

              <WarningBox type="vorsicht" title="Vor der Reinigung">
                <p>
                  <strong>Bitte ziehen Sie das Netzkabel, bevor Sie den Bildschirm reinigen.</strong>
                </p>
              </WarningBox>

              <WarningBox type="hinweis" title="Beschädigung durch falsche Reinigung">
                <p className="mb-2"><strong>Beschädigung des Bildschirms durch falsche Reinigung.</strong></p>
                <p className="mb-2">Kratzer, Trübung und dauerhafter Funktionsverlust können die Folge sein.</p>
                <p className="mb-2">
                  Sprühen Sie niemals direkt auf den Bildschirm. Üben Sie niemals starken Druck aus.
                  Verwenden Sie niemals scharfe Gegenstände. Reinigen Sie den Bildschirm nur bei
                  ausgeschaltetem und abgekühltem Gerät.
                </p>
                <p className="mb-2">
                  <strong>Achten Sie darauf, dass kein Reinigungsmittel in das Gerät gelangt.</strong> Verwenden
                  Sie ein möglichst weiches Tuch, damit es nicht zu Kratzern auf dem Bildschirm kommt.
                </p>
                <p>
                  Bei hartnäckigen Verschmutzungen können Sie ein mildes Reinigungsmittel verwenden.
                  Aggressive Reinigungsmittel können das Gehäuse beschädigen.
                </p>
              </WarningBox>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Der Bildschirm ist ausgeschaltet",
                  "Das Netzkabel ist getrennt",
                  "Der Bildschirm ist abgekühlt (mindestens 5 Minuten warten)",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Schritte:</h4>
              <StepList
                steps={[
                  {
                    title: "Staub entfernen",
                    content: "Wischen Sie mit einem weichen, trockenen Mikrofasertuch vorsichtig über Bildschirm und Gehäuse. Üben Sie nur leichten Druck aus."
                  },
                  {
                    title: "Flecken entfernen",
                    content: "Befeuchten Sie das Tuch leicht mit destilliertem Wasser oder speziellem Bildschirmreiniger. Wischen Sie in kreisenden Bewegungen.",
                    substeps: ["Wichtig: Sprühen Sie niemals direkt auf das Gerät."]
                  },
                  {
                    title: "Lüftung reinigen",
                    content: "Entfernen Sie Staub aus den Lüftungsöffnungen vorsichtig mit einem weichen Pinsel oder Druckluft."
                  },
                ]}
                result="Der Bildschirm ist sauber und die Luftzirkulation sichergestellt."
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-4">Geeignete Reinigungsmittel:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2">✓ Empfohlen</h5>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Destilliertes Wasser</li>
                    <li>• Bildschirmreiniger für TFT/LCD (alkoholfrei)</li>
                    <li>• Mikrofasertücher (fusselfrei)</li>
                    <li>• Weiches, antistatisches Tuch</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-800 mb-2">✗ Nicht verwenden</h5>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Glasreiniger (enthält Ammoniak)</li>
                    <li>• Alkoholhaltige Reiniger</li>
                    <li>• Scheuermittel oder Polituren</li>
                    <li>• Papiertücher oder Küchenrolle</li>
                    <li>• Lösungsmittel (Aceton, Verdünner)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                <p className="text-slate-600 text-sm">
                  <strong>Hintergrund:</strong> Diese Mittel können das spezielle Linsenraster
                  des 3D-Bildschirms dauerhaft beschädigen.
                </p>
              </div>
            </SubSection>
          </Section>

          {/* Kapitel 5: Problemlösung */}
          <Section
            id="problemloesung"
            title="6. Problemlösung"
            subtitle="Häufige Probleme und ihre Lösungen"
          >
            <p className="text-slate-600 mb-6">
              Sie finden hier schnell Lösungen für häufig auftretende Probleme mit Ihrem
              3D-Bildschirm. Die Tabelle hilft Ihnen, die Ursache zu identifizieren und
              das Problem zu beheben. Arbeiten Sie die Lösungen in der angegebenen
              Reihenfolge durch.
            </p>

            <Table
              headers={["Problem", "Mögliche Ursache", "Lösung"]}
              rows={[
                ["Kein Bild", "Stromversorgung unterbrochen", "Prüfen Sie, ob das Netzteil korrekt angeschlossen ist."],
                ["Kein Bild", "Kabelverbindung fehlerhaft", "Prüfen Sie die HDMI-Verbindung zwischen Computer und Bildschirm."],
                ["Kein Bild", "Computer nicht aktiv", "Schalten Sie den Computer ein oder wecken Sie ihn aus dem Ruhezustand."],
                ["Kein 3D-Effekt", "Falsche Inhalte", "Spielen Sie am Computer die vorgesehene 3D-Datei ab."],
                ["Kein 3D-Effekt", "USB-Verbindung fehlt", "Prüfen Sie die USB-Verbindung zwischen Computer und Bildschirm."],
                ["Kein 3D-Effekt", "Falscher Betrachtungsabstand", "Korrigieren Sie den Abstand zum Bildschirm (siehe Kapitel 6.1)."],
                ["Flackern/Streifen", "Lose Kabelverbindung", "Prüfen Sie alle Kabelverbindungen auf festen Sitz."],
                ["Flackern/Streifen", "Defektes Kabel", "Verwenden Sie ein hochwertiges HDMI-Kabel."],
                ["Flackern/Streifen", "Falsche Bildwiederholrate", "Stellen Sie am Computer 60 Hz ein."],
                ["Unscharfes Bild", "Falsche Auflösung", "Stellen Sie die native Auflösung (3840 x 2160) am Computer ein."],
                ["Unscharfes Bild", "Verschmutzter Bildschirm", "Reinigen Sie den Bildschirm (siehe Kapitel 4.9)."],
                ["Kopfschmerzen", "Zu lange Nutzung", "Legen Sie regelmäßig Pausen ein (15 Min. nach 60 Min. Betrieb)."],
                ["Kopfschmerzen", "Falsche Sitzposition", "Korrigieren Sie Ihre Sitzposition und den Betrachtungswinkel."],
                ["Menü reagiert nicht", "Softwarefehler", "Führen Sie einen Neustart durch (Power-Taste 5 Sek. halten)."],
              ]}
            />
          </Section>

          {/* Kapitel 6: Technische Daten */}
          <Section
            id="technisch"
            title="7. Technische Daten"
            subtitle="Spezifikationen und Anforderungen"
          >
            <SubSection title="7.1 Bildschirm-Spezifikationen">
              <SpecTable
                specs={[
                  { label: "Bildschirmgröße", value: "43 Zoll (109 cm) diagonal" },
                  { label: "Auflösung", value: "3840 x 2160 (4K)" },
                  { label: "Seitenverhältnis", value: "16:9" },
                  { label: "Panel-Technologie", value: "IPS (weiter Blickwinkel, natürliche Farben)" },
                  { label: "3D-Technologie", value: "Brillenfrei mit MultiView (mehrere Benutzer gleichzeitig)" },
                  { label: "Farbtiefe", value: "8 bit" },
                  { label: "Bildwiederholrate", value: "60 Hz" },
                ]}
              />
            </SubSection>

            <SubSection title="7.2 Anschlüsse und Schnittstellen">
              <SpecTable
                specs={[
                  { label: "HDMI", value: "HDMI 2.0" },
                  { label: "USB", value: "USB 3.0" },
                ]}
              />
            </SubSection>

            <SubSection title="7.3 Stromversorgung">
              <SpecTable
                specs={[
                  { label: "Eingangsspannung", value: "100-240V AC, 50/60 Hz" },
                ]}
              />
            </SubSection>

            <SubSection title="7.4 Umgebungsbedingungen">
              <h4 className="font-semibold text-slate-700 mb-3">Betrieb</h4>
              <SpecTable
                specs={[
                  { label: "Temperatur", value: "10°C bis 35°C" },
                  { label: "Relative Luftfeuchtigkeit", value: "20% bis 80% (nicht kondensierend)" },
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Lagerung und Transport</h4>
              <SpecTable
                specs={[
                  { label: "Temperatur", value: "-10°C bis 60°C" },
                  { label: "Relative Luftfeuchtigkeit", value: "10% bis 90% (nicht kondensierend)" },
                ]}
              />
            </SubSection>

            <SubSection title="7.5 Normen und Zertifizierungen">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/CE_symbol.svg"
                    alt="CE-Kennzeichnung"
                    width={70}
                    height={50}
                    className="mx-auto mb-3"
                  />
                  <h4 className="font-semibold text-slate-700">CE-Kennzeichnung</h4>
                  <p className="text-slate-500 text-sm mt-1">Konformität mit EU-Richtlinien</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://www.precisionot.com/wp-content/uploads/2020/11/rohs_001.png"
                    alt="RoHS-konform"
                    width={70}
                    height={35}
                    className="mx-auto mb-3"
                  />
                  <h4 className="font-semibold text-slate-700">RoHS-konform</h4>
                  <p className="text-slate-500 text-sm mt-1">Beschränkung gefährlicher Stoffe</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/WEEE_symbol.svg"
                    alt="WEEE-konform"
                    width={50}
                    height={60}
                    className="mx-auto mb-3"
                  />
                  <h4 className="font-semibold text-slate-700">WEEE-konform</h4>
                  <p className="text-slate-500 text-sm mt-1">Ordnungsgemäße Entsorgung</p>
                </div>
              </div>
            </SubSection>
          </Section>

          {/* Kapitel 7: Anhang */}
          <Section
            id="anhang"
            title="8. Anhang"
            subtitle="Herstellerinformationen, Garantie und Entsorgung"
          >
            <SubSection title="8.1 Herstellerinformationen und Kontakt">
              <SpecTable
                specs={[
                  { label: "Hersteller", value: "3D Global GmbH" },
                  { label: "Anschrift", value: "Robert-Bosch-Str. 33, D – 73431 Aalen" },
                  { label: "Telefon", value: "+49 7361 528299 – 0" },
                  { label: "E-Mail", value: (<a href="mailto:info@3d-global.com" className="text-blue-600 hover:underline">info@3d-global.com</a>) },
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Kontakt</h4>
              <p className="text-slate-600 mb-4">
                Bei technischen Fragen oder Problemen wenden Sie sich an uns:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li><strong>Telefon:</strong> +49 7361 528299 – 0</li>
                <li><strong>E-Mail:</strong> <a href="mailto:info@3d-global.com" className="text-blue-600 hover:underline">info@3d-global.com</a></li>
                <li><strong>Kontaktformular:</strong> <a href="mailto:info@3d-global.com" className="text-blue-600 hover:underline">Anfrage senden</a></li>
              </ul>

              <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                <p className="text-slate-700 text-sm">
                  <strong>Halten Sie bei Anfragen bitte folgende Informationen bereit:</strong>
                </p>
                <ul className="list-disc list-inside text-slate-600 text-sm mt-2 space-y-1 ml-4">
                  <li>Seriennummer (siehe Typenschild auf der Rückseite)</li>
                  <li>Modellbezeichnung</li>
                  <li>Kaufdatum und Händler</li>
                  <li>Beschreibung des Problems</li>
                </ul>
              </div>
            </SubSection>

            <SubSection title="8.2 Garantiebedingungen">
              <h4 className="font-semibold text-slate-700 mb-3">Garantieumfang</h4>
              <p className="text-slate-600 mb-4">
                Der Hersteller gewährt auf dieses Produkt eine Garantie von <strong>24 Monaten</strong> ab
                Kaufdatum. Die Garantie umfasst Material- und Herstellungsfehler.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Garantieleistungen</h4>
              <p className="text-slate-600 mb-2">Im Garantiefall wird das Gerät nach Wahl des Herstellers:</p>
              <ul className="list-disc list-inside text-slate-600 ml-4 space-y-1">
                <li>repariert,</li>
                <li>durch ein gleichwertiges Gerät ersetzt oder</li>
                <li>der Kaufpreis erstattet.</li>
              </ul>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Garantieausschlüsse</h4>
              <p className="text-slate-600 mb-2">Die Garantie erlischt bei:</p>
              <ul className="list-disc list-inside text-slate-600 ml-4 space-y-1">
                <li>Schäden durch unsachgemäße Handhabung oder Nichtbeachtung der Bedienungsanleitung</li>
                <li>Schäden durch äußere Einwirkungen (Sturz, Feuchtigkeit, Überspannung)</li>
                <li>Eingriffen durch nicht autorisierte Personen</li>
                <li>Normalem Verschleiß</li>
                <li>Verwendung nicht zugelassener Zubehörteile</li>
              </ul>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Garantieabwicklung</h4>
              <StepList
                steps={[
                  { content: "Kontaktieren Sie den Support (siehe Kapitel 7.1)." },
                  { content: "Beschreiben Sie das Problem." },
                  { content: "Sie erhalten eine RMA-Nummer (Rücksendenummer)." },
                  { content: "Senden Sie das Gerät sicher verpackt mit Kaufbeleg an die angegebene Adresse." },
                ]}
              />

            </SubSection>

            <SubSection title="8.3 Entsorgungshinweise">
              <h4 className="font-semibold text-slate-700 mb-3">Elektro- und Elektronik-Altgeräte (WEEE)</h4>

              <div className="flex items-start gap-4 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/WEEE_symbol.svg"
                  alt="WEEE-Symbol"
                  width={50}
                  height={60}
                  className="shrink-0"
                />
                <div className="text-slate-600">
                  <p className="mb-2">
                    Dieses Produkt ist mit dem Symbol der durchgestrichenen Mülltonne gekennzeichnet. Das bedeutet:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Entsorgen Sie dieses Gerät <strong>nicht</strong> über den Hausmüll.</li>
                    <li>Geben Sie das Altgerät bei einer kommunalen Sammelstelle oder beim Händler ab.</li>
                    <li>Die Rückgabe ist kostenlos.</li>
                  </ul>
                </div>
              </div>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Warum getrennte Entsorgung?</h4>
              <p className="text-slate-600 mb-4">
                Elektrogeräte enthalten wertvolle Rohstoffe, die recycelt werden können.
                Gleichzeitig können sie Schadstoffe enthalten, die bei unsachgemäßer
                Entsorgung die Umwelt belasten.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Batterien und Akkus</h4>
              <WarningBox type="hinweis">
                Entnehmen Sie vor der Entsorgung alle Batterien aus der Fernbedienung.
              </WarningBox>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4 mt-4">
                <li>Entsorgen Sie Batterien <strong>nicht</strong> über den Hausmüll.</li>
                <li>Geben Sie Batterien bei Sammelstellen im Handel oder bei kommunalen Wertstoffhöfen ab.</li>
                <li>Batterien können Schwermetalle enthalten (siehe Kennzeichnung auf der Batterie).</li>
              </ul>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Verpackung</h4>
              <p className="text-slate-600 mb-2">Die Verpackungsmaterialien sind recyclingfähig:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li><strong>Karton/Papier:</strong> Altpapier</li>
                <li><strong>Kunststofffolien:</strong> Gelber Sack/Wertstofftonne</li>
                <li><strong>Styropor:</strong> Wertstoffhof</li>
              </ul>
            </SubSection>

            <SubSection title="8.4 EU-Konformitätserklärung">
              <div className="flex items-start gap-4 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/CE_symbol.svg"
                  alt="CE-Kennzeichnung"
                  width={80}
                  height={57}
                  className="shrink-0"
                />
                <div>
                  <p className="text-slate-600 mb-4">
                    Hiermit erklärt der Hersteller <strong>3D Global GmbH</strong>, dass das Produkt
                    <strong> 43&quot; MultiView 3D-Bildschirm</strong> den folgenden einschlägigen
                    Harmonisierungsrechtsvorschriften der Union entspricht:
                  </p>
                </div>
              </div>

              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4 mb-6">
                <li><strong>2014/30/EU</strong> – EMV-Richtlinie (Elektromagnetische Verträglichkeit)</li>
                <li><strong>2014/35/EU</strong> – Niederspannungsrichtlinie</li>
                <li><strong>2011/65/EU</strong> – RoHS-Richtlinie (Beschränkung gefährlicher Stoffe)</li>
                <li><strong>2012/19/EU</strong> – WEEE-Richtlinie (Elektro- und Elektronik-Altgeräte)</li>
              </ul>

              <h4 className="font-semibold text-slate-700 mb-3">Angewandte harmonisierte Normen:</h4>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>EN 55032:2015 – Elektromagnetische Verträglichkeit</li>
                <li>EN 55035:2017 – Störfestigkeit</li>
                <li>EN 62368-1:2020 – Sicherheit von Audio-, Video- und IT-Geräten</li>
                <li>EN IEC 63000:2018 – RoHS</li>
              </ul>
            </SubSection>

          </Section>

        </div>
      </main>

      <div className="lg:ml-72">
        <Footer />
      </div>
    </>
  );
}
