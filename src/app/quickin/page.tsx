import Link from "next/link";
import {
  Section,
  WarningBox,
  Table,
  StepList,
  Checklist,
  SingleImage,
  Footer,
} from "@/components";
import { ArrowLeft } from "lucide-react";

export default function QuickIn() {
  return (
    <div className="quickin-print text-[150%]">
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="hero-section relative bg-gradient-to-br from-white via-white to-[#73C7D4]/5 border-b border-gray-100 overflow-hidden">
          {/* Decorative Background Accents - hidden in print */}
          <div className="decorative absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#73C7D4]/10 to-transparent rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="decorative absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#003E77]/5 to-transparent rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
            {/* Back Link - hidden in print */}
            <Link
              href="/"
              className="back-link inline-flex items-center gap-2 text-[#003E77] hover:text-[#73C7D4] transition-colors mb-8 print-hide"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Zurück zur Hauptanleitung</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light font-heading text-[#003E77] mb-4 leading-[1.1] tracking-tight">
              Quick - start guide
            </h1>
            <p className="text-base sm:text-lg text-gray-500 font-light max-w-2xl">
              Dieser Quick Guide beschreibt die Nutzung des 3D-Displays zum Abspielen von 3D-Videos.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="content-section max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

          {/* Einleitung */}
          <section className="mb-12">
            <p className="text-slate-600 mb-4">
              Sie entscheiden vorab:
            </p>
            <Checklist
              items={[
                "Nur Inhalte abspielen (Videos sind bereits auf dem 3D-Display)",
                "Eigene Inhalte aufspielen und abspielen",
              ]}
            />
            <p className="text-slate-600 mt-4">
              Das 3D-Display wird z. B. für Messen, Präsentationen, Showrooms oder Demos eingesetzt.
            </p>
          </section>

          {/* Sicherheit */}
          <Section
            id="sicherheit"
            title="Sicherheit"
          >
            <WarningBox type="warnung" title="Gesundheitsgefahr durch fotosensitive Reaktionen" icon="allgemein">
              Die 3D-Darstellung kann bei empfindlichen Personen epileptische Anfälle, Schwindel oder Muskelzuckungen auslösen. Brechen Sie die Nutzung sofort ab, wenn Schwindel oder Muskelzuckungen auftreten. Setzen Sie einen Notruf ab, wenn ein Anfall länger andauert. Konsultieren Sie vor der Nutzung einen Arzt, wenn bei Ihnen eine Epilepsie bekannt ist.
            </WarningBox>

            <Checklist
              items={[
                "Augenbelastung: Legen Sie nach 60 Minuten Nutzung eine Pause von 15 Minuten ein.",
                "Unwohlsein: Stoppen Sie sofort und wenden Sie den Blick ab. Setzen Sie die Nutzung erst fort, wenn die Symptome vollständig abgeklungen sind.",
                "Nicht empfohlen für Kinder unter 6 Jahren.",
              ]}
            />
          </Section>

          {/* Voraussetzungen */}
          <Section
            id="voraussetzungen"
            title="Voraussetzungen"
          >
            <h4 className="font-semibold text-slate-700 mb-3">Immer erforderlich:</h4>
            <Checklist
              items={[
                "Stromkabel",
                "Maus",
                "Tastatur",
                "3D-Display",
              ]}
            />

            <h4 className="font-semibold text-slate-700 mt-6 mb-3">Zusätzlich bei eigenen Inhalten:</h4>
            <Checklist
              items={[
                "USB-Stick oder HDMI-Kabel",
                "Laptop / PC mit MP4-Dateien",
              ]}
            />
          </Section>

          {/* Richtige Positionierung */}
          <Section
            id="positionierung"
            title="Richtige Positionierung (3D-Effekt)"
          >
            <Checklist
              items={[
                "Nehmen Sie die Position gemäß Quick-Anleitung ein",
                "Halten Sie Abstand und Höhe ein",
                "Nur in der richtigen Position ist der 3D-Effekt sichtbar",
              ]}
            />

            <SingleImage
              src="/images/quickin-img-1-1.jpeg"
              alt="Betrachtungsabstand, Blickwinkel und Breite des Sichtbereichs"
            />
          </Section>

          {/* Playlist bearbeiten */}
          <Section
            id="playlist"
            title="Playlist bearbeiten"
            subtitle="(nur relevant bei Autoplay / Dauerschleife)"
          >
            <Checklist
              items={[
                "Die Playlist liegt im Videos-Ordner auf dem Desktop",
                "Dateiformat: .m3u oder .txt",
                "Öffnen Sie die Playlist per Rechtsklick → Mit Notepad öffnen",
                "Videos werden zeilenweise über den Dateinamen hinzugefügt oder entfernt",
                "Dateinamen müssen exakt stimmen",
              ]}
            />

            <h4 className="font-semibold text-slate-700 mt-6 mb-3">Wichtige Dateiformate:</h4>
            <Checklist
              items={[
                "MultiView: *.mosaic.3x3.mp4",
                "Stereo (Side-by-Side): *.sbs.mp4",
              ]}
            />

            <WarningBox type="hinweis">
              Die Autostart-Datei (Content.bat) darf nicht verändert werden.
            </WarningBox>
          </Section>

          {/* Inhalte abspielen */}
          <Section
            id="abspielen"
            title="Inhalte abspielen"
          >
            <StepList
              steps={[
                { content: "Öffnen Sie den Ordner \"Playlist\"." },
                { content: "Starten Sie die MP4-Datei mit Doppelklick." },
              ]}
              result="Das Video wird automatisch im 3D-Player abgespielt."
            />
          </Section>

          {/* Eigene Inhalte abspielen */}
          <Section
            id="eigene-inhalte"
            title="Eigene Inhalte abspielen"
          >
            <StepList
              steps={[
                { content: "Stecken Sie den USB-Stick ein oder verbinden Sie den Laptop per HDMI." },
                { content: "Kopieren Sie die MP4-Dateien per Drag & Drop in den Videos-Ordner auf dem Desktop." },
                { content: "Starten Sie die Datei per Doppelklick." },
              ]}
              result="Die Vorgehensweise ist identisch zum normalen Abspielen."
            />
          </Section>

          {/* Beenden */}
          <Section
            id="beenden"
            title="Beenden"
          >
            <StepList
              steps={[
                { content: "Schließen Sie das Video." },
                { content: "Schließen Sie alle Programme." },
                { content: "Schalten Sie das Gerät aus." },
                { content: "Schalten Sie das 3D-Display aus." },
              ]}
            />
          </Section>

          {/* Fehlerbehebung */}
          <Section
            id="fehlerbehebung"
            title="Fehlerbehebung"
          >
            <Table
              headers={["Problem", "Ursache", "Lösung"]}
              rows={[
                ["3D-Inhalt wird nicht angezeigt", "Falsche Positionierung vor dem 3D-Display", "Positionieren Sie sich richtig"],
                ["3D-Inhalt wird nicht angezeigt", "Fehlerhafte Datei", "Kontrollieren Sie die Datei auf Fehler"],
                ["3D-Inhalt wird nicht angezeigt", "Datei hat keinen 3D-Effekt", "Kontrollieren Sie die Datei auf 3D-Effekt"],
                ["3D-Inhalt wird nicht angezeigt", "Inhalte nicht im MultiView-Format", "Kontrollieren Sie die Inhalte auf MultiView-Format"],
              ]}
            />
          </Section>

        </div>
      </main>

      {/* Footer - hidden in print */}
      <div className="print-hide">
        <Footer />
      </div>
    </div>
  );
}
