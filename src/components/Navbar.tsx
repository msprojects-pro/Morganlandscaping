import { Phone, Mail, Facebook, Menu, X, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-light flex items-center justify-center text-white font-serif italic font-bold text-xl shadow-lg">M</div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight uppercase block leading-none ${scrolled ? 'text-primary-dark' : 'text-white'}`}>
                Morgan
              </span>
              <span className={`text-[10px] tracking-[0.4em] uppercase font-bold block mt-0.5 ${scrolled ? 'text-primary' : 'text-white/90'}`}>
                Landscaping
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-primary ${scrolled ? 'text-primary-dark' : 'text-white'}`}
              >
                {item.name}
              </a>
            ))}
            <a href="tel:+447438320089" className="bg-primary-light text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-primary-dark transition-all">
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-primary' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="tel:+447438320089"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white px-5 py-3 rounded-xl font-semibold shadow-lg shadow-primary/20"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
