import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductPage";
import Careers from "./pages/Careers";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/clients" element={<Clients />} />

        {/* CAREERS PAGE */}
        <Route path="/careers" element={<Careers />} /> 

        <Route path="/contact" element={<Contact />} />
        {/* PRODUCT DETAILS PAGE */}
        <Route path="/products/:slug" element={<ProductDetails />} />
        
       
      </Routes>

    </BrowserRouter>
  );
}
