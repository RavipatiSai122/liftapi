import { motion } from "framer-motion";
import { Building2, Hospital, Home, Factory } from "lucide-react";

const industries = [
  { name: "Commercial Buildings", icon: Building2 },
  { name: "Hospitals", icon: Hospital },
  { name: "Residential Homes", icon: Home },
  { name: "Factories & Industries", icon: Factory },
];

export default function Industries() {
  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      aria-label="Industries served by our elevator solutions"
    >

      {/* Floating Glows — optimized GPU animations */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 left-10 w-[350px] h-[350px] bg-elevatorOrange/20 blur-3xl rounded-full will-change-transform"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0.15 }}
        animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.04, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-elevatorYellow/20 blur-3xl rounded-full will-change-transform"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-darkText"
        >
          Industries <span className="text-elevatorOrange">We Serve</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-darkText/70 mt-3 mb-16 text-lg"
        >
          Premium elevator solutions designed for every sector.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {industries.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-softBeige 
                           shadow-lg hover:shadow-2xl transition-all relative overflow-hidden 
                           will-change-transform"
                role="article"
                aria-label={`Elevator solutions for ${item.name}`}
              >
                {/* Gradient Hover Ring */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
                             transition-all duration-300 bg-gradient-to-br 
                             from-elevatorOrange/20 to-elevatorYellow/20"
                  aria-hidden="true"
                />

                {/* Icon Box */}
                <div
                  className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center 
                             rounded-2xl bg-gradient-to-br from-warmCream to-softBeige shadow-md 
                             border border-softBeige group-hover:scale-110 transition-all"
                >
                  <Icon
                    size={36}
                    className="text-elevatorOrange"
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="relative text-xl font-bold text-darkText">
                  {item.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
