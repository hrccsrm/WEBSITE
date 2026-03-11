"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const domains = [
  {
    title: "TECHNICAL",
    description: "Dedicated to advancing technical skills in coding, AI, and hardware through innovation and collaboration.",
    gradient: "from-emerald-900/90 via-gray-900/80 to-blue-900/70",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "CREATIVE",
    description: "Where imagination meets design, producing visuals, content, and media that inspire, engage, and connect audiences.",
    gradient: "from-gray-900/90 via-emerald-900/70 to-gray-800/80",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "CORPORATE",
    description: "Building partnerships, managing events, and ensuring smooth operations through leadership, strategy, and collaboration.",
    gradient: "from-gray-800/80 via-emerald-900/70 to-gray-900/90",
    span: "md:col-span-1 md:row-span-1",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function DomainsSection() {
  const ref = useRef(null);

  return (
    <section id="domains" className="green-grid-bg py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Domain Cards — Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[280px]">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${domain.span}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient}`} />

              {/* Animated grid pattern inside card */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(46,200,102,0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <h3
                    className="text-white font-black tracking-tight mb-4"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3.5rem)",
                      fontStyle: "italic",
                      textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    {domain.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm">
                    {domain.description}
                  </p>
                </div>
                <button className="mt-4 self-start flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-[#2ec866]/50 text-[#2ec866] text-sm font-semibold hover:bg-[#2ec866] hover:text-black transition-all duration-300 group/btn">
                  <svg className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  APPLY NOW
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#2ec866]/10 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Recruitments Block */}
        <motion.div
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={3}
        >
          {/* Left — Recruitments CTA */}
          <div className="bg-[#2ec866] rounded-2xl p-8 md:p-12 flex flex-col justify-between min-h-[200px] relative overflow-hidden group">
            <div>
              <h3
                className="text-black font-black tracking-tight leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontStyle: "italic" }}
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

          {/* Right — Video embed placeholder */}
          <div className="bg-black rounded-2xl overflow-hidden relative min-h-[200px] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/60 text-sm font-medium">RECRUITMENTS OPEN</p>
              <p className="text-white/40 text-xs mt-1">HackerRank Campus Crew SRM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
