import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * Reusable wrapper for sections with fade-in animation on scroll
 */
function SectionWrapper({ id, className = "", children }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-24 md:py-32 overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
