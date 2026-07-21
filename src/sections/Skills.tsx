import { motion } from "framer-motion";
import {
  SiHtml5,
  
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiMysql,
  
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVite,
  SiFigma,
  SiIntellijidea,
  SiEclipseide,
  SiApachemaven,
  SiJsonwebtokens,
} from "react-icons/si";

import {
  FaJava,
  FaDatabase,
  FaCode,
  FaBrain,
  FaUsers,
  FaPlug,
  FaLayerGroup,
  FaProjectDiagram,
  FaClock,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";

import { MdApi } from "react-icons/md";
import { TbTopologyStar3 } from "react-icons/tb";

import type { IconType } from "react-icons";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import skillsData from "../data/skills.json";

const iconMap: Record<string, IconType> = {
  // Programming Languages
  html: SiHtml5,
  css: SiTailwindcss,
  javascript: SiJavascript,
  java: FaJava,
  database: FaDatabase,

  // Frontend
  react: SiReact,
  vite: SiVite,
  tailwind: SiTailwindcss,
  responsive: FaCode,
  figma: SiFigma,

  // Backend
  nodejs: SiNodedotjs,
  express: SiExpress,
  spring: SiSpring,
  springboot: SiSpringboot,
  hibernate: SiHibernate,
  jpa: FaDatabase,
  jdbc: FaDatabase,
  api: MdApi,
  plug: FaPlug,
  json: SiJsonwebtokens,

  // Databases
  mongodb: SiMongodb,
  mysql: SiMysql,
  oracle: FaDatabase,

  // Engineering
  mern: FaLayerGroup,
  oop: FaProjectDiagram,
  dsa: TbTopologyStar3,
  brain: FaBrain,
  collection: FaLayerGroup,
  shield: FaCode,
  threads: FaProjectDiagram,
  file: FaCode,
  edit: FaCode,

  // AI
  ai: FaBrain,
  prompt: FaCode,

  // Developer Tools
  git: SiGit,
  github: SiGithub,
  vscode: FaCode,
  intellij: SiIntellijidea,
  eclipse: SiEclipseide,
  maven: SiApachemaven,
  postman: SiPostman,
  docker: SiDocker,

  // Professional Skills
  leadership: FaUsers,
  team: FaUsers,
  communication: FaUsers,
  management: FaUsers,
  clock: FaClock,
  analytics: FaBrain,
  rocket: FaRocket,
  refresh: FaCode,
  graduation: FaGraduationCap,
};

const colorMap: Record<string, string> = {
  html: "#E34F26",
  css: "#1572B6",
  javascript: "#F7DF1E",
  java: "#ED8B00",

  react: "#61DAFB",
  vite: "#646CFF",
  tailwind: "#06B6D4",
  responsive: "#8B5CF6",
  figma: "#F24E1E",

  nodejs: "#339933",
  express: "#FFFFFF",
  spring: "#6DB33F",
  springboot: "#6DB33F",
  hibernate: "#59666C",
  jpa: "#59666C",
  jdbc: "#4479A1",
  api: "#00BFFF",
  plug: "#A855F7",
  json: "#000000",

  mongodb: "#47A248",
  mysql: "#4479A1",
  oracle: "#F80000",

  git: "#F05032",
  github: "#FFFFFF",
  vscode: "#007ACC",
  intellij: "#FE315D",
  eclipse: "#2C2255",
  maven: "#C71A36",
  postman: "#FF6C37",
  docker: "#2496ED",

  database: "#3B82F6",
  mern: "#10B981",
  oop: "#F59E0B",
  dsa: "#8B5CF6",
  brain: "#EC4899",
  collection: "#0EA5E9",
  shield: "#14B8A6",
  threads: "#8B5CF6",
  file: "#F97316",
  edit: "#10B981",

  ai: "#8B5CF6",
  prompt: "#F59E0B",

  leadership: "#3B82F6",
  team: "#06B6D4",
  communication: "#F97316",
  management: "#8B5CF6",
  clock: "#10B981",
  analytics: "#EC4899",
  rocket: "#EF4444",
  refresh: "#14B8A6",
  graduation: "#6366F1",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative bg-bg-secondary/30"
      aria-label="Skills section"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I use to build scalable, modern, and impactful software solutions."
        />

        {skillsData.categories.map((category) => (
          <div key={category.name} className="mb-10">
            <h3 className="text-lg font-semibold text-white/80 mb-5 font-[family-name:var(--font-heading)]">
              {category.name}
            </h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {category.skills.map((skill) => {
                const Icon = iconMap[skill.icon] || FaCode;
                const color = colorMap[skill.icon] || "#8B5CF6";

                return (
                  <motion.div key={skill.name} variants={cardVariants}>
                    <GlassCard className="p-4 md:p-5 text-center group">
                      <motion.div
                        whileHover={{
                          y: -8,
                          scale: 1.05,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        <Icon
                          className="mx-auto text-3xl md:text-4xl mb-3 transition-colors"
                          style={{ color }}
                        />

                        <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                          {skill.name}
                        </p>
                      </motion.div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}