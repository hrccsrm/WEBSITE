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
              textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
              lineHeight: 0.9,
            }}
          >
            GUIDED BY
            <br />
            <span style={{ color: "#05C770" }}>CENTRE OF EXCELLENCE</span>
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
          <div className="relative overflow-hidden rounded-2xl hrcc-image-wrap">
            <Image
              src={centreImg}
              alt="Centre of Excellence Faculty"
              width={1200}
              height={600}
              className="w-full h-auto object-cover block"
              priority
            />

            {/* Thin animated border segments (2px) around the image only */}
            <div
              className="absolute inset-0 pointer-events-none hrcc-border-wrap"
              aria-hidden
            >
              <span className="hrcc-border top" />
              <span className="hrcc-border right" />
              <span className="hrcc-border bottom" />
              <span className="hrcc-border left" />
            </div>
          </div>

          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

          <style jsx>{`
            .hrcc-image-wrap {
              position: relative;
            }
            .hrcc-border-wrap {
              border-radius: inherit;
              position: absolute;
              inset: 0;
            }

            /* Base for each border segment: 2px thickness */
            .hrcc-border {
              position: absolute;
              background-repeat: no-repeat;
              /* larger background-size for slower, smoother gradient transition */
              background-size: 300% 100%;
              filter: drop-shadow(0 6px 14px rgba(5, 199, 112, 0.04));
            }

            /* Top and bottom move horizontally (left->right), right and left move vertically (top->bottom) */
            .hrcc-border.top {
              left: 0;
              right: 0;
              top: 0;
              height: 2px;
              background-image: linear-gradient(
                90deg,
                rgba(5,199,112,0) 0%,
                rgba(5,199,112,0.08) 18%,
                rgba(5,199,112,0.6) 50%,
                rgba(5,199,112,0.08) 82%,
                rgba(5,199,112,0) 100%
              );
              animation: hrcc-move-x 14s linear infinite;
              /* start already partway through so there's no initial jump */
              animation-delay: -0s;
            }
            .hrcc-border.right {
              top: 0;
              bottom: 0;
              right: 0;
              width: 2px;
              background-image: linear-gradient(
                180deg,
                rgba(5,199,112,0) 0%,
                rgba(5,199,112,0.08) 18%,
                rgba(5,199,112,0.6) 50%,
                rgba(5,199,112,0.08) 82%,
                rgba(5,199,112,0) 100%
              );
              background-size: 100% 300%;
              animation: hrcc-move-y 14s linear infinite;
              animation-delay: -3.5s; /* -duration/4 */
            }
            .hrcc-border.bottom {
              left: 0;
              right: 0;
              bottom: 0;
              height: 2px;
              background-image: linear-gradient(
                90deg,
                rgba(5,199,112,0) 0%,
                rgba(5,199,112,0.08) 18%,
                rgba(5,199,112,0.6) 50%,
                rgba(5,199,112,0.08) 82%,
                rgba(5,199,112,0) 100%
              );
              animation: hrcc-move-x 14s linear infinite;
              animation-delay: -7s; /* -duration/2 */
            }
            .hrcc-border.left {
              top: 0;
              bottom: 0;
              left: 0;
              width: 2px;
              background-image: linear-gradient(
                180deg,
                rgba(5,199,112,0) 0%,
                rgba(5,199,112,0.08) 18%,
                rgba(5,199,112,0.6) 50%,
                rgba(5,199,112,0.08) 82%,
                rgba(5,199,112,0) 100%
              );
              background-size: 100% 300%;
              animation: hrcc-move-y 14s linear infinite;
              animation-delay: -10.5s; /* -3*duration/4 */
            }

            /* animations: move gradient across each segment */
            @keyframes hrcc-move-x {
              0% { background-position: -120% 50%; }
              100% { background-position: 120% 50%; }
            }
            @keyframes hrcc-move-y {
              0% { background-position: 50% -120%; }
              100% { background-position: 50% 120%; }
            }

            /* Keep corners clean on small screens */
            @media (max-width: 640px) {
              .hrcc-border.top,
              .hrcc-border.bottom {
                height: 2px;
              }
              .hrcc-border.left,
              .hrcc-border.right {
                width: 2px;
              }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
