import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navColor = scrolled ? "#1a1a4e" : "rgba(0,0,0,0)";
  const textColor = scrolled ? "#EDE98C" : "#1a1a4e";
  const linkHover = scrolled ? "hover:opacity-60" : "hover:opacity-40";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        backgroundColor: navColor,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between"
      style={{ paddingTop: scrolled ? "1rem" : "1.5rem", paddingBottom: scrolled ? "1rem" : "1.5rem" }}
    >
      <motion.div
        animate={{ color: textColor }}
        transition={{ duration: 0.3 }}
        className="font-heading font-black tracking-tight text-lg uppercase select-none"
      >
        {scrolled ? "Kai Feng" : ""}
      </motion.div>

      <motion.div
        animate={{ color: textColor }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex items-center gap-10 font-bold text-base tracking-wide"
      >
        <a href="#about" className={`${linkHover} transition-opacity uppercase`}>About</a>
        <a href="#work" className={`${linkHover} transition-opacity uppercase`}>Work</a>
        <a href="#contact" className={`${linkHover} transition-opacity uppercase`}>Contact</a>
      </motion.div>

      <motion.div
        animate={{ color: textColor }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4"
      >
        <a
          href="https://www.linkedin.com/in/kai-feng-084601b0/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkHover} transition-opacity`}
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </motion.div>
    </motion.nav>
  );
}
