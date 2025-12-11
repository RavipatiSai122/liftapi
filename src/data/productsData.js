import img1 from "../assets/img/commercial-elevator.jpg";
import img2 from "../assets/img/commercial-elevator.jpg";
import img3 from "../assets/img/commercial-elevator.jpg";

const productsData = {
  "telescopic-auto-door": {
    title: "Telescopic Auto Door",
    description:
      "Premium telescopic door system used in commercial & industrial elevators. Offers ultra-smooth and fast opening.",
    images: [img1, img2, img3],

    features: [
      "Silent & smooth telescopic movement",
      "High-grade steel panel construction",
      "Advanced door controller compatibility",
      "Long-life rollers & guide shoes",
      "High safety sensor accuracy",
    ],

    // ⭐ NEW SECTION: TECHNICAL PARTS VARIANTS
    variants: [
      {
        label: "Door Panel Thickness",
        values: ["1.0 mm", "1.2 mm", "1.5 mm"],
      },
      {
        label: "Opening Width Options",
        values: ["700 mm", "800 mm", "900 mm", "1000 mm"],
      },
      {
        label: "Motor Type",
        values: ["PM Gearless Motor", "VVVF Door Motor", "AC Gear Motor"],
      },
      {
        label: "Door Controller",
        values: ["Siemens VVVF", "Monarch NICE3000+", "Arkel", "Inovance"],
      },
      {
        label: "Finish Options",
        values: ["Powder Coated", "Stainless Steel Hairline", "Glass Panel"],
      },
    ],

    specifications: [
      { label: "Material", value: "High-Grade Steel" },
      { label: "Usage", value: "Commercial / Industrial" },
      { label: "Operation", value: "Automatic – Telescopic" },
    ],

    // ⭐ NEW: RELATED PRODUCTS  
    related: [
      {
        title: "Auto Door Lift",
        slug: "auto-door-lift",
        image: img1,
      },
      {
        title: "Glass Auto Door",
        slug: "glass-auto-door",
        image: img2,
      },
      {
        title: "Swing Door Lift",
        slug: "swing-door-lift",
        image: img3,
      },
    ],
  },

  // Repeat for other products...
};

export default productsData;
