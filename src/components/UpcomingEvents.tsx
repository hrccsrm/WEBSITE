"use client";

import { motion } from "framer-motion";

const events = [
  {
    month: "MARCH",
    year: "2026",
    title: "Tech Talk",
    subtitle: "Agentic AI, Intelligent Systems & Modern Swift Architecture",
    description:
      "Join us for an immersive tech talk exploring the frontiers of agentic AI systems, intelligent architectures, and the modern Swift ecosystem. Industry experts and research leaders share cutting-edge insights.",
    color: "from-emerald-600 to-teal-800",
    rotation: -2,
    emoji: "🤖",
  },
  {
    month: "APRIL",
    year: "2026",
    title: "Massive Hackathon",
    subtitle: "Build. Break. Innovate.",
    description:
      "Our flagship hackathon is here — 36+ hours of coding, collaboration, and creativity. Assemble your team, pick a challenge, and build solutions that matter. Big prizes await!",
    color: "from-yellow-500 to-orange-600",
    rotation: 2,
    emoji: "🚀",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="green-grid-bg py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          className="flex items-center gap-3 mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-4xl">📢</span>
          <span className="highlight-box">
            <h2
              className="text-white font-bold"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontStyle: "italic" }}
            >
              Upcoming Events
            </h2>
          </span>
        </motion.div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.month}
              className="relative group cursor-pointer"
              style={{ transform: `rotate(${event.rotation}deg)` }}
              initial={{ opacity: 0, y: 60, rotate: event.rotation + 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: event.rotation }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.03 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                {/* Top gradient band */}
                <div className={`bg-gradient-to-r ${event.color} px-6 py-4 flex items-center justify-between`}>
                  <div>
                    <p className="text-white/70 text-xs font-semibold tracking-wider uppercase">
                      {event.month} {event.year}
                    </p>
                    <p className="text-white text-xl md:text-2xl font-black" style={{ fontStyle: "italic" }}>
                      {event.title}
                    </p>
                  </div>
                  <span className="text-4xl">{event.emoji}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p
                    className="text-gray-800 font-bold mb-3"
                    style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
                  >
                    {event.subtitle}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* CTA */}
                  <button className="mt-5 flex items-center gap-2 text-[#00896B] font-semibold text-sm group/btn">
                    <span className="group-hover/btn:underline">Learn More</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Shadow decoration */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-black/10 translate-x-2 translate-y-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
