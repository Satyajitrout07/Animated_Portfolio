

import { AnimatePresence, motion } from "framer-motion";
import { FiXCircle } from "react-icons/fi";

export default function OverlayMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            <FiXCircle />
          </button>

          {/* Menu */}
          <ul className="space-y-6 text-center">
            {[
              "Home",
              "About",
              "Projects",
              "Skill",
              "Contact",
              "Testimonial",
              "Experience",
            ].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="text-white text-2xl font-medium hover:underline"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
