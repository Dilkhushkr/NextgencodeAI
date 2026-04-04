import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { SERVICES } from "../utils/constants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function ServiceCard({ service, index }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`glass glass-hover rounded-2xl p-6 relative group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Coming soon badge */}
      {service.comingSoon && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(34,211,238,0.1))",
              border: "1px solid rgba(139,92,246,0.4)",
              color: "#a78bfa",
            }}>
            ✨ Coming Soon
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
        {service.icon}
      </div>

      {/* Accent line */}
      <div className="w-8 h-0.5 mb-4 rounded-full"
        style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }}
      ></div>

      <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-lg text-xs font-mono"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "#818cf8",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <SectionWrapper id="services" className="bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
      {/* Orbs */}
      <div className="orb orb-blue w-72 h-72 bottom-0 left-0 opacity-10"></div>
      <div className="orb orb-purple w-96 h-96 -top-20 right-0 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Offer"
          title="Our"
          highlight="Services"
          subtitle="From pixels to production — we handle every layer of your digital product."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA below services */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">Have a project in mind?</p>
          <a
            href="#contact"
            className="btn-primary inline-block"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get a Free Quote →
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Services;
