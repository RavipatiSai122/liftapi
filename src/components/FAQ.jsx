import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you provide installation for all types of elevators?",
    a: "Yes. We install residential, commercial, hospital, and industrial elevators with complete safety and precision.",
  },
  {
    q: "Do you have your own manufacturing unit?",
    a: "Yes. We operate a full in-house manufacturing plant where all elevator components and spare parts are produced with strict quality checks.",
  },
  {
    q: "What kind of maintenance services do you offer?",
    a: "We provide AMC, monthly inspections, emergency repairs, and modernization services for all elevator brands.",
  },
  {
    q: "How fast is your support service?",
    a: "Our technicians are available 24/7 and provide onsite assistance depending on the service location.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Performance optimized toggle
  const toggleFAQ = useCallback(
    (i) => setOpenIndex((prev) => (prev === i ? null : i)),
    []
  );

  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="faq-heading"
      role="region"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2
          id="faq-heading"
          className="text-4xl md:text-5xl font-extrabold text-darkText text-center"
        >
          Frequently <span className="text-elevatorOrange">Asked Questions</span>
        </h2>

        <p className="text-darkText/70 text-center mt-3 mb-12 text-lg">
          Quick answers about installation, manufacturing, service & support.
        </p>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-softBeige/80 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-darkText">
                  {faq.q}
                </span>

                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-elevatorOrange"
                >
                  <ChevronDown size={26} />
                </motion.span>
              </button>

              {/* ANSWER */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-darkText/75 leading-relaxed will-change-transform"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
