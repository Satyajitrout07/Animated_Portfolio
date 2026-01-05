import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS ERROR →", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="
        relative w-full min-h-screen
        flex items-center justify-center
        bg-gradient-to-b from-[#020617] via-[#0b0f2a] to-[#0b1a2d]
        p-8
      "
    >
      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          w-full max-w-xl
          rounded-3xl bg-white/5 backdrop-blur-xl
          border border-white/10
          p-8 text-white
        "
      >
        <h2
          className="
            text-3xl font-bold text-center mb-2
            bg-clip-text text-transparent
            bg-gradient-to-r from-[#22d3ee] via-[#ec4899] to-[#22d3ee]
          "
        >
          Contact Me
        </h2>

        <p className="text-center text-white/70 mb-8">
          Let’s build something meaningful together 🚀
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="input-dark"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="input-dark"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="input-dark resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "sending"}
            type="submit"
            className="
              w-full flex items-center justify-center gap-2
              py-3 rounded-xl font-semibold
              text-black
              bg-gradient-to-r from-[#22d3ee] to-[#ec4899]
            "
          >
            {status === "idle" && (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
            {status === "sending" && "Sending..."}
          </motion.button>
        </form>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-400 text-center flex gap-2 justify-center"
            >
              <FaCheckCircle /> Message sent successfully
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-red-400 text-center flex gap-2 justify-center"
            >
              <FaTimesCircle /> Something went wrong
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Input styles */}
      <style jsx>{`
        .input-dark {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
          outline: none;
        }
      `}</style>
    </section>
  );
}
