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
  ScrollToTop,
  EditableText,
  EditModeToggle,
} from "@/components";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <EditModeToggle />

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
                <EditableText id="hero.subtitle" defaultContent="Brillenfreie 3D-Visualisierung für professionelle Anwendungen." as="p" className="text-xs sm:text-base text-gray-400 font-light mb-4 sm:mb-8 max-w-xl mx-auto lg:mx-0" />
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
                <a href="#einleitung" className="relative group cursor-pointer">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#003E77]/10 to-[#73C7D4]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl shadow-[#003E77]/10 overflow-hidden border border-slate-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(115,199,212,0.25)] group-active:translate-y-0 group-active:scale-[0.98]">
                    <Image
                      src="/images/Titelblatt.jpeg"
                      alt="3D 3D-Display - Bedienungsanleitung"
                      width={400}
                      height={500}
                      className="w-full max-w-[160px] sm:max-w-[280px] lg:max-w-[380px] h-auto object-contain"
                      priority
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#003E77]/0 group-hover:bg-[#003E77]/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#003E77]/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Zur Anleitung
                      </span>
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-[#003E77] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-lg">
                    <p className="text-[10px] sm:text-xs font-medium">3D Global</p>
                    <p className="text-xs sm:text-sm font-bold">2025 Serie</p>
                  </div>
                </a>
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

          {/* Einleitung */}
          <Section
            id="einleitung"
            title={<EditableText id="einleitung.title" defaultContent="Einleitung" as="span" />}
            subtitle={<EditableText id="einleitung.subtitle" defaultContent="Wichtige Informationen zur Bedienungsanleitung" as="span" />}
          >
            <EditableText id="einleitung.p.0" defaultContent="Diese Bedienungsanleitung ist Bestandteil des Produkts Auto-Stereo-MultiView-Display und enthält alle erforderlichen Informationen für den sicheren, sachgerechten und bestimmungsgemäßen Betrieb des Auto-Stereo-MultiView-Display. Im weiteren Verlauf dieser Bedienungsanleitung wird das Auto-Stereo-MultiView-Display aus Gründen der besseren Lesbarkeit ausschließlich als 3D-Display bezeichnet." as="p" className="text-slate-600 mb-4" />
            <EditableText id="einleitung.p.1" defaultContent="Die Bedienungsanleitung richtet sich an die Nutzer des 3D-Displays." as="p" className="text-slate-600 mb-4" />
            <EditableText id="einleitung.p.2" defaultContent="Lesen Sie die Betriebsanleitung, bevor Sie das Gerät erstmals in Betrieb nehmen." as="p" className="text-slate-600 mb-4" />
            <EditableText id="einleitung.p.3" defaultContent="Die Nichtbeachtung der in dieser Bedienungsanleitung enthaltenen Hinweise kann zu Fehlbedienungen, Sachschäden, Funktionsstörungen oder Gefährdungen von Personen führen. Für Schäden, die durch unsachgemäße Verwendung oder durch Nichtbeachtung dieser Bedienungsanleitung entstehen, übernimmt der Hersteller keine Haftung." as="p" className="text-slate-600" />
          </Section>

          {/* Kapitel 1: Lieferumfang */}
          <Section
            id="lieferumfang"
            title={<EditableText id="lieferumfang.title" defaultContent="1. Lieferumfang" as="span" />}
            subtitle={<EditableText id="lieferumfang.subtitle" defaultContent="Übersicht der mitgelieferten Komponenten" as="span" />}
          >
            <EditableText id="lieferumfang.p.0" defaultContent="Prüfen Sie nach dem Auspacken, ob alle Teile vollständig geliefert wurden." as="p" className="text-slate-600 mb-8" />

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { src: "/images/Vorderansicht.jpeg", alt: "43 Zoll MultiView 3D-Display", title: "43\" MultiView 3D-Display", desc: "Hauptgerät zur Darstellung von 3D-Inhalten" },
                { src: "/images/Fernbedienung.jpg", alt: "Fernbedienung", title: "Fernbedienung", desc: "Steuerung des 3D-Displays (inkl. Batterien)" },
                { src: "/images/netzkabel.png", alt: "Netzteil", title: "Netzteil", desc: "Stromversorgung des 3D-Displays" },
                { src: "/images/hdmikabel.png", alt: "HDMI-Kabel", title: "HDMI-Kabel", desc: "Verbindung zwischen Computer und 3D-Display" },
                { src: "/images/usbkabel.png", alt: "USB-Kabel", title: "USB-Kabel", desc: "Datenverbindung zwischen Computer und 3D-Display" },
                { src: null, alt: "", title: "Schnellstartanleitung", desc: "Erste Schritte zur Inbetriebnahme" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="bg-slate-50 flex items-center justify-center p-6 sm:p-10 aspect-square">
                    {item.src ? (
                      <Image src={item.src} alt={item.alt} width={400} height={400} className="object-contain w-full h-full" />
                    ) : (
                      <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    )}
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="font-semibold text-[#003E77] text-sm sm:text-base">{item.title}</p>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Kapitel 2: Sicherheit */}
          <Section
            id="sicherheit"
            title={<EditableText id="sicherheit.title" defaultContent="2. Sicherheit" as="span" />}
            subtitle={<EditableText id="sicherheit.subtitle" defaultContent="Wichtige Sicherheitshinweise für den sicheren Betrieb" as="span" />}
          >
            <EditableText id="sicherheit.p.0" defaultContent="Dieses Kapitel enthält grundlegende Regeln für den sicheren Betrieb des 3D-Displays. Das Produkt darf nur in technisch einwandfreiem Zustand und bestimmungsgemäß verwendet werden." as="p" className="text-slate-600 mb-6" />

            <SubSection id="signalwoerter" title={<EditableText id="sicherheit.signalwoerter.title" defaultContent="Verwendete Signalwörter und Symbole" as="span" />}>
              <EditableText id="sicherheit.signalwoerter.p.0" defaultContent="Damit Sie Gefahren schnell erkennen, werden vier farblich gekennzeichnete Warnstufen verwendet. Jeder Warnhinweis beschreibt, <strong>worin die Gefahr</strong> besteht, <strong>was passieren kann</strong> und <strong>wie Sie sich schützen</strong>." as="p" className="text-slate-600 mb-4" html />

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border-2 border-red-500 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="bg-red-100 p-2 sm:p-3 rounded-xl shrink-0 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/ISO_7010_W001.svg" alt="Gefahr" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-red-700 text-base sm:text-lg">GEFAHR</div>
                      <EditableText id="sicherheit.signalwoerter.gefahr" defaultContent="Weist auf eine unmittelbar gefährliche Situation hin. Bei Nichtbeachtung <strong>werden</strong> Tod oder schwere Verletzungen die Folge sein." as="p" className="text-red-800 text-sm" html />
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="bg-orange-100 p-2 sm:p-3 rounded-xl shrink-0 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/ISO_7010_W001.svg" alt="Warnung" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-orange-700 text-base sm:text-lg">WARNUNG</div>
                      <EditableText id="sicherheit.signalwoerter.warnung" defaultContent="Weist auf eine möglicherweise gefährliche Situation hin. Bei Nichtbeachtung <strong>können</strong> Tod oder schwere Verletzungen die Folge sein." as="p" className="text-orange-800 text-sm" html />
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-500 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="bg-yellow-100 p-2 sm:p-3 rounded-xl shrink-0 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/ISO_7010_W001.svg" alt="Vorsicht" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-yellow-700 text-base sm:text-lg">VORSICHT</div>
                      <EditableText id="sicherheit.signalwoerter.vorsicht" defaultContent="Weist auf eine möglicherweise gefährliche Situation hin. Bei Nichtbeachtung können leichte bis mittelschwere Verletzungen die Folge sein." as="p" className="text-yellow-800 text-sm" />
                    </div>
                  </div>
                </div>

                <div className="bg-[#003E77]/5 border-2 border-[#003E77] rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="bg-white p-2 sm:p-3 rounded-xl shrink-0 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/ISO_7010_M001.svg" alt="Hinweis" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-[#003E77] text-base sm:text-lg">HINWEIS</div>
                      <EditableText id="sicherheit.signalwoerter.hinweis" defaultContent="Weist auf eine Situation hin, die zu Sachschäden führen kann. Enthält keine Warnung vor Personenschäden." as="p" className="text-[#003E77] text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </SubSection>

            <SubSection id="bestimmung" title={<EditableText id="sicherheit.bestimmung.title" defaultContent="2.1 Bestimmungsgemäße Verwendung" as="span" />}>
              <EditableText id="sicherheit.bestimmung.p.0" defaultContent="Das Gerät dient zur brillenlosen 3D-Visualisierung für Einzelnutzer und Gruppen in trockenen Innenräumen. Jede andere Verwendung gilt als nicht bestimmungsgemäß und kann zu unvorhersehbaren Gefahren führen." as="p" className="text-slate-600" />
            </SubSection>

            <SubSection id="voraussetzungen" title={<EditableText id="sicherheit.voraussetzungen.title" defaultContent="2.2 Bevor Sie das Gerät verwenden" as="span" />}>
              <EditableText id="sicherheit.voraussetzungen.p.0" defaultContent="Anwender müssen diese Anleitung gelesen und verstanden haben." as="p" className="text-slate-600 mb-4" />
              <EditableText id="sicherheit.voraussetzungen.p.1" defaultContent="Auf Gefahren bei Benutzung mit Epilepsie hinweisen. Bestimmte Licht- und Farbmuster können bei entsprechend Personen zu Krampfanfällen führen." as="p" className="text-slate-600 mb-4" />
              <EditableText id="sicherheit.voraussetzungen.p.2" defaultContent="Kindern unter 6 Jahren die Nutzung des Geräts untersagen. Das Sehvermögen von Kleinkindern befindet sich noch in der Entwicklung. Die räumliche Darstellung kann diese Entwicklung beeinträchtigen." as="p" className="text-slate-600 mb-4" />
              <EditableText id="sicherheit.voraussetzungen.p.3" defaultContent="3D-Inhalte nur durch geschultes Personal erstellen lassen. Falsch konfigurierte 3D-Dateien belasten das visuelle System des Nutzers. Dies kann Schwindel, Übelkeit und Unwohlsein auslösen." as="p" className="text-slate-600" />
            </SubSection>

            <SubSection id="uebergreifend" title={<EditableText id="sicherheit.uebergreifend.title" defaultContent="2.3 Übergreifende Sicherheitshinweise" as="span" />}>
              <EditableText id="sicherheit.uebergreifend.p.0" defaultContent="Alle Kabel so verlegen, dass sie keine Stolperfallen bilden. Stolperunfälle können zu Sturzverletzungen des Nutzers führen oder das Gerät gewaltsam von der Halterung reißen." as="p" className="text-slate-600 mb-4" />
              <EditableText id="sicherheit.uebergreifend.p.1" defaultContent="Das Gerät niemals als Ablagefläche verwenden. Gegenstände auf dem Gehäuse blockieren die notwendige Luftzirkulation. Ein daraus resultierender Wärmestau führt zur Überhitzung und erhöht die Brandgefahr." as="p" className="text-slate-600 mb-4" />
              <EditableText id="sicherheit.uebergreifend.p.2" defaultContent="Keine eigenmächtigen Änderungen oder Umbauten am Gerät vornehmen. Durch das Öffnen des Gehäuses oder Manipulationen an der Technik wird der werkseitige Schutz gegen elektrischen Schlag aufgehoben. Dies führt zu lebensgefährlichen Stromschlägen." as="p" className="text-slate-600 mb-4" />
              <EditableText id="sicherheit.uebergreifend.p.3" defaultContent="Das Gerät bei gesprungenem Glas sofort außer Betrieb nehmen. Eine beschädigte Glasoberfläche besitzt keine Schutzwirkung mehr. Es besteht ein hohes Risiko für tiefe Schnittverletzungen bei Berührung." as="p" className="text-slate-600" />
            </SubSection>

            <SubSection id="spezifisch" title={<EditableText id="sicherheit.spezifisch.title" defaultContent="2.4 Spezifische Sicherheitshinweise" as="span" />}>
              <h4 className="font-semibold text-slate-700 mb-4 mt-2">Montage und Inbetriebnahme</h4>
              <EditableText id="sicherheit.spezifisch.montage.p.0" defaultContent="Das 3D-Display aufgrund des hohen Eigengewichts vorzugsweise mit zwei Personen heben und montieren. Das Gewicht des Geräts kann die körperliche Belastbarkeit einer Einzelperson überschreiten. Ein Heben ohne Unterstützung begünstigt Rückenverletzungen oder führt zum Herabfallen und der Zerstörung des Displays." as="p" className="text-slate-600 mb-4" />
              <EditableText id="sicherheit.spezifisch.montage.p.1" defaultContent="Ausschließlich zertifizierte VESA-Halterungen verwenden. Eine unterdimensionierte Halterung kann die Last des Displays nicht tragen und bricht. Das herabstürzende Gerät verursacht schwere Quetschungen oder Knochenbrüche." as="p" className="text-slate-600 mb-4" />
              <EditableText id="sicherheit.spezifisch.montage.p.2" defaultContent="Einen Mindestabstand von 10 cm zu Wänden und Hindernissen einhalten. Eine unzureichende Belüftung führt zur Überhitzung interner Bauteile. Ein Wärmestau in den Lüftungsschlitzen kann einen Brand auslösen." as="p" className="text-slate-600 mb-4" />
              <EditableText id="sicherheit.spezifisch.montage.p.3" defaultContent="Das Netzkabel vor jedem Einstecken auf Risse oder Brüche prüfen. Beschädigte Isolierungen legen spannungsführende Adern frei. Bei Kontakt wird die elektrische Spannung direkt auf den Benutzer übertragen." as="p" className="text-slate-600 mb-4" />

              <h4 className="font-semibold text-slate-700 mb-4 mt-6">Benutzung</h4>
              <EditableText id="sicherheit.spezifisch.benutzung.p.0" defaultContent="Die Nutzung bei ersten Anzeichen von Schwindel oder Übelkeit sofort beenden. Die künstliche räumliche Darstellung kann den Gleichgewichtssinn stören und ein Unwohlsein erzeugen." as="p" className="text-slate-600 mb-4" />
              <EditableText id="sicherheit.spezifisch.benutzung.p.1" defaultContent="Alle 60 Minuten eine Pause von mindestens 15 Minuten einlegen. Langes Benutzen ohne Unterbrechung führt zu starker Augenermüdung und Kopfschmerzen." as="p" className="text-slate-600 mb-4" />

              <h4 className="font-semibold text-slate-700 mb-4 mt-6">Reinigung</h4>
              <EditableText id="sicherheit.spezifisch.reinigung.p.0" defaultContent="Vor Beginn der Reinigung immer den Netzstecker ziehen. Reinigungsmittel können in das Innere gelangen und dort als elektrische Leiter fungieren. Dies führt zu schweren Verletzungen durch Stromschläge." as="p" className="text-slate-600 mb-4" />
              <EditableText id="sicherheit.spezifisch.reinigung.p.1" defaultContent="Niemals nasse Tücher oder fließendes Wasser verwenden. Eindringende Flüssigkeit verursacht Kurzschlüsse, zerstört die empfindliche Elektronik und setzt metallische Gehäuseteile unter Spannung." as="p" className="text-slate-600 mb-4" />

              <h4 className="font-semibold text-slate-700 mb-4 mt-6">Entsorgung</h4>
              <EditableText id="sicherheit.spezifisch.entsorgung.p.0" defaultContent="Das Gerät ausschließlich bei offiziellen Elektronik-Sammelstellen abgeben. Im Inneren verbaute Komponenten enthalten Stoffe, die bei unsachgemäßer Entsorgung giftige Emissionen freisetzen und die Umwelt schädigen." as="p" className="text-slate-600" />
            </SubSection>

            <SubSection id="notfall" title={<EditableText id="sicherheit.notfall.title" defaultContent="2.5 Verhalten im Notfall" as="span" />}>
              <EditableText id="sicherheit.notfall.p.0" defaultContent="Bei Rauchentwicklung, Brandgeruch, ungewöhnlichen Geräuschen oder einem medizinischen Notfall (z. B. Epilepsieanfall):" as="p" className="text-slate-600 mb-6" />

              <h4 className="font-semibold text-slate-700 mb-3">Medizinischer Notfall</h4>
              <EditableText id="sicherheit.notfall.med.p.0" defaultContent="Rufen Sie bei Bewusstlosigkeit oder Anfällen über 15 Minuten den Rettungsdienst." as="p" className="text-slate-600 mb-2" />
              <EditableText id="sicherheit.notfall.med.p.1" defaultContent="<strong>Visuellen Reiz stoppen:</strong> Schalten Sie das Display sofort aus." as="p" className="text-slate-600 mb-2" html />
              <EditableText id="sicherheit.notfall.med.p.2" defaultContent="<strong>Betroffene sichern:</strong> Helfen Sie der Person beim Hinlegen, um Stürze zu vermeiden." as="p" className="text-slate-600 mb-6" html />

              <h4 className="font-semibold text-slate-700 mb-3">Rauch und Brand</h4>
              <EditableText id="sicherheit.notfall.brand.p.0" defaultContent="Alarmieren Sie bei Feuer oder starkem Rauch die Feuerwehr." as="p" className="text-slate-600 mb-2" />
              <EditableText id="sicherheit.notfall.brand.p.1" defaultContent="<strong>Stecker ziehen:</strong> Trennen Sie das Gerät sofort von der Steckdose, um die Stromzufuhr zu stoppen." as="p" className="text-slate-600 mb-2" html />
              <EditableText id="sicherheit.notfall.brand.p.2" defaultContent="<strong>Kein Wasser verwenden:</strong> Wasser leitet Strom – es besteht Lebensgefahr durch Stromschlag. Nutzen Sie nur CO₂-Löscher." as="p" className="text-slate-600 mb-2" html />
              <EditableText id="sicherheit.notfall.brand.p.3" defaultContent={'<strong>Sichern:</strong> Markieren Sie das Gerät mit \u201EDEFEKT\u201C, um eine Wiederinbetriebnahme durch Dritte zu verhindern.'} as="p" className="text-slate-600" html />
            </SubSection>
          </Section>

          {/* Kapitel 3: Produktübersicht */}
          <Section
            id="leistung"
            title={<EditableText id="leistung.title" defaultContent="3. Produktübersicht" as="span" />}
            subtitle={<EditableText id="leistung.subtitle" defaultContent="Aufbau, Merkmale und Einsatzmöglichkeiten des Geräts" as="span" />}
          >
            <EditableText id="leistung.p.0" defaultContent="Das Gerät ist ein autostereoskopisches 3D-Display zur brillenfreien Darstellung von 3D-Inhalten. Durch ein integriertes Linsensystem (Lentikular-Technologie) wird eine räumliche Tiefenwirkung ohne Zusatzhardware erzielt." as="p" className="text-slate-600 mb-6" />

            <SubSection id="merkmale" title={<EditableText id="leistung.merkmale.title" defaultContent="3.1 Technische Hauptmerkmale" as="span" />}>
              <EditableText id="leistung.merkmale.p.0" defaultContent="<strong>MultiView-Technologie:</strong> Ermöglicht die gleichzeitige 3D-Wahrnehmung für mehrere Personen aus unterschiedlichen Betrachtungswinkeln." as="p" className="text-slate-600 mb-2" html />
              <EditableText id="leistung.merkmale.p.1" defaultContent="<strong>Hybrid-Betrieb:</strong> 2D-Modus (Full 4K) und 3D-Modus möglich." as="p" className="text-slate-600 mb-2" html />
              <EditableText id="leistung.merkmale.p.2" defaultContent="<strong>Autostereoskopie:</strong> Räumliche Darstellung erfolgt direkt über die Displayoberfläche; keine 3D-Brillen erforderlich." as="p" className="text-slate-600" html />
            </SubSection>

            <SubSection id="schnittstellen" title={<EditableText id="leistung.schnittstellen.title" defaultContent="3.2 Schnittstellen und Signalübertragung" as="span" />}>
              <EditableText id="leistung.schnittstellen.p.0" defaultContent="Für den Betrieb sind zwei Verbindungen zum Quellgerät (PC) zwingend erforderlich:" as="p" className="text-slate-600 mb-4" />
              <EditableText id="leistung.schnittstellen.p.1" defaultContent="<strong>1. HDMI-Anschluss:</strong> Übertragung des Bildsignals (Video-Daten)." as="p" className="text-slate-600 mb-2" html />
              <EditableText id="leistung.schnittstellen.p.2" defaultContent="<strong>2. USB-Anschluss:</strong> Übertragung der PC-Steuerung." as="p" className="text-slate-600" html />
            </SubSection>

            <SubSection id="anwendung" title={<EditableText id="leistung.anwendung.title" defaultContent="3.3 Anwendung und Nutzen" as="span" />}>
              <EditableText id="leistung.anwendung.p.0" defaultContent="<strong>Räumliche Analyse:</strong> Komplexe 3D-Strukturen (z. B. CAD, Medizin-Daten) lassen sich schneller erfassen als auf herkömmlichen 2D-Monitoren." as="p" className="text-slate-600 mb-2" html />
              <EditableText id="leistung.anwendung.p.1" defaultContent="<strong>Kollaboratives Arbeiten:</strong> Gemeinsame Betrachtung von 3D-Inhalten in Gruppen ohne technische Barrieren (3D-Brillen)." as="p" className="text-slate-600 mb-2" html />
              <EditableText id="leistung.anwendung.p.2" defaultContent="<strong>Prozessoptimierung:</strong> Frühzeitige Erkennung von Proportionen und räumlichen Fehlern in der Entwicklungs- oder Planungsphase." as="p" className="text-slate-600" html />
            </SubSection>

            <SubSection id="geraet" title={<EditableText id="leistung.geraet.title" defaultContent="3.4 Gerätebeschreibung" as="span" />}>
              <EditableText id="leistung.geraet.p.0" defaultContent="Geräteansichten und Anschlüsse des 3D-Displays." as="p" className="text-slate-600 mb-6" />

              <h4 className="font-semibold text-slate-700 mb-4">Vorderansicht</h4>
            <SingleImage
              src="/images/Vorderansicht.jpeg"
              alt="Vorderansicht des 3D-Displays"
              caption="Vorderansicht des 43 Zoll MultiView 3D-Displays"
            />

            <Table
              headers={[
                <EditableText key="h0" id="leistung.geraet.vorder.h.0" defaultContent="Nr." as="span" />,
                <EditableText key="h1" id="leistung.geraet.vorder.h.1" defaultContent="Bezeichnung" as="span" />,
                <EditableText key="h2" id="leistung.geraet.vorder.h.2" defaultContent="Funktion" as="span" />,
              ]}
              rows={[
                ["1", <EditableText key="v0" id="leistung.geraet.vorder.r0.1" defaultContent="3D-Display-Panel" as="span" />, <EditableText key="v1" id="leistung.geraet.vorder.r0.2" defaultContent="Zeigt 3D-Inhalte als brillenfreie MultiView 3D-Darstellung an. Der 3D-Display erzeugt räumliche Bilder für mehrere Benutzer gleichzeitig." as="span" />],
              ]}
            />

            <h4 className="font-semibold text-slate-700 mt-8 mb-4">Rückansicht</h4>
            <SingleImage
              src="/images/rueckansicht.jpg"
              alt="Rückansicht des 3D-Displays"
              caption="Rückansicht mit Anschlüssen"
            />

            <Table
              headers={[
                <EditableText key="h0" id="leistung.geraet.rueck.h.0" defaultContent="Nr." as="span" />,
                <EditableText key="h1" id="leistung.geraet.rueck.h.1" defaultContent="Bezeichnung" as="span" />,
                <EditableText key="h2" id="leistung.geraet.rueck.h.2" defaultContent="Funktion" as="span" />,
              ]}
              rows={[
                ["2", <EditableText key="r0" id="leistung.geraet.rueck.r0.1" defaultContent="HDMI-Anschluss" as="span" />, <EditableText key="r0f" id="leistung.geraet.rueck.r0.2" defaultContent="Verbindet den 3D-Display mit der Bildquelle (Computer, Laptop). Überträgt Bildsignale." as="span" />],
                ["3", <EditableText key="r1" id="leistung.geraet.rueck.r1.1" defaultContent="USB-Anschluss" as="span" />, <EditableText key="r1f" id="leistung.geraet.rueck.r1.2" defaultContent="Überträgt Daten. Ermöglicht die bidirektionale Kommunikation mit dem Computer." as="span" />],
                ["4", <EditableText key="r2" id="leistung.geraet.rueck.r2.1" defaultContent="Netzteilanschluss" as="span" />, <EditableText key="r2f" id="leistung.geraet.rueck.r2.2" defaultContent="Stromversorgung: Schließen Sie hier das mitgelieferte Netzteil an." as="span" />],
                ["5", <EditableText key="r3" id="leistung.geraet.rueck.r3.1" defaultContent="VESA-Montagepunkte" as="span" />, <EditableText key="r3f" id="leistung.geraet.rueck.r3.2" defaultContent="Standardisierte Befestigungspunkte für Wandhalterungen oder Standfüße." as="span" />],
                ["6", <EditableText key="r4" id="leistung.geraet.rueck.r4.1" defaultContent="Typenschild" as="span" />, <EditableText key="r4f" id="leistung.geraet.rueck.r4.2" defaultContent="Enthält wichtige Geräteinformationen: Seriennummer, Modellbezeichnung, elektrische Daten." as="span" />],
                ["7", <EditableText key="r5" id="leistung.geraet.rueck.r5.1" defaultContent="Power-Taste" as="span" />, <EditableText key="r5f" id="leistung.geraet.rueck.r5.2" defaultContent="Ein-/Ausschalten des 3D-Displays." as="span" />],
              ]}
            />

            <h4 className="font-semibold text-slate-700 mt-8 mb-4">Fernbedienung</h4>
            <WarningBox type="hinweis" title={<EditableText id="leistung.geraet.fb.warning.title" defaultContent="Beschädigung der Fernbedienung" as="span" />}>
              <EditableText id="leistung.geraet.fb.warning.p.0" defaultContent="<strong>Beschädigung der Fernbedienung durch unsachgemäße Bedienung.</strong>" as="p" className="mb-2" html />
              <EditableText id="leistung.geraet.fb.warning.p.1" defaultContent="Defekte Tasten und Funktionsverlust können die Folge sein." as="p" className="mb-2" />
              <EditableText id="leistung.geraet.fb.warning.p.2" defaultContent="Drücken Sie die Tasten nicht mit spitzen Gegenständen. Verwenden Sie nur Ihre Finger." as="p" />
            </WarningBox>
            <SingleImage
              src="/images/Fernbedienung.jpg"
              alt="Fernbedienung"
              caption="Fernbedienung des 3D-Displays"
            />

            <Table
              headers={[
                <EditableText key="h0" id="leistung.geraet.fb.h.0" defaultContent="Nr." as="span" />,
                <EditableText key="h1" id="leistung.geraet.fb.h.1" defaultContent="Bezeichnung" as="span" />,
                <EditableText key="h2" id="leistung.geraet.fb.h.2" defaultContent="Funktion" as="span" />,
              ]}
              rows={[
                ["8", <EditableText key="r0" id="leistung.geraet.fb.r0.1" defaultContent="Power-Taste" as="span" />, <EditableText key="r0f" id="leistung.geraet.fb.r0.2" defaultContent="3D-Display ein-/ausschalten. Befindet sich oben an der Fernbedienung." as="span" />],
                ["9", <EditableText key="r1" id="leistung.geraet.fb.r1.1" defaultContent="MENU-Taste" as="span" />, <EditableText key="r1f" id="leistung.geraet.fb.r1.2" defaultContent="3D-Displaymenü öffnen/schließen." as="span" />],
                ["10", <EditableText key="r2" id="leistung.geraet.fb.r2.1" defaultContent="Eingangsquellen-Taste" as="span" />, <EditableText key="r2f" id="leistung.geraet.fb.r2.2" defaultContent="Eingangsquelle wählen. Wechselt zwischen angeschlossenen Geräten." as="span" />],
                ["11", <EditableText key="r3" id="leistung.geraet.fb.r3.1" defaultContent="Pfeiltasten" as="span" />, <EditableText key="r3f" id="leistung.geraet.fb.r3.2" defaultContent="Navigation im 3D-Displaymenü. Ermöglicht die Auswahl von Menüpunkten." as="span" />],
                ["12", <EditableText key="r4" id="leistung.geraet.fb.r4.1" defaultContent="OK-Taste" as="span" />, <EditableText key="r4f" id="leistung.geraet.fb.r4.2" defaultContent="Auswahl bestätigen. Befindet sich in der Mitte des Navigationskreuzes." as="span" />],
                ["13", <EditableText key="r5" id="leistung.geraet.fb.r5.1" defaultContent="Lautstärke-Tasten" as="span" />, <EditableText key="r5f" id="leistung.geraet.fb.r5.2" defaultContent="Lautstärke verringern (−) oder erhöhen (+)." as="span" />],
                ["14", <EditableText key="r6" id="leistung.geraet.fb.r6.1" defaultContent="Play/Pause-Taste" as="span" />, <EditableText key="r6f" id="leistung.geraet.fb.r6.2" defaultContent="Wiedergabe starten oder pausieren. Für Medieninhalte." as="span" />],
                ["15", <EditableText key="r7" id="leistung.geraet.fb.r7.1" defaultContent="Zurück-Taste" as="span" />, <EditableText key="r7f" id="leistung.geraet.fb.r7.2" defaultContent="Zurück zum vorherigen Menü oder 3D-Displaymenü verlassen." as="span" />],
                ["16", <EditableText key="r8" id="leistung.geraet.fb.r8.1" defaultContent="Stumm-Taste" as="span" />, <EditableText key="r8f" id="leistung.geraet.fb.r8.2" defaultContent="Ton stumm schalten. Befindet sich unten an der Fernbedienung." as="span" />],
              ]}
            />

            <EditableText id="leistung.geraet.fb.p.0" defaultContent={'Die Bedienung des 3D-Displaymenüs ist in <a href="#displaymenue" class="text-[#003E77] hover:underline font-medium">Kapitel 4.7</a> beschrieben.'} as="p" className="text-slate-600 mt-4" html />
            </SubSection>
          </Section>

          {/* Kapitel 4: Bedienung */}
          <Section
            id="taetigkeit"
            title={<EditableText id="taetigkeit.title" defaultContent="4. Bedienung" as="span" />}
            subtitle={<EditableText id="taetigkeit.subtitle" defaultContent="Schritt-für-Schritt-Anleitungen für alle Aufgaben." as="span" />}
          >
            <SubSection id="auspacken" title={<EditableText id="taetigkeit.auspacken.title" defaultContent="4.1 3D-Display auspacken" as="span" />}>
              <EditableText id="taetigkeit.auspacken.p.0" defaultContent="Nehmen Sie den 3D-Display sicher aus der Verpackung und prüfen Sie alle Komponenten." as="p" className="text-slate-600 mb-4" />

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  <EditableText key="0" id="taetigkeit.auspacken.check.0" defaultContent="Zwei Personen sind für das Auspacken und Anheben erforderlich" as="span" />,
                  <EditableText key="1" id="taetigkeit.auspacken.check.1" defaultContent="Sie haben eine saubere, ebene Arbeitsfläche" as="span" />,
                  <EditableText key="2" id="taetigkeit.auspacken.check.2" defaultContent="Sie öffnen die Verpackung nicht mit scharfen Gegenständen" as="span" />,
                  <EditableText key="3" id="taetigkeit.auspacken.check.3" defaultContent="Sie haben Platz für alle Komponenten" as="span" />,
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: <EditableText id="taetigkeit.auspacken.step.0" defaultContent="Öffnen Sie den Versandkarton vorsichtig von oben." as="span" /> },
                  { content: <EditableText id="taetigkeit.auspacken.step.1" defaultContent="Entnehmen Sie die Schnellstartanleitung und legen Sie diese bereit." as="span" /> },
                  { content: <EditableText id="taetigkeit.auspacken.step.2" defaultContent="Nehmen Sie den 3D-Display mit beiden Händen aus der Verpackung." as="span" /> },
                  { content: <EditableText id="taetigkeit.auspacken.step.3" defaultContent="Entnehmen Sie alle weiteren Komponenten aus der Verpackung." as="span" /> },
                  { content: <EditableText id="taetigkeit.auspacken.step.4" defaultContent="Vergleichen Sie den Inhalt mit der Tabelle im Kapitel 1 (Lieferumfang) und prüfen Sie alle Teile auf sichtbare Transportschäden." as="span" /> },
                  { content: <EditableText id="taetigkeit.auspacken.step.5" defaultContent="Bei fehlenden oder beschädigten Teilen: Kontaktieren Sie umgehend den Händler." as="span" /> },
                ]}
                result={<EditableText id="taetigkeit.auspacken.result" defaultContent="Sie haben den 3D-Display ausgepackt und den Lieferumfang geprüft." as="span" />}
              />
            </SubSection>

            <SubSection id="positionieren" title={<EditableText id="taetigkeit.positionieren.title" defaultContent="4.2 3D-Display positionieren" as="span" />}>
              <EditableText id="taetigkeit.positionieren.p.0" defaultContent="Positionieren Sie den 3D-Display für den optimalen MultiView 3D-Effekt. Abstand, Höhe und Neigung sind entscheidend." as="p" className="text-slate-600 mb-6" />

              <SingleImage
                src="/images/quickin-img-1-1.jpeg"
                alt="MultiView-Bereich für Gruppenbetrachtung"
                caption="Optimaler Betrachtungsbereich für mehrere Benutzer"
              />

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  <EditableText key="0" id="taetigkeit.positionieren.check.0" defaultContent="Der 3D-Display ist an einer geeigneten Halterung montiert" as="span" />,
                  <EditableText key="1" id="taetigkeit.positionieren.check.1" defaultContent="Mindestabstand von 2,5 m zum 3D-Display ist gewährleistet" as="span" />,
                  <EditableText key="2" id="taetigkeit.positionieren.check.2" defaultContent="Eine Fläche von mindestens 3 m² für die Betrachtung ist vorhanden" as="span" />,
                  <EditableText key="3" id="taetigkeit.positionieren.check.3" defaultContent="Keine direkte Sonneneinstrahlung fällt auf den 3D-Display" as="span" />,
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: <EditableText id="taetigkeit.positionieren.step.0" defaultContent="Positionieren Sie den 3D-Display so, dass der Mindestabstand von 2,5 m eingehalten werden kann." as="span" /> },
                  { content: <EditableText id="taetigkeit.positionieren.step.1" defaultContent="Stellen Sie den 3D-Display so auf, dass die 3D-Display-Mitte auf Brusthöhe der stehenden oder sitzenden Benutzer liegt." as="span" /> },
                  { content: <EditableText id="taetigkeit.positionieren.step.2" defaultContent="Neigen Sie den 3D-Display bei Bedarf leicht (5° bis 10°) für einen optimalen Betrachtungswinkel." as="span" /> },
                  { content: <EditableText id="taetigkeit.positionieren.step.3" defaultContent="Prüfen Sie, ob von den Betrachtungspositionen aus kein störendes Licht auf dem 3D-Display reflektiert." as="span" /> },
                ]}
              />

            </SubSection>

            <SubSection id="verkabeln" title={<EditableText id="taetigkeit.verkabeln.title" defaultContent="4.3 3D-Display verkabeln" as="span" />}>
              <EditableText id="taetigkeit.verkabeln.p.0" defaultContent="Verbinden Sie den 3D-Display mit einem Computer und schließen Sie die Stromversorgung an." as="p" className="text-slate-600 mb-4" />

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  <EditableText key="0" id="taetigkeit.verkabeln.check.0" defaultContent="Der 3D-Display ist montiert" as="span" />,
                  <EditableText key="1" id="taetigkeit.verkabeln.check.1" defaultContent="Eine Steckdose (230 V) ist in Reichweite" as="span" />,
                  <EditableText key="2" id="taetigkeit.verkabeln.check.2" defaultContent="Alle Kabel liegen bereit (HDMI, Netzteil)" as="span" />,
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: <EditableText id="taetigkeit.verkabeln.step.0" defaultContent="Verbinden Sie den Computer per HDMI-Kabel mit dem 3D-Display." as="span" /> },
                  { content: <EditableText id="taetigkeit.verkabeln.step.1" defaultContent="Verbinden Sie das Netzkabel mit dem 3D-Display-Netzteil und stecken Sie den runden Stecker in den Netzteilanschluss an der Rückseite des 3D-Displays." as="span" /> },
                  { content: <EditableText id="taetigkeit.verkabeln.step.2" defaultContent="Stecken Sie das Netzkabel in die Steckdose." as="span" /> },
                ]}
              />
            </SubSection>

            <SubSection id="einschalten" title={<EditableText id="taetigkeit.einschalten.title" defaultContent="4.4 3D-Display einschalten" as="span" />}>
              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  <EditableText key="0" id="taetigkeit.einschalten.check.0" defaultContent="Das Netzteil ist mit dem 3D-Display verbunden" as="span" />,
                  <EditableText key="1" id="taetigkeit.einschalten.check.1" defaultContent="Das Netzteil ist an eine funktionierende Steckdose angeschlossen" as="span" />,
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: <EditableText id="taetigkeit.einschalten.step.0" defaultContent="Drücken Sie die Power-Taste am rechten Rand des 3D-Displays kurz." as="span" /> },
                  { content: <EditableText id="taetigkeit.einschalten.step.1" defaultContent="Schalten Sie den angeschlossenen Computer ein." as="span" /> },
                ]}
                result={<EditableText id="taetigkeit.einschalten.result" defaultContent="Der 3D-Display zeigt nach wenigen Sekunden das Bild des angeschlossenen Computers." as="span" />}
              />
            </SubSection>

            <SubSection id="ausschalten" title={<EditableText id="taetigkeit.ausschalten.title" defaultContent="4.5 3D-Display ausschalten" as="span" />}>
              <EditableText id="taetigkeit.ausschalten.p.0" defaultContent="Versetzen Sie den 3D-Display in den Bereitschaftsmodus oder schalten Sie ihn vollständig aus." as="p" className="text-slate-600 mb-4" />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: <EditableText id="taetigkeit.ausschalten.step.0" defaultContent="Drücken Sie die Power-Taste am rechten Rand des 3D-Displays kurz (weniger als 2 Sekunden)." as="span" /> },
                  { content: <EditableText id="taetigkeit.ausschalten.step.1" defaultContent="Warten Sie, bis der 3D-Display dunkel wird." as="span" /> },
                ]}
                result={<EditableText id="taetigkeit.ausschalten.result" defaultContent="Der 3D-Display befindet sich im Bereitschaftsmodus und verbraucht minimal Strom." as="span" />}
              />

            </SubSection>

            <SubSection id="eingangsquelle" title={<EditableText id="taetigkeit.eingangsquelle.title" defaultContent="4.6 Eingangsquelle wählen" as="span" />}>
              <EditableText id="taetigkeit.eingangsquelle.p.0" defaultContent="Wechseln Sie zwischen angeschlossenen Geräten. In den meisten Fällen erkennt der 3D-Display das aktive Signal automatisch." as="p" className="text-slate-600 mb-4" />

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  <EditableText key="0" id="taetigkeit.eingangsquelle.check.0" defaultContent="Mindestens ein Gerät ist mit dem 3D-Display verbunden und eingeschaltet" as="span" />,
                  <EditableText key="1" id="taetigkeit.eingangsquelle.check.1" defaultContent="Die Fernbedienung ist einsatzbereit" as="span" />,
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: <EditableText id="taetigkeit.eingangsquelle.step.0" defaultContent="Drücken Sie auf der Fernbedienung die Eingangsquellen-Taste. Ein Auswahlmenü erscheint." as="span" /> },
                  { content: <EditableText id="taetigkeit.eingangsquelle.step.1" defaultContent="Drücken Sie die Eingangsquellen-Taste wiederholt, um durch die Quellen zu schalten." as="span" /> },
                  { content: <EditableText id="taetigkeit.eingangsquelle.step.2" defaultContent="Warten Sie 3 Sekunden, ohne eine Taste zu drücken. Der 3D-Display wechselt zur ausgewählten Quelle." as="span" /> },
                ]}
              />
            </SubSection>

            <SubSection id="displaymenue" title={<EditableText id="taetigkeit.displaymenue.title" defaultContent="4.7 3D-Displaymenü bedienen" as="span" />}>
              <EditableText id="taetigkeit.displaymenue.p.0" defaultContent="Das 3D-Displaymenü ist die zentrale Steuerungsebene für Bild-, Ton- und Systemeinstellungen." as="p" className="text-slate-600 mb-4" />

              <h4 className="font-semibold text-slate-700 mb-3">3D-Displaymenü öffnen und schließen:</h4>
              <StepList
                steps={[
                  { content: <EditableText id="taetigkeit.displaymenue.open.step.0" defaultContent="Drücken Sie die Taste MENU auf der Fernbedienung." as="span" /> },
                  { content: <EditableText id="taetigkeit.displaymenue.open.step.1" defaultContent="Um das Menü zu schließen, drücken Sie erneut MENU oder BACK." as="span" /> },
                ]}
                result={<EditableText id="taetigkeit.displaymenue.open.result" defaultContent="Das Hauptmenü erscheint auf der linken Seite des 3D-Displays." as="span" />}
              />

              <div className="mt-4 p-4 bg-[#0B3D5C]/5 border border-[#4A90A4]/30 rounded-lg">
                <EditableText id="taetigkeit.displaymenue.tipp" defaultContent="<strong>Tipp:</strong> Das Menü schließt sich automatisch nach 30 Sekunden Inaktivität." as="p" className="text-[#0B3D5C] text-sm" html />
              </div>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Im 3D-Displaymenü navigieren:</h4>
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

            <SubSection id="reinigung" title={<EditableText id="taetigkeit.reinigung.title" defaultContent="4.8 3D-Display reinigen" as="span" />}>
              <EditableText id="taetigkeit.reinigung.p.0" defaultContent="Halten Sie den 3D-Display sauber für optimale Bildqualität. Reinigen Sie das Gehäuse regelmäßig mit einem weichen Tuch." as="p" className="text-slate-600 mb-4" />

              <WarningBox type="vorsicht" title={<EditableText id="taetigkeit.reinigung.warning1.title" defaultContent="Stromschlaggefahr bei der Reinigung" as="span" />} icon="strom">
                <EditableText id="taetigkeit.reinigung.warning1.p.0" defaultContent="Reinigung bei eingeschaltetem Gerät kann zu einem Stromschlag führen." as="p" className="mb-1" />
                <EditableText id="taetigkeit.reinigung.warning1.p.1" defaultContent="Ziehen Sie das Netzkabel und warten Sie, bis das Gerät abgekühlt ist, bevor Sie mit der Reinigung beginnen." as="p" />
              </WarningBox>

              <WarningBox type="hinweis" title={<EditableText id="taetigkeit.reinigung.warning2.title" defaultContent="Beschädigung durch falsche Reinigung" as="span" />}>
                <EditableText id="taetigkeit.reinigung.warning2.p.0" defaultContent="Unsachgemäße Reinigung kann zu Kratzern, Trübung oder dauerhaftem Funktionsverlust führen." as="p" className="mb-2" />
                <EditableText id="taetigkeit.reinigung.warning2.p.1" defaultContent="Nur bei ausgeschaltetem Gerät reinigen. Weiches Tuch verwenden, nie direkt auf das Display sprühen. Keinen Druck ausüben, keine scharfen Gegenstände oder aggressive Reinigungsmittel verwenden. Bei hartnäckigen Verschmutzungen nur milde Reinigungsmittel nutzen." as="p" />
              </WarningBox>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  <EditableText key="0" id="taetigkeit.reinigung.check.0" defaultContent="Der 3D-Display ist ausgeschaltet" as="span" />,
                  <EditableText key="1" id="taetigkeit.reinigung.check.1" defaultContent="Das Netzkabel ist getrennt" as="span" />,
                  <EditableText key="2" id="taetigkeit.reinigung.check.2" defaultContent="Der 3D-Display ist abgekühlt (mindestens 5 Minuten warten)" as="span" />,
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  {
                    title: <EditableText id="taetigkeit.reinigung.step.0.title" defaultContent="Staub entfernen" as="span" />,
                    content: <EditableText id="taetigkeit.reinigung.step.0.content" defaultContent="Wischen Sie mit einem weichen, trockenen Mikrofasertuch vorsichtig über 3D-Display und Gehäuse. Üben Sie nur leichten Druck aus." as="span" />
                  },
                  {
                    title: <EditableText id="taetigkeit.reinigung.step.1.title" defaultContent="Flecken entfernen" as="span" />,
                    content: <EditableText id="taetigkeit.reinigung.step.1.content" defaultContent="Befeuchten Sie das Tuch leicht mit destilliertem Wasser oder speziellem 3D-Displayreiniger. Wischen Sie in kreisenden Bewegungen." as="span" />,
                    substeps: [<EditableText key="0" id="taetigkeit.reinigung.step.1.substep.0" defaultContent="Wichtig: Sprühen Sie niemals direkt auf das Gerät." as="span" />]
                  },
                  {
                    title: <EditableText id="taetigkeit.reinigung.step.2.title" defaultContent="Lüftung reinigen" as="span" />,
                    content: <EditableText id="taetigkeit.reinigung.step.2.content" defaultContent="Entfernen Sie Staub aus den Lüftungsöffnungen vorsichtig mit einem weichen Pinsel oder Druckluft." as="span" />
                  },
                ]}
                result={<EditableText id="taetigkeit.reinigung.result" defaultContent="Der 3D-Display ist sauber und die Luftzirkulation sichergestellt." as="span" />}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-4">Geeignete Reinigungsmittel:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2">✓ Empfohlen</h5>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Destilliertes Wasser</li>
                    <li>• 3D-Displayreiniger für TFT/LCD (alkoholfrei)</li>
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
                <EditableText id="taetigkeit.reinigung.hintergrund" defaultContent="<strong>Hintergrund:</strong> Diese Mittel können das spezielle Linsenraster des 3D-Displays dauerhaft beschädigen." as="p" className="text-slate-600 text-sm" html />
              </div>
            </SubSection>
          </Section>

          {/* Kapitel 5: Problemlösung */}
          <Section
            id="problemloesung"
            title={<EditableText id="problemloesung.title" defaultContent="5. Problemlösung" as="span" />}
            subtitle={<EditableText id="problemloesung.subtitle" defaultContent="Häufige Probleme und ihre Lösungen" as="span" />}
          >
            <EditableText id="problemloesung.p.0" defaultContent="Sie finden hier schnell Lösungen für häufig auftretende Probleme mit Ihrem 3D-Display. Die Tabelle hilft Ihnen, die Ursache zu identifizieren und das Problem zu beheben. Arbeiten Sie die Lösungen in der angegebenen Reihenfolge durch." as="p" className="text-slate-600 mb-6" />

            <Table
              headers={[
                <EditableText key="h0" id="problemloesung.h.0" defaultContent="Problem" as="span" />,
                <EditableText key="h1" id="problemloesung.h.1" defaultContent="Mögliche Ursache" as="span" />,
                <EditableText key="h2" id="problemloesung.h.2" defaultContent="Lösung" as="span" />,
              ]}
              rows={[
                [<EditableText key="r0c0" id="problemloesung.r0.0" defaultContent="Kein Bild" as="span" />, <EditableText key="r0c1" id="problemloesung.r0.1" defaultContent="Stromversorgung unterbrochen" as="span" />, <EditableText key="r0c2" id="problemloesung.r0.2" defaultContent="Prüfen Sie, ob das Netzteil korrekt angeschlossen ist." as="span" />],
                [<EditableText key="r1c0" id="problemloesung.r1.0" defaultContent="Kein Bild" as="span" />, <EditableText key="r1c1" id="problemloesung.r1.1" defaultContent="Kabelverbindung fehlerhaft" as="span" />, <EditableText key="r1c2" id="problemloesung.r1.2" defaultContent="Prüfen Sie die HDMI-Verbindung zwischen Computer und 3D-Display." as="span" />],
                [<EditableText key="r2c0" id="problemloesung.r2.0" defaultContent="Kein Bild" as="span" />, <EditableText key="r2c1" id="problemloesung.r2.1" defaultContent="Computer nicht aktiv" as="span" />, <EditableText key="r2c2" id="problemloesung.r2.2" defaultContent="Schalten Sie den Computer ein oder wecken Sie ihn aus dem Ruhezustand." as="span" />],
                [<EditableText key="r3c0" id="problemloesung.r3.0" defaultContent="Kein 3D-Effekt" as="span" />, <EditableText key="r3c1" id="problemloesung.r3.1" defaultContent="Falsche Inhalte" as="span" />, <EditableText key="r3c2" id="problemloesung.r3.2" defaultContent="Spielen Sie am Computer die vorgesehene 3D-Datei ab." as="span" />],
                [<EditableText key="r4c0" id="problemloesung.r4.0" defaultContent="Kein 3D-Effekt" as="span" />, <EditableText key="r4c1" id="problemloesung.r4.1" defaultContent="USB-Verbindung fehlt" as="span" />, <EditableText key="r4c2" id="problemloesung.r4.2" defaultContent="Prüfen Sie die USB-Verbindung zwischen Computer und 3D-Display." as="span" />],
                ["Kein 3D-Effekt", "Falscher Betrachtungsabstand", (<>Korrigieren Sie den Abstand zum 3D-Display (siehe <a href="#positionieren" className="text-[#003E77] hover:underline">Kapitel 4.2</a>).</>)],
                [<EditableText key="r6c0" id="problemloesung.r6.0" defaultContent="Flackern/Streifen" as="span" />, <EditableText key="r6c1" id="problemloesung.r6.1" defaultContent="Lose Kabelverbindung" as="span" />, <EditableText key="r6c2" id="problemloesung.r6.2" defaultContent="Prüfen Sie alle Kabelverbindungen auf festen Sitz." as="span" />],
                [<EditableText key="r7c0" id="problemloesung.r7.0" defaultContent="Flackern/Streifen" as="span" />, <EditableText key="r7c1" id="problemloesung.r7.1" defaultContent="Defektes Kabel" as="span" />, <EditableText key="r7c2" id="problemloesung.r7.2" defaultContent="Verwenden Sie ein hochwertiges HDMI-Kabel." as="span" />],
                [<EditableText key="r8c0" id="problemloesung.r8.0" defaultContent="Flackern/Streifen" as="span" />, <EditableText key="r8c1" id="problemloesung.r8.1" defaultContent="Falsche Bildwiederholrate" as="span" />, <EditableText key="r8c2" id="problemloesung.r8.2" defaultContent="Stellen Sie am Computer 60 Hz ein." as="span" />],
                [<EditableText key="r9c0" id="problemloesung.r9.0" defaultContent="Unscharfes Bild" as="span" />, <EditableText key="r9c1" id="problemloesung.r9.1" defaultContent="Falsche Auflösung" as="span" />, <EditableText key="r9c2" id="problemloesung.r9.2" defaultContent="Stellen Sie die native Auflösung (3840 x 2160) am Computer ein." as="span" />],
                ["Unscharfes Bild", "Verschmutzter 3D-Display", (<>Reinigen Sie das 3D-Display (siehe <a href="#reinigung" className="text-[#003E77] hover:underline">Kapitel 4.8</a>).</>)],
                [<EditableText key="r11c0" id="problemloesung.r11.0" defaultContent="Kopfschmerzen" as="span" />, <EditableText key="r11c1" id="problemloesung.r11.1" defaultContent="Zu lange Nutzung" as="span" />, <EditableText key="r11c2" id="problemloesung.r11.2" defaultContent="Legen Sie regelmäßig Pausen ein (15 Min. nach 60 Min. Betrieb)." as="span" />],
                [<EditableText key="r12c0" id="problemloesung.r12.0" defaultContent="Kopfschmerzen" as="span" />, <EditableText key="r12c1" id="problemloesung.r12.1" defaultContent="Falsche Sitzposition" as="span" />, <EditableText key="r12c2" id="problemloesung.r12.2" defaultContent="Korrigieren Sie Ihre Sitzposition und den Betrachtungswinkel." as="span" />],
                [<EditableText key="r13c0" id="problemloesung.r13.0" defaultContent="Menü reagiert nicht" as="span" />, <EditableText key="r13c1" id="problemloesung.r13.1" defaultContent="Softwarefehler" as="span" />, <EditableText key="r13c2" id="problemloesung.r13.2" defaultContent="Führen Sie einen Neustart durch (Power-Taste 5 Sek. halten)." as="span" />],
              ]}
            />
          </Section>

          {/* Kapitel 6: Technische Daten */}
          <Section
            id="technisch"
            title={<EditableText id="technisch.title" defaultContent="6. Technische Daten" as="span" />}
            subtitle={<EditableText id="technisch.subtitle" defaultContent="Spezifikationen und Anforderungen" as="span" />}
          >
            <SubSection id="spezifikationen" title={<EditableText id="technisch.spezifikationen.title" defaultContent="6.1 3D-Display-Spezifikationen" as="span" />}>
              <SpecTable
                specs={[
                  { label: <EditableText id="technisch.spec.0.label" defaultContent="3D-Displaygröße" as="span" />, value: <EditableText id="technisch.spec.0.value" defaultContent="43 Zoll (109 cm) diagonal" as="span" /> },
                  { label: <EditableText id="technisch.spec.1.label" defaultContent="Auflösung" as="span" />, value: <EditableText id="technisch.spec.1.value" defaultContent="3840 x 2160 (4K)" as="span" /> },
                  { label: <EditableText id="technisch.spec.2.label" defaultContent="Seitenverhältnis" as="span" />, value: <EditableText id="technisch.spec.2.value" defaultContent="16:9" as="span" /> },
                  { label: <EditableText id="technisch.spec.3.label" defaultContent="Panel-Technologie" as="span" />, value: <EditableText id="technisch.spec.3.value" defaultContent="IPS (weiter Blickwinkel, natürliche Farben)" as="span" /> },
                  { label: <EditableText id="technisch.spec.4.label" defaultContent="3D-Technologie" as="span" />, value: <EditableText id="technisch.spec.4.value" defaultContent="Brillenfrei mit MultiView (mehrere Benutzer gleichzeitig)" as="span" /> },
                  { label: <EditableText id="technisch.spec.5.label" defaultContent="Farbtiefe" as="span" />, value: <EditableText id="technisch.spec.5.value" defaultContent="8 bit" as="span" /> },
                  { label: <EditableText id="technisch.spec.6.label" defaultContent="Bildwiederholrate" as="span" />, value: <EditableText id="technisch.spec.6.value" defaultContent="60 Hz" as="span" /> },
                ]}
              />
            </SubSection>

            <SubSection id="anschluesse" title={<EditableText id="technisch.anschluesse.title" defaultContent="6.2 Anschlüsse und Schnittstellen" as="span" />}>
              <SpecTable
                specs={[
                  { label: <EditableText id="technisch.anschluss.0.label" defaultContent="HDMI" as="span" />, value: <EditableText id="technisch.anschluss.0.value" defaultContent="HDMI 2.0" as="span" /> },
                  { label: <EditableText id="technisch.anschluss.1.label" defaultContent="USB" as="span" />, value: <EditableText id="technisch.anschluss.1.value" defaultContent="USB 3.0" as="span" /> },
                ]}
              />
            </SubSection>

            <SubSection id="stromversorgung" title={<EditableText id="technisch.stromversorgung.title" defaultContent="6.3 Stromversorgung" as="span" />}>
              <SpecTable
                specs={[
                  { label: <EditableText id="technisch.strom.0.label" defaultContent="Eingangsspannung" as="span" />, value: <EditableText id="technisch.strom.0.value" defaultContent="100-240V AC, 50/60 Hz" as="span" /> },
                ]}
              />
            </SubSection>

            <SubSection id="umgebung" title={<EditableText id="technisch.umgebung.title" defaultContent="6.4 Umgebungsbedingungen" as="span" />}>
              <h4 className="font-semibold text-slate-700 mb-3">Betrieb</h4>
              <SpecTable
                specs={[
                  { label: <EditableText id="technisch.umgebung.betrieb.0.label" defaultContent="Temperatur" as="span" />, value: <EditableText id="technisch.umgebung.betrieb.0.value" defaultContent="10°C bis 35°C" as="span" /> },
                  { label: <EditableText id="technisch.umgebung.betrieb.1.label" defaultContent="Relative Luftfeuchtigkeit" as="span" />, value: <EditableText id="technisch.umgebung.betrieb.1.value" defaultContent="20% bis 80% (nicht kondensierend)" as="span" /> },
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Lagerung und Transport</h4>
              <SpecTable
                specs={[
                  { label: <EditableText id="technisch.umgebung.lagerung.0.label" defaultContent="Temperatur" as="span" />, value: <EditableText id="technisch.umgebung.lagerung.0.value" defaultContent="-10°C bis 60°C" as="span" /> },
                  { label: <EditableText id="technisch.umgebung.lagerung.1.label" defaultContent="Relative Luftfeuchtigkeit" as="span" />, value: <EditableText id="technisch.umgebung.lagerung.1.value" defaultContent="10% bis 90% (nicht kondensierend)" as="span" /> },
                ]}
              />
            </SubSection>

            <SubSection id="normen" title={<EditableText id="technisch.normen.title" defaultContent="6.5 Normen und Zertifizierungen" as="span" />}>
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

          {/* Kapitel 7: Herstellerinformationen */}
          <Section
            id="herstellerinfo"
            title={<EditableText id="herstellerinfo.title" defaultContent="7. Herstellerinformationen" as="span" />}
            subtitle={<EditableText id="herstellerinfo.subtitle" defaultContent="Kontaktdaten und Support" as="span" />}
          >
            <SpecTable
                specs={[
                  { label: <EditableText id="herstellerinfo.spec.0.label" defaultContent="Hersteller" as="span" />, value: <EditableText id="herstellerinfo.spec.0.value" defaultContent="3D Global GmbH" as="span" /> },
                  { label: <EditableText id="herstellerinfo.spec.1.label" defaultContent="Anschrift" as="span" />, value: <EditableText id="herstellerinfo.spec.1.value" defaultContent="Robert-Bosch-Str. 33, D – 73431 Aalen" as="span" /> },
                  { label: <EditableText id="herstellerinfo.spec.2.label" defaultContent="Telefon" as="span" />, value: <EditableText id="herstellerinfo.spec.2.value" defaultContent="+49 7361 528299 – 0" as="span" /> },
                  { label: "E-Mail", value: (<a href="mailto:info@3d-global.com" className="text-blue-600 hover:underline">info@3d-global.com</a>) },
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Kontakt</h4>
              <EditableText id="herstellerinfo.kontakt.p.0" defaultContent="Bei technischen Fragen oder Problemen wenden Sie sich an uns:" as="p" className="text-slate-600 mb-4" />
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li><strong>Telefon:</strong> +49 7361 528299 – 0</li>
                <li><strong>E-Mail:</strong> <a href="mailto:info@3d-global.com" className="text-blue-600 hover:underline">info@3d-global.com</a></li>
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
          </Section>

          {/* Kapitel 8: Garantiebedingungen */}
          <Section
            id="garantie"
            title={<EditableText id="garantie.title" defaultContent="8. Garantiebedingungen" as="span" />}
            subtitle={<EditableText id="garantie.subtitle" defaultContent="Garantieumfang und -abwicklung" as="span" />}
          >
              <h4 className="font-semibold text-slate-700 mb-3">Garantieumfang</h4>
              <EditableText id="garantie.umfang.p.0" defaultContent="Der Hersteller gewährt auf dieses Produkt eine Garantie von <strong>24 Monaten</strong> ab Kaufdatum. Die Garantie umfasst Material- und Herstellungsfehler." as="p" className="text-slate-600 mb-4" html />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Garantieleistungen</h4>
              <EditableText id="garantie.leistungen.p.0" defaultContent="Im Garantiefall wird das Gerät nach Wahl des Herstellers:" as="p" className="text-slate-600 mb-2" />
              <ul className="list-disc list-inside text-slate-600 ml-4 space-y-1 mb-4">
                <li>repariert,</li>
                <li>durch ein gleichwertiges Gerät ersetzt oder</li>
                <li>der Kaufpreis erstattet.</li>
              </ul>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Garantieausschlüsse</h4>
              <EditableText id="garantie.ausschluss.p.0" defaultContent="Die Garantie erlischt bei:" as="p" className="text-slate-600 mb-2" />
              <ul className="list-disc list-inside text-slate-600 ml-4 space-y-1 mb-4">
                <li>Schäden durch unsachgemäße Handhabung oder Nichtbeachtung der Bedienungsanleitung</li>
                <li>Schäden durch äußere Einwirkungen (Sturz, Feuchtigkeit, Überspannung)</li>
                <li>Eingriffen durch nicht autorisierte Personen</li>
                <li>Normalem Verschleiß</li>
                <li>Verwendung nicht zugelassener Zubehörteile</li>
              </ul>

          </Section>

          {/* Kapitel 9: Entsorgungshinweise */}
          <Section
            id="entsorgung"
            title={<EditableText id="entsorgung.title" defaultContent="9. Entsorgungshinweise" as="span" />}
            subtitle={<EditableText id="entsorgung.subtitle" defaultContent="Umweltgerechte Entsorgung" as="span" />}
          >
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
                  <EditableText id="entsorgung.weee.p.0" defaultContent="Dieses Produkt ist mit dem Symbol der durchgestrichenen Mülltonne gekennzeichnet (gemäß ElektroG). Sie sind als Endnutzer <strong>gesetzlich verpflichtet</strong>, dieses Gerät getrennt vom Hausmüll zu entsorgen." as="p" className="mb-2" html />
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Geben Sie das Altgerät <strong>kostenlos</strong> bei einer kommunalen Sammelstelle ab.</li>
                    <li>Händler sind zur Rücknahme verpflichtet: Kleingeräte (Kantenlänge &lt; 25 cm) ohne Neukauf, größere Geräte beim Kauf eines gleichartigen Neugeräts (1:1-Rücknahme).</li>
                    <li>Entfernen Sie vor der Rückgabe alle Batterien, die zerstörungsfrei entnommen werden können.</li>
                    <li>Löschen Sie vor der Entsorgung alle persönlichen Daten vom Gerät.</li>
                  </ul>
                </div>
              </div>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Batterien und Akkus</h4>
              <EditableText id="entsorgung.batterie.p.0" defaultContent="Sie sind <strong>gesetzlich verpflichtet</strong>, verbrauchte Batterien zurückzugeben (gemäß BattG). Die Rückgabe ist kostenlos." as="p" className="text-slate-600 mb-2" html />
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>Entsorgen Sie Batterien <strong>nicht</strong> über den Hausmüll.</li>
                <li>Geben Sie Batterien bei Sammelstellen im Handel oder bei kommunalen Wertstoffhöfen ab.</li>
                <li>Chemische Symbole auf der Batterie weisen auf enthaltene Schwermetalle hin: <strong>Pb</strong> = Blei, <strong>Cd</strong> = Cadmium, <strong>Hg</strong> = Quecksilber.</li>
              </ul>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Verpackung</h4>
              <EditableText id="entsorgung.verpackung.p.0" defaultContent="Die Verpackungsmaterialien sind recyclingfähig:" as="p" className="text-slate-600 mb-2" />
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li><strong>Karton/Papier:</strong> Altpapier</li>
                <li><strong>Kunststofffolien:</strong> Gelber Sack/Wertstofftonne</li>
                <li><strong>Styropor:</strong> Wertstoffhof</li>
              </ul>
          </Section>

          {/* Kapitel 10: EU-Konformitätserklärung */}
          <Section
            id="konformitaet"
            title={<EditableText id="konformitaet.title" defaultContent="10. EU-Konformitätserklärung" as="span" />}
            subtitle={<EditableText id="konformitaet.subtitle" defaultContent="Rechtliche Konformität" as="span" />}
          >
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
                  <EditableText id="konformitaet.p.0" defaultContent="Hiermit erklärt der Hersteller <strong>3D Global GmbH</strong>, dass das Produkt <strong>43 Zoll MultiView 3D-Display</strong> den folgenden einschlägigen Harmonisierungsrechtsvorschriften der Union entspricht:" as="p" className="text-slate-600 mb-4" html />
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
          </Section>

        </div>
      </main>

      <div className="lg:ml-72">
        <Footer />
      </div>
    </>
  );
}
