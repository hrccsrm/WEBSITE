"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10">
      {/* ── Top Section: CTA on green grid ───────────────── */}
      <div className="green-grid-bg py-16 px-4 md:px-8 text-center relative overflow-hidden">
        {/* Decorative stickers */}
        <motion.div
          className="absolute top-6 left-8 rotate-[-8deg] bg-[#e8d44d] px-3 py-2 rounded shadow-lg hidden md:block"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-[10px] font-bold text-black italic leading-tight">
            never be ashamed
            <br />
            <span className="text-sm font-black">OF TRYING</span>
          </p>
        </motion.div>

        <motion.div
          className="absolute top-8 right-10 hidden md:block"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-[#e8a030] rounded-lg flex items-center justify-center shadow-lg rotate-[5deg]">
            <span className="text-2xl">🖥️</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-12 hidden md:block"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span className="text-3xl">☕</span>
        </motion.div>

        <motion.p
          className="text-white font-bold max-w-2xl mx-auto mb-6"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontStyle: "italic" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          No matter your level, there&apos;s a problem waiting for you.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block px-8 py-3 bg-white text-gray-800 rounded-full font-semibold text-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Join The Club
        </motion.a>
      </div>

      {/* ── Scallop Divider ──────────────────────────────── */}
      <div className="relative">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "40px", marginTop: "-1px" }}
        >
          <path
            d="M0,0 Q30,50 60,0 Q90,50 120,0 Q150,50 180,0 Q210,50 240,0 Q270,50 300,0 Q330,50 360,0 Q390,50 420,0 Q450,50 480,0 Q510,50 540,0 Q570,50 600,0 Q630,50 660,0 Q690,50 720,0 Q750,50 780,0 Q810,50 840,0 Q870,50 900,0 Q930,50 960,0 Q990,50 1020,0 Q1050,50 1080,0 Q1110,50 1140,0 Q1170,50 1200,0 V60 H0 Z"
            fill="#d4d4d4"
          />
        </svg>
      </div>

      {/* ── Gray Footer ──────────────────────────────────── */}
      <div className="bg-[#d4d4d4] px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Nav Links */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Home", "Domains", "About", "Contact Us"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="px-5 py-2 border-2 border-gray-500 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-600 hover:text-white transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mb-6">
            {/* Instagram */}
            <a href="#" className="text-gray-600 hover:text-[#E4405F] transition-colors duration-300">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-600 hover:text-[#0A66C2] transition-colors duration-300">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="text-gray-600 hover:text-[#1877F2] transition-colors duration-300">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Brand */}
          <p className="text-gray-500 font-bold text-2xl md:text-3xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
            HackerRank Campus Crew SRM.
          </p>
        </div>
      </div>

      {/* ── Dark Sub-Footer ──────────────────────────────── */}
      <div className="bg-black text-white overflow-hidden">
        {/* Marquee */}
        <div className="py-2 border-b border-white/10 overflow-hidden">
          <div className="marquee-track">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium whitespace-nowrap px-8"
              >
                JOIN HACKER RANK CAMPUS CREW &nbsp;✦&nbsp;
              </span>
            ))}
            {[...Array(6)].map((_, i) => (
              <span
                key={`dup-${i}`}
                className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium whitespace-nowrap px-8"
              >
                JOIN HACKER RANK CAMPUS CREW &nbsp;✦&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* Main dark content */}
        <div className="px-6 md:px-12 py-12 text-center">
          <motion.h3
            className="font-black text-white leading-none mb-8"
            style={{ fontSize: "clamp(2rem, 8vw, 5rem)", fontStyle: "italic" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            DECRYPT
            <br />
            THE
            <br />
            SYSTEM
          </motion.h3>

          <motion.a
            href="mailto:contact@hrcc-srm.com"
            className="inline-block px-8 py-3 border-2 border-white text-white rounded-full font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
