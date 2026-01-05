import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative w-full
        bg-gradient-to-b from-[#020617] via-[#0b0f2a] to-black
        text-white overflow-hidden
      "
    >
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#22d3ee] to-transparent opacity-20 blur-[140px]" />
        <div className="absolute -top-24 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#ec4899] to-transparent opacity-20 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Name / Logo */}
          <h3
            className="
              text-2xl font-bold
              bg-clip-text text-transparent
              bg-gradient-to-r from-[#22d3ee] via-[#ec4899] to-[#22d3ee]
            "
          >
            Satyajit Rout
          </h3>

          {/* Tagline */}
          <p className="text-sm text-white/60 text-center max-w-md">
            Software Developer • Backend & Full-Stack  
            <br />
            Building reliable, scalable systems.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5">
            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Satyajitrout07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
            >
              <FaGithub size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/satyajitrout0307/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#0A66C2] transition"
            >
              <FaLinkedinIn size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com/satyajitrout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#1DA1F2] transition"
            >
              <FaTwitter size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xs text-white/50"
        >
          © {new Date().getFullYear()} Satyajit Rout. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
