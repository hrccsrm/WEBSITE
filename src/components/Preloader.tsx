"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [scope, animate] = useAnimate();
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const runAnimation = async () => {
      // Make visible immediately
      animate(scope.current, { opacity: 1 }, { duration: 0 });

      // ── Phase 1: Logo ──────────────────────────────────────
      // H slides in from top, green rect slides in from bottom — simultaneously
      await Promise.all([
        animate(".logo-h",   { y: "0%" }, { duration: 1.05, ease: [0.22, 1, 0.36, 1] }),
        animate(".logo-rect",{ y: "0%" }, { duration: 1.05, ease: [0.22, 1, 0.36, 1] }),
      ]);

      // Hold logo
      await new Promise((r) => setTimeout(r, 780));

      // ── Phase 2: Crossfade logo → monitor ─────────────────
      const logoOut   = animate(".logo-wrapper",   { opacity: 0, scale: 0.9 }, { duration: 0.5, ease: "easeIn" });
      const monitorIn = animate(".monitor-wrapper", { opacity: 1 },             { duration: 0.55, ease: "easeOut" });
      await Promise.all([logoOut, monitorIn]);

      // ── Phase 3: Draw screen outline, then fade stand/base ─
      await animate(
        ".screen-outline",
        { pathLength: 1, opacity: 1 },
        { duration: 1.9, ease: [0.45, 0, 0.55, 1] }
      );
      await animate(".stand-base", { opacity: 1 }, { duration: 0.4, ease: "easeOut" });

      // ── Phase 4: Type "HackerRank" ────────────────────────
      await animate(".cursor1", { opacity: 1 }, { duration: 0.15 });
      if (line1Ref.current) {
        await animate(
          line1Ref.current,
          { width: line1Ref.current.scrollWidth },
          { duration: 1.25, ease: "linear" }
        );
      }

      // ── Phase 5: Type "CampusCrew" ────────────────────────
      await animate(".cursor1", { opacity: 0 }, { duration: 0.12 });
      await new Promise((r) => setTimeout(r, 60));
      await animate(".cursor2", { opacity: 1 }, { duration: 0.12 });
      if (line2Ref.current) {
        await animate(
          line2Ref.current,
          { width: line2Ref.current.scrollWidth },
          { duration: 1.25, ease: "linear" }
        );
      }

      // Breathe
      await new Promise((r) => setTimeout(r, 720));
      await animate(".cursor2", { opacity: 0 }, { duration: 0.2 });

      // ── Exit: cinematic green wipe ─────────────────────────
      await animate(
        ".transition-box",
        { scale: 300, backgroundColor: "#00896B" },
        { duration: 1.4, ease: [0.76, 0, 0.24, 1] }
      );
      onComplete();
    };

    runAnimation();
  }, [animate, onComplete, scope]);

  return (
    <div
      ref={scope}
      className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black overflow-hidden opacity-0"
    >
      {/* ────────────────────────────────────────────────────
          PHASE 1 — HackerRank Logo
          H slides from top + green rect slides from bottom
      ──────────────────────────────────────────────────── */}
      <div className="logo-wrapper absolute inset-0 z-10 flex items-center justify-center">
        {/*
          Square logo box. Each half clips its own child via overflow-hidden,
          so the H and rect slide from outside their half's bounds.
        */}
        <div
          className="relative flex rounded-xl"
          style={{ width: "clamp(160px, 24vw, 248px)", height: "clamp(160px, 24vw, 248px)" }}
        >
          {/* Left half — black bg + white H sliding from top */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="logo-h w-full h-full bg-black flex items-center justify-center"
              initial={{ y: "-115%" }}
            >
              <span
                className="text-white font-black select-none leading-none"
                style={{ fontSize: "clamp(76px, 11.5vw, 122px)" }}
              >
                H
              </span>
            </motion.div>
          </div>

          {/* Right half — HackerRank green sliding from bottom */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="logo-rect w-full h-full bg-[#1ba94c]"
              initial={{ y: "115%" }}
            />
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────
          PHASES 2-3 — Monitor + Typing text
      ──────────────────────────────────────────────────── */}
      <div className="monitor-wrapper opacity-0 flex flex-col items-center">
        {/*
          Single relative box: the SVG draws the full monitor shape
          while the text div is absolutely positioned at the visual
          centre of the screen rectangle inside the SVG.

          SVG viewBox: 0 0 700 520
          Screen rect: x=26 y=14 w=648 h=362  → centre (350, 195)
          Centre as %: left = 350/700 = 50%,  top = 195/520 ≈ 37.5%
        */}
        <div
          className="relative"
          style={{ width: "clamp(300px, 80vw, 700px)" }}
        >
          {/* Monitor SVG */}
          <svg viewBox="0 0 700 520" className="w-full" fill="none">
            {/* Screen outline — drawn via pathLength */}
            <motion.rect
              className="screen-outline"
              x="26" y="14"
              width="648" height="362"
              rx="22"
              stroke="white"
              strokeWidth="10"
              initial={{ pathLength: 0, opacity: 0 }}
            />
            {/* Stand neck */}
            <motion.rect
              className="stand-base"
              x="322" y="376"
              width="56" height="72"
              fill="white"
              initial={{ opacity: 0 }}
            />
            {/* Base */}
            <motion.rect
              className="stand-base"
              x="238" y="444"
              width="224" height="20"
              rx="10"
              fill="white"
              initial={{ opacity: 0 }}
            />
          </svg>

          {/* Text — centred at screen centre */}
          <div
            className="absolute select-none"
            style={{
              top: "37.5%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%",
            }}
          >
            <div className="flex flex-col items-center font-bold tracking-tight leading-none">
              {/* Line 1 — HackerRank */}
              <div
                className="flex items-center justify-center"
                style={{ height: "clamp(36px, 5.8vw, 66px)" }}
              >
                <div
                  ref={line1Ref}
                  className="overflow-hidden whitespace-nowrap w-0 h-full flex items-center"
                >
                  <span
                    className="text-white"
                    style={{ fontSize: "clamp(22px, 4vw, 48px)" }}
                  >
                    HackerRank
                  </span>
                </div>
                <div className="cursor1 w-0.75 h-[66%] bg-[#2ec866] ml-1.5 opacity-0 rounded-full shrink-0" />
              </div>

              {/* Line 2 — CampusCrew */}
              <div
                className="flex items-center justify-center"
                style={{
                  height: "clamp(36px, 5.8vw, 66px)",
                  marginTop: "clamp(3px, 0.4vw, 7px)",
                }}
              >
                <div
                  ref={line2Ref}
                  className="overflow-hidden whitespace-nowrap w-0 h-full flex items-center"
                >
                  <span
                    className="text-[#2ec866]"
                    style={{ fontSize: "clamp(22px, 4vw, 48px)" }}
                  >
                    CampusCrew
                  </span>
                </div>
                <div className="cursor2 w-0.75 h-[66%] bg-[#2ec866] ml-1.5 opacity-0 rounded-full shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screen-wipe burst origin */}
      <div className="transition-box fixed top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 bg-[#00896B] rounded-full scale-0 z-50 pointer-events-none" />
    </div>
  );
}