// src/pages/About.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/style-aos-custom.css";

import { setSEO } from "../utils/seo";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FloatingActions from "../components/FloatingActions";

import {
  Shield,
  Wrench,
  Cog,
  Award,
  Factory,
  Headphones,
  Layers,
} from "lucide-react";

import elevatorImg from "../assets/img/commercial-elevator.jpg";
import team1 from "../assets/img/a.png";
import team2 from "../assets/img/a.png";
import team3 from "../assets/img/a.png";
import factory1 from "../assets/img/commercial-elevator.jpg";
import factory2 from "../assets/img/commercial-elevator.jpg";
import factory3 from "../assets/img/commercial-elevator.jpg";
import installImg from "../assets/img/commercial-elevator.jpg";

/* ------------------ STATIC DATA (OUTSIDE COMPONENT) ------------------ */

const aboutImages = [elevatorImg, factory1, factory2, factory3, team1, team2, team3];

const WHY_CHOOSE_ITEMS = [
  {
    icon: Cog,
    title: "Advanced Engineering",
    desc: "Modern technology-driven lift systems for high performance.",
  },
  {
    icon: Shield,
    title: "Safety First",
    desc: "Strict adherence to European & global elevator safety standards.",
  },
  {
    icon: Headphones,
    title: "Fast Support",
    desc: "24/7 emergency response & proactive service monitoring.",
  },
  {
    icon: Layers,
    title: "Custom Designs",
    desc: "Cabins tailored to interiors, architecture & project needs.",
  },
];

const JOURNEY_ITEMS = [
  {
    year: "2010",
    event: "Company founded with a mission to deliver safe and reliable lift solutions.",
  },
  {
    year: "2014",
    event: "Opened first state-of-the-art manufacturing plant with advanced testing facilities.",
  },
  {
    year: "2018",
    event: "Scaled operations into commercial, industrial, and hospital elevator systems.",
  },
  {
    year: "2021",
    event: "Launched IoT-enabled smart monitoring systems for predictive maintenance.",
  },
  {
    year: "2024",
    event: "Expanded production capacity and introduced premium cabin design collections.",
  },
];

const LEADERSHIP_TEAM = [
  { name: "Rajesh Kumar", role: "Founder & Managing Director", img: team1 },
  { name: "Sneha Rao", role: "Head of Engineering", img: team2 },
  { name: "Arvind Patel", role: "Operations & Quality Head", img: team3 },
];

const MILESTONES = [
  { count: "5000+", label: "Elevators Installed" },
  { count: "1500+", label: "Commercial Projects" },
  { count: "98%", label: "Customer Satisfaction" },
  { count: "14+", label: "Years of Experience" },
];

const FACTORY_FEATURES = [
  {
    img: factory1,
    title: "Precision CNC Machining",
    desc: "High-accuracy elevator components produced with global-grade CNC machines.",
    icon: <Cog className="w-8 h-8 text-white" />,
  },
  {
    img: factory2,
    title: "Robotic Welding Zone",
    desc: "Fully automated welding bays ensuring unmatched structural integrity.",
    icon: <Wrench className="w-8 h-8 text-white" />,
  },
  {
    img: factory3,
    title: "Advanced Assembly Line",
    desc: "Streamlined assembly workflow improving efficiency and quality output.",
    icon: <Factory className="w-8 h-8 text-white" />,
  },
];

const MANUFACTURING_CAPABILITIES = [
  {
    icon: Cog,
    title: "Precision Engineering",
    desc: "High-accuracy components manufactured with CNC & automated systems.",
  },
  {
    icon: Shield,
    title: "Safety Certified",
    desc: "European & ISO standards followed throughout production.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Each elevator undergoes 50+ mechanical and electrical tests.",
  },
];

const INSTALLATION_POINTS = [
  "Expert installation with precision alignment",
  "Annual Maintenance Contracts (AMC)",
  "Breakdown service with quick response",
  "Modernization for outdated elevator systems",
];

/* --------------------------- COMPONENT --------------------------- */

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
      once: false, // repeat on scroll down
      mirror: true, // animate on scroll up
    });

    setSEO({
      title: "About Us | Lift & Elevator Manufacturers | India",
      description:
        "Leading elevator manufacturing company offering installation, modernization, AMC maintenance, and premium lift solutions with engineering precision.",
      keywords:
        "elevator company, lift manufacturer, lift installation, elevator modernization, elevator maintenance, AMC service, lift factory India",
      image: elevatorImg,

      schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Lift Elevator Company",
        url: window.location.href,
        description:
          "Learn about our elevator manufacturing excellence, leadership team, factory capabilities, and 14+ years of engineering expertise.",

        publisher: {
          "@type": "Organization",
          name: "Lift Elevator Company",
          url: "https://yourdomain.com",
          logo: "https://yourdomain.com/logo.png",
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
              name: "About Us",
              item: window.location.href,
            },
          ],
        },

        image: aboutImages.map((img) => ({
          "@type": "ImageObject",
          contentUrl: img,
          description: "Elevator manufacturing and factory visuals",
        })),

        mainEntity: {
          "@type": "Organization",
          name: "Lift Elevator Company",
          foundingDate: "2010",
          numberOfEmployees: "200+",
          description:
            "A premium elevator manufacturing company delivering installation, modernization, AMC maintenance, and smart lift solutions.",

          founder: {
            "@type": "Person",
            name: "Rajesh Kumar",
          },

          employee: [
            { "@type": "Person", name: "Rajesh Kumar", jobTitle: "Managing Director" },
            { "@type": "Person", name: "Sneha Rao", jobTitle: "Head of Engineering" },
            { "@type": "Person", name: "Arvind Patel", jobTitle: "Operations Head" },
          ],

          department: [
            {
              "@type": "Organization",
              name: "Manufacturing Unit",
              description: "Robotic welding, CNC machining, and automated assembly.",
            },
            {
              "@type": "Organization",
              name: "Service & AMC",
              description: "24/7 elevator support and preventive maintenance.",
            },
          ],

          knowsAbout: [
            "Elevator Manufacturing",
            "Lift Installation",
            "Elevator Modernization",
            "Lift AMC Maintenance",
            "Industrial Lift Production",
          ],

          award: ["Best Elevator Manufacturer 2023", "ISO 9001 Certified Production"],
        },

        faq: {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How long have you been manufacturing elevators?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We have over 14+ years of experience in elevator manufacturing and installation.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide AMC and 24/7 support?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer AMC contracts with 24/7 emergency support and proactive monitoring.",
              },
            },
            {
              "@type": "Question",
              name: "Where is your factory located?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our advanced production facility is located in India, equipped with CNC, robotic welding, and automated assembly.",
              },
            },
          ],
        },

        achievements: {
          "@type": "ItemList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "5000+ Elevators Installed" },
            { "@type": "ListItem", position: 2, name: "1500+ Commercial Projects" },
            { "@type": "ListItem", position: 3, name: "98% Customer Satisfaction" },
            { "@type": "ListItem", position: 4, name: "14+ Years Experience" },
          ],
        },
      },
    });
  }, []);

  return (
    <>
      <Navbar />

      <Banner
        title="About Our Company"
        subtitle="Delivering world-class elevator solutions with engineering precision."
      />

      {/* WHO WE ARE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
          <div className="flex flex-col md:flex-row gap-16 md:h-[470px]">
            {/* LEFT IMAGE BOX WITH BORDER LINE */}
            <div className="w-full md:w-1/2 h-full">
              <div className="border border-darkText/15 rounded-2xl h-full p-3 shadow-md">
                <div className="overflow-hidden rounded-xl h-full group">
                  <img
                    src={elevatorImg}
                    alt="Elevator Manufacturing"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT TEXT BLOCK */}
            <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-5xl font-extrabold mb-3">
                  Who <span className="text-elevatorOrange">We Are</span>
                </h2>

                <p className="text-lg text-darkText/80 leading-relaxed">
                  We are a trusted lift manufacturing company delivering high-performance,
                  safe, and precision-engineered elevator solutions. Our production systems,
                  certified components, and engineering expertise ensure reliability across
                  residential, commercial, and industrial sectors.
                </p>
              </div>

              {/* OUR VISION BOX */}
              <div className="p-8 bg-softBeige rounded-2xl shadow-md border border-darkText/20 flex gap-4 mt-6 md:mt-0">
                <span className="w-2 rounded-full bg-gradient-to-b from-elevatorOrange to-elevatorYellow" />
                <div>
                  <h3 className="text-3xl font-semibold text-darkText mb-2">Our Vision</h3>
                  <p className="text-darkText/70 text-lg leading-relaxed">
                    To elevate global mobility standards through engineering excellence,
                    innovation, and exceptional service — delivering safe, intelligent,
                    and future-ready lift solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — PREMIUM */}
      <section className="py-10 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-darkText mb-6">Why Choose Us</h2>
          <p className="text-darkText/70 max-w-3xl mx-auto text-lg mb-16">
            Trusted by builders, industries, and architects for consistently 
            delivering premium quality and long-lasting elevator solutions.
          </p>

          <div className="grid md:grid-cols-4 gap-10">
            {WHY_CHOOSE_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative p-10 bg-white rounded-3xl shadow-md border border-darkText/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-elevatorOrange to-elevatorYellow" />
                  <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-elevatorOrange to-elevatorYellow shadow-lg mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-darkText mb-3">{item.title}</h3>
                  <p className="text-darkText/70 leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-gradient-to-br from-softBeige to-white">
        <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-darkText text-center mb-16">
            Our Journey
          </h2>

          <div className="relative hidden lg:block">
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-elevatorOrange via-elevatorYellow to-elevatorOrange" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {JOURNEY_ITEMS.map((item, i) => (
              <div key={item.year} className="flex flex-col items-center text-center relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-elevatorOrange to-elevatorYellow flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  {item.year}
                </div>

                {i !== JOURNEY_ITEMS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-[-50%] w-full h-[3px] bg-gradient-to-r from-elevatorOrange to-elevatorYellow" />
                )}

                <div className="mt-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 h-[180px] flex items-center justify-center border border-darkText/10">
                  <p className="text-darkText/70 leading-relaxed text-sm px-1">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-darkText text-center mb-12">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {LEADERSHIP_TEAM.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-1"
              >
                <div className="mx-auto w-40 h-40 rounded-full p-[3px] bg-gradient-to-br from-elevatorOrange to-elevatorYellow shadow-md">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-darkText mt-6">{leader.name}</h3>
                <p className="text-darkText/60">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-20 bg-gradient-to-br from-softBeige to-white">
        <div className="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-darkText mb-6">Company Milestones</h2>

          <div className="grid md:grid-cols-4 gap-10 mt-10">
            {MILESTONES.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-4xl font-bold text-elevatorOrange">{item.count}</h3>
                <p className="text-darkText/70 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY TOUR WITH OVERLAY INFO */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-darkText text-center mb-16">
            Explore Our Manufacturing Excellence
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {FACTORY_FEATURES.map((item) => (
              <div
                key={item.title}
                className="relative group overflow-hidden rounded-3xl shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[320px] object-cover rounded-3xl transform group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-80 transition duration-500" />

                <div className="absolute top-6 left-6 bg-elevatorOrange p-3 rounded-xl shadow-lg opacity-90">
                  {item.icon}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 mb-3 translate-y-20 group-hover:translate-y-0 transition duration-700">
                  <h3 className="text-2xl font-semibold text-black/80 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-darkText/70 mt-12 text-lg max-w-3xl mx-auto leading-relaxed">
            From automated machining to high-precision testing, every stage of our production 
            is engineered to ensure safety, durability, and world-class elevator performance.
          </p>
        </div>
      </section>

      {/* MANUFACTURING CAPABILITIES */}
      <section className="py-20 bg-softBeige">
        <div className="max-w-7xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-darkText mb-4">
            State-of-the-Art Manufacturing Facility
          </h2>
          <p className="text-darkText/70 max-w-3xl mx-auto text-lg mb-14">
            Our advanced production unit is equipped with precision machinery, 
            CNC laser cutting, robotic welding, automated assembly lines and 
            strict quality control protocols to deliver best-in-class lift systems.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {MANUFACTURING_CAPABILITIES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
                >
                  <Icon className="w-12 h-12 text-elevatorOrange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-darkText mb-2">
                    {item.title}
                  </h3>
                  <p className="text-darkText/70">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INSTALLATION & SERVICES — PREMIUM FIXED HEIGHT */}
      <section className="py-24 bg-gradient-to-br from-white to-softBeige">
        <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-darkText text-center mb-14">
            Installation, Modernization & 24/7 Service Support
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:h-[420px]">
            {/* LEFT TEXT CARD */}
            <div className="p-10 bg-white rounded-3xl shadow-lg border border-darkText/10 flex flex-col justify-between">
              <div>
                <p className="text-lg text-darkText/80 leading-relaxed mb-6">
                  Our experienced technical team handles complete installation—from 
                  site inspection to commissioning. We also provide modernization 
                  services to upgrade old lift systems with new technology, improving 
                  performance and safety.
                </p>

                <ul className="space-y-4">
                  {INSTALLATION_POINTS.map((point) => (
                    <li key={point} className="flex items-start">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-elevatorOrange to-elevatorYellow mt-1 mr-4" />
                      <span className="text-darkText/80 text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-elevatorOrange to-elevatorYellow rounded-full mt-6" />
            </div>

            {/* RIGHT IMAGE FIXED HEIGHT */}
            <div className="relative h-full rounded-3xl overflow-hidden shadow-xl group">
              <img
                src={installImg}
                alt="Lift Installation Services"
                className="w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition duration-500 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      <FloatingActions />
      <Footer />
    </>
  );
}
