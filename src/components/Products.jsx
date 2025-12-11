import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import telDoor from "../assets/img/commercial-elevator.jpg";
import autoDoor from "../assets/img/commercial-elevator.jpg";
import glassAuto from "../assets/img/commercial-elevator.jpg";
import collapsibleGate from "../assets/img/commercial-elevator.jpg";
import capsuleLift from "../assets/img/commercial-elevator.jpg";
import carLift from "../assets/img/commercial-elevator.jpg";
import swingDoor from "../assets/img/commercial-elevator.jpg";

const products = [
  {
    title: "Telescopic Auto Door",
    slug: "telescopic-auto-door",
    image: telDoor,
    desc: "Smooth, fast-opening telescopic elevator doors designed for commercial & industrial buildings.",
  },
  {
    title: "Auto Door Lift",
    slug: "auto-door-lift",
    image: autoDoor,
    desc: "Fully automatic door systems ensuring silent, safe and efficient operation.",
  },
  {
    title: "Glass Auto Door",
    slug: "glass-auto-door",
    image: glassAuto,
    desc: "Premium glass finish elevator doors for malls, showrooms & luxury spaces.",
  },
  {
    title: "Collapsible Gate",
    slug: "collapsible-gate",
    image: collapsibleGate,
    desc: "Heavy-duty collapsible gates ideal for goods lifts and industrial applications.",
  },
  {
    title: "Capsule Lift",
    slug: "capsule-lift",
    image: capsuleLift,
    desc: "Modern panoramic capsule elevators with premium cabin design and smooth ride.",
  },
  {
    title: "Car Lift / Parking Lift",
    slug: "car-lift",
    image: carLift,
    desc: "High-capacity car lifts designed for showrooms, apartments and commercial parking.",
  },
  {
    title: "Swing Door Lift",
    slug: "swing-door-lift",
    image: swingDoor,
    desc: "Reliable swing door systems commonly used in low-rise residential & industrial lifts.",
  },
];

export default function Products() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-[#FFF8F3] via-[#FFF2EA] to-white relative overflow-hidden"
      aria-label="Elevator Product Categories"
    >

      {/* Soft glow - optimized animation */}
      <motion.div
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.03, 1] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-0 w-[420px] h-[420px] bg-elevatorOrange/15 blur-3xl rounded-full will-change-transform"
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-darkText"
        >
          Our <span className="text-elevatorOrange">Services</span>
        </motion.h2>

        <p className="text-darkText/70 mt-3 mb-14 text-lg max-w-2xl mx-auto">
          Advanced elevator systems designed with durability, engineering precision and safety standards.
        </p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">

          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg border border-softBeige/60 
                         hover:shadow-2xl transition-all overflow-hidden will-change-transform"
              role="article"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width="400"
                  height="300"
                  className="h-60 w-full object-cover 
                             group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* TEXT BLOCK */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-darkText mb-2">
                  {p.title}
                </h3>

                <p className="text-darkText/70 text-sm leading-relaxed">
                  {p.desc}
                </p>

                <Link to={`/products/${p.slug}`} aria-label={`View details for ${p.title}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="mt-5 w-full py-3 rounded-xl font-semibold 
                               bg-white text-elevatorOrange border border-elevatorOrange
                               shadow-md hover:shadow-lg transition
                               hover:bg-elevatorOrange hover:text-white
                               backdrop-blur-md"
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>

              {/* Bottom hover bar */}
              <div
                className="h-1 w-full bg-gradient-to-r from-elevatorOrange to-elevatorYellow 
                           scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
