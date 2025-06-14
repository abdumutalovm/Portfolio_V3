import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            isIconOnly
            color="primary"
            radius="full"
            size="lg"
            className="shadow-lg"
            onPress={scrollToTop}
          >
            <Icon icon="lucide:chevron-up" width={24} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};