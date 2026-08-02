// src/components/Hero.jsx

import { useState, useEffect } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sparkles,
  MapPin,
} from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Computer Science Student",
    "React & Node.js Developer",
    "Software Engineering Enthusiast",
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && typedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setTypedText(
            currentRole.substring(
              0,
              isDeleting ? typedText.length - 1 : typedText.length + 1,
            ),
          );
        },
        isDeleting ? 40 : 70,
      );
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Haifz-Ahmad-Shirzad",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hafiz-ahmad-shirzad-297868335",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:hafizahmadshirzad@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen px-4 pt-20"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00ff88]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b44dff]/5 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status */}
        <div
          data-aos="fade-down"
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card animate-pulse-glow"
        >
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>

          <span className="text-sm text-gray-300">
            Open to Internships & Full Stack Opportunities
          </span>

          <Sparkles className="w-4 h-4 text-[#00ff88]" />
        </div>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="mb-4 text-3xl font-bold tracking-tight sm:text-3xl md:text-6xl lg:text-7xl font-display"
        >
          <span className="text-white">Hi, I'm </span>

          <span className="text-gradient">Hafiz Ahmad Shirzad</span>
        </h1>

        {/* Tagline */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gradient mb-6 text-sm font-medium bg-linear-to-r from-orange-700 to-green-300 bg-clip-text text-transparent sm:text-lg md:text-xl lg:text-2xl"
        >
          Building scalable web applications with modern technologies.
        </p>

        {/* Typing */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="h-10 mb-8 text-xl font-light text-gray-400 sm:text-2xl md:text-3xl"
        >
          <span>{typedText}</span>

          <span className="inline-block w-[3px] h-6 ml-1 bg-[#00ff88] animate-pulse align-middle"></span>
        </div>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="max-w-3xl mx-auto mb-6 text-lg leading-relaxed text-gray-400"
        >
          I'm a Computer Science student at Kandahar University and a Full Stack
          Developer passionate about building modern, scalable, and
          user-friendly web applications. I specialize in React, Node.js,
          Express, PostgreSQL, and modern JavaScript while continuously
          improving my software engineering and system design skills.
        </p>

        {/* Location */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex items-center justify-center gap-2 mb-10 text-gray-500"
        >
          <MapPin className="w-4 h-4" />
          <span>Kandahar, Afghanistan</span>
        </div>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0a0f] font-semibold text-lg hover:shadow-xl hover:shadow-[#00ff88]/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            View Projects
            <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
          </button>

          <a
            href="/Hafiz_Ahmad_Shirzad_CV.pdf"
            download
            className="px-8 py-3.5 rounded-full glass-card text-white font-semibold text-lg hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center justify-center w-12 h-12 text-gray-400 transition-all duration-300 rounded-xl glass-card hover:text-[#00ff88] hover:border-[#00ff88]/30 hover:shadow-lg hover:shadow-[#00ff88]/10"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="1200"
        className="absolute flex flex-col items-center gap-2 text-gray-500 -translate-x-1/2 bottom-8 left-1/2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>

        <div className="flex items-start justify-center w-5 h-8 p-1 border-2 border-gray-600 rounded-full">
          <div className="w-1 h-2 rounded-full bg-[#60c998] animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
