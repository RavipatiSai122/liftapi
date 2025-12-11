import { useState, useEffect, useMemo } from "react";
import AOS from "aos";
import { setSEO } from "../utils/seo";
import "../styles/style-aos-custom.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FloatingActions from "../components/FloatingActions";

import {
  Play,
  ArrowRight,
  Quote
} from "lucide-react";

import gallery1 from "../assets/img/commercial-elevator.jpg";
import gallery2 from "../assets/img/commercial-elevator.jpg";
import gallery3 from "../assets/img/commercial-elevator.jpg";
import gallery4 from "../assets/img/commercial-elevator.jpg";
import gallery5 from "../assets/img/commercial-elevator.jpg";
import gallery6 from "../assets/img/commercial-elevator.jpg";
import gallery7 from "../assets/img/commercial-elevator.jpg";
import gallery8 from "../assets/img/commercial-elevator.jpg";

export default function Gallery() {

  // ----------------------------------------
  // MEMOIZED CATEGORY + IMAGE DATA (FASTER)
  // ----------------------------------------
  const categories = useMemo(
    () => [
      { label: "All", key: "all" },
      { label: "Residential", key: "res" },
      { label: "Commercial", key: "com" },
      { label: "Hospital", key: "hos" },
      { label: "Industrial", key: "ind" }
    ],
    []
  );

  const images = useMemo(
    () => [
      { src: gallery1, category: "res", alt: "Residential elevator installation" },
      { src: gallery2, category: "com", alt: "Commercial building elevator" },
      { src: gallery3, category: "hos", alt: "Hospital elevator system" },
      { src: gallery4, category: "res", alt: "Premium home elevator" },
      { src: gallery5, category: "ind", alt: "Industrial freight elevator" },
      { src: gallery6, category: "com", alt: "Office elevator upgrade" },
      { src: gallery7, category: "hos", alt: "Healthcare elevator modernization" },
      { src: gallery8, category: "ind", alt: "Industrial goods lift" }
    ],
    []
  );

  // ----------------------------------------
  // ⭐ AOS + SEO INIT (Optimized)
  // ----------------------------------------
  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 50,
      easing: "ease-out",
      once: false,
      mirror: true
    });

    setSEO({
      title: "Gallery – Elevator Installations & Projects | Lift Elevator Company",
      description:
        "Explore premium elevator installations, modernization projects, cabin designs, and industrial lift solutions.",
      image: gallery1,
      keywords:
        "elevator gallery, lift installations, modernization, cabin designs, industrial elevators, commercial elevators, residential lifts",

      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Elevator Installation Gallery",
        url: window.location.href,

        description:
          "A visual gallery of premium elevator installations across residential, commercial, hospital and industrial buildings.",

        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://yourdomain.com/" },
            { "@type": "ListItem", position: 2, name: "Gallery", item: window.location.href }
          ]
        },

        mainEntity: {
          "@type": "ItemList",
          itemListElement: images.map((img, index) => ({
            "@type": "ImageObject",
            position: index + 1,
            contentUrl: img.src,
            description: img.alt
          }))
        },

        publisher: {
          "@type": "Organization",
          name: "Lift Elevator Company",
          logo: {
            "@type": "ImageObject",
            url: "https://yourdomain.com/logo.png"
          }
        }
      }
    });
  }, [images]);

  // ----------------------------------------
  // ⭐ FILTERING + LIGHTBOX
  // ----------------------------------------
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filteredImages =
    active === "all"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <>
      <Navbar />

      <Banner
        title="Our Gallery"
        subtitle="Premium elevator installations, cabin designs & modernization projects."
      />

      {/* INTRO SECTION */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-4xl font-extrabold text-darkText mb-4">
          Experience Our Work
        </h2>

        <p className="text-darkText/70 max-w-3xl mx-auto text-lg leading-relaxed">
          Explore our best elevator installations across residential towers,
          commercial complexes, hospitals & industrial facilities.
        </p>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="py-6 bg-softBeige px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition border ${
                active === cat.key
                  ? "bg-gradient-to-r from-elevatorOrange to-elevatorYellow text-white"
                  : "bg-white text-darkText/80 border-darkText/20 hover:bg-softBeige"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ⭐ MASONRY GALLERY (Improved Responsive Flow) */}
      <section className="py-20 bg-white px-6">
        <div
          className="
            max-w-7xl mx-auto 
            columns-1 sm:columns-2 lg:columns-3 
            gap-5 [column-fill:_balance] 
            space-y-5"
          data-aos="fade-up"
        >
          {filteredImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              onClick={() => setLightbox(img.src)}
              className="
                w-full rounded-3xl cursor-pointer shadow-md hover:shadow-xl 
                hover:scale-[1.03] transition duration-300
              "
            />
          ))}
        </div>
      </section>

      {/* ⭐ LIGHTBOX (Smooth Fade + No Layout Shift) */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4 animate-fadeIn"
        >
          <img
            src={lightbox}
            alt="Preview"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}

      {/* FEATURED PROJECT */}
      <section className="py-24 bg-softBeige">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up">

          <img
            src={gallery4}
            className="rounded-3xl shadow-xl object-cover h-[360px]"
            alt="Premium Glass Elevator"
          />

          <div>
            <h3 className="text-3xl font-extrabold text-darkText mb-4">
              Featured Project: Premium Glass Elevator
            </h3>

            <p className="text-darkText/70 text-lg mb-6">
              Installed at a luxury commercial complex, featuring a panoramic
              cabin with laminated glass, stainless steel finish, and advanced
              control panel.
            </p>

            <button className="px-8 py-3 bg-gradient-to-r from-elevatorOrange to-elevatorYellow text-white rounded-full shadow hover:shadow-xl transition">
              View Project <ArrowRight className="inline ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 bg-white text-center" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-darkText mb-6">Installation Timelapse</h2>

        <p className="text-darkText/70 max-w-3xl mx-auto mb-12">
          Watch how our engineering team installs a complete elevator system
          with precision and safety protocols.
        </p>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer">
          <img
            src={gallery7}
            className="w-full h-[360px] object-cover brightness-75"
            alt="Installation Timelapse"
          />

          <Play
            className="
              absolute inset-0 m-auto w-20 h-20 
              text-white opacity-70 group-hover:opacity-100 transition
            "
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-softBeige" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-darkText text-center mb-12">
          What Clients Say
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="p-10 bg-white rounded-3xl border border-darkText/10 shadow-lg"
            >
              <Quote className="w-10 h-10 text-elevatorOrange mb-4" />

              <p className="text-darkText/70 italic">
                “Exceptional installation and after-service support. Their team
                completed our project with top-level professionalism.”
              </p>

              <h4 className="mt-4 font-bold text-darkText">— Premium Client</h4>
            </div>
          ))}
        </div>
      </section>

      <FloatingActions />
      <Footer />
    </>
  );
}
