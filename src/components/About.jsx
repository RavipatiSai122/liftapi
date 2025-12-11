import { motion } from "framer-motion";
import elevatorImg from "../assets/img/commercial-elevator.jpg";

export default function About() {
  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      aria-label="About LiftElevator Section"
    >

      {/* BACKGROUND GLOWS — optimized animation timing & GPU rendering */}
      <motion.div
        animate={{ opacity: [0.15, 0.28], scale: [1, 1.1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-0 w-80 h-80 bg-elevatorOrange/20 blur-3xl rounded-xl will-change-transform"
      />

      <motion.div
        animate={{ opacity: [0.15, 0.25], scale: [1, 1.06] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 right-0 w-96 h-96 bg-elevatorYellow/20 blur-3xl rounded-xl will-change-transform"
      />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glass Card Background */}
          <div
            className="absolute inset-0 bg-white/20 backdrop-blur-xl 
            rounded-2xl border border-softBeige/40 -z-10"
          />

          {/* Image Wrapper (same height, improved loading) */}
          <div
            className="w-full h-[420px] rounded-2xl overflow-hidden 
            shadow-2xl border border-softBeige/60 bg-white group"
          >
            <img
              src={elevatorImg}
              alt="Commercial Elevator System"
              loading="lazy"
              decoding="async"
              width="100%"
              height="100%"
              className="w-full h-full object-cover transition-transform 
              duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* MIDDLE DIVIDER */}
        <div
          className="hidden md:block absolute left-1/2 top-10 bottom-10 
          w-[2px] bg-gradient-to-b from-elevatorOrange via-softBeige to-elevatorYellow"
        />

        {/* RIGHT CONTENT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-darkText leading-tight mb-6">
            About <span className="text-elevatorOrange">LiftElevator</span>
          </h2>

          {/* Extra Bold Intro Line */}
          <p className="text-lg text-darkText font-semibold mb-4">
            Your trusted partner for all elevator engineering, manufacturing & service needs.
          </p>

          <p className="text-lg text-darkText/70 leading-relaxed mb-4">
            Our expert engineers and certified technicians build and maintain world-class
            elevator systems for residential, commercial, and industrial environments.
          </p>

          <p className="text-lg text-darkText/70 leading-relaxed mb-6">
            With over a decade of excellence, we deliver safe, reliable, and modern
            elevator solutions — from design to installation, modernization and maintenance.
          </p>

          {/* Key Highlights */}
          <div className="space-y-4 text-darkText/80 font-medium">
            <p>• ISO-certified engineering & installation</p>
            <p>• Custom cabin manufacturing & modernization</p>
            <p>• 24/7 emergency service & annual maintenance</p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="mt-8 px-8 py-3 bg-elevatorOrange text-white font-semibold 
            rounded-xl shadow-lg hover:bg-elevatorYellow transition"
          >
            Learn More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
