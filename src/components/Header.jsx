/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
  ];

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const scrollToSection = (href) => {
    setIsMenuOpen(false);

    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative z-50 px-6 py-7">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <div className="text-3xl font-black text-white cursor-pointer">
          PORTFOLIO <span className="text-primary">.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-8 md:flex">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-base font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 text-white"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* Contact */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-base font-semibold transition-all"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } p-8 flex flex-col`}
      >
        {/* Close Button */}
        <button
          className="self-end mb-10 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-xl font-semibold text-gray-300 transition-colors hover:text-white"
              >
                {item.name}
              </button>
            </li>
          ))}

          {/* Dark Mode Toggle */}
          <li className="pt-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-3 text-xl font-semibold text-red-400 "
            >
              {darkMode ? (
                <>
                  <Sun size={20} /> Light Mode
                </>
              ) : (
                <>
                  <Moon size={20} /> Dark Mode
                </>
              )}
            </button>
          </li>

          {/* Contact Button */}
          <li className="pt-6">
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full py-4 text-lg font-bold text-white bg-primary rounded-xl"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
