import { useEffect, useMemo } from "react";
import AOS from "aos";
import { setSEO } from "../utils/seo";
import "../styles/style-aos-custom.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FloatingActions from "../components/FloatingActions";

import client1 from "../assets/img/a.png";
import client2 from "../assets/img/a.png";
import client3 from "../assets/img/a.png";
import client4 from "../assets/img/a.png";
import client5 from "../assets/img/a.png";
import client6 from "../assets/img/a.png";

import { Star, ShieldCheck, Building2 } from "lucide-react";

export default function Clients() {

  // ⭐ Memoized data for performance
  const clients = useMemo(
    () => [
      { name: "Client A", logo: client1 },
      { name: "Client B", logo: client2 },
      { name: "Client C", logo: client3 },
      { name: "Client D", logo: client4 },
      { name: "Client E", logo: client5 },
      { name: "Client F", logo: client6 },
    ],
    []
  );

  const industries = useMemo(
    () => [
      "Residential & Apartments",
      "Commercial Buildings",
      "Hospitals & Healthcare",
      "Hotels & Hospitality",
      "Industrial Factories",
      "Shopping Malls & Retail",
    ],
    []
  );

  // ⭐ Optimized AOS + SEO
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      offset: 60,
    });

    setSEO({
      title: "Our Clients | Trusted by Top Industries | Lift Elevator Company",
      description:
        "Discover the leading brands, builders, and industries that trust Lift Elevator Company for world-class elevator installations and maintenance.",
      keywords:
        "lift clients list, elevator installation clients, corporate clients elevator, lift service Hyderabad",
      image: client1,

      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Our Clients - Lift Elevator Company",
        url: window.location.href,

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
              name: "Clients",
              item: window.location.href,
            },
          ],
        },

        mainEntity: {
          "@type": "ItemList",
          itemListElement: clients.map((c, i) => ({
            "@type": "Organization",
            name: c.name,
            logo: c.logo,
            position: i + 1,
          })),
        },

        publisher: {
          "@type": "Organization",
          name: "Lift Elevator Company",
          logo: "https://yourdomain.com/logo.png",
        },
      },
    });
  }, [clients]);

  return (
    <>
      <Navbar />

      <Banner
        title="Our Trusted Clients"
        subtitle="Proudly associated with leading industries, developers & enterprises."
      />

      {/* ⭐ Trust Badges */}
      <section className="py-20 bg-white">
        <div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center"
          data-aos="fade-up"
        >
          {[
            {
              icon: Star,
              title: "500+ Clients",
              desc: "Trusted across residential, commercial & industrial sectors.",
            },
            {
              icon: ShieldCheck,
              title: "ISO Certified Quality",
              desc: "Ensuring global safety standards in every project.",
            },
            {
              icon: Building2,
              title: "Serving 12+ Industries",
              desc: "Real estate, healthcare, hospitality, manufacturing & more.",
            },
          ].map((badge, i) => (
            <div
              key={i}
              className="p-8 bg-softBeige rounded-3xl shadow-md hover:shadow-lg transition"
            >
              <badge.icon className="w-10 h-10 text-elevatorOrange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-darkText">{badge.title}</h3>
              <p className="text-darkText/60 mt-2">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ Client Logos */}
      <section className="py-20 bg-softBeige">
        <div className="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-darkText mb-6">
            Our Clients
          </h2>

          <p className="text-darkText/70 max-w-2xl mx-auto mb-14">
            Trusted by renowned corporations, builders & institutions across
            India.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {clients.map((client, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-darkText/10 shadow-sm 
                           hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <img
                  src={client.logo}
                  loading="lazy"
                  alt={client.name}
                  className="h-16 w-auto mx-auto object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ Industries */}
      <section className="py-20 bg-white">
        <div
          className="max-w-7xl mx-auto px-6 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-extrabold text-darkText mb-10">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="p-8 bg-softBeige rounded-3xl shadow-md border border-darkText/10 
                           hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-darkText">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ Testimonials */}
      <section className="py-24 bg-softBeige">
        <div
          className="max-w-6xl mx-auto px-6 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-extrabold text-darkText mb-12">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                review:
                  "Outstanding service! Their installation quality and response time are unmatched.",
                name: "Client A",
              },
              {
                review:
                  "Modernized our elevators with superior efficiency and safety.",
                name: "Client B",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-10 bg-white rounded-3xl shadow-lg border border-darkText/10"
              >
                <p className="text-darkText/70 italic">“{t.review}”</p>
                <h4 className="mt-4 font-bold text-darkText">— {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ CTA */}
      <section className="py-20 bg-gradient-to-r from-elevatorOrange to-elevatorYellow text-center text-white rounded-t-3xl">
        <h2 className="text-4xl font-extrabold mb-3">
          Ready to Join Our Client Network?
        </h2>
        <p className="text-white/90 mb-6">
          Partner with us for world-class elevator solutions.
        </p>

        <a
          href="/contact"
          className="px-10 py-4 bg-white text-darkText font-semibold rounded-full shadow-xl hover:shadow-2xl transition"
        >
          Contact Us
        </a>
      </section>

      <FloatingActions />
      <Footer />
    </>
  );
}
