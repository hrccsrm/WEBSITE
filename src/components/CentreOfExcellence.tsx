"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import centreImg from "@/assets/centre-of-excellence.png";

export default function CentreOfExcellence() {
  return (
    <section className="green-grid-bg py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-white font-black tracking-tight leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontStyle: "italic",
              textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            GUIDED BY
            <br />
            CENTRE OF EXCELLENCE
          </h2>
        </motion.div>

        {/* Faculty Photo */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={centreImg}
            alt="Centre of Excellence Faculty"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* Description */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
            The Centre of Excellence envisions advancing transparency and accessibility in
            computational models and scientific insights, fostering innovation across academic
            and industrial ecosystems. Its mission is to translate complex models into intuitive,
            real-time simulations that enhance education, strengthen research, and support
            industrial problem-solving.
          </p>

          <motion.a
            href="/centre-of-excellence"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#00896B] font-semibold text-sm hover:bg-[#F5E6CA] hover:scale-105 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
