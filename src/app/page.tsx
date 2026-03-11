"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

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
          {/* This div handles the seamless visual handoff. 
            It starts as the final transition color (#00896B) and fades out 
            to reveal your actual home page content below.
          */}
          <motion.div
            className="fixed inset-0 bg-[#00896B] z-40 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* YOUR ACTUAL WEBSITE CONTENT GOES HERE */}
          <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <motion.h1 
              className="text-5xl md:text-8xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Welcome to the <br />
              <span className="text-[#00896B]">CampusCrew</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-gray-400 max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Scroll down to explore what we do.
            </motion.p>
          </div>
          
          {/* Added space to test Lenis smooth scroll */}
          <div className="h-screen flex items-center justify-center bg-zinc-900">
            <h2 className="text-4xl font-semibold text-gray-300">Smooth Scrolling Active</h2>
          </div>
        </SmoothScroll>
      )}
    </main>
  );
}