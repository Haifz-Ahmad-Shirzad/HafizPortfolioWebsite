import { useState } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiExpress,
  SiMysql,
  SiPostman,
  SiVite,
  SiPrisma,
  SiMongodb,
  SiJsonwebtokens,
  SiFastapi,
} from "react-icons/si";
import { FaCss3Alt, FaProjectDiagram } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    tagline: "Pixel-perfect, performant interfaces",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    tagline: "APIs, data, and server logic",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#cbd5e1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "REST API", icon: SiFastapi, color: "#009688" },
    ],
  },
  {
    title: "Tools",
    tagline: "The daily workflow",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#cbd5e1" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    title: "Learning",
    tagline: "Currently leveling up",
    skills: [
      { name: "JWT", icon: SiJsonwebtokens, color: "#ffffff" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      {
        name: "Software Architecture",
        icon: FaProjectDiagram,
        color: "#00ff88",
      },
      { name: "System Design", icon: FaProjectDiagram, color: "#00d4ff" },
    ],
  },
];

const alsoExperienced = [
  "Express.js",
  "REST API",
  "JWT Authentication",
  "Prisma ORM",
  "Oracle Database",
  "SQL",
  "Responsive Design",
  "React Router",
  "Axios",
  "npm",
  "GitHub",
  "Agile Development",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const active = skillCategories[activeCategory];

  return (
    <section id="skills" className="relative px-4 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-12 text-center">
          <span className="text-sm font-medium tracking-widest uppercase text-neon">
            Skills
          </span>
          <h2 className="mt-3 mb-4 text-xl font-bold md:text-4xl font-display">
            <span className="text-white">Technologies </span>
            <span className="text-gradient">I Work With</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            A comprehensive toolkit that enables me to build end-to-end
            solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? "bg-gradient-to-r from-neon to-neon-blue text-dark-900 shadow-lg shadow-neon/20"
                  : "glass-card text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Tagline */}
        <p
          key={active.title}
          data-aos="fade"
          className="mb-8 text-center text-sm uppercase tracking-[0.2em] text-gray-500"
        >
          {active.tagline}
        </p>

        {/* Bento Grid of Skill Tiles */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {active.skills.map((skill, i) => (
            <div
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={i * 60}
              className="group relative flex flex-col items-center justify-center gap-3 p-6 overflow-hidden transition-all duration-300 rounded-2xl glass-card glass-card-hover hover:-translate-y-1"
              style={{ "--skill-color": skill.color }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${skill.color}22, transparent 70%)`,
                }}
              />
              {/* Icon */}
              <div
                className="relative flex items-center justify-center w-14 h-14 text-3xl rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${skill.color}15`,
                  color: skill.color,
                  boxShadow: `0 0 0 1px ${skill.color}30`,
                }}
              >
                <skill.icon />
              </div>
              {/* Name */}
              <span className="relative text-sm font-medium text-center text-gray-300 transition-colors group-hover:text-white">
                {skill.name}
              </span>
              {/* Bottom accent */}
              <span
                className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-1/2 rounded-full"
                style={{ backgroundColor: skill.color }}
              />
            </div>
          ))}
        </div>

        {/* Marquee — Also Experienced With */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative p-8 mt-16 overflow-hidden rounded-3xl glass-card"
        >
          <h3 className="mb-6 text-lg font-semibold text-center text-white">
            Also experienced with
          </h3>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

          <div className="flex overflow-hidden group/marquee">
            <div className="flex shrink-0 gap-3 animate-marquee group-hover/marquee:[animation-play-state:paused]">
              {[...alsoExperienced, ...alsoExperienced].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="whitespace-nowrap px-4 py-2 text-sm rounded-full glass-card text-zinc-400 hover:text-neon hover:border-neon/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
