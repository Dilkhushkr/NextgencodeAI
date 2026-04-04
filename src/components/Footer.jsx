import React from "react";
import { COMPANY, NAV_LINKS, SERVICES } from "../utils/constants";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#060410]">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl text-white"
                style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}>
                N
              </div>
              <div>
                <div className="font-bold text-lg gradient-text">{COMPANY.name}</div>
                <div className="text-slate-500 text-xs">Innovations</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              A software development startup focused on building scalable web applications, mobile apps, and future-ready AI solutions.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a href={COMPANY.github} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all duration-200"
                aria-label="GitHub">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all duration-200"
                aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href={`mailto:${COMPANY.email}`}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all duration-200"
                aria-label="Email">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.909v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.09l9.615-6.269h.749A1.636 1.636 0 0 1 24 5.457z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-1">
                    <span>→</span> {s.title}
                    {s.comingSoon && <span className="text-xs text-violet-400 ml-1">(Soon)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-1">
                    <span>→</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Contact</h3>
              <a href={`mailto:${COMPANY.email}`} className="text-slate-400 hover:text-indigo-400 text-sm transition-colors break-all">
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {year} {COMPANY.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <span>Built with</span>
            <span className="text-red-400">♥</span>
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
