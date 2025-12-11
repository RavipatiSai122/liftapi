import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/img/commercial-elevator.jpg";
import img2 from "../assets/img/commercial-elevator.jpg";
import img3 from "../assets/img/commercial-elevator.jpg";
import img4 from "../assets/img/commercial-elevator.jpg";
import img5 from "../assets/img/commercial-elevator.jpg";
import img6 from "../assets/img/commercial-elevator.jpg";

// Preload-safe constant array
const gallery = [img1, img2, img3, img4, img5, img6];

export default function GalleryPreview() {
  const [selectedImg, setSelectedImg] = useState(null);

  // Prevent unnecessary re-renders
  const openModal = useCallback((img) => setSelectedImg(img), []);
  const closeModal = useCallback(() => setSelectedImg(null), []);

  return (
    <section
      className="py-20 bg-gradient-to-br from-[#FFF3EC] via-[#FAD9CF] to-[#FFEDE4] relative overflow-hidden"
      aria-label="Gallery preview section"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-darkText text-center">
          Our <span className="text-elevatorOrange">Gallery</span>
        </h2>

        <p className="text-darkText/70 text-center mt-3 mb-14 text-lg">
          A premium view of our installations, cabin designs & manufacturing work.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              onClick={() => openModal(img)}
              className="rounded-2xl overflow-hidden shadow-lg cursor-pointer
                         border border-softBeige bg-white group relative 
                         will-change-transform"
              aria-label={`Open image ${i + 1}`}
            >
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:brightness-110
                           transition duration-300"
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black/10 opacity-0 
                           group-hover:opacity-100 transition"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>

        {/* MODAL / LIGHTBOX */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm 
                         flex items-center justify-center z-[999]"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                aria-label="Close gallery preview"
                className="absolute top-6 right-6 text-white text-3xl font-bold 
                           bg-black/40 rounded-full w-10 h-10 flex items-center 
                           justify-center hover:bg-black/70 transition"
              >
                ×
              </button>

              {/* Image with animation */}
              <motion.img
                key={selectedImg}
                src={selectedImg}
                alt="Selected gallery item"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="max-w-[90%] max-h-[85%] rounded-2xl shadow-2xl object-contain
                           will-change-transform"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
