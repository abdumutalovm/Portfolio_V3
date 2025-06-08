import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProjectCard } from "./project-card";
import housestuff from "../assets/homestuff_web.png";
import spotify from "../assets/spotify_web.png";
import applestore from "../assets/apple_web.png";
import flag from "../assets/flag_web.png";
import technostore from "../assets/technostorewe.png";

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
      title: "Apple Store",
      description: "A simple store for apple users with minimalistic design",
      image: applestore,
      tags: ["React", "Tailwind CSS", "Node.js"],
      demoUrl: "https://apple-six-murex.vercel.app/",
      codeUrl: "https://github.com/abdumutalovm/apple",
    },
    {
      id: 2,
      title: "Spotify",
      description: "A clone of Spotify listen last trend musics and enjoy",
      image: spotify,
      tags: ["React", "Tailwind CSS", "Node.js"],
      demoUrl: "https://8-month-exam-kappa.vercel.app/",
      codeUrl: "https://github.com/abdumutalovm/8-month-exam",
    },
    {
      id: 3,
      title: "AudioPhile Audio Store",
      description:
        "A modern and more protective store for people who want to buy modern audio gadgets",
      image: technostore,
      tags: ["React", "Tailwind CSS", "Node.js"],
      demoUrl: "https://7-month-exam-kappa.vercel.app/login",
      codeUrl: "https://github.com/abdumutalovm/7-month-exam",
    },
    {
      id: 4,
      title: "World Flag",
      description: "A flag finder include name, population, region and capital",
      image: flag,
      tags: ["React", "Tailwind CSS", "Node.js"],
      demoUrl: "https://5-month-exam-eight.vercel.app/",
      codeUrl: "https://github.com/abdumutalovm/5-month-exam",
    },
    {
      id: 5,
      title: "House Store",
      description: "A store for buy something for house",
      image: housestuff,
      tags: ["React", "Tailwind CSS", "Node.js"],
      demoUrl: "https://7-month-7-lesson.vercel.app/",
      codeUrl: "https://github.com/abdumutalovm/7-month-7-lesson",
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
            <ProjectCard key={project.id} project={project} index={index} />
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
