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
    skills: [
      { name: "HTML5", icon: SiHtml5, level: 95, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, level: 92, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, level: 90, color: "#F7DF1E" },
      { name: "React", icon: SiReact, level: 88, color: "#61DAFB" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: 90,
        color: "#06B6D4",
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 82, color: "#339933" },
      {
        name: "Express.js",
        icon: SiExpress,
        level: 80,
        color: "gray",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: 80,
        color: "#336791",
      },
      { name: "MySQL", icon: SiMysql, level: 78, color: "#4479A1" },
      {
        name: "REST API",
        icon: SiFastapi,
        level: 82,
        color: "#009688",
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, level: 88, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, level: 88, color: "gray" },
      { name: "VS Code", icon: VscVscode, level: 95, color: "#007ACC" },
      { name: "Vite", icon: SiVite, level: 88, color: "#646CFF" },
      { name: "Postman", icon: SiPostman, level: 82, color: "#FF6C37" },
    ],
  },

  {
    title: "Learning",
    skills: [
      { name: "JWT", icon: SiJsonwebtokens, level: 72, color: "#ffffff" },
      { name: "Prisma ORM", icon: SiPrisma, level: 70, color: "#2D3748" },
      { name: "MongoDB", icon: SiMongodb, level: 65, color: "#47A248" },
      {
        name: "Software Architecture",
        icon: FaProjectDiagram,
        level: 70,
        color: "#00ff88",
      },
      {
        name: "System Design",
        icon: FaProjectDiagram,
        level: 60,
        color: "#00d4ff",
      },
    ],
  },
];
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
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
                  ? "bg-linear-to-r from-neon to-neon-blue text-dark-900shadow-lg shadow-neon/20"
                  : "glass-card text-gray-400 hover:text-white hover:bg-white/4"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid gap-6">
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="p-5 transition-all duration-300 rounded-2xl glass-card glass-card-hover"
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center w-12 h-12 text-2xl rounded-xl"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    color: skill.color,
                  }}
                >
                  <skill.icon />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="font-mono text-sm text-neon">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/4">
                    <div
                      className="h-full transition-all duration-1000 ease-out rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                        boxShadow: `0 0 20px ${skill.color}30`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="p-8 mt-16 text-center rounded-3xl glass-card"
        >
          <h3 className="mb-6 text-lg font-semibold text-white ">
            Also experienced with
          </h3>
          <div className="flex flex-wrap justify-center gap-3 section-text ">
            {[
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
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm transition-all duration-300 rounded-full cursor-default glass-card text-zinc-400 hover:text-neon hover:border-neon/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
