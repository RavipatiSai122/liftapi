import { motion } from "framer-motion";

const services = [
  {
    title: "In-House Manufacturing Plant",
    desc: "We manufacture premium elevator components with precision engineering and strict international safety standards.",
    icon: "🏭",
  },
  {
    title: "Elevator Parts Supply",
    desc: "All spare parts are supplied directly from our manufacturing unit ensuring top-tier reliability and long lifespan.",
    icon: "🔧",
  },
  {
    title: "Elevator Installation",
    desc: "Professional installation of residential, commercial, hospital & industrial elevators with world-class safety.",
    icon: "🛗",
  },
  {
    title: "Maintenance & Repairs",
    desc: "Regular inspections, emergency repairs & AMC packages for smooth, safe, uninterrupted elevator operations.",
    icon: "🛠️",
  },
  {
    title: "Modernization",
    desc: "Transform outdated elevators into silent, smooth, energy-efficient systems with advanced control technology.",
    icon: "⚡",
  },
];

export default function Services() {
  return (
    <section
      className="relative py-10 bg-gradient-to-br from-[#FFF7F5] via-[#F6C7C9] to-[#E86E73] overflow-hidden"
      aria-label="Elevator Services Section"
    >

      {/* FLOATING GLOWS — optimized animation repetition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.28, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-32 w-52 h-52 rounded-full bg-elevatorOrange/20 blur-3xl will-change-transform"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        className="absolute bottom-10 right-20 w-72 h-72 rounded-full bg-elevatorYellow/25 blur-3xl will-change-transform"
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-darkText leading-tight"
        >
          Our <span className="text-elevatorOrange">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="text-darkText/70 mt-3 mb-14 text-lg max-w-2xl mx-auto"
        >
          Complete elevator ecosystem — manufactured in-house, installed with precision,
          and supported with 24/7 service.
        </motion.p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="relative group p-8 rounded-3xl bg-white/80 backdrop-blur-xl 
                         shadow-lg border border-softBeige/80 transition-all 
                         hover:shadow-2xl will-change-transform"
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                from-elevatorOrange/10 to-elevatorYellow/10 opacity-0 
                group-hover:opacity-100 transition duration-300"
              />

              {/* ICON */}
              <div
                className="relative z-10 w-20 h-20 mx-auto flex items-center justify-center 
                text-4xl rounded-2xl bg-white shadow-xl 
                group-hover:scale-110 transition-transform duration-300 mb-2"
                aria-hidden="true"
              >
                {s.icon}
              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-2xl font-bold text-darkText mb-3">
                {s.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative z-10 text-darkText/70 leading-relaxed">
                {s.desc}
              </p>

              {/* Bottom Highlight Line */}
              <div
                className="absolute bottom-0 left-0 w-full h-1 
                bg-gradient-to-r from-elevatorOrange to-elevatorYellow 
                scale-x-0 group-hover:scale-x-100 transition-transform 
                duration-300 origin-left"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
