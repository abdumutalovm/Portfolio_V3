import React from "react";
import { motion } from "framer-motion";
import { Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <footer className="bg-background relative">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-semibold flex items-center gap-2 mb-4">
              <span className="gradient-text">Dev</span>
              <span>Portfolio</span>
            </a>
            <p className="text-foreground-500 mb-6 max-w-md">
              Creating elegant, efficient, and user-centered digital experiences
              with modern technologies and design principles.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-500 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="logos:github-icon" width={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-500 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="logos:linkedin-icon" width={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-500 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="logos:twitter" width={20} />
              </motion.a>
              <motion.a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-500 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="logos:dribbble-icon" width={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-foreground-500 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground-500 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-foreground-500 hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground-500 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground-500">
                <Icon icon="lucide:mail" width={16} />
                <a href="mailto:john.developer@example.com" className="hover:text-primary transition-colors">
                  john.developer@example.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground-500">
                <Icon icon="lucide:phone" width={16} />
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground-500">
                <Icon icon="lucide:map-pin" width={16} />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <Divider className="my-8" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-foreground-500 text-sm">
            © {currentYear} John Developer. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-foreground-500 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground-500 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};