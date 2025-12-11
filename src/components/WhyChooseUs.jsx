import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Factory, Clock, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Own Manufacturing Plant",
    desc: "All elevator components are produced in-house ensuring unmatched quality and reliability.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    desc: "Certified engineers ensure safe, accurate, and efficient installation every time.",
  },
  {
    icon: ShieldCheck,
    title: "High Safety Standards",
    desc: "We follow ISO, engineering, and multi-stage safety guidelines for zero risks.",
  },
  {
    icon: Clock,
    title: "Timely Support",
    desc: "Fast delivery, emergency support, and quick response for all service requests.",
  },
  {
    icon: Award,
    title: "10+ Years Expertise",
    desc: "Trusted by commercial, residential, and industrial clients across multiple regions.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Care",
    desc: "Round-the-clock service team for repairs, maintenance, and emergency breakdowns.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-10 bg-gradient-to-br from-[#FFF3EC] via-[#F5D3C8] to-[#FFF3EC] relative overflow-hidden"
      aria-label="Why customers choose our elevator company"
    >

      {/* Soft Background Fade (GPU optimized) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-darkText"
          >
            Why <span className="text-elevatorOrange">Choose Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-darkText/70 mt-4 text-lg max-w-2xl mx-auto"
          >
            A complete elevator solutions company with manufacturing, installation,
            modernization, and 24/7 service support.
          </motion.p>
        </div>

        {/* TOP ICON ROW */}
        <div className="flex flex-wrap justify-center gap-10 mb-20">
          {features.slice(0, 3).map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center will-change-transform"
            >
              <div
                className="p-5 rounded-full bg-gradient-to-br from-elevatorOrange to-elevatorYellow shadow-lg"
                aria-hidden="true"
              >
                <f.icon size={32} className="text-white" aria-hidden="true" />
              </div>

              <p className="mt-3 font-semibold text-darkText text-center">{f.title}</p>
            </motion.div>
          ))}
        </div>

        {/* PREMIUM FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-softBeige/60
                         shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
                         will-change-transform"
              role="article"
              aria-label={f.title}
            >

              {/* Icon */}
              <div className="mb-5">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center 
                             bg-gradient-to-br from-elevatorOrange to-elevatorYellow shadow-md"
                  aria-hidden="true"
                >
                  <f.icon size={32} className="text-white" aria-hidden="true" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-darkText mb-2">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-darkText/70 leading-relaxed">
                {f.desc}
              </p>

              {/* Bottom Line Animation */}
              <div
                className="mt-6 h-1 bg-gradient-to-r from-elevatorOrange to-elevatorYellow 
                           rounded-full scale-x-0 group-hover:scale-x-100 
                           origin-left transition-transform will-change-transform"
                aria-hidden="true"
              ></div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
