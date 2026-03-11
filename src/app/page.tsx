"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DomainsSection from "@/components/DomainsSection";
import CentreOfExcellence from "@/components/CentreOfExcellence";
import MeetTheCrew from "@/components/MeetTheCrew";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <SmoothScroll>
          {/* Green overlay for seamless handoff from preloader */}
          <motion.div
            className="fixed inset-0 bg-[#00896B] z-40 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Navbar */}
          <Navbar />

          {/* Hero Section */}
          <HeroSection />

          {/* Domains Section */}
          <DomainsSection />

          {/* Centre of Excellence */}
          <CentreOfExcellence />

          {/* Meet the Crew */}
          <MeetTheCrew />

          {/* Upcoming Events */}
          <UpcomingEvents />

          {/* Footer */}
          <Footer />
        </SmoothScroll>
      )}
    </main>
  );
}