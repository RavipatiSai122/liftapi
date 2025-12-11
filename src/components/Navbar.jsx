import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/img/nav-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Products", to: "/products" },
    { name: "Gallery", to: "/gallery" },
    { name: "Clients", to: "/clients" },
    { name: "Careers", to: "/careers" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav
        className="fixed w-full bg-white shadow-sm backdrop-blur-md z-50"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Lift Logo"
              loading="lazy"
              className="cursor-pointer"
              style={{ height: "80px", width: "220px" }}
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 lg:gap-10 font-medium text-lg">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="hover:text-elevatorOrange transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-darkText"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden bg-white shadow-inner overflow-hidden transition-all duration-300
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="flex flex-col gap-4 py-4 px-6 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block hover:text-elevatorOrange transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Spacer — avoids content jumping behind navbar */}
      <div className="h-20"></div>
    </>
  );
}
