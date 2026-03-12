"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Arnav from "@/assets/Arnav.png";
import Ayush from "@/assets/Ayush.png";
import Vishesh from "@/assets/Vishesh.jpeg";
import Aryan from "@/assets/Aryan.jpeg";
import Anish from "@/assets/Anish.png";
import Aashi from "@/assets/Aashi.png";
import Saii from "@/assets/Saii.png";
import Purva from "@/assets/Purva.png";
import Nischay from "@/assets/Nischay.png";
import Ranvir from "@/assets/Ranvir.png";

interface CrewMember {
  name: string;
  role: string;
  image: StaticImageData;
  github?: string;
  linkedin?: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const presidentAndVPs: CrewMember[] = [
  { name: "Arnav Puggal",  role: "President",      image: Arnav,   github: "#", linkedin: "#" },
  { name: "Ayush Sharma",  role: "Vice President",  image: Ayush,   github: "#", linkedin: "#" },
  { name: "Vishesh Jhabak",role: "Vice President",  image: Vishesh, github: "#", linkedin: "#" },
  { name: "Aryan Gupta",   role: "Vice President",  image: Aryan,   github: "#", linkedin: "#" },
];

const leads: CrewMember[] = [
  { name: "Anish Mall",    role: "Technical Lead",  image: Anish,   github: "#", linkedin: "#" },
  { name: "Aashi Soni",    role: "Technical Lead",  image: Aashi,   github: "#", linkedin: "#" },
  { name: "Saii",          role: "Creatives Lead",  image: Saii,    github: "#", linkedin: "#" },
  { name: "Purva Jain",    role: "Creatives Lead",  image: Purva,   github: "#", linkedin: "#" },
  { name: "Nischay Naman", role: "Corporate Lead",  image: Nischay, github: "#", linkedin: "#" },
  { name: "Ranvir Singh",  role: "Corporate Lead",  image: Ranvir,  github: "#", linkedin: "#" },
];

// ─── Icons ─────────────────────────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg className="w-3.75 h-3.75" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-3.75 h-3.75" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── Card ──────────────────────────────────────────────────────────────────────
function CrewCard({ member }: { member: CrewMember }) {
  return (
    <motion.div
      className="relative flex flex-col shrink-0 rounded-[10px] overflow-hidden"
      style={{
        width: "clamp(170px, 18vw, 240px)",
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.07)",
        pointerEvents: "auto",
      }}
      whileHover={{
        scale: 1.04,
        borderColor: "#05C770",
        transition: { duration: 0.18 },
      }}
    >
      {/* Mac window chrome */}
      <div
        className="flex items-center gap-1.5 px-3 py-2.5"
        style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F56", display: "inline-block", flexShrink: 0 }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E", display: "inline-block", flexShrink: 0 }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#27C93F", display: "inline-block", flexShrink: 0 }} />
      </div>

      {/* Photo */}
      <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 170px, 240px"
        />
      </div>

      {/* Info */}
      <div
        className="flex items-center justify-between px-3 py-2.5 gap-2"
        style={{ background: "#0f0f0f" }}
      >
        <div className="min-w-0 flex-1">
          <p
            className="font-bold leading-tight text-white truncate"
            style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}
          >
            {member.name}
          </p>
          <p
            className="mt-0.5 truncate"
            style={{ fontSize: "clamp(9px, 0.85vw, 11px)", color: "rgba(255,255,255,0.4)" }}
          >
            {member.role}
          </p>
        </div>
        <div className="flex gap-2.5 shrink-0">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 hover:text-white transition-colors duration-200"
              aria-label={`${member.name} GitHub`}
            >
              <GithubIcon />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 hover:text-[#0A66C2] transition-colors duration-200"
              aria-label={`${member.name} LinkedIn`}
            >
              <LinkedinIcon />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────
export default function MeetTheCrew() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leadsRowRef  = useRef<HTMLDivElement>(null);

  // All animation is driven from these two motion values.
  // `prog` is 0→1 as the 300vh section scrolls through.
  // `leadsX` is the px translation of the leads strip.
  const prog   = useMotionValue(0);
  const leadsX = useMotionValue(0);

  // ── rAF polling loop ─────────────────────────────────────────────────────────
  // Reads getBoundingClientRect() every frame. This is the ONE approach that
  // returns the correct visual position regardless of whether Lenis, native
  // scroll, or anything else is driving the scroll.
  useEffect(() => {
    let active = true;

    const tick = () => {
      if (!active) return;

      const el = containerRef.current;
      if (el) {
        const rect        = el.getBoundingClientRect();
        const totalTravel = el.offsetHeight - window.innerHeight;

        if (totalTravel > 0) {
          const p = Math.max(0, Math.min(1, -rect.top / totalTravel));
          prog.set(p);

          // Compute leads horizontal translation directly here
          // (avoids the useTransform([mv1, mv2], fn) pattern which can be unreliable).
          const rawP = Math.max(0, Math.min(1, (p - 0.57) / (0.97 - 0.57)));
          let travel = 800;
          if (leadsRowRef.current) {
            const overflow = leadsRowRef.current.scrollWidth - window.innerWidth;
            travel = Math.max(overflow + 80, window.innerWidth * 0.55);
          }
          leadsX.set(-rawP * travel);
        }
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    return () => { active = false; };
  }, [prog, leadsX]);

  // ── Derived animations (simple single-input transforms, always reliable) ────
  // 0.00–0.40 : pres group visible
  // 0.40–0.55 : crossfade pres → leads
  // 0.55–0.97 : leads strip scrolls left

  const presOpacity          = useTransform(prog, [0.40, 0.53], [1, 0]);
  const leadsOpacity         = useTransform(prog, [0.44, 0.57], [0, 1]);
  const presSubtitleOpacity  = useTransform(prog, [0.40, 0.53], [1, 0]);
  const leadsSubtitleOpacity = useTransform(prog, [0.44, 0.57], [0, 1]);

  // Progress pill widths & opacities
  const dot1Width   = useTransform(prog, [0.0, 0.5], [28, 8]);
  const dot2Width   = useTransform(prog, [0.5, 1.0], [8, 28]);
  const dot1Opacity = useTransform(prog, [0.4, 0.6], [1, 0.3]);
  const dot2Opacity = useTransform(prog, [0.4, 0.6], [0.3, 1]);

  return (
    <section
      ref={containerRef}
      id="team"
      className="relative"
      style={{ height: "300vh", pointerEvents: "none" }}
    >
      {/* Sticky viewport-pinned panel */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">

        {/* ── Section header ── */}
        <motion.div
          className="relative z-10 text-center px-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium tracking-widest uppercase mb-4"
            style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.65)", background: "rgba(255,255,255,0.06)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Our Team
          </span>
          <h2
            className="font-black text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontStyle: "italic", lineHeight: 1.1 }}
          >
            Meet the <span style={{ color: "#05C770" }}>Crew</span>
          </h2>

          {/* Dynamic subtitle fader */}
          <div className="relative mt-3 h-6">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: presSubtitleOpacity }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{ background: "rgba(5,199,112,0.15)", color: "#05C770", border: "1px solid rgba(5,199,112,0.35)" }}
              >
                ✦ Presidents &amp; Vice Presidents
              </span>
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: leadsSubtitleOpacity }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                ✦ Domain Leads
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Card stage — outer sticky h-screen overflow-hidden clips horizontally ── */}
        <div
          className="relative"
          style={{ height: "clamp(320px, 46vh, 430px)", width: "100vw" }}
        >
          {/* ── Div 1 — Presidents & Vice Presidents (centered, no x scroll) ── */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: presOpacity }}
          >
            <div className="flex gap-5 px-10 items-center h-full justify-center">
              {presidentAndVPs.map((member) => (
                <CrewCard key={member.name} member={member} />
              ))}
            </div>
          </motion.div>

          {/* ── Div 2 — Domain Leads (film-tape horizontal scroll) ── */}
          <motion.div
            className="absolute inset-0 flex items-center"
            style={{ opacity: leadsOpacity }}
          >
            <motion.div
              ref={leadsRowRef}
              className="flex gap-5 px-10 items-center h-full"
              style={{ x: leadsX }}
            >
              {leads.map((member) => (
                <CrewCard key={member.name} member={member} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Progress pills ── */}
        <div className="absolute bottom-8 flex items-center gap-2">
          <motion.div
            className="h-1.25 rounded-full"
            style={{ background: "#05C770", width: dot1Width, opacity: dot1Opacity }}
          />
          <motion.div
            className="h-1.25 rounded-full"
            style={{ background: "#05C770", width: dot2Width, opacity: dot2Opacity }}
          />
        </div>
      </div>
    </section>
  );
}
