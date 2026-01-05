import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaLinkedinIn } from "react-icons/fa";

import m1 from "../assets/m1.jpg";

import m2 from "../assets/m2.png";
import w1 from "../assets/w1.png";

const testimonials = [
  {
    name: "Senior Engineering Manager",
    role: "Konnect.in Pvt Ltd",
    image: m1,
    linkedin: "https://www.linkedin.com/",
    feedback:
      "Satyajit consistently delivered high-quality backend solutions. His ability to design scalable APIs and optimize performance had a direct impact on system stability.",
  },
  {
    name: "Product Manager",
    role: "Healthcare Platform",
    image: w1,
    linkedin: "https://www.linkedin.com/",
    feedback:
      "He understands requirements deeply and translates them into clean, reliable implementations. His backend ownership significantly reduced production issues.",
  },
  {
    name: "Frontend Lead",
    role: "SaaS Team",
    image: m2,
    linkedin: "https://www.linkedin.com/",
    feedback:
      "Working with Satyajit was seamless. His APIs were predictable, well-structured, and easy to integrate, helping the team move faster.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  /* ---------------- Auto Slide ---------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      id="testimonial"
      className="
        relative min-h-screen w-full py-24
        bg-gradient-to-b from-[#0b0f2a] via-[#120b2d] to-[#0b1a2d]
        text-white overflow-hidden
      "
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#22d3ee] to-transparent opacity-25 blur-[160px]" />
        <div className="absolute bottom-1/4 right-0 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#ec4899] to-transparent opacity-25 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] via-[#ec4899] to-[#22d3ee]">
            Testimonials
          </h2>
          <p className="text-gray-400 mt-4">
            Trusted by teammates and leaders I’ve worked with.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={1}>
            {/* Glow Wrapper */}
            <motion.div
              key={index}
              className="relative"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glow Layer */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-[#22d3ee] via-[#ec4899] to-[#22d3ee]
                  blur-[60px] opacity-30
                "
              />

              {/* Card */}
              <motion.div
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -80) {
                    setIndex((prev) => (prev + 1) % testimonials.length);
                  } else if (info.offset.x > 80) {
                    setIndex(
                      (prev) =>
                        (prev - 1 + testimonials.length) %
                        testimonials.length
                    );
                  }
                }}
                whileHover={{
                  boxShadow:
                    "0 0 35px rgba(236,72,153,0.35), 0 0 35px rgba(34,211,238,0.35)",
                }}
                className="
                  relative rounded-2xl border border-white/10
                  bg-white/5 backdrop-blur-md
                  p-8
                "
              >
                {/* Floating sync animation */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaQuoteLeft className="text-2xl text-[#ec4899] opacity-70 mb-4" />

                  <p className="text-gray-300 leading-relaxed mb-6">
                    “{testimonials[index].feedback}”
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                    <div className="relative group">
                      <img
                        src={testimonials[index].image}
                        alt={testimonials[index].name}
                        className="w-14 h-14 rounded-full object-cover border border-white/20"
                      />

                      {/* LinkedIn Icon */}
                      <a
                        href={testimonials[index].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          absolute -bottom-1 -right-1
                          w-6 h-6 rounded-full
                          bg-[#0A66C2] text-white
                          flex items-center justify-center
                          text-xs opacity-0 scale-75
                          group-hover:opacity-100 group-hover:scale-100
                          transition
                        "
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        {testimonials[index].name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonials[index].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index
                    ? "bg-gradient-to-r from-[#22d3ee] to-[#ec4899]"
                    : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
