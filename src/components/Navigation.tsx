"use client";

import { useState, useEffect } from "react";
import {
  ClipboardList,
  ShieldAlert,
  Sparkles,
  Monitor,
  Wrench,
  Search as SearchIcon,
  BarChart3,
  Paperclip,
  LucideIcon,
} from "lucide-react";

interface NavItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { id: "hinweise", title: "Hinweise zur Bedienungsanleitung", icon: ClipboardList },
  { id: "sicherheit", title: "Sicherheit", icon: ShieldAlert },
  { id: "leistung", title: "Leistungsbeschreibung", icon: Sparkles },
  { id: "geraet", title: "Gerätebeschreibung", icon: Monitor },
  { id: "taetigkeit", title: "Tätigkeitsbeschreibung", icon: Wrench },
  { id: "problemloesung", title: "Problemlösung", icon: SearchIcon },
  { id: "technisch", title: "Technische Daten", icon: BarChart3 },
  { id: "anhang", title: "Anhang", icon: Paperclip },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / docHeight) * 100;
      setScrollProgress(progress);

      // Find active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#003E77] to-[#73C7D4] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-1 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/images/3d-global-logo.svg"
              alt="3D Global Logo"
              className="h-8 w-auto"
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-50 transition-colors text-[#003E77]"
            aria-label="Menü öffnen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${activeSection === item.id
                      ? "bg-[#003E77]/5 text-[#003E77] border-l-4 border-[#003E77]"
                      : "hover:bg-gray-50 text-gray-600"
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeSection === item.id ? "bg-[#003E77]/10" : "bg-gray-100"
                      }`}>
                      <item.icon className="w-4 h-4 text-[#003E77]" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-medium">{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Desktop Sidebar - Reverted per User Request, styled with 3D Global Aesthetic */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[280px] bg-white border-r border-slate-100 z-40 flex-col overflow-y-auto">
        <div className="p-8 pb-4">
          {/* Logo - Original 3D Global SVG */}
          <div className="mb-16">
            <img
              src="/images/3d-global-logo.svg"
              alt="3D Global Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left text-lg font-heading transition-all duration-200 group flex items-center gap-3 ${activeSection === item.id
                      ? "text-[#003E77] font-normal pl-2 border-l-2 border-[#73C7D4]"
                      : "text-[#003E77] font-light hover:text-[#73C7D4] hover:pl-2 hover:border-l-2 hover:border-[#73C7D4]/50"
                      }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Sidebar Footer / Lang */}
        <div className="mt-auto p-8 border-t border-slate-50">
          <div className="flex items-center gap-6">
            <span className="text-[#003E77] font-light cursor-pointer hover:text-[#73C7D4]">DE</span>
          </div>
        </div>
      </aside>
    </>
  );
}
