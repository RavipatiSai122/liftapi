import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="relative py-20 
      bg-gradient-to-br from-[#F4ECE6] via-[#EED6C4] to-[#F5B98A] 
      text-darkText overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative Glows */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-elevatorOrange/20 blur-3xl rounded-full pointer-events-none"
      />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.12, 0.25, 0.12], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-elevatorYellow/20 blur-3xl rounded-full pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <h2
          id="cta-heading"
          className="text-4xl md:text-5xl font-extrabold leading-tight text-darkText"
        >
          Ready to Upgrade Your Elevator?
        </h2>

        <p className="mt-4 text-lg md:text-xl text-darkText/80">
          Talk to our certified engineers and schedule a free site inspection today.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 inline-flex items-center gap-3 px-10 py-4
                     bg-elevatorOrange text-white font-semibold rounded-xl
                     shadow-lg hover:bg-elevatorYellow transition-all 
                     will-change-transform"
        >
          <PhoneCall size={22} className="text-white" />
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}
