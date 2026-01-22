"use client";

import Image from "next/image";

type WarningType = "gefahr" | "warnung" | "vorsicht" | "hinweis";

interface WarningBoxProps {
  type: WarningType;
  title?: string;
  children: React.ReactNode;
}

const warningConfig = {
  gefahr: {
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
    textColor: "text-red-800",
    titleColor: "text-red-700",
    iconBg: "bg-red-100",
    label: "GEFAHR",
    icon: "/images/warnung.png",
  },
  warnung: {
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500",
    textColor: "text-orange-800",
    titleColor: "text-orange-700",
    iconBg: "bg-orange-100",
    label: "WARNUNG",
    icon: "/images/warnung.png",
  },
  vorsicht: {
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-800",
    titleColor: "text-yellow-700",
    iconBg: "bg-yellow-100",
    label: "VORSICHT",
    icon: "/images/vorsicht.png",
  },
  hinweis: {
    bgColor: "bg-[#003E77]/5",
    borderColor: "border-[#003E77]",
    textColor: "text-[#003E77]",
    titleColor: "text-[#003E77]",
    iconBg: "bg-white",
    label: "HINWEIS",
    icon: "/images/hinweis.png",
  },
};

export default function WarningBox({ type, title, children }: WarningBoxProps) {
  const config = warningConfig[type];

  return (
    <div
      className={`${config.bgColor} ${config.borderColor} border-l-4 rounded-r-lg sm:rounded-r-xl p-3 sm:p-5 my-4 sm:my-6 animate-fadeIn shadow-sm`}
    >
      <div className="flex items-start gap-2.5 sm:gap-4">
        <div className={`${config.iconBg} p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl shrink-0 shadow-sm`}>
          <Image
            src={config.icon}
            alt={config.label}
            width={28}
            height={28}
            className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className={`font-bold ${config.titleColor} text-sm sm:text-lg mb-1 sm:mb-2`}>
            {config.label}
            {title && <span className="font-normal ml-1 sm:ml-2">– {title}</span>}
          </div>
          <div className={`${config.textColor} text-xs sm:text-sm leading-relaxed`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
