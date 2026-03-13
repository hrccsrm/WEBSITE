"use client";

import { motion } from "framer-motion";
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
  { name: "Arnav Puggal", role: "President", image: Arnav, github: "#", linkedin: "#" },
  { name: "Ayush Sharma", role: "Vice President", image: Ayush, github: "#", linkedin: "#" },
  { name: "Vishesh Jhabak", role: "Vice President", image: Vishesh, github: "#", linkedin: "#" },
  { name: "Aryan Gupta", role: "Vice President", image: Aryan, github: "#", linkedin: "#" },
];

const leads: CrewMember[] = [
  { name: "Anish Mall", role: "Technical Lead", image: Anish, github: "#", linkedin: "#" },
  { name: "Aashi Soni", role: "Technical Lead", image: Aashi, github: "#", linkedin: "#" },
  { name: "Saii", role: "Creatives Lead", image: Saii, github: "#", linkedin: "#" },
  { name: "Purva Jain", role: "Creatives Lead", image: Purva, github: "#", linkedin: "#" },
  { name: "Nischay Naman", role: "Corporate Lead", image: Nischay, github: "#", linkedin: "#" },
  { name: "Ranvir Singh", role: "Corporate Lead", image: Ranvir, github: "#", linkedin: "#" },
];

// ─── Icons ─────────────────────────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
        width: "clamp(140px, 35vw, 240px)",
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
        className="flex items-center gap-1 px-2 py-2"
        style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F56", display: "inline-block", flexShrink: 0 }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E", display: "inline-block", flexShrink: 0 }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#27C93F", display: "inline-block", flexShrink: 0 }} />
      </div>

      {/* Photo */}
      <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 140px, 240px"
        />
      </div>

      {/* Info */}
      <div
        className="flex items-center justify-between px-2 py-2 gap-2"
        style={{ background: "#0f0f0f" }}
      >
        <div className="min-w-0 flex-1">
          <p
            className="font-bold leading-tight text-white truncate"
            style={{ fontSize: "clamp(10px, 2.5vw, 14px)" }}
          >
            {member.name}
          </p>
          <p
            className="mt-0.5 truncate"
            style={{ fontSize: "clamp(8px, 2vw, 11px)", color: "rgba(255,255,255,0.4)" }}
          >
            {member.role}
          </p>
        </div>
        <div className="flex gap-1.5 shrink-0">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 hover:text-white transition-colors duration-200 p-1"
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
              className="text-white/35 hover:text-[#0A66C2] transition-colors duration-200 p-1"
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

  return (
    <section
      id="team"
      className="relative z-10 py-20 px-4 md:px-8 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="max-w-275 w-full mx-auto">

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
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.1 }}
          >
            MEET THE <span style={{ color: "#05C770" }}>CREW</span>
          </h2>

          </motion.div>

        {/* ── President & Vice Presidents ── */}
        <div className="w-full flex flex-col items-center mt-6 pointer-events-auto">
          <div className="max-w-3xl w-full text-center mb-4">
            <h3 className="font-black text-white" style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)", lineHeight: 1 }}>
              <span style={{ color: "#05C770" }}>President &amp; Vice Presidents</span>
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-5 px-4 md:px-10 items-center py-2">
            {presidentAndVPs.map((member) => (
              <CrewCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* ── Domain Leads ── */}
        <div className="w-full flex flex-col items-center mt-6 pointer-events-auto">
          <div className="max-w-3xl w-full text-center mb-4">
            <h3 className="font-black text-white" style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)", lineHeight: 1 }}>
              <span style={{ color: "#05C770" }}>Domain Leads</span>
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-5 px-4 md:px-10 items-center py-2">
            {leads.map((member) => (
              <CrewCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
