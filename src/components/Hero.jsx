import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import bannerImg from "../assets/img/banner-img.png";

export default function Hero() {
  const texts = ["Installations", "Repair Services", "Manufacturing", "Spare Parts"];
  const typingRef = useRef(null);
  const cursorRef = useRef(null);

  /* ----------------------------
     PERFECT TYPING EFFECT (Optimized)
     Does NOT change layout or animation.
  ----------------------------- */
  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
      const current = texts[index];

      if (!deleting) {
        charIndex++;
        if (typingRef.current) {
          typingRef.current.textContent = current.slice(0, charIndex);
        }
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(type, 700);
          return;
        }
      } else {
        charIndex--;
        if (typingRef.current) {
          typingRef.current.textContent = current.slice(0, charIndex);
        }
        if (charIndex === 0) {
          deleting = false;
          index = (index + 1) % texts.length;
        }
      }

      setTimeout(type, deleting ? 45 : 75);
    }

    type();
  }, []);

  /* ----------------------------
     BLINKING CURSOR (Optimized)
  ----------------------------- */
  useEffect(() => {
    const id = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.classList.toggle("opacity-0");
      }
    }, 400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative pt-20 pb-10 overflow-hidden 
      bg-gradient-to-br from-[#FFF3EC] via-[#F5D3C8] to-[#ED2024]"
    >

      {/* DECORATION BUBBLES — SAME LOOK */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-elevatorOrange/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-32 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-elevatorYellow/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-40 w-40 sm:h-72 sm:w-72 rounded-full bg-elevatorOrange/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:gap-16 md:grid-cols-2">

        {/* LEFT CONTENT — SAME EXACT LAYOUT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-darkText border border-elevatorOrange/20 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-elevatorYellow" />
            Trusted Elevator Solutions Partner
          </div>

          {/* TYPING HEADING — SAME EXACT UI */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-darkText">
            <span className="inline-block min-h-[40px] sm:min-h-[50px]">
              <span
                ref={typingRef}
                className="bg-gradient-to-r from-elevatorOrange to-elevatorYellow bg-clip-text text-transparent"
              ></span>
              <span
                ref={cursorRef}
                className="text-elevatorYellow opacity-70"
              >
                |
              </span>
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-sm sm:text-base md:text-lg text-darkText/70 max-w-xl">
            From manufacturing to installation and servicing, we deliver safe,
            reliable, world-class elevator solutions backed by engineering excellence.
          </p>

          {/* CTA + TEXT */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-xl bg-gradient-to-r from-elevatorOrange to-elevatorYellow px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </motion.button>

            <span className="text-xs sm:text-sm md:text-base text-darkText/70">
              24/7 support • AMC • Modernization • Manufacturing
            </span>
          </div>

          {/* STATS — EXACT SAME UI */}
          <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-6 text-center">
            {[
              ["500+", "Installations"],
              ["15+ yrs", "Experience"],
              ["99.2%", "Uptime"],
            ].map(([num, label]) => (
              <div
                key={num}
                className="bg-white border border-softBeige px-3 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-md hover:bg-white/60 transition"
              >
                <p className="text-lg sm:text-2xl font-bold text-darkText">{num}</p>
                <p className="text-darkText/60 text-[10px] sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE CARD — EXACT SAME LAYOUT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center w-full gap-3"
        >

          {/* MAIN IMAGE CARD (UNCHANGED LOOK) */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-3xl border border-softBeige bg-white/70 p-3 shadow-xl backdrop-blur-xl">
            <div className="absolute -top-4 left-6 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] sm:text-xs font-semibold text-darkText shadow">
              <span className="h-2 w-2 rounded-full bg-elevatorOrange" />
              Premium Elevator Cabin
            </div>

            <img
              src={bannerImg}
              alt="Premium Elevator Cabin"
              loading="lazy"
              decoding="async"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl object-cover"
            />
          </div>

          {/* SECOND CARD — SAME EXACT CONTENT */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl bg-white px-4 py-3 shadow-lg border border-softBeige/60 flex items-center justify-between">
            <span className="text-[11px] sm:text-sm text-darkText/80 font-medium">
              Energy Efficient • Smooth Ride • Low Noise
            </span>

            <span className="rounded-full bg-elevatorOrange px-3 py-1 text-[10px] sm:text-xs font-semibold text-white shadow">
              ISO Certified
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
