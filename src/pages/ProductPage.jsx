import { useEffect } from "react";
import { setSEO } from "../utils/seo";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Products from "../components/Products";
import FloatingActions from "../components/FloatingActions";

export default function ProductsPage() {

  // ---------------- Product List for SEO Schema ----------------
  const productList = [
    {
      name: "Home Elevator",
      image: "/assets/img/product1.jpg",
      description: "Compact and energy-efficient home elevator for luxury residences."
    },
    {
      name: "Commercial Elevator",
      image: "/assets/img/product2.jpg",
      description: "High-capacity commercial elevator designed for offices and malls."
    },
    {
      name: "Hospital Elevator",
      image: "/assets/img/product3.jpg",
      description: "Stretcher-friendly hospital elevator with advanced safety systems."
    },
    {
      name: "Industrial Goods Lift",
      image: "/assets/img/product4.jpg",
      description: "Heavy-duty goods lift engineered for factories and warehouses."
    }
  ];

  // ---------------------- SEO SETUP ---------------------------
  useEffect(() => {
    setSEO({
      title: "Elevator Products | Premium Lift Systems & Solutions",
      description:
        "Explore premium elevator systems including home lifts, commercial elevators, hospital lifts, goods lifts, and automatic doors.",
      keywords:
        "elevator products, lift products, commercial elevator, home lift, hospital elevator, goods lift, elevator components",
      image: productList[0].image,

      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Elevator Products - Lift Elevator Company",
        url: window.location.href,
        description:
          "A catalog of premium elevators including home lifts, commercial lifts, hospital elevators, and industrial lifts.",

        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://yourdomain.com/" },
            { "@type": "ListItem", position: 2, name: "Products", item: window.location.href },
          ],
        },

        mainEntity: {
          "@type": "ItemList",
          itemListElement: productList.map((p, index) => ({
            "@type": "Product",
            name: p.name,
            image: p.image,
            description: p.description,
            position: index + 1,
          })),
        },

        publisher: {
          "@type": "Organization",
          name: "Lift Elevator Company",
          logo: "https://yourdomain.com/logo.png",
        },
      },
    });
  }, []);
  // ------------------------------------------------------------

  return (
    <>
      <Navbar />

      <Banner
        title="Our Products"
        subtitle="Explore premium elevator systems, components & lift solutions."
      />

      <Products />

      <FloatingActions />
      <Footer />
    </>
  );
}