import { useState, useEffect } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/logo.png";
import { TiThMenuOutline } from "react-icons/ti";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const [section, setSection] = useState("home");

  /* ===== LIVE SYSTEM CLOCK ===== */
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ===== SCROLL SECTION INDICATOR ===== */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      let current = "home";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) {
          current = sec.id;
        }
      });
      setSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="
          fixed top-0 left-0 w-full z-50
          flex items-center justify-between px-6 py-4
          bg-black/70 backdrop-blur-md
        "
      >
        {/* LEFT — LOGO + ID */}
        {typeof window !== "undefined" && window.location.pathname === "/" && (
          <div className="hidden lg:flex items-center gap-4">
            <img src={Logo} alt="Logo" className="w-8 h-8" />

            <span
              className="
                relative font-mono text-[18px] font-semibold
                tracking-[0.25em]
                bg-gradient-to-r from-green-400 to-cyan-400
                bg-clip-text text-transparent
              "
            >
              SATYAJIT@localhost
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-green-400 to-cyan-400 opacity-70" />
            </span>
          </div>
        )}

        {/* CENTER — SCROLL INDICATOR */}
        <div className="hidden lg:flex items-center gap-3 font-mono text-xs text-cyan-300 opacity-80">
          <span className="w-10 h-[1px] bg-cyan-400/40" />
          ~/ {section}
          <span className="w-10 h-[1px] bg-cyan-400/40" />
        </div>

        {/* RIGHT — CLOCK + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {/* LIVE CLOCK */}
          <div className="font-mono text-sm text-green-400 tracking-widest">
            {time}
          </div>

          <a
            href="#contact"
            className="
              px-5 py-2 rounded-xl text-white font-semibold
              bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
              hover:opacity-90 transition-all duration-300
              shadow-lg shadow-cyan-500/20
            "
          >
            Reach Out
          </a>
        </div>

        {/* MOBILE MENU */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-3xl lg:hidden focus:outline-none"
        >
          <TiThMenuOutline />
        </button>
      </nav>

      {/* OVERLAY MENU */}
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
