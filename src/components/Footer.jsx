import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "../assets/img/nav-logo.png";

export default function Footer() {
  return (
    <footer
      className="bg-darkText text-white pt-16 pb-10 relative overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Website Footer
      </h2>

      {/* Decorative Glow (Performance Optimized) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-72 h-72 bg-elevatorOrange/20 blur-3xl rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-72 h-72 bg-elevatorYellow/20 blur-3xl rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* 1️⃣ LOGO + ABOUT */}
        <div>
          <img
            src={logo}
            alt="LiftElevator Logo"
            loading="lazy"
            className="w-40 mb-4 drop-shadow-lg"
          />

          <p className="text-white/70 leading-relaxed">
            Providing premium elevator installation, modernization,
            manufacturing & 24/7 service support with uncompromised safety.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }, i) => (
              <a
                key={i}
                href="#"
                aria-label={label}
                className="p-2 rounded-full bg-white/10 hover:bg-elevatorOrange 
                           transition flex items-center justify-center"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* 2️⃣ QUICK LINKS */}
        <nav aria-label="Quick Links">
          <h3 className="text-xl font-semibold mb-4 text-elevatorOrange">Quick Links</h3>
          <ul className="space-y-2 text-white/70">
            {["Home", "About", "Services", "Products", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* 3️⃣ OUR SERVICES */}
        <nav aria-label="Our Services">
          <h3 className="text-xl font-semibold mb-4 text-elevatorOrange">Our Services</h3>
          <ul className="space-y-2 text-white/70">
            {[
              "Elevator Installation",
              "Maintenance & Repairs",
              "Modernization",
              "Manufacturing",
              "Spare Parts Supply",
            ].map((service) => (
              <li
                key={service}
                className="hover:text-white transition cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </nav>

        {/* 4️⃣ CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-elevatorOrange">Contact Us</h3>

          <div className="flex items-start gap-3 text-white/70 mb-3">
            <MapPin size={20} className="text-elevatorYellow" aria-hidden="true" />
            <p>Hyderabad, Telangana, India</p>
          </div>

          <div className="flex items-center gap-3 text-white/70 mb-3">
            <Phone size={20} className="text-elevatorYellow" aria-hidden="true" />
            <p>+91 98765 43210</p>
          </div>

          <div className="flex items-center gap-3 text-white/70">
            <Mail size={20} className="text-elevatorYellow" aria-hidden="true" />
            <p>support@liftelevator.com</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 text-center text-white/60 text-sm border-t border-white/10 pt-6">
        © {new Date().getFullYear()} LiftElevator Services. All Rights Reserved.
      </div>
    </footer>
  );
}
