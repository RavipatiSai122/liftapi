import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { setSEO } from "../utils/seo";
import "../styles/style-aos-custom.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FloatingActions from "../components/FloatingActions";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  // Memoized company info
  const contactInfo = useMemo(
    () => ({
      phone: "+91 9876543210",
      email: "info@liftelevator.com",
      location: "Hyderabad, Telangana",
      hours: "Mon–Sat: 9:00 AM – 7:00 PM",
    }),
    []
  );

  // ---------------------- SEO + AOS ------------------------
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      offset: 50,
    });

    setSEO({
      title: "Contact Us | Lift Elevator Company | Installation & AMC Support",
      description:
        "Get in touch with Lift Elevator Company for installation, AMC maintenance, modernization and emergency support.",
      keywords:
        "contact lift company, elevator service number, elevator installation Hyderabad, lift maintenance support",
      image: "https://yourdomain.com/logo.png",

      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Lift Elevator Company",
        url: window.location.href,

        mainEntity: {
          "@type": "LocalBusiness",
          name: "Lift Elevator Company",
          telephone: contactInfo.phone,
          email: contactInfo.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          openingHours: ["Mo-Sa 09:00-19:00"],
        },
      },
    });
  }, [contactInfo]);
  // ----------------------------------------------------------

  return (
    <>
      <Navbar />

      <Banner
        title="Contact Us"
        subtitle="We're here to assist with installation, service, and support."
      />

      {/* ===== CONTACT CARDS ===== */}
      <section className="py-20 bg-white">
        <div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10"
          data-aos="fade-up"
        >
          {[
            { icon: Phone, title: "Call Us", value: contactInfo.phone },
            { icon: Mail, title: "Email", value: contactInfo.email },
            { icon: MapPin, title: "Location", value: contactInfo.location },
            { icon: Clock, title: "Service Hours", value: contactInfo.hours },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-softBeige rounded-3xl shadow-md border border-darkText/10 text-center 
              hover:shadow-xl transition"
            >
              <item.icon className="w-10 h-10 text-elevatorOrange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-darkText mb-2">{item.title}</h3>
              <p className="text-darkText/70">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="py-20 bg-softBeige">
        <div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16"
          data-aos="fade-up"
        >
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-darkText mb-6">
              Get in Touch With Us
            </h2>
            <p className="text-darkText/70 text-lg mb-8 leading-relaxed">
              Whether it's installation, AMC maintenance, modernization, or
              service requests, our team responds quickly and professionally.
            </p>

            <div className="mt-6 space-y-4 text-darkText">
              <p className="flex items-center gap-3">
                <Phone className="text-elevatorOrange" /> {contactInfo.phone}
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-elevatorOrange" /> {contactInfo.email}
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-elevatorOrange" /> {contactInfo.location}
              </p>
            </div>
          </div>

          {/* FORM */}
          <form className="bg-white p-10 rounded-3xl shadow-xl border border-darkText/10">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="text-darkText/70 font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-4 rounded-xl border focus:ring-2
                  focus:ring-elevatorOrange outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="text-darkText/70 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 p-4 rounded-xl border focus:ring-2
                  focus:ring-elevatorOrange outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="text-darkText/70 font-medium">Phone Number</label>
                <input
                  type="text"
                  className="w-full mt-1 p-4 rounded-xl border focus:ring-2
                  focus:ring-elevatorOrange outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="text-darkText/70 font-medium">Message</label>
                <textarea
                  rows="4"
                  className="w-full mt-1 p-4 rounded-xl border focus:ring-2
                  focus:ring-elevatorOrange outline-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r
                from-elevatorOrange to-elevatorYellow text-white font-semibold
                shadow-lg hover:shadow-xl transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section>
        <div className="w-full h-[450px] rounded-t-3xl overflow-hidden shadow-xl">
          <iframe
            title="Branch Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.3733031137366!2d80.03592737489397!3d15.505177785134297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b0c826c98e2ef%3A0x6d07f2a7bc01db57!2sOngole%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1733579999999!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-elevatorOrange to-elevatorYellow text-center text-white">
        <h2 className="text-4xl font-extrabold mb-3">Need Immediate Help?</h2>
        <p className="mb-6">Our service team is available for priority support.</p>
        <a
          href={`tel:${contactInfo.phone}`}
          className="px-10 py-4 bg-white text-darkText font-semibold rounded-full shadow-xl hover:shadow-2xl transition"
        >
          Call Now
        </a>
      </section>

      <FloatingActions />
      <Footer />
    </>
  );
}
