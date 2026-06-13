import { motion } from "motion/react";
import { Star, ShieldCheck, MapPin, Clock8, Quote } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Recommended", value: "100%", icon: <Star className="text-yellow-500" /> },
    { label: "Reviews", value: "70+", icon: <Quote className="text-primary" /> },
    { label: "Coverage", value: "Nationwide", icon: <MapPin className="text-accent" /> },
    { label: "Availability", value: "Always Open", icon: <Clock8 className="text-blue-500" /> },
  ];

  return (
    <section id="about" className="py-24 bg-[#fbfcfa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4 border border-primary-dark/10 bg-white"
          >
            <div className="relative overflow-hidden">
              <img 
                src="/images/patio_design_1781348171711.jpg" 
                alt="Our Workmanship" 
                className="w-full h-[550px] object-cover grayscale-[0.2]"
              />
              {/* Experience Badge */}
              <div className="absolute top-8 left-8 bg-primary-dark text-white p-6 z-20">
                <div className="text-3xl font-serif italic leading-none mb-1 text-primary-light">100%</div>
                <div className="text-[9px] uppercase tracking-widest font-bold opacity-80">Recommend Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase mb-6">Our Legacy</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-light italic text-primary-dark mb-10 leading-tight">
              Trusted Landscaping Experts since 2012
            </h3>
            <div className="space-y-8 text-gray-600 leading-relaxed font-sans mb-12">
              <p className="text-lg">
                Based in Birmingham, Morgan Landscaping has built a reputation for excellence across the United Kingdom. We pride ourselves on delivering high-quality garden services that prioritize reliability and classic craftsmanship.
              </p>
              <p className="text-lg">
                Whether it's the precision of a new timber fence or the timeless elegance of a stone patio, our team approaches every project with a commitment to durability and aesthetic balance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-primary-dark/10 border border-primary-dark/10">
              {stats.map((stat, i) => (
                <div key={i} className="p-8 bg-white">
                  <div className="text-2xl font-serif italic text-primary-dark mb-2">{stat.value}</div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-accent">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
