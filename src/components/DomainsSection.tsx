"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

import technicalBg from "@/assets/technical-bg.png";
import creativeBg from "@/assets/creative-bg.png";
import corporateBg from "@/assets/corporate-bg.png";

interface Domain {
  title: string;
  description: string;
  image: StaticImageData;
  span: string;
}

const domains: Domain[] = [
  {
    title: "TECHNICAL",
    description:
      "Dedicated to advancing technical skills in coding, AI, and hardware through innovation and collaboration.",
    image: technicalBg,
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "CREATIVE",
    description:
      "Where imagination meets design, producing visuals, content, and media that inspire, engage, and connect audiences.",
    image: creativeBg,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "CORPORATE",
    description:
      "Building partnerships, managing events, and ensuring smooth operations through leadership, strategy, and collaboration.",
    image: corporateBg,
    span: "md:col-span-1 md:row-span-1",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function DomainsSection() {
  const ref = useRef(null);

  return (
    <section
      id="domains"
      className="relative z-10 py-16 px-4 md:px-6 w-full flex flex-col items-center justify-center"
      style={{ background: "transparent" }}
    >
      <div className="max-w-350 w-full" ref={ref}>
        {/* Domain Cards — Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:auto-rows-[280px]">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${domain.span}`}
              style={{ minHeight: domain.title === "TECHNICAL" ? "580px" : "280px" }}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              {/* Background image */}
              <Image
                src={domain.image}
                alt={domain.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />

              {/* Dark overlay — heavier on the left for text readability */}
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              {/* Subtle dot pattern */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(46,200,102,0.4) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              {/* Content — top-left aligned with bottom button */}
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <h3
                    className="text-white font-black tracking-tight mb-3"
                    style={{
                      fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
                      fontStyle: "italic",
                      textShadow: "2px 3px 10px rgba(0,0,0,0.7)",
                      lineHeight: 1,
                    }}
                  >
                    {domain.title}
                  </h3>
                  <p
                    className="text-white/80 leading-relaxed max-w-[320px]"
                    style={{
                      fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                      textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {domain.description}
                  </p>
                </div>
                <button className="mt-5 self-start flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-sm border border-[#05C770]/60 text-[#05C770] text-sm font-semibold hover:bg-[#05C770] hover:text-black transition-all duration-300 group/btn">
                  <svg
                    className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 6h8M7 3l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  APPLY NOW
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-[#05C770]/10 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Recruitments Block */}
        <motion.div
          className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={3}
        >
          {/* Left — Recruitments CTA */}
          <div className="bg-[#05C770] rounded-xl p-8 md:p-12 flex flex-col justify-between min-h-50 relative overflow-hidden group">
            <div>
              <h3
                className="text-black font-black tracking-tight leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontStyle: "italic",
                }}
              >
                RECRUITMENTS
                <br />
                OPEN.
              </h3>
            </div>
            <div className="self-end mt-6">
              <svg
                className="w-12 h-12 text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-black/5" />
          </div>

          {/* Right — Video embed */}
          <div className="bg-black rounded-xl overflow-hidden relative min-h-50 border border-white/5">
            <iframe
              src="https://player.vimeo.com/video/1115531421?badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              title="RECRUITMENTS OPEN - HackerRank Campus Crew SRM"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
