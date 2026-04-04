import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { HIGHLIGHTS } from "../utils/constants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function HighlightCard({ icon, label, description, index }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`glass glass-hover rounded-2xl p-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-white mb-1">{label}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}

function About() {
  return (
    <SectionWrapper id="about">
      {/* Background */}
      <div className="orb orb-purple w-80 h-80 top-0 right-0 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeader
              badge="About Us"
              title="Who We"
              highlight="Are"
              centered={false}
            />

            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                <span className="text-white font-semibold">NextGenCodeAI Innovations</span> is a
                software development startup focused on building scalable web applications, mobile
                apps, and future-ready AI solutions for startups and businesses.
              </p>
              <p>
                Led by a solo founder with hands-on expertise in modern technologies, we combine
                the agility of a freelancer with the quality standards of a full-fledged agency.
                Every project is built with clean code, modern architecture, and your business
                goals in mind.
              </p>
              <p>
                We believe great software shouldn't be expensive or slow. That's why we offer
                startup-friendly pricing, rapid delivery, and direct communication — no unnecessary
                layers, no fluff.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="btn-primary text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
                }}>
                Let's Work Together
              </a>
              <a href="#portfolio" className="btn-outline text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
                }}>
                See Work
              </a>
            </div>
          </div>

          {/* Right: Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map((h, i) => (
              <HighlightCard key={h.label} {...h} index={i} />
            ))}

            {/* Extra visual card */}
            <div className="col-span-2 glass rounded-2xl p-6 gradient-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-mono text-sm text-slate-400">Currently accepting projects</span>
              </div>
              <div className="font-mono text-xs text-slate-500 space-y-1">
                <div><span className="text-indigo-400">const</span> <span className="text-white">availability</span> = <span className="text-green-400">"open"</span>;</div>
                <div><span className="text-indigo-400">const</span> <span className="text-white">responseTime</span> = <span className="text-yellow-400">"&lt; 24 hours"</span>;</div>
                <div><span className="text-indigo-400">const</span> <span className="text-white">delivery</span> = <span className="text-cyan-400">"3–14 days"</span>;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default About;
