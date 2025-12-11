import { motion } from "framer-motion";
import {
  PackageSearch,
  Layers,
  Cog,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function ManufacturingV4() {
  const steps = [
    {
      title: "Material Selection",
      desc: "We choose certified, high-grade steel, motors, and controllers to ensure durability & global safety compliance.",
      icon: PackageSearch,
    },
    {
      title: "Fabrication Process",
      desc: "CNC cutting, frame welding, cabin shaping, and precision fabrication follow ISO-standard workflows.",
      icon: Layers,
    },
    {
      title: "Component Assembly",
      desc: "Controllers, motors, rails, cabins, doors, and safety systems are assembled with multi-layer inspection.",
      icon: Cog,
    },
    {
      title: "Quality & Safety Testing",
      desc: "Each unit passes 20+ testing points including load test, vibration check, braking response, and leveling accuracy.",
      icon: ShieldCheck,
    },
    {
      title: "Packaging & Dispatch",
      desc: "After final QC approval, components are securely packed and dispatched safely to the installation location.",
      icon: Truck,
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-[#FFF3EC] via-[#F5D3C8] to-[#FFF3EC] relative overflow-hidden"
      aria-label="Elevator manufacturing process timeline"
    >

      {/* Section Heading */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-darkText">
          Our <span className="text-elevatorOrange">Manufacturing</span> Timeline
        </h2>

        <p className="text-darkText/70 max-w-2xl mx-auto mt-3 text-lg">
          A modern, step-by-step production cycle ensuring precision, safety, and unmatched product quality.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Vertical Center Line (Desktop only) */}
        <div
          className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[3px] 
                     rounded-full bg-softBeige -translate-x-1/2"
          aria-hidden="true"
        ></div>

        {/* Steps */}
        <div className="space-y-20 relative">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className={`flex flex-col lg:flex-row items-center gap-6 
                  ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} 
                  will-change-transform`}
                role="article"
                aria-label={`Manufacturing step: ${step.title}`}
              >
                {/* Icon Bubble */}
                <div
                  className="w-14 h-14 shrink-0 rounded-full bg-white border border-elevatorOrange/40 shadow-md 
                             flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon className="text-elevatorOrange" size={28} />
                </div>

                {/* Step Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-softBeige/60 w-full lg:w-[40%]">
                  <h3 className="text-xl font-bold text-darkText mb-2">{step.title}</h3>
                  <p className="text-darkText/70">{step.desc}</p>
                </div>

                {/* Center Dot (Desktop only) */}
                <div
                  className="hidden lg:block absolute left-1/2 w-4 h-4 rounded-full bg-elevatorOrange shadow 
                             -translate-x-1/2 mt-1"
                  aria-hidden="true"
                ></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
