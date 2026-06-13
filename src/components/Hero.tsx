import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[850px] md:h-screen flex items-center pt-40 md:pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_garden_1781348133574.jpg"
          alt="Beautiful Landscaped Garden"
          className="w-full h-full object-cover grayscale-[0.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/70 to-primary-dark/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-8"
          >
            <span className="inline-block px-5 py-2 mb-10 text-[11px] font-bold tracking-[0.5em] text-white uppercase bg-accent/90 backdrop-blur-md shadow-xl">
              Established 2012
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light text-white leading-[1.1] md:leading-[1.02] mb-10 italic drop-shadow-sm">
              Expert Landscaping <br className="hidden sm:block" />
              <span className="text-white/75"> & Garden</span> Services
            </h1>
            <div className="w-24 h-1 bg-primary mb-10"></div>
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-lg font-sans">
              Transforming outdoor spaces with professional landscaping, fencing, and decking. Birmingham based, nationwide coverage.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                whileHover={{ y: -4, backgroundColor: "#166534" }}
                transition={{ duration: 0.3 }}
                href="tel:+447438320089"
                className="btn-primary !bg-white !text-primary-dark hover:!text-white border-2 border-white text-center"
              >
                Get a Free Quote
              </motion.a>
              <motion.a
                whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.3 }}
                href="#services"
                className="btn-secondary !text-white !border-white/40 hover:!border-white text-center"
              >
                Explore Services
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-sm text-gray-300">
                  <span className="font-bold text-white">70+ Reviews</span> (100% Recommended)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
