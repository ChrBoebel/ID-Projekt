"use client";

type WarningType = "gefahr" | "warnung" | "vorsicht" | "hinweis";

// Vordefinierte ISO 7010 Icons für spezifische Gefahren
export type WarningIcon =
  | "allgemein"      // W001 - Allgemeines Warnzeichen
  | "strom"          // W012 - Elektrische Spannung
  | "brand"          // W021 - Brandgefahr
  | "auge"           // W027 - Optische Strahlung (Epilepsie)
  | "bruch"          // W024 - Bruchgefahr
  | "info";          // M001 - Hinweis

interface WarningBoxProps {
  type: WarningType;
  title?: string;
  icon?: WarningIcon;
  children: React.ReactNode;
}

const iconMap: Record<WarningIcon, string> = {
  allgemein: "/images/ISO_7010_W001.svg",
  strom: "/images/ISO_7010_W012.svg",
  brand: "/images/ISO_7010_W021.svg",
  auge: "/images/ISO_7010_W027.svg",
  bruch: "/images/ISO_7010_W024.svg",
  info: "/images/ISO_7010_M001.svg",
};

const warningConfig = {
  gefahr: {
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
    textColor: "text-red-800",
    titleColor: "text-red-700",
    iconBg: "bg-red-100",
    label: "GEFAHR",
    defaultIcon: "strom" as WarningIcon,
  },
  warnung: {
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500",
    textColor: "text-orange-800",
    titleColor: "text-orange-700",
    iconBg: "bg-orange-100",
    label: "WARNUNG",
    defaultIcon: "allgemein" as WarningIcon,
  },
  vorsicht: {
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-800",
    titleColor: "text-yellow-700",
    iconBg: "bg-yellow-100",
    label: "VORSICHT",
    defaultIcon: "allgemein" as WarningIcon,
  },
  hinweis: {
    bgColor: "bg-[#003E77]/5",
    borderColor: "border-[#003E77]",
    textColor: "text-[#003E77]",
    titleColor: "text-[#003E77]",
    iconBg: "bg-white",
    label: "HINWEIS",
    defaultIcon: "info" as WarningIcon,
  },
};

export default function WarningBox({ type, title, icon, children }: WarningBoxProps) {
  const config = warningConfig[type];
  const selectedIcon = icon || config.defaultIcon;
  const iconSrc = iconMap[selectedIcon];

  return (
    <div
      className={`${config.bgColor} ${config.borderColor} border-2 rounded-lg sm:rounded-xl p-4 sm:p-6 my-4 sm:my-6 animate-fadeIn`}
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <div className={`${config.iconBg} p-2 sm:p-3 rounded-xl shrink-0 shadow-sm`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconSrc}
            alt={config.label}
            width={64}
            height={64}
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain print-icon"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className={`font-bold ${config.titleColor} text-base sm:text-xl mb-1 sm:mb-2`}>
            {config.label}
            {title && <span className="font-normal ml-1 sm:ml-2">– {title}</span>}
          </div>
          <div className={`${config.textColor} text-sm sm:text-base leading-relaxed`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
