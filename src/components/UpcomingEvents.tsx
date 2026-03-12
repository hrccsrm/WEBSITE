"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import eventWomenTechies from "@/assets/event-women-techies.png";
import eventHackathon from "@/assets/event-hackathon.png";

interface EventItem {
  id: string;
  title: string;
  year: string;
  description: string;
  images: StaticImageData[];
  titleColor: string;
  yearColor: string;
}

const events: EventItem[] = [
  {
    id: "women-techies",
    title: "Women\nTechies",
    year: "2024",
    description: "Empowering women in technology through workshops, talks, and networking sessions.",
    images: [eventWomenTechies, eventHackathon],
    titleColor: "#E8706A",
    yearColor: "#2ec866",
  },
  {
    id: "devjams",
    title: "Dev\nJams",
    year: "2024",
    description: "A developer festival celebrating open source, collaboration and innovative coding.",
    images: [eventHackathon, eventWomenTechies],
    titleColor: "#4A90D9",
    yearColor: "#F5A623",
  },
  {
    id: "hexathon",
    title: "Hexa\nthon",
    year: "2024",
    description: "Our flagship 36-hour hackathon bringing together the brightest minds to build and innovate.",
    images: [eventWomenTechies, eventHackathon],
    titleColor: "#F5A623",
    yearColor: "#E8706A",
  },
  {
    id: "ctf",
    title: "Capture\nThe Flag",
    year: "2024",
    description: "A cybersecurity competition testing skills in reverse engineering, cryptography and more.",
    images: [eventHackathon, eventWomenTechies],
    titleColor: "#2ec866",
    yearColor: "#4A90D9",
  },
];

export default function UpcomingEvents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = events[activeIndex];

  return (
    <section
      id="events"
      className="py-20 px-4 md:px-8 overflow-hidden w-full flex flex-col items-center justify-center"
      style={{ background: "#2ec866" }}
    >
      <div className="max-w-[1100px] w-full flex flex-col items-center">
        {/* Title */}
        <motion.h2
          className="text-center font-black tracking-tight mb-14 w-full"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontStyle: "italic",
            color: "#0a0a0a",
            fontFamily: "'Outfit', sans-serif",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          EVENTS
        </motion.h2>

        {/* Event Card */}
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-[1000px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] min-h-[320px]"
            >
              {/* Left — Event Title */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3
                  className="font-black leading-[0.95] tracking-tight whitespace-pre-line"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontStyle: "italic",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  <span style={{ color: activeEvent.titleColor }}>
                    {activeEvent.title.split("\n")[0]}
                  </span>{" "}
                  <span style={{ color: activeEvent.yearColor, fontSize: "0.6em" }}>
                    {activeEvent.year.slice(2)}
                  </span>
                  <br />
                  <span style={{ color: activeEvent.titleColor }}>
                    {activeEvent.title.split("\n")[1]}
                  </span>{" "}
                  <span style={{ color: activeEvent.yearColor, fontSize: "0.6em" }}>
                    {activeEvent.year.slice(0, 2)}
                  </span>
                </h3>
              </div>

              {/* Right — Event Photos */}
              <div className="grid grid-cols-2 gap-1 p-2 md:p-3">
                {activeEvent.images.map((img, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <Image
                      src={img}
                      alt={`${activeEvent.id} photo ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Timeline Selector */}
        <motion.div
          className="mt-12 w-full max-w-[800px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="relative flex items-center justify-between">
            {/* Horizontal line */}
            <div className="absolute top-3 left-0 right-0 h-[2px] bg-[#0a0a0a]/30" />

            {events.map((event, i) => (
              <button
                key={event.id}
                onClick={() => setActiveIndex(i)}
                className="relative flex flex-col items-center gap-3 group z-10"
              >
                {/* Dot indicator */}
                <div
                  className="w-6 h-6 rounded-md border-2 transition-all duration-300"
                  style={{
                    borderColor: activeIndex === i ? "#0a0a0a" : "rgba(10,10,10,0.3)",
                    background: activeIndex === i ? "#0a0a0a" : "transparent",
                  }}
                />
                {/* Label */}
                <span
                  className="text-sm md:text-base font-semibold transition-colors duration-300 whitespace-nowrap"
                  style={{
                    color: activeIndex === i ? "#0a0a0a" : "rgba(10,10,10,0.5)",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {event.id === "women-techies"
                    ? "Women\nTechies"
                    : event.id === "devjams"
                    ? "DevJams"
                    : event.id === "hexathon"
                    ? "Hexathon"
                    : "CTF"}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
