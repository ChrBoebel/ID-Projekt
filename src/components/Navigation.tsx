"use client";

import { useState, useEffect, useRef } from "react";
import {
  ShieldAlert,
  Sparkles,
  Monitor,
  Wrench,
  Search as SearchIcon,
  BarChart3,
  Paperclip,
  LucideIcon,
  X,
  Package,
} from "lucide-react";

interface NavItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { id: "lieferumfang", title: "Lieferumfang", icon: Package },
  { id: "sicherheit", title: "Sicherheit", icon: ShieldAlert },
  { id: "leistung", title: "Leistungsbeschreibung", icon: Sparkles },
  { id: "geraet", title: "Gerätebeschreibung", icon: Monitor },
  { id: "taetigkeit", title: "Tätigkeitsbeschreibung", icon: Wrench },
  { id: "problemloesung", title: "Problemlösung", icon: SearchIcon },
  { id: "technisch", title: "Technische Daten", icon: BarChart3 },
  { id: "anhang", title: "Anhang", icon: Paperclip },
];

interface SearchResult {
  text: string;
  element: Element;
  section: string;
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

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
    setIsSearching(false);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    searchInputRef.current?.focus();
  };

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
          </nav>
        )}
      </header>

      {/* Desktop Sidebar - Reverted per User Request, styled with 3D Global Aesthetic */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[280px] bg-white border-r border-slate-100 z-40 flex-col overflow-y-auto">
        <div className="p-8 pb-4">
          {/* Logo - Original 3D Global SVG */}
          <div className="mb-8">
            <img
              src="/images/3d-global-logo.svg"
              alt="3D Global Logo"
              className="h-12 w-auto"
            />
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
                onFocus={() => setIsSearching(true)}
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
