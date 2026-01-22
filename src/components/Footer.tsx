import React from 'react';

export default function Footer() {
  return (
    <footer className="relative mt-16 sm:mt-24 lg:mt-32">
      {/* Exact SVG Wave from Reference - Angular Swoosh */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 -translate-y-[99%]" style={{ pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[100px] lg:h-[180px] block fill-[#003E77]">
          {/* Angular swoosh: flat left, curves up at ~60%, levels off at top right */}
          <path d="M0,200 L0,200 L900,200 C1000,200 1100,80 1200,40 L1440,40 L1440,200 Z"></path>
        </svg>
      </div>

      <div className="bg-[#003E77] text-white pt-10 sm:pt-16 pb-8 sm:pb-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-8 sm:gap-y-12 text-sm font-light">

            {/* Column 1: Company Info & Socials */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-1 leading-relaxed text-sm">
                <p className="font-medium">3D Global GmbH</p>
                <p>Robert-Bosch-Straße 33</p>
                <p>DE-73431 Aalen</p>
                <a href="mailto:info@3d-global.com" className="underline hover:text-[#73C7D4] transition-colors block">info@3d-global.com</a>
                <a href="tel:+497361528299-0" className="underline hover:text-[#73C7D4] transition-colors block">+49 7361 528299 – 0</a>
              </div>

              <div className="flex items-center gap-4 sm:gap-5 pt-4 sm:pt-6">
                <a href="#" className="text-white hover:text-[#73C7D4] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                </a>
                <a href="#" className="text-white hover:text-[#73C7D4] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" className="text-white hover:text-[#73C7D4] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
              </div>

              <p className="text-white/60 text-xs pt-2 sm:pt-4">© 2024 3D Global GmbH</p>
            </div>

            {/* Column 2: Legal & Downloads */}
            <div className="space-y-6 sm:space-y-8">
              {/* Legal Links */}
              <div className="space-y-2">
                <a href="#" className="underline hover:text-[#73C7D4] transition-colors block">Legal notice</a>
                <a href="#" className="underline hover:text-[#73C7D4] transition-colors block">Privacy notice</a>
              </div>

              {/* Downloads Section */}
              <div>
                <p className="font-medium mb-4 sm:mb-6">Downloads</p>
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Booklet */}
                  <a href="#" className="flex flex-col items-center gap-1.5 sm:gap-2 group">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#73C7D4] transition-colors">
                      <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 18V6h8v12H3zm18 0h-8V6h8v12zM9 10H4v2h5v-2zm0 4H4v2h5v-2zm5-4h5v2h-5v-2zm0 4h5v2h-5v-2z" /></svg>
                    </div>
                    <span className="text-xs text-center group-hover:text-[#73C7D4] transition-colors">Booklet</span>
                  </a>
                  {/* Information */}
                  <a href="#" className="flex flex-col items-center gap-1.5 sm:gap-2 group">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#73C7D4] transition-colors">
                      <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
                    </div>
                    <span className="text-xs text-center group-hover:text-[#73C7D4] transition-colors">Information</span>
                  </a>
                  {/* Press */}
                  <a href="#" className="flex flex-col items-center gap-1.5 sm:gap-2 group">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#73C7D4] transition-colors">
                      <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>
                    </div>
                    <span className="text-xs text-center group-hover:text-[#73C7D4] transition-colors">Press</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Newsletter */}
            <div className="space-y-4 sm:space-y-5">
              <h4 className="font-bold text-base sm:text-lg">Don&apos;t miss any more news!</h4>

              <div className="flex flex-col gap-4 sm:gap-5">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="bg-transparent text-white px-0 py-2 border-b border-white/50 focus:border-[#73C7D4] outline-none placeholder:text-white/50"
                />

                <div className="space-y-2">
                  <p className="text-xs">Newsletterlanguage</p>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer text-sm">
                      <input type="radio" name="lang" className="accent-[#73C7D4] w-4 h-4" defaultChecked /> German
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm">
                      <input type="radio" name="lang" className="accent-[#73C7D4] w-4 h-4" /> English
                    </label>
                  </div>
                </div>

                {/* Newsletter Button - Pill/Rounded Border Style */}
                <button className="mt-2 px-6 py-3 rounded-full border-2 border-white/30 bg-transparent text-white font-medium hover:bg-white hover:text-[#003E77] transition-all flex items-center justify-center gap-2 group w-full sm:w-auto">
                  Subscribe to newsletter
                  <span className="font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
