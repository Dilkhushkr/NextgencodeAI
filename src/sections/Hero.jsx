import React, { useEffect, useRef } from "react";
import { COMPANY } from "../utils/constants";
import { useTypewriter } from "../hooks/useTypewriter";

function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? "99,102,241" : "139,92,246",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

function Hero() {
  const typeText = useTypewriter(
    ["Web Applications", "Mobile Apps", "AI Solutions", "Custom Software"],
    80,
    45,
    2500
  );

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Canvas background */}
      <HeroBackground />

      {/* Glowing orbs */}
      <div className="orb orb-purple w-[600px] h-[600px] -top-32 -left-32"></div>
      <div className="orb orb-blue w-[400px] h-[400px] top-1/2 -right-32"></div>
      <div className="orb orb-cyan w-[300px] h-[300px] bottom-0 left-1/3"></div>

      {/* Scan line */}
      <div className="scanline"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Pre-title badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 glass"
          style={{ border: "1px solid rgba(99,102,241,0.3)" }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-slate-300 text-sm font-medium font-mono">
            Available for freelance projects
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          <span className="block text-white">
            {COMPANY.name.replace("AI", "")}
            <span className="gradient-text">AI</span>
          </span>
          <span className="block text-slate-300 text-3xl sm:text-4xl md:text-5xl font-medium mt-2">
            Innovations
          </span>
        </h1>

        {/* Dynamic tagline */}
        <div className="mb-4">
          <p className="text-xl md:text-2xl text-slate-400">
            Building Intelligent{" "}
            <span className="gradient-text font-semibold">
              {typeText}
              <span className="cursor">|</span>
            </span>
          </p>
        </div>

        <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          {COMPANY.tagline} — for startups and businesses that mean business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => handleScroll("#services")}
            className="btn-primary text-base w-full sm:w-auto"
          >
            View Services ↓
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="btn-outline text-base w-full sm:w-auto"
          >
            Contact Us →
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { number: "10+", label: "Projects Built" },
            { number: "5+", label: "Tech Stacks" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => handleScroll("#about")}
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 border border-slate-600 rounded-full flex justify-center pt-1.5 group-hover:border-indigo-500 transition-colors">
              <div className="w-1 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
