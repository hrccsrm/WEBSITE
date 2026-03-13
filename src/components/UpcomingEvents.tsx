"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import clubStart from "@/assets/club_start.jpeg";
import codathon from "@/assets/codathon.jpeg";
import techtalk from "@/assets/techtalk.jpeg";
import aprilhackathon from "@/assets/aprilhackathon.jpeg";

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
    id: "club-launch",
    title: "Club\nLaunch",
    year: "2024",
    description: "In September 2024, we officially kicked things off! The event featured Aadil Bankukwala, the CMO of HackerRank, who shared valuable insights about the tech industry. Our inaugural launch brought together passionate minds and set the stage for everything our club aims to achieve. It was an incredible session filled with networking, roadmap reveals, and our vision for the future of technology and collaboration on campus.",
    images: [clubStart],
    titleColor: "#E8706A",
    yearColor: "#05C770",
  },
  {
    id: "online-codethon",
    title: "Online\nCodethon",
    year: "2024",
    description: "Overclocked was our flagship campus-wide codeathon that pushed students beyond their limits. This multi-round competition challenged participants across Object-Oriented Programming, Data Structures & Algorithms, Web Development, and React. Starting with online qualifiers, the event filtered top talent through intense elimination rounds, culminating in a high-stakes offline finale. With 4,000–5,000 participants, Overclocked tested problem-solving, code efficiency, and practical implementation.",
    images: [codathon],
    titleColor: "#4A90D9",
    yearColor: "#F5A623",
  },
  {
    id: "tech-talk",
    title: "Tech\nTalk",
    year: "2024",
    description: "Join us for an enlightening Tech Talk featuring Dr. Paul T Sheeba and Dr. Gopiranjan PV, distinguished experts in the field of technology and innovation. This engaging session will dive deep into cutting-edge industry trends, research insights, and practical applications. Whether you're a beginner seeking guidance or an experienced professional looking to expand your knowledge, this talk offers valuable perspectives, interactive Q&A opportunities, and networking with peers and industry leaders.",
    images: [techtalk],
    titleColor: "#F5A623",
    yearColor: "#E8706A",
  },
  {
    id: "april-hackathon",
    title: "April\nHackathon",
    year: "2024",
    description: "Get ready for the ultimate test of creativity and endurance! Our upcoming flagship April Hackathon features 24 hours of non-stop building and innovation. Form your teams, brainstorm your wildest ideas, and push your limits in this intense coding marathon. With exciting tracks, incredible prizes, and mentorship from industry professionals, this is the event you don't want to miss. Registration opens soon!",
    images: [aprilhackathon],
    titleColor: "#05C770",
    yearColor: "#4A90D9",
  },
];

export default function UpcomingEvents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = events[activeIndex];

  return (
    <section
      id="events"
      className="pt-8 px-4 md:px-8 overflow-hidden w-full flex flex-col items-center justify-center pointer-events-none"
      style={{ background: "transparent" }}
    >
      <div className="relative z-10 max-w-[1100px] w-full flex flex-col items-center pointer-events-none">
        {/* Title */}
        <motion.h2
          className="text-center font-black tracking-tight w-full"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "#ffffff",
            fontFamily: "'Outfit', sans-serif",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          EVENTS
        </motion.h2>

        {/* Spacer after title */}
        <div className="h-12"></div>

        {/* Event Card */}
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-[1000px] pointer-events-auto"
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
              className="flex flex-col lg:flex-row items-stretch justify-between min-h-[400px] gap-0"
            >
              {/* Left — Event Description */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center lg:items-start items-center text-center lg:text-left">
                <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                  {activeEvent.description}
                </p>
              </div>

              {/* Right — Event Photos */}
              <div className="flex-1 lg:flex-initial flex justify-center items-center p-8 lg:p-12">
                <div className="relative rounded-xl overflow-hidden w-80 h-60 shadow-lg">
                  <Image
                    src={activeEvent.images[0]}
                    alt={`${activeEvent.id} photo`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Timeline Selector */}
        <motion.div
          className="mt-12 w-full max-w-[800px] pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="relative flex items-center justify-between">
            {/* Horizontal line */}
            <div className="absolute top-3 left-0 right-0 h-[2px] bg-white/20" />

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
                    borderColor: activeIndex === i ? "#05C770" : "rgba(255,255,255,0.25)",
                    background: activeIndex === i ? "#05C770" : "transparent",
                  }}
                />
                {/* Label */}
                <span
                  className="text-sm md:text-base font-semibold transition-colors duration-300 whitespace-nowrap"
                  style={{
                    color: activeIndex === i ? "#ffffff" : "rgba(255,255,255,0.45)",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {event.id === "club-launch"
                    ? "Club\nLaunch"
                    : event.id === "online-codethon"
                    ? "Online\nCodethon"
                    : event.id === "tech-talk"
                    ? "Tech\nTalk"
                    : "April\nHackathon"}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
