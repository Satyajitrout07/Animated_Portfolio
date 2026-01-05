import { FaJava, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiDocker,
  SiMongodb,
  SiAngular,
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { motion } from "framer-motion";
import astr from "../assets/Astra.png";

export default function Skill() {

  const skills = [
    { icon: <FaJava />, name: "Java", color: "#f97316" },
    { icon: <FaReact />, name: "React", color: "#22d3ee" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#e5e7eb" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3b82f6" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38bdf8" },
    { icon: <SiFastapi />, name: "FastAPI", color: "#22c55e" },
    { icon: <SiPython />, name: "Python", color: "#fde047" },
    { icon: <SiDocker />, name: "Docker", color: "#0ea5e9" },
    { icon: <DiNodejsSmall />, name: "Node.js", color: "#4ade80" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#16a34a" },
    { icon: <SiAngular />, name: "Angular", color: "#ef4444" },
  ];

  const repeated = [...skills, ...skills];

  return (
    <section
      id="skill"
      className="min-h-screen w-full flex flex-col items-center justify-start relative bg-black text-white overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 -translate-y-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="mt-1 z-10 text-white/70 -translate-y-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Modern Application || Modern Technology.
      </motion.p>

      {/* Skills Slider */}
      <div className="relative w-full overflow-hidden -mt-2">
        <motion.div
          className="flex"
          animate={{ x: [-100, 100] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        >
          {repeated.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 group"
            >
              <motion.span
                className="text-4xl mb-2"
                style={{ color: skill.color, opacity: 0.65 }}
                whileHover={{ opacity: 1, scale: 1.15 }}
                transition={{ duration: 0.25 }}
              >
                {skill.icon}
              </motion.span>

              <span className="text-white/80 text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Astronaut logo — enhanced subtle animation */}
      <motion.img
        src={astr}
        alt="Astronaut"
        className="
          absolute bottom-4 left-1/2 -translate-x-1/2
          w-[240px] sm:w-[280px]
          opacity-80 pointer-events-none
        "
        animate={{
          y: [0, -12, 0],
          rotate: [-2, 2, -2],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
