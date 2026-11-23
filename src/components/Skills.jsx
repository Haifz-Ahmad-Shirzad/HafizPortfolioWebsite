import { useState } from "react";

import {
  FaCss3Alt,
  FaDatabase,
  FaProjectDiagram,
  FaCodeBranch,
  FaLaptopCode,
  FaServer,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiPrisma,
  SiJsonwebtokens,
  SiNpm,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    tagline: "Crafting responsive and interactive user interfaces",
    icon: FaLaptopCode,
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React Router", icon: SiReact, color: "#CA4245" },
      { name: "Responsive Design", icon: FaMobileAlt, color: "#38BDF8" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    title: "Backend",
    tagline: "Building APIs and managing application logic",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#CBD5E1" },
      { name: "REST API", icon: FaProjectDiagram, color: "#14B8A6" },
      { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#FFFFFF" },
      { name: "API Integration", icon: FaCodeBranch, color: "#14B8A6" },
      { name: "Axios", icon: FaCodeBranch, color: "#5A29E4" },
      { name: "Authentication", icon: FaShieldAlt, color: "#22C55E" },
      { name: "Server-side Development", icon: FaServer, color: "#F59E0B" },
    ],
  },
  {
    title: "Databases",
    tagline: "Designing, querying and managing data systems",
    icon: FaDatabase,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Oracle Database", icon: FaDatabase, color: "#F80000" },
      { name: "SQL", icon: FaDatabase, color: "#38BDF8" },
      { name: "Database Design", icon: FaProjectDiagram, color: "#14B8A6" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#8C8C8C" },
      { name: "Data Modeling", icon: FaDatabase, color: "#F59E0B" },
    ],
  },
  {
    title: "Tools",
    tagline: "Development, collaboration and productivity",
    icon: FaCodeBranch,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#CBD5E1" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
      { name: "Linux", icon: FaServer, color: "#FCC624" },
      { name: "Prisma Studio", icon: SiPrisma, color: "#8C8C8C" },
    ],
  },
  {
    title: "Learning",
    tagline: "Expanding my software engineering knowledge",
    icon: FaProjectDiagram,
    skills: [
      { name: "TypeScript", icon: SiJavascript, color: "#3178C6" },
      { name: "System Design", icon: FaProjectDiagram, color: "#00D4FF" },
      {
        name: "Software Architecture",
        icon: FaProjectDiagram,
        color: "#00FF88",
      },
      { name: "Cybersecurity", icon: FaShieldAlt, color: "#22C55E" },
      { name: "API Security", icon: FaServer, color: "#14B8A6" },
      { name: "Advanced SQL", icon: FaDatabase, color: "#336791" },
      { name: "Design Patterns", icon: FaProjectDiagram, color: "#F59E0B" },
      { name: "Backend Architecture", icon: FaCodeBranch, color: "#8B5CF6" },
    ],
  },
];

const additionalSkills = [
  "Agile Development",
  "Clean Code",
  "Problem Solving",
  "Object-Oriented Programming",
  "Git Workflow",
  "Debugging",
  "Software Testing",
  "Responsive Development",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const active = skillCategories[activeCategory];

  return (
    <section id="skills" className="relative overflow-hidden px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <span className="text-sm font-medium tracking-widest uppercase text-neon">
            My Expertise
          </span>

          <h2 className="mt-3 mb-4 font-display text-2xl font-bold md:text-4xl">
            <span className="text-white">Technologies </span>
            <span className="text-gradient">I Work With</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            A carefully selected toolkit for building modern, scalable and
            user-focused software solutions.
          </p>
        </div>

        {/* Category Navigation */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mb-12 flex flex-wrap justify-center gap-3"
          role="group"
          aria-label="Technology categories"
        >
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            const isActive = activeCategory === index;

            return (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveCategory(index)}
                aria-pressed={isActive}
                className={`flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-neon/40 bg-gradient-to-r from-neon/15 to-neon-blue/15 text-neon shadow-lg shadow-neon/10"
                    : "border-white/5 glass-card text-gray-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <CategoryIcon className="text-base" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Introduction */}
        <div key={active.title} data-aos="fade-up" className="mb-8 text-center">
          <h3 className="text-xl font-semibold text-white">{active.title}</h3>

          <p className="mt-2 text-sm text-gray-400">{active.tagline}</p>
        </div>

        {/* Technology Grid */}
        <div
          key={`skills-${activeCategory}`}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {active.skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <article
                key={skill.name}
                data-aos="zoom-in"
                data-aos-delay={index * 60}
                className="group relative flex min-h-40 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-white/5 glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/30"
              >
                {/* Hover Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${skill.color}22, transparent 70%)`,
                  }}
                />

                {/* Technology Icon */}
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    color: skill.color,
                    boxShadow: `0 0 0 1px ${skill.color}30`,
                  }}
                >
                  <Icon aria-hidden="true" />
                </div>

                {/* Technology Name */}
                <h4 className="relative text-center text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </h4>

                {/* Bottom Accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-1/2"
                  style={{ backgroundColor: skill.color }}
                />
              </article>
            );
          })}
        </div>

        {/* Additional Technologies */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-16 overflow-hidden rounded-3xl glass-card p-7 md:p-10"
        >
          <div className="mb-8 text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-neon">
              Beyond The Stack
            </span>

            <h3 className="mt-3 text-xl font-semibold text-white">
              Additional Skills & Concepts
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Other tools, techniques and engineering practices.
            </p>
          </div>

          {/* Technology Marquee */}
          <div className="group/marquee relative overflow-hidden">
            {/* Edge Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent md:w-20" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent md:w-20" />

            {/* Moving Content */}
            <div className="flex w-max animate-marquee motion-reduce:animate-none group-hover/marquee:[animation-play-state:paused]">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  className="flex shrink-0 items-center gap-3 pr-3"
                  aria-hidden={group === 1}
                >
                  {additionalSkills.map((tech) => (
                    <span
                      key={tech}
                      className="whitespace-nowrap rounded-full border border-white/10 glass-card px-4 py-2.5 text-sm text-zinc-400 transition-all duration-300 hover:border-neon/30 hover:text-neon"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
