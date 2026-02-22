"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  ShieldAlert,
  Sparkles,
  Wrench,
  Search as SearchIcon,
  BarChart3,
  LucideIcon,
  X,
  Package,
  Building2,
  FileCheck,
  Recycle,
  FileText,
  ChevronDown,
  Printer,
} from "lucide-react";

interface SubItem {
  id: string;
  title: string;
}

interface NavItem {
  id: string;
  title: string;
  icon: LucideIcon;
  subItems?: SubItem[];
}

const navItems: NavItem[] = [
  { id: "lieferumfang", title: "Lieferumfang", icon: Package },
  {
    id: "sicherheit",
    title: "Sicherheit",
    icon: ShieldAlert,
    subItems: [
      { id: "bestimmung", title: "Bestimmungsgemäße Verwendung" },
      { id: "voraussetzungen", title: "Bevor Sie das Gerät verwenden" },
      { id: "uebergreifend", title: "Übergreifende Sicherheitshinweise" },
      { id: "spezifisch", title: "Spezifische Sicherheitshinweise" },
      { id: "notfall", title: "Verhalten im Notfall" },
    ]
  },
  {
    id: "leistung",
    title: "Produktübersicht",
    icon: Sparkles,
    subItems: [
      { id: "merkmale", title: "Technische Hauptmerkmale" },
      { id: "schnittstellen", title: "Schnittstellen und Signalübertragung" },
      { id: "anwendung", title: "Anwendung und Nutzen" },
      { id: "geraet", title: "Gerätebeschreibung" },
    ]
  },
  {
    id: "taetigkeit",
    title: "Bedienung",
    icon: Wrench,
    subItems: [
      { id: "auspacken", title: "3D-Display auspacken" },
      { id: "positionieren", title: "3D-Display positionieren" },
      { id: "verkabeln", title: "3D-Display verkabeln" },
      { id: "einschalten", title: "3D-Display einschalten" },
      { id: "ausschalten", title: "3D-Display ausschalten" },
      { id: "eingangsquelle", title: "Eingangsquelle wählen" },
      { id: "displaymenue", title: "3D-Displaymenü bedienen" },
      { id: "reinigung", title: "3D-Display reinigen" },
    ]
  },
  { id: "problemloesung", title: "Problemlösung", icon: SearchIcon },
  {
    id: "technisch",
    title: "Technische Daten",
    icon: BarChart3,
    subItems: [
      { id: "spezifikationen", title: "3D-Display-Spezifikationen" },
      { id: "anschluesse", title: "Anschlüsse" },
      { id: "stromversorgung", title: "Stromversorgung" },
      { id: "umgebung", title: "Umgebungsbedingungen" },
      { id: "normen", title: "Normen und Zertifizierungen" },
    ]
  },
  { id: "herstellerinfo", title: "Herstellerinformationen", icon: Building2 },
  { id: "garantie", title: "Garantie", icon: FileCheck },
  { id: "entsorgung", title: "Entsorgung", icon: Recycle },
  { id: "konformitaet", title: "Konformität", icon: FileText },
];

interface SearchResult {
  text: string;
  element: Element;
  section: string;
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [activeSubSection, setActiveSubSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const lastActiveSectionRef = useRef<string>("");

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Search function
  const performSearch = (query: string) => {
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    const results: SearchResult[] = [];
    const mainContent = document.querySelector("main");
    if (!mainContent) return;

    const walker = document.createTreeWalker(
      mainContent,
      NodeFilter.SHOW_TEXT,
      null
    );

    const queryLower = query.toLowerCase();
    let node;
    const seen = new Set<Element>();

    while ((node = walker.nextNode())) {
      const text = node.textContent?.toLowerCase() || "";
      if (text.includes(queryLower)) {
        const parent = node.parentElement;
        if (parent && !seen.has(parent)) {
          seen.add(parent);

          // Find which section this belongs to
          let section = "";
          let el: Element | null = parent;
          while (el) {
            if (el.id && navItems.some(item => item.id === el!.id)) {
              section = navItems.find(item => item.id === el!.id)?.title || "";
              break;
            }
            el = el.parentElement;
          }

          const fullText = node.textContent || "";
          const startIndex = Math.max(0, text.indexOf(queryLower) - 30);
          const endIndex = Math.min(fullText.length, text.indexOf(queryLower) + query.length + 30);
          let snippet = fullText.slice(startIndex, endIndex).trim();
          if (startIndex > 0) snippet = "..." + snippet;
          if (endIndex < fullText.length) snippet = snippet + "...";

          if (snippet.length > 10) {
            results.push({
              text: snippet,
              element: parent,
              section,
            });
          }
        }
      }
      if (results.length >= 10) break;
    }

    setSearchResults(results);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    performSearch(query);
  };

  const scrollToResult = (result: SearchResult) => {
    result.element.scrollIntoView({ behavior: "smooth", block: "center" });

    // Highlight effect
    result.element.classList.add("bg-yellow-100", "transition-colors");
    setTimeout(() => {
      result.element.classList.remove("bg-yellow-100");
    }, 2000);

    setSearchQuery("");
    setSearchResults([]);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    searchInputRef.current?.focus();
  };

  // Helper function to get absolute position of element
  const getAbsoluteTop = (element: HTMLElement): number => {
    return element.getBoundingClientRect().top + window.scrollY;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / docHeight) * 100;
      setScrollProgress(progress);

      // Find active section using absolute position
      let activeSectionId = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && getAbsoluteTop(section) <= scrollPosition) {
          setActiveSection(navItems[i].id);
          activeSectionId = navItems[i].id;
          // Auto-expand only the active section (collapse all others)
          if (activeSectionId !== lastActiveSectionRef.current) {
            lastActiveSectionRef.current = activeSectionId;
            if (navItems[i].subItems) {
              setExpandedItems([navItems[i].id]);
            } else {
              setExpandedItems([]);
            }
          }
          break;
        }
      }

      // Find active sub-section - only check subsections of the active main section
      const currentNavItem = navItems.find(item => item.id === activeSectionId);
      let activeSubId = "";

      if (currentNavItem?.subItems) {
        const subElements = currentNavItem.subItems
          .map(sub => ({ id: sub.id, element: document.getElementById(sub.id) }))
          .filter(item => item.element !== null);

        for (let i = subElements.length - 1; i >= 0; i--) {
          const el = subElements[i].element;
          if (el && getAbsoluteTop(el) <= scrollPosition) {
            activeSubId = subElements[i].id;
            break;
          }
        }
      }
      setActiveSubSection(activeSubId);
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
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer">
              <Image
                src="/images/3d-global-logo.svg"
                alt="3D Global Logo"
                width={240}
                height={80}
                unoptimized
                className="h-8 w-auto"
              />
            </button>
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
          <nav className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
            {/* Mobile Search */}
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Suchen..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-8 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-[#003E77] focus:ring-1 focus:ring-[#003E77]/20"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded"
                  >
                    <X className="w-4 h-4 text-slate-400" />
                  </button>
                )}
              </div>

              {/* Mobile Search Results */}
              {searchResults.length > 0 && (
                <div className="mt-2 bg-slate-50 rounded-lg max-h-48 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        scrollToResult(result);
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-slate-100 border-b border-slate-100 last:border-b-0"
                    >
                      <div className="text-xs text-[#003E77] font-medium">
                        {result.section || "Dokument"}
                      </div>
                      <div className="text-sm text-slate-600 line-clamp-1">
                        {result.text}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {searchQuery.length >= 2 && searchResults.length === 0 && (
                <div className="mt-2 p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-500 text-center">Keine Ergebnisse</p>
                </div>
              )}
            </div>

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

            {/* Mobile Print Button */}
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.print();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm text-[#003E77] bg-[#003E77]/5 hover:bg-[#003E77]/10 rounded-lg transition-colors"
              >
                <Printer className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-medium">Anleitung drucken</span>
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[280px] bg-white border-r border-slate-100 z-40 flex-col overflow-y-auto">
        <div className="p-8 pb-4">
          {/* Logo */}
          <div className="mb-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer">
              <Image
                src="/images/3d-global-logo.svg"
                alt="3D Global Logo"
                width={300}
                height={100}
                unoptimized
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Search */}
          <div className="mb-8 relative">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Suchen..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-8 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-[#003E77] focus:ring-1 focus:ring-[#003E77]/20 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              )}
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToResult(result)}
                    className="w-full text-left px-3 py-2 hover:bg-slate-50 border-b border-slate-100 last:border-b-0"
                  >
                    <div className="text-xs text-[#003E77] font-medium mb-0.5">
                      {result.section || "Dokument"}
                    </div>
                    <div className="text-sm text-slate-600 line-clamp-2">
                      {result.text}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {searchQuery.length >= 2 && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg p-3 z-50">
                <p className="text-sm text-slate-500 text-center">Keine Ergebnisse gefunden</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <div className="flex items-center">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`flex-1 text-left text-base font-heading transition-all duration-200 py-1 ${activeSection === item.id
                        ? "text-[#003E77] font-medium pl-2 border-l-2 border-[#73C7D4]"
                        : "text-[#003E77]/70 font-light hover:text-[#003E77] hover:pl-2"
                        }`}
                    >
                      {item.title}
                    </button>
                    {item.subItems && (
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="p-1 hover:bg-slate-100 rounded transition-colors"
                      >
                        <ChevronDown
                          className={`w-4 h-4 text-[#003E77]/50 transition-transform ${
                            expandedItems.includes(item.id) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Sub Items */}
                  {item.subItems && expandedItems.includes(item.id) && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem, index) => (
                        <li key={index}>
                          <button
                            onClick={() => scrollToSection(subItem.id)}
                            className={`w-full text-left text-sm py-1 transition-all duration-200 ${
                              activeSubSection === subItem.id
                                ? "text-[#003E77] font-medium pl-2 border-l-2 border-[#73C7D4]"
                                : "text-[#003E77]/60 font-light pl-3 hover:text-[#003E77] hover:pl-2 hover:border-l-2 hover:border-[#73C7D4]/50"
                            }`}
                          >
                            {subItem.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="mt-auto p-8 border-t border-slate-50">
          <div className="flex items-center justify-between">
            <span className="text-[#003E77] font-light cursor-pointer hover:text-[#73C7D4]">DE</span>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#003E77] hover:bg-[#003E77]/5 rounded-lg transition-colors"
              title="Seite drucken"
            >
              <Printer className="w-4 h-4" strokeWidth={1.5} />
              <span className="font-light">Drucken</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
