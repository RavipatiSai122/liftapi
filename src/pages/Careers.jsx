import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // core AOS styles
import { setSEO } from "../utils/seo";
import "../styles/style-aos-custom.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FloatingActions from "../components/FloatingActions";

import { Briefcase, MapPin, Clock } from "lucide-react";

export default function Careers() {
  // ✅ Memoized job list so it's stable for SEO + JSX
  const jobList = useMemo(
    () => [
      {
        id: 1,
        title: "Elevator Installation Engineer",
        type: "Full-Time",
        location: "Hyderabad",
        experience: "2+ Years",
        desc: "Responsible for elevator installation, wiring, testing and safety compliance.",
      },
      {
        id: 2,
        title: "Service & Maintenance Technician",
        type: "Full-Time",
        location: "Hyderabad",
        experience: "1+ Years",
        desc: "Handle breakdowns, AMC services and fault diagnosis with precision.",
      },
      {
        id: 3,
        title: "Sales Executive – Elevators",
        type: "Full-Time",
        location: "Hyderabad",
        experience: "0–3 Years",
        desc: "Identify prospects, coordinate with clients, and explain product advantages.",
      },
    ],
    []
  );

  // ************** SEO + AOS **************
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      offset: 60,
    });

    setSEO({
      title: "Careers | Work With Us – Lift & Elevator Company",
      description:
        "Join our team of elevator engineers, technicians, and professionals. Explore openings in installation, maintenance, and sales.",
      keywords:
        "elevator jobs, lift company hiring, elevator technician jobs, installation engineer jobs, maintenance jobs",
      image: "/assets/img/careers.jpg",

      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Careers at Lift Elevator Company",
        url: window.location.href,
        description:
          "Current job openings for elevator engineers, technicians, and sales professionals.",

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
              name: "Careers",
              item: window.location.href,
            },
          ],
        },

        mainEntity: {
          "@type": "ItemList",
          itemListElement: jobList.map((job, index) => ({
            "@type": "JobPosting",
            position: index + 1,
            title: job.title,
            description: job.desc,
            employmentType: job.type,
            hiringOrganization: {
              "@type": "Organization",
              name: "Lift Elevator Company",
              sameAs: window.location.origin,
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: job.location,
                addressCountry: "IN",
              },
            },
          })),
        },
      },
    });
  }, [jobList]);
  // *****************************************

  return (
    <>
      <Navbar />

      <Banner
        title="Careers"
        subtitle="Join our mission to build world-class elevator solutions."
      />

      {/* INTRO */}
      <section className="py-16 bg-white text-center px-6" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-darkText mb-4">
          Build Your Future With Us
        </h2>
        <p className="text-darkText/70 max-w-3xl mx-auto text-lg">
          We are always looking for talented engineers, technicians, sales
          professionals and innovators who want to grow with our company.
        </p>
      </section>

      {/* JOB LISTINGS */}
      <section className="py-20 bg-softBeige px-6">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-darkText mb-10">
            Open Positions
          </h3>

          <div className="grid gap-10 md:grid-cols-3">
            {jobList.map((job) => (
              <article
                key={job.id}
                className="p-8 bg-white rounded-3xl shadow-md border border-darkText/10 
                           hover:shadow-xl hover:-translate-y-1 transition cursor-pointer h-full"
              >
                <h4 className="text-xl font-bold text-darkText mb-3">
                  {job.title}
                </h4>

                <div className="flex items-center gap-2 text-darkText/70 mb-2 text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>{job.type}</span>
                </div>

                <div className="flex items-center gap-2 text-darkText/70 mb-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-2 text-darkText/70 mb-4 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Experience: {job.experience}</span>
                </div>

                <p className="text-darkText/70 mb-4 text-sm leading-relaxed">
                  {job.desc}
                </p>

                <a
                  href="#apply"
                  className="inline-block mt-3 px-6 py-2 bg-gradient-to-r from-elevatorOrange to-elevatorYellow 
                             text-white rounded-full shadow hover:shadow-lg transition text-sm font-semibold"
                >
                  Apply Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-darkText text-center mb-10">
            Submit Your Application
          </h3>

          <form
            className="bg-softBeige p-10 rounded-3xl shadow-md border border-darkText/10 grid gap-6"
            noValidate
          >
            <div>
              <label className="text-darkText/80 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-elevatorOrange outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="text-darkText/80 font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-elevatorOrange outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="text-darkText/80 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-elevatorOrange outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="text-darkText/80 font-medium">Position</label>
              <select className="w-full mt-2 p-4 rounded-xl border focus:ring-2 focus:ring-elevatorOrange outline-none">
                <option>Select a job role</option>
                {jobList.map((job) => (
                  <option key={job.id}>{job.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-darkText/80 font-medium">Resume</label>
              <input
                type="file"
                className="w-full mt-2 p-4 rounded-xl border bg-white"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-elevatorOrange to-elevatorYellow 
                         text-white font-semibold shadow hover:shadow-xl transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <FloatingActions />
      <Footer />
    </>
  );
}
