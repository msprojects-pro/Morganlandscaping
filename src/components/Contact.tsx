import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary-dark text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-primary-light uppercase mb-6">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-light italic mb-10 leading-tight">
              Start your garden <br /> Journey with us
            </h3>
            <p className="text-white/60 text-lg mb-16 leading-relaxed max-w-sm">
              Connect with our professionals for a bespoke consultation and a detailed estimate of your outdoor project.
            </p>

            <div className="space-y-12">
              <a href="tel:+447438320089" className="flex items-center gap-8 group">
                <div className="text-primary-light italic font-serif text-2xl group-hover:translate-x-2 transition-transform">&rarr;</div>
                <div>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] mb-2">Primary Line</p>
                  <p className="text-2xl font-serif tracking-tight text-white">+44 7438 320089</p>
                </div>
              </a>

              <a href="mailto:morgangardening36@gmail.com" className="flex items-center gap-8 group">
                <div className="text-primary-light italic font-serif text-2xl group-hover:translate-x-2 transition-transform">&rarr;</div>
                <div>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] mb-2">Direct Email</p>
                  <p className="text-2xl font-serif tracking-tight text-white">morgangardening36@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-8">
                <div className="text-primary-light italic font-serif text-2xl">&rarr;</div>
                <div>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] mb-2">Service Area</p>
                  <p className="text-2xl font-serif tracking-tight text-white">B20 Birmingham & Nationwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 border-8 border-primary-light/10"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-primary-dark mb-4 uppercase tracking-widest">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full pb-3 bg-transparent border-b border-primary-dark/10 focus:outline-none focus:border-primary-dark text-primary-dark transition-all placeholder:text-gray-300"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-primary-dark mb-4 uppercase tracking-widest">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full pb-3 bg-transparent border-b border-primary-dark/10 focus:outline-none focus:border-primary-dark text-primary-dark transition-all placeholder:text-gray-300"
                    placeholder="Enter phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-primary-dark mb-4 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  className="w-full pb-3 bg-transparent border-b border-primary-dark/10 focus:outline-none focus:border-primary-dark text-primary-dark transition-all placeholder:text-gray-300"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-primary-dark mb-4 uppercase tracking-widest">Project Details</label>
                <textarea 
                  rows={3} 
                  className="w-full pb-3 bg-transparent border-b border-primary-dark/10 focus:outline-none focus:border-primary-dark text-primary-dark transition-all resize-none placeholder:text-gray-300"
                  placeholder="Tell us about your requirements"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full btn-primary py-6 text-[11px]"
              >
                Request My Quote &rarr;
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
