import { Heart, ArrowUp, Zap, Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Haifz-Ahmad-Shirzad",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hafiz-ahmad-shirzad-297868335",
      icon: Linkedin,
    },
    {
      name: "X",
      href: "https://x.com/HafizAhmad6mk",
      icon: SiX,
    },
    {
      name: "Email",
      href: "mailto:hafizahmadshirzad@gmail.com",
      icon: Mail,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Branding */}
          <div className="flex flex-col items-start space-y-5">
            <a
              href="#home"
              aria-label="Hafiz Ahmad Shirzad, back to home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00ff88] to-[#00d4ff]">
                <Zap className="h-5 w-5 text-[#0a0a0f]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Hafiz Ahmad Shirzad
                </h3>
                <p className="text-xs font-medium text-[#00ff88]">
                  Full Stack Developer
                </p>
              </div>
            </a>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Building modern web applications with clean code, thoughtful
              architecture, and user-focused experiences.
            </p>

            <p className="text-sm font-medium text-gray-500">
              I love intelligence and intelligent people.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col items-start">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-10 gap-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#00ff88] focus-visible:outline-none focus-visible:text-[#00ff88]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-start">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Let's Connect
            </h3>

            <p className="mb-5 max-w-sm text-sm leading-7 text-gray-400">
              Have a project, opportunity, or technical discussion in mind? Feel
              free to reach out.
            </p>

            <a
              href="mailto:hafizahmadshirzad@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#00ff88] transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target={name === "Email" ? undefined : "_blank"}
                  rel={name === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={name}
                  title={name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff88]/40 hover:bg-[#00ff88]/10 hover:text-[#00ff88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88]"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-7 sm:flex-row">
          <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-xs leading-6 text-gray-500 sm:justify-start">
            <span>© {currentYear} Hafiz Ahmad Shirzad.</span>
            <span className="inline-flex items-center gap-1">
              Made with
              <Heart className="h-3.5 w-3.5 shrink-0 fill-red-400 text-red-400" />
            </span>
            <span>All rights reserved.</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff88]/40 hover:bg-[#00ff88]/10 hover:text-[#00ff88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88]"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
