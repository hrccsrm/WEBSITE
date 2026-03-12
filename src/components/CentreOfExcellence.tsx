"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import centreImg from "@/assets/centre-of-excellence.png";

export default function CentreOfExcellence() {
  return (
    <section
      className="relative z-10 py-20 px-4 md:px-8 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="max-w-275 w-full mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-10 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-white font-black tracking-tight leading-tight z-100"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
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
          className="relative rounded-2xl overflow-hidden shadow-2xl"
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
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
