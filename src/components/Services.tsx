import { motion } from "motion/react";
import { 
  Fence, 
  Sprout, 
  Layers, 
  Trash2, 
  Trees, 
  Brush, 
  Waves, 
  Hammer, 
  House, 
  Shovel,
  CheckCircle2
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Garden Landscaping",
      desc: "Complete garden transformations designed to suit your lifestyle and enhance property value.",
      icon: <Sprout className="w-8 h-8" />,
    },
    {
      title: "Fencing & Repairs",
      desc: "Quality timber fencing installation and expert repairs for security and privacy.",
      icon: <Fence className="w-8 h-8" />,
    },
    {
      title: "Patio & Paving",
      desc: "Beautifully laid stone slabs and paving for durable and stylish outdoor living spaces.",
      icon: <Layers className="w-8 h-8" />,
    },
    {
      title: "Decking",
      desc: "Custom timber and composite decking solutions for perfect outdoor entertainment areas.",
      icon: <Hammer className="w-8 h-8" />,
    },
    {
      title: "Turfing & Artificial Grass",
      desc: "Lush green real turfing or low-maintenance premium artificial grass installation.",
      icon: <Shovel className="w-8 h-8" />,
    },
    {
      title: "Garden Clearance",
      desc: "Rubbish removal and complete site clearance for neglected outdoor spaces.",
      icon: <Trash2 className="w-8 h-8" />,
    },
    {
      title: "Tree Cutting",
      desc: "Professional tree pruning, shaping, and removal services by experienced handlers.",
      icon: <Trees className="w-8 h-8" />,
    },
    {
      title: "Jetwashing",
      desc: "High-pressure cleaning for driveways, patios, and outdoor surfaces to look brand new.",
      icon: <Waves className="w-8 h-8" />,
    },
    {
      title: "Driveways",
      desc: "Durable and attractive driveway options including slabbing and paving.",
      icon: <House className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase mb-6">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-serif italic text-primary-dark mb-8">
              Professional Garden Services
            </h3>
            <div className="w-20 h-px bg-primary-dark/20 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Crafting exceptional outdoor environments through dedicated workmanship and meticulous attention to detail.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-primary-dark/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="service-card border-r border-b border-primary-dark/10 flex flex-col items-start"
            >
              <div className="w-10 h-10 bg-primary-light flex items-center justify-center text-white mb-8">
                {service.icon}
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary-dark mb-6">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
                {service.desc}
              </p>
              <span className="text-[9px] font-bold uppercase tracking-tighter text-accent italic opacity-60">
                Premium Workmanship
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
