import { motion } from "framer-motion";
import bannerImg from "../assets/img/commercial-elevator.jpg";

export default function Banner({
  title,
  subtitle,
  buttonText,
  buttonLink = "/contact",
  image = bannerImg,
}) {
  return (
    <section
      className="
        relative w-full 
        min-h-[240px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[300px]
        pt-[10px] sm:pt-[10px] md:pt-[10px] lg:pt-[10px]   
        pb-6
        flex items-center justify-center
        overflow-hidden
      "
    >
      {/* Soft Premium Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F3] via-[#FFEAE3] to-[#FFF0E9]" />

      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Soft white overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-darkText"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-2 text-darkText/80 text-sm sm:text-base md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        {buttonText && (
          <motion.a
            href={buttonLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
              inline-block mt-5 px-6 py-2 sm:px-8 sm:py-3 
              rounded-xl bg-gradient-to-r from-elevatorOrange to-elevatorYellow 
              text-white font-semibold shadow-md text-sm sm:text-base
            "
          >
            {buttonText}
          </motion.a>
        )}
      </div>
    </section>
  );
}
