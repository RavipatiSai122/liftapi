import { motion } from "framer-motion";
import logo from "../assets/img/a.png";

// Reusable config to avoid re-creation on each render
const logos = [logo, logo, logo, logo, logo];

export default function Clients() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-[#FFF7F5] via-[#F6C7C9] to-[#E86E73] relative overflow-hidden"
      aria-labelledby="clients-heading"
    >
      {/* Soft floating glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        aria-hidden="true"
        className="absolute -top-10 left-0 w-72 h-72 bg-elevatorOrange/15 blur-3xl rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          id="clients-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-darkText"
        >
          Trusted By <span className="text-elevatorOrange">Leading Brands</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-darkText/70 mt-3 mb-16 text-lg max-w-2xl mx-auto"
        >
          Delivering reliable elevator solutions trusted by industries across India.
        </motion.p>

        {/* Logo Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-center"
          role="list"
        >
          {logos.map((img, i) => (
            <motion.div
              key={i}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex items-center justify-center"
            >
              <motion.img
                src={img}
                alt={`Client Logo ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto object-contain opacity-80 grayscale 
                  hover:grayscale-0 hover:opacity-100 transition duration-300 
                  drop-shadow-md will-change-transform"
                whileHover={{ scale: 1.08 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
