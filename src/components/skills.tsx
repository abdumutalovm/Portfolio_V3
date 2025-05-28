import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: string;
  color?: string;
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "logos:react" },
        { name: "Vue.js", icon: "logos:vue" },
        { name: "Angular", icon: "logos:angular-icon" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "HTML5", icon: "logos:html-5" },
        { name: "CSS3", icon: "logos:css-3" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "SASS", icon: "logos:sass" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Express", icon: "logos:express" },
        { name: "Python", icon: "logos:python" },
        { name: "Django", icon: "logos:django-icon" },
        { name: "PHP", icon: "logos:php" },
        { name: "Ruby", icon: "logos:ruby" },
        { name: "Java", icon: "logos:java" },
        { name: "GraphQL", icon: "logos:graphql" },
        { name: "REST API", icon: "lucide:server" },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "MySQL", icon: "logos:mysql" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "Redis", icon: "logos:redis" },
        { name: "Firebase", icon: "logos:firebase" },
        { name: "Supabase", icon: "logos:supabase-icon" },
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Git", icon: "logos:git-icon" },
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "AWS", icon: "logos:aws" },
        { name: "GitHub Actions", icon: "logos:github-actions" },
        { name: "Vercel", icon: "logos:vercel-icon" },
        { name: "Netlify", icon: "logos:netlify" },
        { name: "VS Code", icon: "logos:visual-studio-code" },
        { name: "Figma", icon: "logos:figma" },
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="bg-background relative">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Tooltip content={skill.name} placement="top">
                      <div className="w-16 h-16 bg-content2 rounded-lg flex items-center justify-center transition-transform hover:scale-110 hover:shadow-md">
                        <Icon icon={skill.icon} width={32} height={32} />
                      </div>
                    </Tooltip>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeInUp}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Other Skills & Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "UI/UX Design",
              "Responsive Design",
              "Performance Optimization",
              "SEO",
              "Accessibility",
              "Testing",
              "CI/CD",
              "Agile",
              "Scrum",
              "Technical Writing",
              "Mentoring",
              "Open Source",
            ].map((skill) => (
              <motion.span
                key={skill}
                className="skill-tag"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};