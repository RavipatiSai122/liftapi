import { useEffect } from "react";
import { setSEO } from "../utils/seo";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Manufacturing from "../components/Manufacturing";
import Testimonials from "../components/Testimonials";
import GalleryPreview from "../components/GalleryPreview";
import Industries from "../components/Industries";
import FAQ from "../components/FAQ";
import Clients from "../components/Clients";
import FloatingActions from "../components/FloatingActions";

export default function Home() {

useEffect(() => {
  setSEO({
    title: "Lift & Elevator Company | Premium Elevator Installation, Manufacturing & AMC",
    description:
      "India’s leading elevator manufacturing company offering installation, modernization, AMC maintenance, and premium lift solutions for homes, commercial, and industrial buildings.",
    keywords:
      "elevator company, lift manufacturer, elevator installation, lift service, AMC elevator maintenance, elevator modernization, home lifts, commercial elevators, industrial lifts",
    image: "https://yourdomain.com/og-home.jpg",

    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Lift Elevator Company – Home",
      url: window.location.href,
      description:
        "Premium elevator manufacturing, installation, AMC service, and modernization with 14+ years of engineering excellence.",

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
            item: window.location.href,
          },
        ],
      },

      // ⭐ WEBSITE SCHEMA FOR GOOGLE INDEXING
      website: {
        "@type": "WebSite",
        name: "Lift Elevator Company",
        url: "https://yourdomain.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://yourdomain.com/search?q={query}",
          "query-input": "required name=query",
        },
      },

      // ⭐ ORGANIZATION SCHEMA
      organization: {
        "@type": "Organization",
        name: "Lift Elevator Company",
        url: "https://yourdomain.com",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 9876543210",
          email: "info@liftelevator.com",
          contactType: "customer service",
          availableLanguage: "English",
        },
        sameAs: [
          "https://facebook.com",
          "https://instagram.com",
          "https://linkedin.com",
        ],
      },

      // ⭐ SERVICES SCHEMA
      services: {
        "@type": "Service",
        serviceType: "Elevator Installation, Modernization & Maintenance",
        provider: {
          "@type": "Organization",
          name: "Lift Elevator Company",
        },
      },

      // ⭐ PRODUCTS SCHEMA FOR HOMEPAGE GRID
      products: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "Product", name: "Passenger Elevator" },
          { "@type": "Product", name: "Home Lift" },
          { "@type": "Product", name: "Hospital Elevator" },
          { "@type": "Product", name: "Goods Lift" },
        ],
      },

      // ⭐ FAQ RICH RESULTS (GOOGLE FEATURED SNIPPET)
      faq: {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you provide AMC maintenance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer annual maintenance contracts (AMC) with 24/7 emergency support.",
            },
          },
          {
            "@type": "Question",
            name: "Do you install elevators for commercial buildings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we install elevators for residential towers, commercial complexes, hospitals, and industrial factories.",
            },
          },
          {
            "@type": "Question",
            name: "Are your elevators certified?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All our elevators follow ISO and European EN81 safety standards.",
            },
          },
        ],
      },

      // ⭐ SOCIAL SHARE IMAGE OBJECT
      imageGallery: {
        "@type": "ImageObject",
        contentUrl: "https://yourdomain.com/banner-image.jpg",
        description: "Premium elevator installations and cabin designs",
      },
    },
  });
}, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
       <Products/>
       <Manufacturing/>
        <Industries/>
      <WhyChooseUs />
      <Testimonials/>
      <GalleryPreview/>
      <FAQ/>
      <Clients/>
      <CTA />
      <FloatingActions />
      <Footer />
    </>
  );
}
