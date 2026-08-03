// src/components/Experience.jsx
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  Building2,
  FileText,
} from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "IT Intern",
    company: "Ministry of Finance",
    location: "Kabul, Afghanistan",
    period: "2026",
    description:
      "Completed an IT internship focused on practical software engineering, networking, database systems, and IT infrastructure.",
    highlights: [
      "Gained experience with enterprise IT environments",
      "Learned networking and system administration practices",
      "Observed professional software development workflows",
    ],
    tech: [
      "Networking",
      "Database Systems",
      "System Administration",
      "Software Engineering",
    ],
    color: "border-l-[#00d4ff]",
    glow: "shadow-[#00d4ff]/10",
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Luilala.com",
    location: "Kandahar, Afghanistan",
    period: "2025 - Present",
    description:
      "Worked as a Frontend Developer building responsive and user-focused web interfaces. Collaborated on improving user experience and implementing modern frontend practices.",
    highlights: [
      "Developed responsive user interfaces using React and modern JavaScript",
      "Implemented reusable components and improved frontend structure",
      "Worked with Tailwind CSS for efficient UI development",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Git"],
    color: "border-l-[#00ff88]",
    glow: "shadow-[#00ff88]/10",
  },

  {
    type: "work",
    title: "Frontend Developer Intern",
    company: "CodeAlpha",
    location: "Remote",
    period: "2025",
    description:
      "Completed a frontend development internship focused on building practical web applications and improving frontend development skills.",
    highlights: [
      "Built multiple frontend projects including portfolio and interactive applications",
      "Improved JavaScript and React development skills",
      "Practiced clean code and responsive design principles",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "GitHub"],
    color: "border-l-[#b44dff]",
    glow: "shadow-[#b44dff]/10",
  },

  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "Kandahar University",
    location: "Kandahar, Afghanistan",
    period: "2023 - Present",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science with focus on software engineering, databases, networking, artificial intelligence, and web development.",
    highlights: [
      "Studying Software Engineering and System Design",
      "Developing full-stack applications using modern technologies",
      "Working on academic and real-world software projects",
    ],
    tech: [
      "Software Engineering",
      "Database Systems",
      "Networking",
      "Artificial Intelligence",
    ],
    color: "border-l-[#ffdd57]",
    glow: "shadow-[#ffdd57]/10",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <span className="text-[#00ff88] text-sm font-medium tracking-widest uppercase">
            Experience
          </span>
          <h2 className="mt-3 mb-4 text-4xl font-bold md:text-5xl font-display">
            <span className="text-white">My </span>
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            A timeline of professional growth and learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff88]/50 via-[#00d4ff]/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className={`relative pl-10 md:pl-16 border-l-2 ${exp.color} transition-all duration-300 hover:shadow-lg ${exp.glow}`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[9px] md:-left-[9px] top-2 w-4 h-4 rounded-full border-2 ${
                    exp.type === "education"
                      ? "border-[#ffdd57] bg-[#ffdd57]/20"
                      : "border-[#00ff88] bg-[#00ff88]/20"
                  }`}
                >
                  <div
                    className={`absolute inset-1 rounded-full ${
                      exp.type === "education" ? "bg-[#ffdd57]" : "bg-[#00ff88]"
                    }`}
                  />
                </div>

                <div className="p-6 rounded-2xl glass-card">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === "education"
                          ? "bg-[#ffdd57]/10 text-[#ffdd57]"
                          : "bg-[#00ff88]/10 text-[#00ff88]"
                      }`}
                    >
                      {exp.type === "education" ? (
                        <GraduationCap className="inline w-3 h-3 mr-1" />
                      ) : (
                        <Briefcase className="inline w-3 h-3 mr-1" />
                      )}
                      {exp.type === "education" ? "Education" : "Work"}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  </div>

                  <h3 className="mb-1 text-xl font-bold text-white font-display">
                    {exp.title}
                  </h3>
                  <p className="text-[#00ff88] font-medium mb-3 flex items-center gap-1">
                    <Building2 className="w-4 h-4" /> {exp.company}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  {exp.highlights.length > 0 && (
                    <ul className="mb-4 space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Tags */}
                  {exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] text-xs text-gray-400 border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <div data-aos="fade-up" className="mt-16 text-center">
          <a
            href="/Hafiz_Resume.pdf"
            download
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0a0f] font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
