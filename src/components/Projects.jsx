// src/components/Projects.jsx
import { useState } from "react";
import { ExternalLink, Github, Star, GitFork, Eye } from "lucide-react";

const projects = [
  {
    title: "Pharmaceutical Wholesale Management System",
    description:
      "A full-stack enterprise management system for pharmaceutical wholesalers. Includes authentication, role-based access control, product management, suppliers, purchases, inventory tracking, and REST APIs.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
    ],
    github: "https://github.com/Haifz-Ahmad-Shirzad",
    live: null,
    stats: {
      stars: 0,
      forks: 0,
    },
    featured: true,
    color: "from-emerald-500/20 to-cyan-500/20",
    borderColor: "border-emerald-500/20",
    icon: "💊",
  },

  {
    title: "Virtual Reality Landing Page",
    description:
      "A modern and immersive landing page for a virtual reality platform.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Haifz-Ahmad-Shirzad",
    live: "https://virtual-r-hafiz.vercel.app/",
    featured: true,
    icon: "🥽",
  },
  {
    title: "Atlantic Oil & Lubricants Website",
    description:
      "A responsive business website developed for Atlantic Oil & Lubricants to showcase company information, products, and services with a modern user interface.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "GitHub Pages"],
    github: "https://github.com/Haifz-Ahmad-Shirzad/atlantic-oil-website",
    live: "https://haifz-ahmad-shirzad.github.io/atlantic-oil-website/",
    stats: {
      stars: 0,
      forks: 0,
    },
    featured: true,
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/20",
    icon: "🏭",
  },
  {
    title: "Statistics Data Analysis Project",
    description:
      "A data analysis project using Python to process large datasets, generate statistical reports, and provide insights through data visualization.",
    tags: ["Python", "Pandas", "Scikit-learn", "Flask", "Data Analysis"],
    github: "https://github.com/Haifz-Ahmad-Shirzad",
    live: null,
    stats: {
      stars: 0,
      forks: 0,
    },
    featured: false,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/20",
    icon: "📊",
  },

  {
    title: "Developer Portfolio Website",
    description:
      "A modern personal portfolio website built to showcase my skills, projects, experience, and journey as a Full Stack Developer.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Haifz-Ahmad-Shirzad",
    live: null,
    stats: {
      stars: 0,
      forks: 0,
    },
    featured: false,
    color: "from-teal-500/20 to-green-500/20",
    borderColor: "border-teal-500/20",
    icon: "🚀",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <span className="text-[#00ff88] text-sm font-medium tracking-widest uppercase">
            Projects
          </span>
          <h2 className="mt-3 mb-4 text-4xl font-bold md:text-5xl font-display">
            <span className="text-white">Featured </span>
            <span className="text-gradient">Work</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            A selection of projects that showcase my skills and passion for
            building great products.
          </p>
        </div>

        {/* Filter */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex justify-center gap-3 mb-12"
        >
          {["all", "featured"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                filter === f
                  ? "bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0a0f] shadow-lg shadow-[#00ff88]/20"
                  : "glass-card text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
                project.featured && i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
              />
              <div
                className={`absolute inset-0 border ${project.borderColor} rounded-3xl`}
              />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col min-h-[280px]">
                {/* Project Icon/Preview */}
                <div className="flex items-center justify-center mb-4 text-2xl w-14 h-14 rounded-2xl glass-card">
                  {project.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-[#00ff88] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-gray-300 rounded-full glass-card"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" /> {project.stats?.stars ?? 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />{" "}
                      {project.stats?.forks ?? 0}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-[#00ff88]"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-[#00ff88]"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                    hoveredIndex === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent rounded-3xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-white text-[#0a0a0f] font-semibold flex items-center gap-2 hover:shadow-xl transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div data-aos="fade-up" className="mt-12 text-center">
          <a
            href="https://github.com/Haifz-Ahmad-Shirzad"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full glass-card text-white font-semibold inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
