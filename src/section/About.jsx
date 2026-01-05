import { motion } from "framer-motion";
import satya from "../assets/satya.png";

export default function About() {
  const stats = [
    { label: "Experience", value: "4.6+ Years" },
    { label: "Speciality", value: "Backend" },
  ];

  const glow = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "-bottom-10 -right-10 w-[360px] h-[360px] opacity-20 blur-[120px] delay-300",
    "top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[150px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div>
        {glow.map((c, i) => (
          <div
            key={i}
            className={`absolute ${c} rounded-full bg-gradient-to-r from-[#302663] via-[#00bf8f] to-[#1cd8d2] animate-pulse`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Profile Image */}
          <motion.div
            className="
              relative w-[190px] h-[190px]
              rounded-2xl overflow-hidden shadow-2xl
              bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20
              border border-[#1cd8d2]/20
            "
          >
            <img
              src={satya}
              alt="Satyajit Rout"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left gap-4">
            <h2
              className="
                text-4xl sm:text-5xl font-extrabold tracking-tight
                bg-clip-text text-transparent
                bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]
              "
            >
              Satyajit Rout
            </h2>

            <p className="text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer
            </p>

            <p className="text-white/80 leading-relaxed max-w-2xl">
              I am a passionate Full Stack Developer with over 4.6 years of
              experience in building scalable, high-performance web
              applications. I specialize in backend systems, APIs, and clean
              architecture while delivering seamless frontend experiences.
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="
                    rounded-xl border border-white/10
                    bg-white/5 px-4 py-3 text-center
                  "
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="
                  px-5 py-2.5 rounded-lg
                  bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2]
                  text-black text-sm font-semibold
                  transition hover:scale-105
                  hover:shadow-[0_0_20px_#1cd8d2]
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  px-5 py-2.5 rounded-lg
                  border border-[#1cd8d2]/40
                  text-[#1cd8d2] text-sm font-semibold
                  transition hover:bg-[#1cd8d2]/10
                "
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* Animated About Me Section (Slightly Raised) */}
        <motion.div
          className="mt-8 text-center md:text-left flex flex-col gap-3 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-[#00bf8f]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            About me
          </motion.h3>

          <motion.p
            className="text-white/80 leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I am a Software Developer with 4.6+ years of experience building
            scalable web applications and backend systems. I specialize in
            clean architecture, RESTful APIs, and delivering seamless user
            experiences.
          </motion.p>

          <motion.p
            className="text-white/80 font-semibold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Software Developer || Backend & Full-Stack || Building Reliable Systems
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
