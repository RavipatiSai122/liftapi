import { useEffect, useMemo } from "react";
import { setSEO } from "../utils/seo";
import "../styles/style-aos-custom.css";
import AOS from "aos";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FloatingActions from "../components/FloatingActions";
import Products from "../components/Products";

import {
  Wrench,
  Settings,
  ArrowUpCircle,
  ShieldCheck,
  Clock,
  Headphones,
} from "lucide-react";

import serviceInstall from "../assets/img/commercial-elevator.jpg";
import serviceMaintain from "../assets/img/commercial-elevator.jpg";
import serviceModern from "../assets/img/commercial-elevator.jpg";

export default function Services() {
  // ✔ Prevents recreation on every render → performance boost
  const serviceList = useMemo(
    () => [
      {
        name: "Elevator Installation",
        image: serviceInstall,
        description: "High-precision elevator installation with certified engineering.",
      },
      {
        name: "Elevator Maintenance",
        image: serviceMaintain,
        description: "Comprehensive AMC, servicing and repair solutions.",
      },
      {
        name: "Elevator Modernization",
        image: serviceModern,
        description: "Upgrade old elevators with new technology and safety systems.",
      },
    ],
    []
  );

  useEffect(() => {
    // ✔ AOS optimized
    AOS.init({
      duration: 900,
      easing: "ease-out",
      once: false,
      mirror: true, // Scroll up animations
      offset: 50,
    });

    // ✔ SEO structured and validated
    setSEO({
      title: "Elevator Services | Installation, Maintenance & Modernization",
      description:
        "Premium elevator installation, AMC maintenance, repair services and modernization with certified engineers and 24/7 support.",
      keywords:
        "elevator service, lift installation, elevator maintenance, lift AMC, lift repair, elevator modernization, lift company services",
      image: serviceInstall,

      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Elevator Services",
        url: window.location.href,
        description:
          "Trusted elevator installation, maintenance, and modernization services with certified engineers.",

        provider: {
          "@type": "Organization",
          name: "Lift Elevator Company",
          url: "https://yourdomain.com",
          logo: "https://yourdomain.com/logo.png",
        },

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Our Services",
          itemListElement: serviceList.map((s, i) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
              image: s.image,
            },
            position: i + 1,
          })),
        },

        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://yourdomain.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: window.location.href,
            },
          ],
        },

        mainEntity: {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do you provide 24/7 elevator support?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our team provides 24/7 emergency breakdown assistance.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer modernization?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We upgrade old elevators with energy-efficient technology and advanced safety systems.",
              },
            },
          ],
        },
      },
    });
  }, [serviceList]);

  // ------------------------
  // JSX PAGE RETURN
  // ------------------------

  return (
    <>
      <Navbar />

      <Banner
        title="Our Services"
        subtitle="Premium installation, maintenance & modernization solutions."
      />

      {/* PREMIUM SERVICE OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-darkText mb-6">What We Offer</h2>
          <p className="text-darkText/70 max-w-3xl mx-auto text-lg mb-16">
            World-class elevator services backed by engineering precision and certified support.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {[ 
              { icon: Settings, title: "Installation", desc: "High-precision installation delivery." },
              { icon: Wrench, title: "Maintenance", desc: "Regular servicing & AMC." },
              { icon: ArrowUpCircle, title: "Modernization", desc: "Upgrade outdated lifts." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 bg-softBeige rounded-3xl border border-darkText/10 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-elevatorOrange to-elevatorYellow rounded-2xl flex justify-center items-center shadow mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-darkText mb-3">{item.title}</h3>
                <p className="text-darkText/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 bg-softBeige">
        <div className="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-darkText mb-16">How We Deliver Quality</h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              { step: "01", title: "Site Inspection", desc: "Accurate installation planning." },
              { step: "02", title: "Engineering & Design", desc: "Tailored lift designs." },
              { step: "03", title: "Installation", desc: "Certified expert execution." },
              { step: "04", title: "Testing & Handover", desc: "Smooth and safe performance." },
            ].map((item, i) => (
              <div
                key={i}
                className="w-60 h-60 md:w-64 md:h-64 mx-auto flex flex-col justify-center items-center 
                rounded-full bg-gradient-to-br from-elevatorOrange to-elevatorYellow 
                shadow-xl text-white p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl font-extrabold mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-white/90 text-sm mt-2 px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <Products />

      {/* IMAGE + TEXT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch" data-aos="fade-up">
          
          {/* LEFT IMAGE */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl md:h-[420px] group">
            <img
              src={serviceInstall}
              alt="Elevator Installation Service"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-80 transition duration-700"></div>
          </div>

          {/* RIGHT TEXT */}
          <div className="md:h-[420px] p-10 rounded-3xl shadow-xl border border-darkText/10 
          bg-gradient-to-br from-white via-softBeige/40 to-white flex flex-col justify-between">

            <div>
              <h3 className="text-3xl font-bold text-darkText mb-4">Premium Elevator Installation</h3>

              <p className="text-darkText/70 text-lg mb-6 leading-relaxed">
                Our certified engineers ensure every installation meets global safety 
                standards with full precision, durability, and high reliability.
              </p>

              <ul className="space-y-4">
                {[
                  "Precision alignment & calibration",
                  "High-quality imported materials",
                  "Certified engineering workforce",
                  "Smooth commissioning & testing",
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-elevatorOrange to-elevatorYellow mt-1 mr-4"></div>
                    <span className="text-darkText/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-1 bg-gradient-to-r from-elevatorOrange to-elevatorYellow rounded-full mt-6"></div>
          </div>
        </div>
      </section>

      {/* MODERNIZATION SECTION */}
      <section className="py-20 bg-gradient-to-b from-softBeige to-white">
        <div className="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">

          <h2 className="text-4xl font-extrabold text-darkText mb-6">Why Modernize Your Elevator?</h2>
          <p className="text-darkText/70 max-w-2xl mx-auto mb-14 text-lg">
            Upgrading your elevator improves safety, performance, comfort, and long-term reliability.
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            {/* OLD */}
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-darkText/10 to-transparent shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="bg-white rounded-3xl p-10 h-full text-left backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-4 text-darkText">Old Elevator</h3>
                <ul className="space-y-4 text-darkText/70">
                  {[
                    "Higher energy usage",
                    "Less ride comfort",
                    "Frequent breakdowns",
                    "Outdated control systems",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-3 h-3 mt-2 mr-3 rounded-full bg-red-400"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
                  Needs Upgrade
                </div>
              </div>
            </div>

            {/* MODERN */}
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-elevatorOrange to-elevatorYellow shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="bg-white rounded-3xl p-10 h-full text-left backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-4 text-elevatorOrange">Modernized Elevator</h3>
                <ul className="space-y-4 text-darkText/80">
                  {[
                    "Energy efficient systems",
                    "Smooth, silent operation",
                    "Advanced safety sensors",
                    "AI-driven smart control",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-3 h-3 mt-2 mr-3 rounded-full bg-elevatorOrange"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-block px-5 py-2 rounded-full bg-elevatorOrange/20 text-elevatorOrange text-sm font-semibold">
                  Future Ready
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="py-20 bg-orange-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10" data-aos="fade-up">

          <h2 className="text-4xl font-extrabold text-darkText mb-6">24/7 Dedicated Support</h2>
          <p className="text-darkText/70 max-w-3xl mx-auto text-lg mb-16">
            Our expert team ensures your elevator runs smoothly with fast response, professional technicians, and reliable AMC care.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Clock, title: "Fast Response", desc: "Emergency breakdown assistance with priority response." },
              { icon: Headphones, title: "Expert Technicians", desc: "Certified service engineers available on call." },
              { icon: ShieldCheck, title: "Reliable AMC", desc: "Scheduled maintenance to extend elevator lifespan." },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-3xl p-10 border border-darkText/10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 backdrop-blur-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-elevatorOrange to-elevatorYellow"></div>

                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-elevatorOrange to-elevatorYellow shadow-xl flex items-center justify-center -mt-14 mb-6">
                  <item.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-darkText mb-2">{item.title}</h3>
                <p className="text-darkText/70">{item.desc}</p>

                <div className="mt-6 w-16 mx-auto h-1 rounded-full bg-gradient-to-r from-elevatorOrange to-elevatorYellow"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-elevatorOrange to-elevatorYellow text-white text-center rounded-t-3xl">
        <h2 className="text-4xl font-extrabold mb-4">Need Immediate Assistance?</h2>
        <p className="mb-6">Our technical team is available round-the-clock.</p>
        <a
          href="/contact"
          className="px-10 py-4 bg-white text-darkText font-bold text-lg rounded-full shadow hover:shadow-xl transition duration-300"
        >
          Contact Us
        </a>
      </section>

      <FloatingActions />
      <Footer />
    </>
  );
}
