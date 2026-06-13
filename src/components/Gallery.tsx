import { motion } from "motion/react";

export default function Gallery() {
  const photos = [
    {
      src: "/images/fencing_work_1781348153404.jpg",
      title: "Modern Fencing",
      category: "Fencing"
    },
    {
      src: "/images/hero_garden_1781348133574.jpg",
      title: "Garden Design",
      category: "Landscaping"
    },
    {
      src: "/images/patio_design_1781348171711.jpg",
      title: "Stone Paving",
      category: "Patio"
    },
    {
      src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2070&auto=format&fit=crop",
      title: "Lush Turf",
      category: "Turfing"
    },
    {
      src: "https://images.unsplash.com/photo-1592150621344-828ec9639a0c?q=80&w=2070&auto=format&fit=crop",
      title: "Garden Maintenance",
      category: "Outdoor Work"
    },
    {
      src: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop",
      title: "Tree Shaping",
      category: "Tree Services"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase mb-6">Visual Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-light italic text-primary-dark">
              Latest Project Highlights
            </h3>
          </motion.div>
          
          <motion.a 
            href="#contact"
            whileHover={{ letterSpacing: '0.4em' }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-dark pb-4 border-b border-primary-dark transition-all"
          >
            Start Your Project
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-dark/10 border border-primary-dark/10">
          {photos.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group h-[400px] overflow-hidden bg-white"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8 backdrop-blur-[2px]">
                <span className="text-[10px] font-bold text-primary-light uppercase tracking-[0.4em] mb-4">{item.category}</span>
                <p className="text-white text-3xl font-serif italic mb-6">{item.title}</p>
                <div className="w-12 h-px bg-white/40"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
