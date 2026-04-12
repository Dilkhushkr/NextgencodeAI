import React, { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { TECH_STACK } from "../utils/constants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const CATEGORIES = ["All", "Frontend", "Backend", "Database", "Mobile", "Language", "DevOps", "AI"];

function TechCard({ tech, index }) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-5 text-center group cursor-default transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{
        transitionDelay: `${index * 60}ms`,
        border: hovered
          ? `1px solid ${tech.color}50`
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered ? `0 8px 40px ${tech.color}20` : "none",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125">
        {tech.icon}
      </div>
      <div className="text-sm font-semibold text-white">{tech.name}</div>
      <div
        className="text-xs mt-1.5 px-2 py-0.5 rounded-full inline-block"
        style={{
          background: `${tech.color}15`,
          color: tech.color,
          border: `1px solid ${tech.color}30`,
        }}
      >
        {tech.category}
      </div>
    </div>
  );
}

function  TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category === activeCategory);

  return (
    <SectionWrapper id="tech-stack">
      <div className="orb orb-cyan w-72 h-72 top-1/2 right-0 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tools & Technologies"
          title="Our"
          highlight="Tech Stack"
          subtitle="The modern, battle-tested technologies powering every project we deliver."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200 glass"
              }`}
              style={
                activeCategory === cat
                  ? { background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default TechStack;
