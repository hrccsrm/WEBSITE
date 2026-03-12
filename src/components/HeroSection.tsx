"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.png";

/* Social link data */
const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/hrccsrm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/hrccsrm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.04 4.9a4.28 4.28 0 0 0 1.32 5.71 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.19 4.27 4.27 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.59 8.59 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.02-.56A8.72 8.72 0 0 0 22.46 6Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/hrccsrm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.95c5.05-.5 9-4.76 9-9.95Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/hrccsrm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/hrccsrm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@hrccsrm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/HRCC-SRM",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* ── 3D Isometric Tower (left side) ── */}
      <motion.div
        className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg
          width="220"
          height="600"
          viewBox="0 0 220 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-70 w-[140px] md:w-[220px]"
        >
          {/* Spire / antenna */}
          <line x1="110" y1="0" x2="110" y2="70" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />

          {/* Top tier - small block (3D isometric) */}
          {/* Front face */}
          <polygon points="80,70 140,70 140,130 80,130" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          {/* Top face */}
          <polygon points="80,70 110,55 170,55 140,70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          {/* Right face */}
          <polygon points="140,70 170,55 170,115 140,130" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />

          {/* Second tier - medium block */}
          {/* Front face */}
          <polygon points="65,130 155,130 155,210 65,210" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          {/* Top face */}
          <polygon points="65,130 100,112 190,112 155,130" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          {/* Right face */}
          <polygon points="155,130 190,112 190,192 155,210" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />

          {/* Third tier - HQ block */}
          {/* Front face */}
          <polygon points="50,210 170,210 170,310 50,310" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          {/* Top face */}
          <polygon points="50,210 85,192 205,192 170,210" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          {/* Right face */}
          <polygon points="170,210 205,192 205,292 170,310" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />

          {/* HQ text on front face */}
          <text x="135" y="270" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="20" fontFamily="'Outfit', sans-serif" fontWeight="600">HQ</text>

          {/* Fourth tier - wider block with step */}
          {/* Front face */}
          <polygon points="35,310 185,310 185,390 35,390" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          {/* Top face */}
          <polygon points="35,310 65,295 215,295 185,310" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          {/* Right face */}
          <polygon points="185,310 215,295 215,375 185,390" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />

          {/* Side extension on right of fourth tier */}
          <polygon points="140,350 185,350 185,390 140,390" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
          <polygon points="140,350 160,340 205,340 185,350" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
          <polygon points="185,350 205,340 205,380 185,390" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />

          {/* Base tier - widest block */}
          {/* Front face */}
          <polygon points="15,390 205,390 205,510 15,510" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          {/* Top face */}
          <polygon points="15,390 40,375 220,375 205,390" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />
          {/* Right face */}
          <polygon points="205,390 220,375 220,500 205,510" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />

          {/* Foundation block */}
          <polygon points="5,510 215,510 215,600 5,600" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
          <polygon points="5,510 25,498 220,498 215,510" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        </svg>

        {/* HackerRank logo on the tower */}
        <div className="absolute" style={{ left: "12px", top: "52%", transform: "translateY(-50%)" }}>
          <Image
            src={logo}
            alt="HackerRank Campus Crew"
            width={48}
            height={28}
            className="w-10 md:w-12 drop-shadow-lg"
          />
        </div>
      </motion.div>

      {/* ── Main Content (right side) ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-end text-right pt-24 pb-16">
        {/* Big title */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-black leading-[0.95] tracking-tight"
            style={{
              fontStyle: "italic",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(3rem, 9vw, 8rem)",
              color: "#E8706A",
              textShadow: "0 4px 30px rgba(232,112,106,0.15)",
            }}
          >
            WE ARE
            <br />
            HACKERRANK
            <br />
            CAMPUS CREW
          </h1>
        </motion.div>

        {/* Description text */}
        <motion.div
          className="mt-10 max-w-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
            We think slightly out of the box, we believe that a club&apos;s resources must not only
            be channeled into conducting events but also to propagate learning and teaching,
            symbiotically.
          </p>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            That said, we conduct Flagship events such as Coding Competitions, Technical
            Workshops and Collaborative Hackathons, and tons of insightful sessions for the
            student community at SRMIST KTR.
          </p>
        </motion.div>

        {/* Social link icons */}
        <motion.div
          className="mt-10 flex items-center gap-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="mt-auto pt-16 text-white/30 text-xs tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          © 2024 HACKERRANK CAMPUS CREW SRMIST KTR
        </motion.p>
      </div>
    </section>
  );
}
