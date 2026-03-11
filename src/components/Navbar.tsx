"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Domains", href: "#domains" },
    { label: "Team", href: "#team" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-white/90 shadow-md backdrop-blur-sm"
      }`}
    >
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2 shrink-0">
        <Image src={logo} alt="HRCC Logo" width={48} height={28} className="h-7 w-auto" />
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-700 font-medium text-sm hover:text-[#00896B] transition-colors duration-300 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00896B] group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:block px-5 py-2 border-2 border-gray-800 text-gray-800 rounded-full text-sm font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
      >
        Join The Club
      </a>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-gray-800"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-gray-800"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-gray-800"
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium text-base hover:text-[#00896B] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-2 border-2 border-gray-800 text-gray-800 rounded-full text-sm font-semibold text-center hover:bg-gray-800 hover:text-white transition-all"
            >
              Join The Club
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
