import React, { useMemo, useEffect, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Logo from "../assets/avator.png";

const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/satyajitrout0307/",
  },
  {
    name: "GitHub",
    link: "https://github.com/Satyajitrout07",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/satyajitrout",
  },
];

export default function Home() {
  const roles = useMemo(() => ["Web Developer", "Software Developer"], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    let timer;

    if (!deleting && subIndex < currentRole.length) {
      timer = setTimeout(() => setSubIndex((prev) => prev + 1), 90);
    } else if (deleting && subIndex > 0) {
      timer = setTimeout(() => setSubIndex((prev) => prev - 1), 50);
    } else if (!deleting && subIndex === currentRole.length) {
      timer = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && subIndex === 0) {
      timer = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      id="home"
      className="w-full min-h-screen relative bg-black overflow-hidden flex flex-col justify-center pt-24 sm:pt-20 px-4 sm:px-0"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Background Glows */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302663] via-[#00bf8f] to-[#1cd8d2] blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302663] via-[#00bf8f] to-[#1cd8d2] blur-[120px] opacity-30 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[48rem]"
        >
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hi, I’m{" "}
            <span
              className="
                relative inline-block px-3 py-1 rounded-lg
                bg-gradient-to-r from-[#00bf8f]/20 to-[#1cd8d2]/20
                text-[#1cd8d2]
                backdrop-blur-sm
                transition-all duration-300
                hover:shadow-[0_0_25px_#1cd8d2]
              "
            >
              SatyajitRout
            </span>
            <br />
            <span
              className="
                bg-gradient-to-r from-[#00bf8f] via-[#1cd8d2] to-[#00bf8f]
                bg-[length:300%_300%]
                bg-clip-text text-transparent
                animate-[gradientMove_6s_ease_infinite]
              "
            >
              {roles[index].substring(0, subIndex)}
            </span>
            <span className="ml-1 text-[#1cd8d2] animate-pulse">|</span>
          </h1>

          {/* About */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mt-4">
            With over{" "}
            <span className="text-[#1cd8d2] font-medium">4.6 years</span> of
            hands-on experience as a{" "}
            <span className="text-[#1cd8d2] font-medium">
              Software Engineer
            </span>
            , I specialize in building scalable, high-performance web
            applications. I focus on clean architecture, modern frameworks, and
            delivering impactful digital experiences.
          </p>

          {/* Resume + Social Links */}
          <div className="mt-8 flex flex-col items-center lg:items-start gap-4 w-full sm:w-auto">
            <a
              href="/resume/Satyajit_Rout_Resume.pdf"
              download
              className="
                relative inline-flex items-center justify-center
                px-6 py-3 text-lg font-semibold
                text-black rounded-xl
                bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2]
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_30px_#1cd8d2]
              "
            >
              Resume
            </a>

            {/* Social Icons */}
            <div className="flex gap-5 mt-2">
              <a
                href={socials[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] text-2xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_#0A66C2]"
              >
                <FaLinkedin />
              </a>

              <a
                href={socials[1].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 text-2xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_#ffffff]"
              >
                <FaGithub />
              </a>

              <a
                href={socials[2].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] text-2xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_#1DA1F2]"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Avatar Logo (Desktop Only) */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-50">
        <img
          src={Logo}
          alt="Logo"
          className="w-[280px] h-[280px] xl:w-[420px] xl:h-[420px] object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_40px_#1cd8d2]"
        />
      </div>
    </section>
  );
}
