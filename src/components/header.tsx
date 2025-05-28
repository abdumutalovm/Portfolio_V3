import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold flex items-center gap-2">
          <span className="gradient-text">Dev</span>
          <span>Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground-600 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <Button
            color="primary"
            variant="flat"
            radius="full"
            as="a"
            href="#contact"
            className="ml-2"
          >
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          isIconOnly
          variant="light"
          className="md:hidden"
          onPress={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} width={24} />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-content1 border-t border-divider"
        >
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 text-foreground-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              color="primary"
              variant="flat"
              radius="full"
              as="a"
              href="#contact"
              className="mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};