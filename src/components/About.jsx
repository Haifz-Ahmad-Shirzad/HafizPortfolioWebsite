// src/components/About.jsx
import { Code, Palette, Rocket, Users, Zap } from "lucide-react";
import profileImage from "../assets/images/hafiz.jpg";

const stats = [
  { value: "7th", label: "Semester Student" },
  { value: "10+", label: "Projects Built" },
  { value: "2", label: "Internships & Experience" },
  { value: "20+", label: "Technologies Learned" },
];

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    desc: "Building maintainable and scalable applications following software engineering principles.",
  },
  {
    icon: Palette,
    title: "Modern UI",
    desc: "Creating responsive and user-friendly interfaces with React and Tailwind CSS.",
  },
  {
    icon: Rocket,
    title: "Full Stack",
    desc: "Developing complete web applications using React, Node.js, Express.js, and PostgreSQL.",
  },
  {
    icon: Users,
    title: "Continuous Learning",
    desc: "Always exploring new technologies, improving problem-solving skills, and growing as a software engineer.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          data-aos="fade-up"
          className="mb-16 text-center section-title section-text"
        >
          <span className="text-neon text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="mt-3 mb-4 text-4xl font-bold md:text-5xl font-display">
            <span className="text-white">Learning</span>
            <span className="text-gradient"> Building & Growing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Computer Science student and Full Stack Developer passionate about
            building modern, responsive, and scalable web applications while
            continuously improving software engineering skills.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Image/Visual */}
          <div data-aos="fade-right" data-aos-duration="800">
            <div className="relative">
              <div
                className="
    relative
    w-full
    min-h-[430px]
    sm:min-h-[520px]
    lg:min-h-[620px]
    rounded-3xl
    glass-card
    overflow-hidden
  "
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#00ff88]/10 via-transparent to-[#b44dff]/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="
    mx-auto mb-6
    w-40 h-40
    sm:w-48 sm:h-48
    md:w-56 md:h-56
    lg:w-64 lg:h-64
    overflow-hidden
    rounded-full
    border-4 border-[#00ff88]
    shadow-2xl shadow-[#00ff88]/20
    bg-[#111118]
    shrink-0
  "
                    >
                      <img
                        src={profileImage}
                        alt="Hafiz Ahmad Shirzad"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Hafiz Ahmad Shirzad
                    </h3>
                    <p className="text-gray-400">
                      Computer Science Student | Full Stack Developer
                    </p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 hidden sm:flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl glass-card">
                  <Code className="w-8 h-8 text-[#00ff88]" />
                </div>
                <div className="absolute bottom-4 left-4 hidden sm:flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl glass-card">
                  <Zap className="w-6 h-6 text-[#ffdd57]" />
                </div>
              </div>
              {/* Glow effect behind */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#00ff88]/10 via-[#00d4ff]/10 to-[#b44dff]/10 blur-2xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div data-aos="fade-left" data-aos-duration="800">
            <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl font-display">
              A dedicated developer with a{" "}
              <span className="text-gradient">creative spark</span>
            </h3>
            <p className="mb-6 leading-relaxed text-gray-400">
              I am a Computer Science student at Kandahar University with a
              strong passion for software engineering and full-stack web
              development. I enjoy transforming ideas into real-world
              applications using modern technologies while continuously learning
              and improving my skills.
            </p>
            <p className="mb-8 leading-relaxed text-gray-400">
              Currently, I focus on React, Node.js, Express.js, PostgreSQL,
              Tailwind CSS, and JavaScript. I enjoy solving real-world problems
              through software development, exploring new technologies, and
              contributing to projects that create meaningful impact.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  className="p-4 transition-all duration-300 rounded-2xl glass-card glass-card-hover"
                >
                  <item.icon className="w-6 h-6 text-[#00ff88] mb-2" />
                  <h4 className="mb-1 text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative p-6 overflow-hidden text-center rounded-2xl glass-card shimmer"
            >
              <div className="mb-1 text-3xl font-bold md:text-4xl font-display text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
