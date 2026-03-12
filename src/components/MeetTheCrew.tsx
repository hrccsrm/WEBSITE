"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Arnav from "@/assets/Arnav.png";
import Ayush from "@/assets/Ayush.png";
import Vishesh from "@/assets/Vishesh.png";
import Aryan from "@/assets/Aryan.png";
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
  rotation: number;
  github?: string;
  linkedin?: string;
}

const president: CrewMember = {
  name: "Arnav Puggal",
  role: "President",
  image: Arnav,
  rotation: 0,
  github: "#",
  linkedin: "#",
};

const vicePresidents: CrewMember[] = [
  { name: "Ayush Sharma", role: "Vice President", image: Ayush, rotation: -4, github: "#" },
  { name: "Vishesh Jhabak", role: "Vice President", image: Vishesh, rotation: 2, github: "#" },
  { name: "Aryan Gupta", role: "Vice President", image: Aryan, rotation: 5, github: "#", linkedin: "#" },
];

const leads: CrewMember[] = [
  { name: "Anish Mall", role: "Technical Lead", image: Anish, rotation: -5, github: "#" },
  { name: "Aashi Soni", role: "Technical Lead", image: Aashi, rotation: 3, github: "#" },
  { name: "Saii", role: "Creatives Lead", image: Saii, rotation: -3, github: "#" },
  { name: "Purva Jain", role: "Creatives Lead", image: Purva, rotation: 4, github: "#" },
  { name: "Nischay Naman", role: "Corporate Lead", image: Nischay, rotation: -2, github: "#" },
  { name: "Ranvir Singh", role: "Corporate Lead", image: Ranvir, rotation: 5, github: "#" },
];

function PolaroidCard({ member, index }: { member: CrewMember; index: number }) {
  return (
    <motion.div
      className="polaroid-card rounded-sm cursor-pointer group"
      style={{
        transform: `rotate(${member.rotation}deg)`,
        width: "clamp(140px, 20vw, 200px)",
      }}
      initial={{ opacity: 0, y: 50, rotate: member.rotation + 10 }}
      whileInView={{ opacity: 1, y: 0, rotate: member.rotation }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
    >
      {/* Photo */}
      <div className="aspect-square overflow-hidden bg-gray-200">
        <Image
          src={member.image}
          alt={member.name}
          width={200}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Caption */}
      <div className="text-center pt-2 pb-1">
        <p className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">
          {member.role}
        </p>
        <p
          className="text-gray-900 font-bold"
          style={{ fontSize: "clamp(11px, 1.5vw, 14px)", fontStyle: "italic" }}
        >
          {member.name}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1">
          {member.github && (
            <a href={member.github} className="text-gray-400 hover:text-gray-700 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function MeetTheCrew() {
  return (
    <section id="team" className="green-grid-bg py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="highlight-box">
            <h2
              className="text-white font-bold"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontStyle: "italic" }}
            >
              Meet the Crew{" "}
              <span className="text-pink-400">💕</span>
            </h2>
          </span>
        </motion.div>

        {/* President — centered top */}
        <div className="flex justify-center mb-12">
          <PolaroidCard member={president} index={0} />
        </div>

        {/* Vice Presidents — 3 in a row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
          {vicePresidents.map((vp, i) => (
            <PolaroidCard key={vp.name} member={vp} index={i + 1} />
          ))}
        </div>

        {/* Leads — 2 rows of 3 (or flexible wrap) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {leads.map((lead, i) => (
            <PolaroidCard key={lead.name} member={lead} index={i + 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
