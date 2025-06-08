import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="bg-background relative">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Get to know me and my background in software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <div className="relative">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img
                  src="https://img.heroui.chat/image/ai?w=600&h=600&u=developer-coding"
                  alt="Developer at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold ml-2">8+</span>
                <span className="text-white text-xs ml-1">Months Exp.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              A new FrontEnd Developer based in Ferghana, Uzbekistan
            </h3>
            <p className="text-foreground-500">
              I'm a FrontEnd developer with a passion for creating beautiful,
              functional, and user-centered digital experiences. With 8+ month
              of experience in web development, I am always looking for new and
              innovative ways to bring my clients' visions to life.
            </p>
            <p className="text-foreground-500">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>

            <Divider className="my-6" />

            <div className="grid grid-cols-2 gap-4">
              <Card shadow="none" className="bg-content2">
                <CardBody className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <Icon
                        icon="lucide:code"
                        className="text-primary"
                        width={24}
                      />
                    </div>
                    <div>
                      <p className="font-medium">Development</p>
                      <p className="text-xs text-foreground-500">Web</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card shadow="none" className="bg-content2">
                <CardBody className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <Icon
                        icon="lucide:layout"
                        className="text-primary"
                        width={24}
                      />
                    </div>
                    <div>
                      <p className="font-medium">UI/UX Design</p>
                      <p className="text-xs text-foreground-500">
                        User-Centered
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card shadow="none" className="bg-content2">
                <CardBody className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <Icon
                        icon="lucide:database"
                        className="text-primary"
                        width={24}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card shadow="none" className="bg-content2">
                <CardBody className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <Icon
                        icon="lucide:cloud"
                        className="text-primary"
                        width={24}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
