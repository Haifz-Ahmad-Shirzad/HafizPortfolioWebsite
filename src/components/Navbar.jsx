// src/components/Navbar.jsx

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  FolderGit2,
  Briefcase,
  Mail,
  FileDown,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });

      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${
          isScrolled
            ? "bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/[0.05] shadow-lg"
            : "bg-transparent"
        }
        `}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}

            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3 group"
            >
              <div
                className="
                w-11 h-11 rounded-xl
                flex items-center justify-center
                bg-gradient-to-br from-[#00ff88] to-[#00d4ff]
                text-[#0a0a0f]
                font-bold
                shadow-lg shadow-[#00ff88]/20
                group-hover:scale-105
                transition-all
                "
              >
                HAS
              </div>

              <div className="leading-tight text-left">
                <h2 className="text-lg  font-semibold text-gradient  dark:text-white font-display">
                  Hafiz Ahmad Shirzad
                </h2>

                <p className="text-xs text-gradient dark:text-cyan-800 font-semibold">
                  Full Stack Developer
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}

            <div className="items-center hidden gap-1 lg:flex">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`
                  relative px-4 py-2 rounded-full
                  text-sm font-medium
                  transition-all duration-300

                  ${
                    activeSection === link.id
                      ? "bg-[#00ff88]/10 text-[#00ff88]"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                  }
                  `}
                >
                  {link.label}

                  {activeSection === link.id && (
                    <span
                      className="
                        absolute bottom-0 left-1/2
                        -translate-x-1/2
                        w-1 h-1 rounded-full
                        bg-[#00ff88]
                        "
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop Actions */}

            <div className="items-center hidden gap-3 lg:flex">
              <ThemeToggle />

              <button
                onClick={() => scrollTo("contact")}
                className="
                flex items-center gap-2
                px-5 py-2.5
                rounded-full
                bg-gradient-to-r
                from-[#00ff88]
                to-[#00d4ff]
                text-[#0a0a0f]
                font-semibold
                text-sm
                hover:scale-105
                transition-all
                "
              >
                <Mail className="w-4 h-4" />
                Hire Me
              </button>
            </div>

            {/* Mobile Actions */}

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="
                p-2 rounded-lg
                text-gray-500
                dark:text-gray-400
                hover:text-gray-900
                dark:hover:text-white
                hover:bg-black/[0.04]
                dark:hover:bg-white/[0.05]
                "
              >
                {isMobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`
        fixed inset-0 z-40 lg:hidden
        transition-all duration-300

        ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
        `}
      >
        <div
          className="absolute inset-0  bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />

        <div
          className={`
          absolute right-0 top-0
          h-full w-72
          p-6 pt-24

          bg-white
          dark:bg-[#111118]

          border-l
          border-gray-200
          dark:border-white/[0.05]

          transition-transform duration-300

          ${isMobileOpen ? "translate-x-0" : "translate-x-full"}

          `}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    transition-all

                    ${
                      activeSection === link.id
                        ? "bg-[#00ff88]/10 text-[#00ff88]"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                    }

                    `}
                >
                  <Icon className="w-4 h-4" />

                  {link.label}
                </button>
              );
            })}

            <a
              href="/Hafiz_Ahmad_Shirzad_CV.pdf"
              download
              className="
              flex items-center justify-center gap-2
              mt-4 px-5 py-3
              rounded-xl
              border
              border-gray-200
              dark:border-white/10
              text-gray-600
              dark:text-gray-300
              hover:text-[#00ff88]
              "
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="
              flex items-center justify-center gap-2
              mt-2 px-5 py-3
              rounded-xl
              bg-gradient-to-r
              from-[#00ff88]
              to-[#00d4ff]
              text-[#0a0a0f]
              font-semibold
              "
            >
              <Mail className="w-4 h-4" />
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
