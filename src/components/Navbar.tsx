"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Domains", href: "#domains" },
  { label: "Team", href: "#team" },
  { label: "Events", href: "#events" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Minimal Header Bar ── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: "#0a0a0a" }}
      >
        {/* Left — Logo + Name */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <Image src={logo} alt="HRCC Logo" width={36} height={20} className="h-5 w-auto" />
          <span className="text-white text-sm font-medium border border-white/30 rounded-full px-4 py-1">
            HRCC SRM
          </span>
        </a>

        {/* Right — Menu / Close button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-sm font-medium border border-white/30 rounded-full px-5 py-1.5 hover:bg-white/10 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </motion.header>

      {/* ── Fullscreen Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[55] flex items-start pt-24 px-6 md:px-16"
            style={{ background: "rgba(10, 10, 10, 0.97)" }}
          >
            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 md:gap-3 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white/60 hover:text-white font-black tracking-tight transition-colors duration-300"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    fontStyle: "italic",
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1.15,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
