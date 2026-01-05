import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function IntroAnimations({ onFinish }) {
  const greetings = useMemo(
    () => [
      "Hello, World!",
      "ନମସ୍କାର 🙏",
      "Bienvenue!",
      "¡Hola, Mundo!",
      "Hallo, Welt!",
      "Ciao, Mondo!",
      "こんにちは、世界！",
      "안녕하세요, 세계!",
      "مرحبا بالعالم!",
      "Привет, мир!",
      "שלום, עולם!",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const id = setTimeout(() => setIndex((i) => i + 1), 900);
      return () => clearTimeout(id);
    } else {
      const t = setTimeout(() => {
        setVisible(false);
        if (onFinish) onFinish();
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [index, greetings.length, onFinish]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.h1
            key={index}
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {greetings[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
