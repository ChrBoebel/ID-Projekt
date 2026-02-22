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
} from "@/components";

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
            title="Einleitung"
            subtitle="Wichtige Informationen zur Bedienungsanleitung"
          >
            <p className="text-slate-600 mb-4">
              Diese Bedienungsanleitung ist Bestandteil des Produkts Auto-Stereo-MultiView-Display und enthält alle erforderlichen Informationen für den sicheren, sachgerechten und bestimmungsgemäßen Betrieb des Auto-Stereo-MultiView-Display. Im weiteren Verlauf dieser Bedienungsanleitung wird das Auto-Stereo-MultiView-Display aus Gründen der besseren Lesbarkeit ausschließlich als 3D-Display bezeichnet.
            </p>
            <p className="text-slate-600 mb-4">
              Die Bedienungsanleitung richtet sich an die Nutzer des 3D-Displays.
            </p>
            <p className="text-slate-600 mb-4">
              Lesen Sie die Betriebsanleitung, bevor Sie das Gerät erstmals in Betrieb nehmen.
            </p>
            <p className="text-slate-600">
              Die Nichtbeachtung der in dieser Bedienungsanleitung enthaltenen Hinweise kann zu Fehlbedienungen, Sachschäden, Funktionsstörungen oder Gefährdungen von Personen führen. Für Schäden, die durch unsachgemäße Verwendung oder durch Nichtbeachtung dieser Bedienungsanleitung entstehen, übernimmt der Hersteller keine Haftung.
            </p>
          </Section>

          {/* Kapitel 1: Lieferumfang */}
          <Section
            id="lieferumfang"
            title="1. Lieferumfang"
            subtitle="Übersicht der mitgelieferten Komponenten"
          >
            <p className="text-slate-600 mb-8">
              Prüfen Sie nach dem Auspacken, ob alle Teile vollständig geliefert wurden.
            </p>

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
            title="2. Sicherheit"
            subtitle="Wichtige Sicherheitshinweise für den sicheren Betrieb"
          >
            <p className="text-slate-600 mb-6">
              Dieses Kapitel enthält grundlegende Regeln für den sicheren Betrieb des 3D-Displays. Das Produkt darf nur in technisch einwandfreiem Zustand und bestimmungsgemäß verwendet werden.
            </p>

            <SubSection id="signalwoerter" title="Verwendete Signalwörter und Symbole">
              <p className="text-slate-600 mb-4">
                Damit Sie Gefahren schnell erkennen, werden vier farblich gekennzeichnete Warnstufen verwendet. Jeder Warnhinweis beschreibt, <strong>worin die Gefahr</strong> besteht, <strong>was passieren kann</strong> und <strong>wie Sie sich schützen</strong>.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border-2 border-red-500 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="bg-red-100 p-2 sm:p-3 rounded-xl shrink-0 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/ISO_7010_W001.svg" alt="Gefahr" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-red-700 text-base sm:text-lg">GEFAHR</div>
                      <p className="text-red-800 text-sm">
                        Weist auf eine unmittelbar gefährliche Situation hin. Bei Nichtbeachtung <strong>werden</strong> Tod oder schwere Verletzungen die Folge sein.
                      </p>
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
                      <p className="text-orange-800 text-sm">
                        Weist auf eine möglicherweise gefährliche Situation hin. Bei Nichtbeachtung <strong>können</strong> Tod oder schwere Verletzungen die Folge sein.
                      </p>
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
                      <p className="text-yellow-800 text-sm">
                        Weist auf eine möglicherweise gefährliche Situation hin. Bei Nichtbeachtung können leichte bis mittelschwere Verletzungen die Folge sein.
                      </p>
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
                      <p className="text-[#003E77] text-sm">
                        Weist auf eine Situation hin, die zu Sachschäden führen kann. Enthält keine Warnung vor Personenschäden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SubSection>

            <SubSection id="bestimmung" title="2.1 Bestimmungsgemäße Verwendung">
              <p className="text-slate-600">
                Das Gerät dient zur brillenlosen 3D-Visualisierung für Einzelnutzer und Gruppen in trockenen Innenräumen. Jede andere Verwendung gilt als nicht bestimmungsgemäß und kann zu unvorhersehbaren Gefahren führen.
              </p>
            </SubSection>

            <SubSection id="voraussetzungen" title="2.2 Bevor Sie das Gerät verwenden">
              <p className="text-slate-600 mb-4">
                Anwender müssen diese Anleitung gelesen und verstanden haben.
              </p>
              <p className="text-slate-600 mb-4">
                Auf Gefahren bei Benutzung mit Epilepsie hinweisen. Bestimmte Licht- und Farbmuster können bei entsprechend Personen zu Krampfanfällen führen.
              </p>
              <p className="text-slate-600 mb-4">
                Kindern unter 6 Jahren die Nutzung des Geräts untersagen. Das Sehvermögen von Kleinkindern befindet sich noch in der Entwicklung. Die räumliche Darstellung kann diese Entwicklung beeinträchtigen.
              </p>
              <p className="text-slate-600">
                3D-Inhalte nur durch geschultes Personal erstellen lassen. Falsch konfigurierte 3D-Dateien belasten das visuelle System des Nutzers. Dies kann Schwindel, Übelkeit und Unwohlsein auslösen.
              </p>
            </SubSection>

            <SubSection id="uebergreifend" title="2.3 Übergreifende Sicherheitshinweise">
              <p className="text-slate-600 mb-4">
                Alle Kabel so verlegen, dass sie keine Stolperfallen bilden. Stolperunfälle können zu Sturzverletzungen des Nutzers führen oder das Gerät gewaltsam von der Halterung reißen.
              </p>
              <p className="text-slate-600 mb-4">
                Das Gerät niemals als Ablagefläche verwenden. Gegenstände auf dem Gehäuse blockieren die notwendige Luftzirkulation. Ein daraus resultierender Wärmestau führt zur Überhitzung und erhöht die Brandgefahr.
              </p>
              <p className="text-slate-600 mb-4">
                Keine eigenmächtigen Änderungen oder Umbauten am Gerät vornehmen. Durch das Öffnen des Gehäuses oder Manipulationen an der Technik wird der werkseitige Schutz gegen elektrischen Schlag aufgehoben. Dies führt zu lebensgefährlichen Stromschlägen.
              </p>
              <p className="text-slate-600">
                Das Gerät bei gesprungenem Glas sofort außer Betrieb nehmen. Eine beschädigte Glasoberfläche besitzt keine Schutzwirkung mehr. Es besteht ein hohes Risiko für tiefe Schnittverletzungen bei Berührung.
              </p>
            </SubSection>

            <SubSection id="spezifisch" title="2.4 Spezifische Sicherheitshinweise">
              <h4 className="font-semibold text-slate-700 mb-4 mt-2">Montage und Inbetriebnahme</h4>
              <p className="text-slate-600 mb-4">
                Das 3D-Display aufgrund des hohen Eigengewichts vorzugsweise mit zwei Personen heben und montieren. Das Gewicht des Geräts kann die körperliche Belastbarkeit einer Einzelperson überschreiten. Ein Heben ohne Unterstützung begünstigt Rückenverletzungen oder führt zum Herabfallen und der Zerstörung des Displays.
              </p>
              <p className="text-slate-600 mb-4">
                Ausschließlich zertifizierte VESA-Halterungen verwenden. Eine unterdimensionierte Halterung kann die Last des Displays nicht tragen und bricht. Das herabstürzende Gerät verursacht schwere Quetschungen oder Knochenbrüche.
              </p>
              <p className="text-slate-600 mb-4">
                Einen Mindestabstand von 10 cm zu Wänden und Hindernissen einhalten. Eine unzureichende Belüftung führt zur Überhitzung interner Bauteile. Ein Wärmestau in den Lüftungsschlitzen kann einen Brand auslösen.
              </p>
              <p className="text-slate-600 mb-4">
                Das Netzkabel vor jedem Einstecken auf Risse oder Brüche prüfen. Beschädigte Isolierungen legen spannungsführende Adern frei. Bei Kontakt wird die elektrische Spannung direkt auf den Benutzer übertragen.
              </p>

              <h4 className="font-semibold text-slate-700 mb-4 mt-6">Benutzung</h4>
              <p className="text-slate-600 mb-4">
                Die Nutzung bei ersten Anzeichen von Schwindel oder Übelkeit sofort beenden. Die künstliche räumliche Darstellung kann den Gleichgewichtssinn stören und ein Unwohlsein erzeugen.
              </p>
              <p className="text-slate-600 mb-4">
                Alle 60 Minuten eine Pause von mindestens 15 Minuten einlegen. Langes Benutzen ohne Unterbrechung führt zu starker Augenermüdung und Kopfschmerzen.
              </p>

              <h4 className="font-semibold text-slate-700 mb-4 mt-6">Reinigung</h4>
              <p className="text-slate-600 mb-4">
                Vor Beginn der Reinigung immer den Netzstecker ziehen. Reinigungsmittel können in das Innere gelangen und dort als elektrische Leiter fungieren. Dies führt zu schweren Verletzungen durch Stromschläge.
              </p>
              <p className="text-slate-600 mb-4">
                Niemals nasse Tücher oder fließendes Wasser verwenden. Eindringende Flüssigkeit verursacht Kurzschlüsse, zerstört die empfindliche Elektronik und setzt metallische Gehäuseteile unter Spannung.
              </p>

              <h4 className="font-semibold text-slate-700 mb-4 mt-6">Entsorgung</h4>
              <p className="text-slate-600">
                Das Gerät ausschließlich bei offiziellen Elektronik-Sammelstellen abgeben. Im Inneren verbaute Komponenten enthalten Stoffe, die bei unsachgemäßer Entsorgung giftige Emissionen freisetzen und die Umwelt schädigen.
              </p>
            </SubSection>

            <SubSection id="notfall" title="2.5 Verhalten im Notfall">
              <p className="text-slate-600 mb-6">
                Bei Rauchentwicklung, Brandgeruch, ungewöhnlichen Geräuschen oder einem medizinischen Notfall (z. B. Epilepsieanfall):
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Medizinischer Notfall</h4>
              <p className="text-slate-600 mb-2">Rufen Sie bei Bewusstlosigkeit oder Anfällen über 15 Minuten den Rettungsdienst.</p>
              <p className="text-slate-600 mb-2"><strong>Visuellen Reiz stoppen:</strong> Schalten Sie das Display sofort aus.</p>
              <p className="text-slate-600 mb-6"><strong>Betroffene sichern:</strong> Helfen Sie der Person beim Hinlegen, um Stürze zu vermeiden.</p>

              <h4 className="font-semibold text-slate-700 mb-3">Rauch und Brand</h4>
              <p className="text-slate-600 mb-2">Alarmieren Sie bei Feuer oder starkem Rauch die Feuerwehr.</p>
              <p className="text-slate-600 mb-2"><strong>Stecker ziehen:</strong> Trennen Sie das Gerät sofort von der Steckdose, um die Stromzufuhr zu stoppen.</p>
              <p className="text-slate-600 mb-2"><strong>Kein Wasser verwenden:</strong> Wasser leitet Strom – es besteht Lebensgefahr durch Stromschlag. Nutzen Sie nur CO₂-Löscher.</p>
              <p className="text-slate-600"><strong>Sichern:</strong> Markieren Sie das Gerät mit „DEFEKT", um eine Wiederinbetriebnahme durch Dritte zu verhindern.</p>
            </SubSection>
          </Section>

          {/* Kapitel 3: Produktübersicht */}
          <Section
            id="leistung"
            title="3. Produktübersicht"
            subtitle="Aufbau, Merkmale und Einsatzmöglichkeiten des Geräts"
          >
            <p className="text-slate-600 mb-6">
              Das Gerät ist ein autostereoskopisches 3D-Display zur brillenfreien Darstellung von 3D-Inhalten. Durch ein integriertes Linsensystem (Lentikular-Technologie) wird eine räumliche Tiefenwirkung ohne Zusatzhardware erzielt.
            </p>

            <SubSection id="merkmale" title="3.1 Technische Hauptmerkmale">
              <p className="text-slate-600 mb-2">
                <strong>MultiView-Technologie:</strong> Ermöglicht die gleichzeitige 3D-Wahrnehmung für mehrere Personen aus unterschiedlichen Betrachtungswinkeln.
              </p>
              <p className="text-slate-600 mb-2">
                <strong>Hybrid-Betrieb:</strong> 2D-Modus (Full 4K) und 3D-Modus möglich.
              </p>
              <p className="text-slate-600">
                <strong>Autostereoskopie:</strong> Räumliche Darstellung erfolgt direkt über die Displayoberfläche; keine 3D-Brillen erforderlich.
              </p>
            </SubSection>

            <SubSection id="schnittstellen" title="3.2 Schnittstellen und Signalübertragung">
              <p className="text-slate-600 mb-4">
                Für den Betrieb sind zwei Verbindungen zum Quellgerät (PC) zwingend erforderlich:
              </p>
              <p className="text-slate-600 mb-2">
                <strong>1. HDMI-Anschluss:</strong> Übertragung des Bildsignals (Video-Daten).
              </p>
              <p className="text-slate-600">
                <strong>2. USB-Anschluss:</strong> Übertragung der PC-Steuerung.
              </p>
            </SubSection>

            <SubSection id="anwendung" title="3.3 Anwendung und Nutzen">
              <p className="text-slate-600 mb-2">
                <strong>Räumliche Analyse:</strong> Komplexe 3D-Strukturen (z. B. CAD, Medizin-Daten) lassen sich schneller erfassen als auf herkömmlichen 2D-Monitoren.
              </p>
              <p className="text-slate-600 mb-2">
                <strong>Kollaboratives Arbeiten:</strong> Gemeinsame Betrachtung von 3D-Inhalten in Gruppen ohne technische Barrieren (3D-Brillen).
              </p>
              <p className="text-slate-600">
                <strong>Prozessoptimierung:</strong> Frühzeitige Erkennung von Proportionen und räumlichen Fehlern in der Entwicklungs- oder Planungsphase.
              </p>
            </SubSection>

            <SubSection id="geraet" title="3.4 Gerätebeschreibung">
              <p className="text-slate-600 mb-6">
                Geräteansichten und Anschlüsse des 3D-Displays.
              </p>

              <h4 className="font-semibold text-slate-700 mb-4">Vorderansicht</h4>
            <SingleImage
              src="/images/Vorderansicht.jpeg"
              alt="Vorderansicht des 3D-Displays"
              caption="Vorderansicht des 43 Zoll MultiView 3D-Displays"
            />

            <Table
              headers={["Nr.", "Bezeichnung", "Funktion"]}
              rows={[
                ["1", "3D-Display-Panel", "Zeigt 3D-Inhalte als brillenfreie MultiView 3D-Darstellung an. Der 3D-Display erzeugt räumliche Bilder für mehrere Benutzer gleichzeitig."],
              ]}
            />

            <h4 className="font-semibold text-slate-700 mt-8 mb-4">Rückansicht</h4>
            <SingleImage
              src="/images/rueckansicht.jpg"
              alt="Rückansicht des 3D-Displays"
              caption="Rückansicht mit Anschlüssen"
            />

            <Table
              headers={["Nr.", "Bezeichnung", "Funktion"]}
              rows={[
                ["2", "HDMI-Anschluss", "Verbindet den 3D-Display mit der Bildquelle (Computer, Laptop). Überträgt Bildsignale."],
                ["3", "USB-Anschluss", "Überträgt Daten. Ermöglicht die bidirektionale Kommunikation mit dem Computer."],
                ["4", "Netzteilanschluss", "Stromversorgung: Schließen Sie hier das mitgelieferte Netzteil an."],
                ["5", "VESA-Montagepunkte", "Standardisierte Befestigungspunkte für Wandhalterungen oder Standfüße."],
                ["6", "Typenschild", "Enthält wichtige Geräteinformationen: Seriennummer, Modellbezeichnung, elektrische Daten."],
                ["7", "Power-Taste", "Ein-/Ausschalten des 3D-Displays."],
              ]}
            />

            <h4 className="font-semibold text-slate-700 mt-8 mb-4">Fernbedienung</h4>
            <WarningBox type="hinweis" title="Beschädigung der Fernbedienung">
              <p className="mb-2"><strong>Beschädigung der Fernbedienung durch unsachgemäße Bedienung.</strong></p>
              <p className="mb-2">Defekte Tasten und Funktionsverlust können die Folge sein.</p>
              <p>Drücken Sie die Tasten nicht mit spitzen Gegenständen. Verwenden Sie nur Ihre Finger.</p>
            </WarningBox>
            <SingleImage
              src="/images/Fernbedienung.jpg"
              alt="Fernbedienung"
              caption="Fernbedienung des 3D-Displays"
            />

            <Table
              headers={["Nr.", "Bezeichnung", "Funktion"]}
              rows={[
                ["8", "Power-Taste", "3D-Display ein-/ausschalten. Befindet sich oben an der Fernbedienung."],
                ["9", "MENU-Taste", "3D-Displaymenü öffnen/schließen."],
                ["10", "Eingangsquellen-Taste", "Eingangsquelle wählen. Wechselt zwischen angeschlossenen Geräten."],
                ["11", "Pfeiltasten", "Navigation im 3D-Displaymenü. Ermöglicht die Auswahl von Menüpunkten."],
                ["12", "OK-Taste", "Auswahl bestätigen. Befindet sich in der Mitte des Navigationskreuzes."],
                ["13", "Lautstärke-Tasten", "Lautstärke verringern (−) oder erhöhen (+)."],
                ["14", "Play/Pause-Taste", "Wiedergabe starten oder pausieren. Für Medieninhalte."],
                ["15", "Zurück-Taste", "Zurück zum vorherigen Menü oder 3D-Displaymenü verlassen."],
                ["16", "Stumm-Taste", "Ton stumm schalten. Befindet sich unten an der Fernbedienung."],
              ]}
            />

            <p className="text-slate-600 mt-4">
              Die Bedienung des 3D-Displaymenüs ist in <a href="#displaymenue" className="text-[#003E77] hover:underline font-medium">Kapitel 4.7</a> beschrieben.
            </p>
            </SubSection>
          </Section>

          {/* Kapitel 4: Bedienung */}
          <Section
            id="taetigkeit"
            title="4. Bedienung"
            subtitle="Schritt-für-Schritt-Anleitungen für alle Aufgaben."
          >
            <SubSection id="auspacken" title="4.1 3D-Display auspacken">
              <p className="text-slate-600 mb-4">
                Nehmen Sie den 3D-Display sicher aus der Verpackung und prüfen Sie alle Komponenten.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Zwei Personen sind für das Auspacken und Anheben erforderlich",
                  "Sie haben eine saubere, ebene Arbeitsfläche",
                  "Sie öffnen die Verpackung nicht mit scharfen Gegenständen",
                  "Sie haben Platz für alle Komponenten",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: "Öffnen Sie den Versandkarton vorsichtig von oben." },
                  { content: "Entnehmen Sie die Schnellstartanleitung und legen Sie diese bereit." },
                  { content: "Nehmen Sie den 3D-Display mit beiden Händen aus der Verpackung." },
                  { content: "Entnehmen Sie alle weiteren Komponenten aus der Verpackung." },
                  { content: "Vergleichen Sie den Inhalt mit der Tabelle im Kapitel 1 (Lieferumfang) und prüfen Sie alle Teile auf sichtbare Transportschäden." },
                  { content: "Bei fehlenden oder beschädigten Teilen: Kontaktieren Sie umgehend den Händler." },
                ]}
                result="Sie haben den 3D-Display ausgepackt und den Lieferumfang geprüft."
              />
            </SubSection>

            <SubSection id="positionieren" title="4.2 3D-Display positionieren">
              <p className="text-slate-600 mb-6">
                Positionieren Sie den 3D-Display für den optimalen MultiView 3D-Effekt.
                Abstand, Höhe und Neigung sind entscheidend.
              </p>

              <SingleImage
                src="/images/quickin-img-1-1.jpeg"
                alt="MultiView-Bereich für Gruppenbetrachtung"
                caption="Optimaler Betrachtungsbereich für mehrere Benutzer"
              />

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Der 3D-Display ist an einer geeigneten Halterung montiert",
                  "Mindestabstand von 2,5 m zum 3D-Display ist gewährleistet",
                  "Eine Fläche von mindestens 3 m² für die Betrachtung ist vorhanden",
                  "Keine direkte Sonneneinstrahlung fällt auf den 3D-Display",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: "Positionieren Sie den 3D-Display so, dass der Mindestabstand von 2,5 m eingehalten werden kann." },
                  { content: "Stellen Sie den 3D-Display so auf, dass die 3D-Display-Mitte auf Brusthöhe der stehenden oder sitzenden Benutzer liegt." },
                  { content: "Neigen Sie den 3D-Display bei Bedarf leicht (5° bis 10°) für einen optimalen Betrachtungswinkel." },
                  { content: "Prüfen Sie, ob von den Betrachtungspositionen aus kein störendes Licht auf dem 3D-Display reflektiert." },
                ]}
              />

            </SubSection>

            <SubSection id="verkabeln" title="4.3 3D-Display verkabeln">
              <p className="text-slate-600 mb-4">
                Verbinden Sie den 3D-Display mit einem Computer und schließen Sie die Stromversorgung an.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Der 3D-Display ist montiert",
                  "Eine Steckdose (230 V) ist in Reichweite",
                  "Alle Kabel liegen bereit (HDMI, Netzteil)",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: "Verbinden Sie den Computer per HDMI-Kabel mit dem 3D-Display." },
                  { content: "Verbinden Sie das Netzkabel mit dem 3D-Display-Netzteil und stecken Sie den runden Stecker in den Netzteilanschluss an der Rückseite des 3D-Displays." },
                  { content: "Stecken Sie das Netzkabel in die Steckdose." },
                ]}
              />
            </SubSection>

            <SubSection id="einschalten" title="4.4 3D-Display einschalten">
              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Das Netzteil ist mit dem 3D-Display verbunden",
                  "Das Netzteil ist an eine funktionierende Steckdose angeschlossen",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: "Drücken Sie die Power-Taste am rechten Rand des 3D-Displays kurz." },
                  { content: "Schalten Sie den angeschlossenen Computer ein." },
                ]}
                result="Der 3D-Display zeigt nach wenigen Sekunden das Bild des angeschlossenen Computers."
              />
            </SubSection>

            <SubSection id="ausschalten" title="4.5 3D-Display ausschalten">
              <p className="text-slate-600 mb-4">
                Versetzen Sie den 3D-Display in den Bereitschaftsmodus oder schalten Sie ihn vollständig aus.
              </p>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: "Drücken Sie die Power-Taste am rechten Rand des 3D-Displays kurz (weniger als 2 Sekunden)." },
                  { content: "Warten Sie, bis der 3D-Display dunkel wird." },
                ]}
                result="Der 3D-Display befindet sich im Bereitschaftsmodus und verbraucht minimal Strom."
              />

            </SubSection>

            <SubSection id="eingangsquelle" title="4.6 Eingangsquelle wählen">
              <p className="text-slate-600 mb-4">
                Wechseln Sie zwischen angeschlossenen Geräten. In den meisten Fällen erkennt
                der 3D-Display das aktive Signal automatisch.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Mindestens ein Gerät ist mit dem 3D-Display verbunden und eingeschaltet",
                  "Die Fernbedienung ist einsatzbereit",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  { content: "Drücken Sie auf der Fernbedienung die Eingangsquellen-Taste. Ein Auswahlmenü erscheint." },
                  { content: "Drücken Sie die Eingangsquellen-Taste wiederholt, um durch die Quellen zu schalten." },
                  { content: "Warten Sie 3 Sekunden, ohne eine Taste zu drücken. Der 3D-Display wechselt zur ausgewählten Quelle." },
                ]}
              />
            </SubSection>

            <SubSection id="displaymenue" title="4.7 3D-Displaymenü bedienen">
              <p className="text-slate-600 mb-4">
                Das 3D-Displaymenü ist die zentrale Steuerungsebene für Bild-, Ton- und Systemeinstellungen.
              </p>

              <h4 className="font-semibold text-slate-700 mb-3">3D-Displaymenü öffnen und schließen:</h4>
              <StepList
                steps={[
                  { content: "Drücken Sie die Taste MENU auf der Fernbedienung." },
                  { content: "Um das Menü zu schließen, drücken Sie erneut MENU oder BACK." },
                ]}
                result="Das Hauptmenü erscheint auf der linken Seite des 3D-Displays."
              />

              <div className="mt-4 p-4 bg-[#0B3D5C]/5 border border-[#4A90A4]/30 rounded-lg">
                <p className="text-[#0B3D5C] text-sm">
                  <strong>Tipp:</strong> Das Menü schließt sich automatisch nach 30 Sekunden Inaktivität.
                </p>
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

            <SubSection id="reinigung" title="4.8 3D-Display reinigen">
              <p className="text-slate-600 mb-4">
                Halten Sie den 3D-Display sauber für optimale Bildqualität. Reinigen Sie das Gehäuse
                regelmäßig mit einem weichen Tuch.
              </p>

              <WarningBox type="vorsicht" title="Stromschlaggefahr bei der Reinigung" icon="strom">
                <p className="mb-1">Reinigung bei eingeschaltetem Gerät kann zu einem Stromschlag führen.</p>
                <p>Ziehen Sie das Netzkabel und warten Sie, bis das Gerät abgekühlt ist, bevor Sie mit der Reinigung beginnen.</p>
              </WarningBox>

              <WarningBox type="hinweis" title="Beschädigung durch falsche Reinigung">
                <p className="mb-2">Unsachgemäße Reinigung kann zu Kratzern, Trübung oder dauerhaftem Funktionsverlust führen.</p>
                <p>
                  Nur bei ausgeschaltetem Gerät reinigen. Weiches Tuch verwenden, nie direkt auf das Display sprühen. Keinen Druck ausüben, keine scharfen Gegenstände oder aggressive Reinigungsmittel verwenden. Bei hartnäckigen Verschmutzungen nur milde Reinigungsmittel nutzen.
                </p>
              </WarningBox>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Voraussetzungen:</h4>
              <Checklist
                items={[
                  "Der 3D-Display ist ausgeschaltet",
                  "Das Netzkabel ist getrennt",
                  "Der 3D-Display ist abgekühlt (mindestens 5 Minuten warten)",
                ]}
              />

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Vorgehen:</h4>
              <StepList
                steps={[
                  {
                    title: "Staub entfernen",
                    content: "Wischen Sie mit einem weichen, trockenen Mikrofasertuch vorsichtig über 3D-Display und Gehäuse. Üben Sie nur leichten Druck aus."
                  },
                  {
                    title: "Flecken entfernen",
                    content: "Befeuchten Sie das Tuch leicht mit destilliertem Wasser oder speziellem 3D-Displayreiniger. Wischen Sie in kreisenden Bewegungen.",
                    substeps: ["Wichtig: Sprühen Sie niemals direkt auf das Gerät."]
                  },
                  {
                    title: "Lüftung reinigen",
                    content: "Entfernen Sie Staub aus den Lüftungsöffnungen vorsichtig mit einem weichen Pinsel oder Druckluft."
                  },
                ]}
                result="Der 3D-Display ist sauber und die Luftzirkulation sichergestellt."
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
                <p className="text-slate-600 text-sm">
                  <strong>Hintergrund:</strong> Diese Mittel können das spezielle Linsenraster
                  des 3D-Displays dauerhaft beschädigen.
                </p>
              </div>
            </SubSection>
          </Section>

          {/* Kapitel 5: Problemlösung */}
          <Section
            id="problemloesung"
            title="5. Problemlösung"
            subtitle="Häufige Probleme und ihre Lösungen"
          >
            <p className="text-slate-600 mb-6">
              Sie finden hier schnell Lösungen für häufig auftretende Probleme mit Ihrem
              3D-Display. Die Tabelle hilft Ihnen, die Ursache zu identifizieren und
              das Problem zu beheben. Arbeiten Sie die Lösungen in der angegebenen
              Reihenfolge durch.
            </p>

            <Table
              headers={["Problem", "Mögliche Ursache", "Lösung"]}
              rows={[
                ["Kein Bild", "Stromversorgung unterbrochen", "Prüfen Sie, ob das Netzteil korrekt angeschlossen ist."],
                ["Kein Bild", "Kabelverbindung fehlerhaft", "Prüfen Sie die HDMI-Verbindung zwischen Computer und 3D-Display."],
                ["Kein Bild", "Computer nicht aktiv", "Schalten Sie den Computer ein oder wecken Sie ihn aus dem Ruhezustand."],
                ["Kein 3D-Effekt", "Falsche Inhalte", "Spielen Sie am Computer die vorgesehene 3D-Datei ab."],
                ["Kein 3D-Effekt", "USB-Verbindung fehlt", "Prüfen Sie die USB-Verbindung zwischen Computer und 3D-Display."],
                ["Kein 3D-Effekt", "Falscher Betrachtungsabstand", (<>Korrigieren Sie den Abstand zum 3D-Display (siehe <a href="#positionieren" className="text-[#003E77] hover:underline">Kapitel 4.2</a>).</>)],
                ["Flackern/Streifen", "Lose Kabelverbindung", "Prüfen Sie alle Kabelverbindungen auf festen Sitz."],
                ["Flackern/Streifen", "Defektes Kabel", "Verwenden Sie ein hochwertiges HDMI-Kabel."],
                ["Flackern/Streifen", "Falsche Bildwiederholrate", "Stellen Sie am Computer 60 Hz ein."],
                ["Unscharfes Bild", "Falsche Auflösung", "Stellen Sie die native Auflösung (3840 x 2160) am Computer ein."],
                ["Unscharfes Bild", "Verschmutzter 3D-Display", (<>Reinigen Sie das 3D-Display (siehe <a href="#reinigung" className="text-[#003E77] hover:underline">Kapitel 4.8</a>).</>)],
                ["Kopfschmerzen", "Zu lange Nutzung", "Legen Sie regelmäßig Pausen ein (15 Min. nach 60 Min. Betrieb)."],
                ["Kopfschmerzen", "Falsche Sitzposition", "Korrigieren Sie Ihre Sitzposition und den Betrachtungswinkel."],
                ["Menü reagiert nicht", "Softwarefehler", "Führen Sie einen Neustart durch (Power-Taste 5 Sek. halten)."],
              ]}
            />
          </Section>

          {/* Kapitel 6: Technische Daten */}
          <Section
            id="technisch"
            title="6. Technische Daten"
            subtitle="Spezifikationen und Anforderungen"
          >
            <SubSection id="spezifikationen" title="6.1 3D-Display-Spezifikationen">
              <SpecTable
                specs={[
                  { label: "3D-Displaygröße", value: "43 Zoll (109 cm) diagonal" },
                  { label: "Auflösung", value: "3840 x 2160 (4K)" },
                  { label: "Seitenverhältnis", value: "16:9" },
                  { label: "Panel-Technologie", value: "IPS (weiter Blickwinkel, natürliche Farben)" },
                  { label: "3D-Technologie", value: "Brillenfrei mit MultiView (mehrere Benutzer gleichzeitig)" },
                  { label: "Farbtiefe", value: "8 bit" },
                  { label: "Bildwiederholrate", value: "60 Hz" },
                ]}
              />
            </SubSection>

            <SubSection id="anschluesse" title="6.2 Anschlüsse und Schnittstellen">
              <SpecTable
                specs={[
                  { label: "HDMI", value: "HDMI 2.0" },
                  { label: "USB", value: "USB 3.0" },
                ]}
              />
            </SubSection>

            <SubSection id="stromversorgung" title="6.3 Stromversorgung">
              <SpecTable
                specs={[
                  { label: "Eingangsspannung", value: "100-240V AC, 50/60 Hz" },
                ]}
              />
            </SubSection>

            <SubSection id="umgebung" title="6.4 Umgebungsbedingungen">
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

            <SubSection id="normen" title="6.5 Normen und Zertifizierungen">
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
            title="7. Herstellerinformationen"
            subtitle="Kontaktdaten und Support"
          >
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
          </Section>

          {/* Kapitel 8: Garantiebedingungen */}
          <Section
            id="garantie"
            title="8. Garantiebedingungen"
            subtitle="Garantieumfang und -abwicklung"
          >
              <h4 className="font-semibold text-slate-700 mb-3">Garantieumfang</h4>
              <p className="text-slate-600 mb-4">
                Der Hersteller gewährt auf dieses Produkt eine Garantie von <strong>24 Monaten</strong> ab
                Kaufdatum. Die Garantie umfasst Material- und Herstellungsfehler.
              </p>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Garantieleistungen</h4>
              <p className="text-slate-600 mb-2">Im Garantiefall wird das Gerät nach Wahl des Herstellers:</p>
              <ul className="list-disc list-inside text-slate-600 ml-4 space-y-1 mb-4">
                <li>repariert,</li>
                <li>durch ein gleichwertiges Gerät ersetzt oder</li>
                <li>der Kaufpreis erstattet.</li>
              </ul>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Garantieausschlüsse</h4>
              <p className="text-slate-600 mb-2">Die Garantie erlischt bei:</p>
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
            title="9. Entsorgungshinweise"
            subtitle="Umweltgerechte Entsorgung"
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
                  <p className="mb-2">
                    Dieses Produkt ist mit dem Symbol der durchgestrichenen Mülltonne gekennzeichnet (gemäß ElektroG). Sie sind als Endnutzer <strong>gesetzlich verpflichtet</strong>, dieses Gerät getrennt vom Hausmüll zu entsorgen.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Geben Sie das Altgerät <strong>kostenlos</strong> bei einer kommunalen Sammelstelle ab.</li>
                    <li>Händler sind zur Rücknahme verpflichtet: Kleingeräte (Kantenlänge &lt; 25 cm) ohne Neukauf, größere Geräte beim Kauf eines gleichartigen Neugeräts (1:1-Rücknahme).</li>
                    <li>Entfernen Sie vor der Rückgabe alle Batterien, die zerstörungsfrei entnommen werden können.</li>
                    <li>Löschen Sie vor der Entsorgung alle persönlichen Daten vom Gerät.</li>
                  </ul>
                </div>
              </div>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Batterien und Akkus</h4>
              <p className="text-slate-600 mb-2">
                Sie sind <strong>gesetzlich verpflichtet</strong>, verbrauchte Batterien zurückzugeben (gemäß BattG). Die Rückgabe ist kostenlos.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>Entsorgen Sie Batterien <strong>nicht</strong> über den Hausmüll.</li>
                <li>Geben Sie Batterien bei Sammelstellen im Handel oder bei kommunalen Wertstoffhöfen ab.</li>
                <li>Chemische Symbole auf der Batterie weisen auf enthaltene Schwermetalle hin: <strong>Pb</strong> = Blei, <strong>Cd</strong> = Cadmium, <strong>Hg</strong> = Quecksilber.</li>
              </ul>

              <h4 className="font-semibold text-slate-700 mt-6 mb-3">Verpackung</h4>
              <p className="text-slate-600 mb-2">Die Verpackungsmaterialien sind recyclingfähig:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li><strong>Karton/Papier:</strong> Altpapier</li>
                <li><strong>Kunststofffolien:</strong> Gelber Sack/Wertstofftonne</li>
                <li><strong>Styropor:</strong> Wertstoffhof</li>
              </ul>
          </Section>

          {/* Kapitel 10: EU-Konformitätserklärung */}
          <Section
            id="konformitaet"
            title="10. EU-Konformitätserklärung"
            subtitle="Rechtliche Konformität"
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
                  <p className="text-slate-600 mb-4">
                    Hiermit erklärt der Hersteller <strong>3D Global GmbH</strong>, dass das Produkt
                    <strong> 43 Zoll MultiView 3D-Display</strong> den folgenden einschlägigen
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
          </Section>

        </div>
      </main>

      <div className="lg:ml-72">
        <Footer />
      </div>
    </>
  );
}
