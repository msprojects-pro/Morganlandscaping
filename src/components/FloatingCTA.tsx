import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/447438320089"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/20"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Main Call Button (Desktop/Mobile) */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+447438320089"
        className="w-14 h-14 bg-primary-light text-white flex items-center justify-center shadow-xl border-2 border-white"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
