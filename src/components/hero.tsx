import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="section-container flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 z-10"
        >
          <p className="text-primary mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">John Developer</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground-600 mb-6">
            Full Stack Developer & UI/UX Enthusiast
          </h2>
          <p className="text-foreground-500 max-w-lg mb-8">
            I build exceptional digital experiences with modern technologies.
            Focused on creating elegant, efficient, and user-centered applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              color="primary"
              size="lg"
              radius="full"
              as="a"
              href="#projects"
              endContent={<Icon icon="lucide:arrow-right" width={18} />}
            >
              View My Work
            </Button>
            <Button
              variant="bordered"
              size="lg"
              radius="full"
              as="a"
              href="#contact"
            >
              Contact Me
            </Button>
          </div>
          <div className="flex gap-4 mt-8">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-500 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon icon="logos:github-icon" width={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-500 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon icon="logos:linkedin-icon" width={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-500 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon icon="logos:twitter" width={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary-400/20 to-primary-600/20 absolute animate-float"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-content3 relative z-10">
              <img
                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=developer"
                alt="Developer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-600/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};