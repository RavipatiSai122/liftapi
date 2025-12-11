import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import productsData from "../data/productsData";
import Banner from "../components/Banner";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = productsData[slug];

  if (!product)
    return (
      <>
        <Navbar />
        <div className="py-32 text-center text-3xl font-bold text-darkText">
          Product Not Found
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
    
<Banner 
  title="Our Products"
  subtitle="High-performance elevator systems for every need."
  buttonText="Explore More"
  buttonLink="/contact"
/>


      {/* MAIN SECTION */}
      <section className="pt-20 pb-28 bg-gradient-to-br from-[#FFF7F1] via-[#FFE9DD] to-[#FFF7F1]">
        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-darkText mb-3"
          >
            {product.title}
          </motion.h1>

          <p className="text-darkText/70 text-lg max-w-3xl mb-10">
            {product.subText || "Engineered with precision and designed for long-term performance."}
          </p>

          {/* TOP GRID */}
          <div className="grid md:grid-cols-2 gap-16">

            {/* ================= LEFT IMAGE GALLERY ================ */}
            <div className="space-y-5">

              {/* MAIN IMAGE */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-3xl overflow-hidden shadow-xl border border-softBeige"
              >
                <img
                  src={product.images[0]}
                  className="w-full h-[430px] object-cover"
                />
              </motion.div>

              {/* THUMBNAILS — FIXED NO GAP ISSUE */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.06 }}
                    className="rounded-2xl overflow-hidden border border-softBeige shadow"
                  >
                    <img src={img} className="w-full h-28 object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ================= RIGHT CONTENT ================ */}
            <div className="space-y-10">

              {/* DESCRIPTION BLOCK */}
              <div className="bg-white shadow-lg border border-softBeige/70 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-darkText mb-3">Product Overview</h3>
                <p className="text-darkText/70 leading-relaxed">{product.description}</p>
              </div>

              {/* FEATURES */}
              <div className="bg-white shadow-lg border border-softBeige/70 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-darkText mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex gap-2 text-darkText/80">
                      <span className="text-elevatorOrange font-bold">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* VARIANTS */}
              <div className="bg-white shadow-lg border border-softBeige/70 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-darkText mb-3">Available Variants</h3>
                <div className="space-y-4">
                  {product.variants.map((v, i) => (
                    <div key={i}>
                      <p className="font-semibold text-darkText">{v.label}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {v.values.map((val, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#FFF0E7] text-darkText border border-softBeige rounded-lg shadow-sm text-sm"
                          >
                            {val}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SPECIFICATION TABLE */}
              <div className="bg-white shadow-lg border border-softBeige/70 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-darkText mb-3">Specifications</h3>

                <table className="w-full rounded-xl overflow-hidden">
                  <tbody>
                    {product.specifications.map((s, i) => (
                      <tr
                        key={i}
                        className="border-b border-softBeige last:border-none"
                      >
                        <td className="px-4 py-3 bg-[#FFF3EB] text-darkText font-semibold">
                          {s.label}
                        </td>
                        <td className="px-4 py-3 text-darkText/80">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CTA BUTTON */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="block text-center px-8 py-4 rounded-xl bg-gradient-to-r 
                from-elevatorOrange to-elevatorYellow text-white font-semibold 
                shadow-lg hover:shadow-xl transition"
              >
                Request a Quote →
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RELATED PRODUCTS SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-extrabold text-darkText mb-10">
            Related Products
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {product.related.map((item, i) => (
              <Link to={`/products/${item.slug}`} key={i}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl border border-softBeige overflow-hidden shadow hover:shadow-xl transition"
                >
                  <img src={item.image} className="h-48 w-full object-cover" />
                  <div className="p-4 font-semibold text-darkText">
                    {item.title}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
