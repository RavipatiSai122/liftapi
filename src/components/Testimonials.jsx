import { motion } from "framer-motion";
import { Star } from "lucide-react";
import clientImg from "../assets/img/a.png";

const testimonials = [
  {
    name: "Raghav Constructions",
    feedback:
      "Outstanding installation quality. Their precision, safety process and timely delivery make them our go-to partner.",
    rating: 5,
  },
  {
    name: "Sunshine Hospitals",
    feedback:
      "Their hospital elevators operate smoothly even during heavy load. Extremely reliable and hygienic cabin design.",
    rating: 5,
  },
  {
    name: "Elite Homes",
    feedback:
      "Beautifully finished home elevator with silent movement. Exceptional after-service support.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      aria-label="Client testimonials about our elevator services"
    >

      {/* Background Glows (GPU optimized) */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-elevatorOrange/20 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0.15 }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-elevatorYellow/20 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-darkText"
        >
          What Our <span className="text-elevatorOrange">Clients Feel</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-4 mb-16 text-lg text-darkText/70"
        >
          Authentic feedback from builders, hospitals, architects & home owners.
        </motion.p>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl 
                         border border-softBeige shadow-xl hover:shadow-2xl 
                         hover:-translate-y-2 transition-all duration-300
                         will-change-transform"
              aria-label={`Testimonial from ${t.name}`}
            >
              {/* Floating Avatar */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 left-1/2 -translate-x-1/2"
                aria-hidden="true"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-lg border-2 border-elevatorOrange p-1">
                  <img
                    src={clientImg}
                    className="rounded-full object-cover w-full h-full"
                    alt={`Client ${t.name}`}
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <div className="mt-10">

                {/* Rating */}
                <div className="flex justify-center mb-4" aria-hidden="true">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-elevatorYellow fill-elevatorYellow"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-darkText/80 leading-relaxed mb-6">
                  “{t.feedback}”
                </p>

                {/* Client Name */}
                <h4 className="font-bold text-lg text-darkText">{t.name}</h4>

                {/* Bottom Accent Line */}
                <div
                  className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r 
                             from-elevatorOrange to-elevatorYellow rounded-full
                             will-change-transform"
                />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
