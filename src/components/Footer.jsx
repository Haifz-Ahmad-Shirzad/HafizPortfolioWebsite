// src/components/Footer.jsx
import { Heart, ArrowUp, Zap } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#0a0a0f]" />
            </div>
            <span className="text-lg font-bold font-display">
              <span className="text-white block">Hafiz Ahmad Shirzad</span>
              <span className="text-[#00ff88]">Full Stack Developer</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#00ff88] transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-[#00ff88] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[#00ff88] transition-colors">
              Projects
            </a>
            <a href="#" className="hover:text-[#00ff88] transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Haifz-Ahmad-Shirzad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00ff88] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/hafiz-ahmad-shirzad-297868335"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00ff88] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:hafizahmadshirzad@gmail.com"
              className="text-gray-400 hover:text-[#00ff88] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}

          <p className="flex items-center gap-1 text-sm text-gray-500">
            © {new Date().getFullYear()} Made with{" "}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            by Hafiz Ahmad Shirzad
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
