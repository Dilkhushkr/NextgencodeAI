import React from "react";

/**
 * Reusable section header with badge, title, and subtitle
 */
function SectionHeader({ badge, title, highlight, subtitle, centered = true }) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <div className={`mb-4 ${centered ? "flex justify-center" : ""}`}>
          <span className="badge">
            <span>✦</span> {badge}
          </span>
        </div>
      )}
      <h2 className="section-title">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeader;
