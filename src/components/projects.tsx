import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProjectCard } from "./project-card";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce analytics with real-time data visualization and inventory management.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      demoUrl: "https://demo.com/ecommerce",
      codeUrl: "https://github.com/johndoe/ecommerce-dashboard",
    },
    {
      id: 2,
      title: "Social Media App",
      description: "A modern social media platform with real-time messaging, post sharing, and user interactions.",
      image: "https://img.heroui.chat/image/ai?w=600&h=400&u=2",
      tags: ["React Native", "Firebase", "Redux", "Express"],
      demoUrl: "https://demo.com/social",
      codeUrl: "https://github.com/johndoe/social-media-app",
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A collaborative task management tool with drag-and-drop interface, team assignments, and progress tracking.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
      tags: ["Vue.js", "GraphQL", "MongoDB", "Docker"],
      demoUrl: "https://demo.com/tasks",
      codeUrl: "https://github.com/johndoe/task-management",
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image: "https://img.heroui.chat/image/ai?w=600&h=400&u=4",
      tags: ["Flutter", "Firebase", "TensorFlow", "Node.js"],
      demoUrl: "https://demo.com/fitness",
      codeUrl: "https://github.com/johndoe/fitness-tracker",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="bg-content1 relative">
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <Button
            color="primary"
            variant="bordered"
            radius="full"
            size="lg"
            endContent={<Icon icon="lucide:external-link" width={18} />}
            as="a"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};