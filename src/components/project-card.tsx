import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Project } from "./projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      variants={fadeInUp}
    >
      <Card className="bg-content2 overflow-visible h-full" shadow="sm">
        <CardBody className="p-0 overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-foreground-500 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Chip key={tag} size="sm" variant="flat" color="primary">
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex justify-between gap-2 pt-0">
          <Button
            size="sm"
            variant="flat"
            color="primary"
            radius="full"
            as="a"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            endContent={<Icon icon="lucide:external-link" width={16} />}
          >
            Live Demo
          </Button>
          <Button
            size="sm"
            variant="light"
            radius="full"
            as="a"
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            endContent={<Icon icon="lucide:github" width={16} />}
          >
            View Code
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};