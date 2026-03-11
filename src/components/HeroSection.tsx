"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import puzzle1 from "@/assets/puzzle1.png";
import puzzle2 from "@/assets/puzzle2.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="green-grid-bg relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Floating Puzzle Pieces */}
      <motion.div
        className="absolute float-anim"
        style={{ top: "28%", left: "6%", "--rot": "-15deg" } as React.CSSProperties}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Image src={puzzle1} alt="" width={90} height={90} className="w-16 md:w-24 drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute float-slow"
        style={{ bottom: "22%", right: "6%", "--rot": "20deg" } as React.CSSProperties}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Image src={puzzle2} alt="" width={90} height={90} className="w-16 md:w-24 drop-shadow-lg" />
      </motion.div>

      {/* Decorative dots */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-blue-300"
        style={{ top: "35%", left: "45%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
      <motion.div
        className="absolute w-2.5 h-2.5 rounded-full bg-pink-400"
        style={{ bottom: "30%", left: "40%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      />

      {/* Main Hero Text */}
      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-bold leading-[1.1] tracking-tight"
            style={{ fontStyle: "italic", fontFamily: "'Outfit', sans-serif" }}
          >
            <span
              className="block text-white"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            >
              A community
            </span>
            <span
              className="block text-white/80"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 400, marginTop: "0.2em" }}
            >
              for those
            </span>
            <span className="block" style={{ fontSize: "clamp(2rem, 6vw, 5rem)", marginTop: "0.1em" }}>
              <span className="text-white">who see </span>
              <span className="relative inline-block">
                <span
                  className="absolute inset-0 border-2 border-blue-300/60 bg-blue-300/10 rounded"
                  style={{ transform: "scale(1.08)", transformOrigin: "center" }}
                />
                <span className="relative text-[#F5E6CA]" style={{ fontWeight: 800 }}>puzzles</span>
              </span>
            </span>
            <span
              className="block text-white/80"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 400, marginTop: "0.2em" }}
            >
              where others
            </span>
            <span className="block" style={{ fontSize: "clamp(2rem, 6vw, 5rem)", marginTop: "0.1em" }}>
              <span className="text-white">see </span>
              <span className="relative inline-block">
                <span
                  className="absolute inset-0 border-2 border-pink-400/60 bg-pink-400/10 rounded"
                  style={{ transform: "scale(1.08)", transformOrigin: "center" }}
                />
                <span className="relative text-[#F5E6CA]" style={{ fontWeight: 800 }}>problems</span>
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-white/80 font-semibold tracking-wider"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          HackerRank Campus Crew SRM
        </motion.p>
      </div>
    </section>
  );
}
