import React, { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { COMPANY } from "../utils/constants";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

function ContactInfo({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-start gap-4 glass rounded-2xl p-5 glass-hover group"
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
        style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.25)" }}>
        {icon}
      </div>
      <div>
        <div className="text-slate-500 text-xs mb-1 uppercase tracking-wider">{label}</div>
        <div className="text-slate-200 text-sm font-medium group-hover:text-indigo-400 transition-colors">{value}</div>
      </div>
    </a>
  );
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("loading");

    // Simulate API call — replace with actual backend/Formspree/EmailJS
    setTimeout(() => {
      setStatus("success");
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 font-mono ${
      errors[field]
        ? "border-red-500/50 bg-red-950/10"
        : "border-white/5 focus:border-indigo-500/50 focus:shadow-lg focus:shadow-indigo-500/10"
    }`;

  const inputStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid",
  };

  return (
    <SectionWrapper id="contact">
      <div className="orb orb-blue w-96 h-96 top-0 right-0 opacity-10"></div>
      <div className="orb orb-purple w-72 h-72 bottom-0 left-0 opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's"
          highlight="Connect"
          subtitle="Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <ContactInfo
              icon="📧"
              label="Email"
              value={COMPANY.email}
              href={`mailto:${COMPANY.email}`}
            />
            <ContactInfo
              icon="💬"
              label="WhatsApp"
              value="Chat on WhatsApp"
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=Hi! I'm interested in your services.`}
            />
            <ContactInfo
              icon="💼"
              label="LinkedIn"
              value="NextGenCodeAI"
              href={COMPANY.linkedin}
            />
            <ContactInfo
              icon="🐙"
              label="GitHub"
              value="@nextgencodeai"
              href={COMPANY.github}
            />

            {/* Status indicator */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-slate-300 text-sm font-medium">Currently Available</span>
              </div>
              <p className="text-slate-500 text-sm">
                Open for web, mobile, and AI project inquiries. Typical response within a few hours.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 gradient-border">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass("name")}
                        style={inputStyle}
                        autoComplete="name"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass("email")}
                        style={inputStyle}
                        autoComplete="email"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-5">
                    <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project inquiry / Collaboration / etc."
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass("subject")}
                      style={inputStyle}
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project — what you're building, your timeline, and your budget..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass("message")} resize-none`}
                      style={inputStyle}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Message →</>
                    )}
                  </button>

                  <p className="text-slate-600 text-xs text-center mt-4">
                    Or reach us directly at{" "}
                    <a href={`mailto:${COMPANY.email}`} className="text-indigo-400 hover:underline">
                      {COMPANY.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
