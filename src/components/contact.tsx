import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  addToast,
} from "@heroui/react";
import { Icon } from "@iconify/react";

export const Contact: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      addToast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        color: "success",
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "lucide:mail",
      label: "Email",
      value: "mirziyodabdumutalov83@gmail.com",
      href: "mirziyodabdumutalov83@gmail.com",
    },
    {
      icon: "lucide:map-pin",
      label: "Location",
      value: "Fergana, Fergana Region, Uzbekistan",
      href: "https://maps.app.goo.gl/Nv1jWnxrXBjKyRAFA",
    },
    {
      icon: "lucide:phone",
      label: "Phone",
      value: "+998916691341 ",
      href: "tel:+998916691341",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="bg-content1 relative">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <Card className="bg-content2 h-full" shadow="sm">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 transition-colors hover:text-primary"
                    >
                      <div className="p-3 bg-content3 rounded-md">
                        <Icon icon={item.icon} width={24} />
                      </div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-foreground-500">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-content3 rounded-md transition-transform hover:bg-content4 hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon icon="logos:github-icon" width={24} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-content3 rounded-md transition-transform hover:bg-content4 hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon icon="logos:linkedin-icon" width={24} />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-content3 rounded-md transition-transform hover:bg-content4 hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon icon="logos:twitter" width={24} />
                  </motion.a>
                  <motion.a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-content3 rounded-md transition-transform hover:bg-content4 hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon icon="logos:dribbble-icon" width={24} />
                  </motion.a>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
          >
            <Card className="bg-content2 h-full" shadow="sm">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    value={name}
                    onValueChange={setName}
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    label="Email"
                    placeholder="your.email@example.com"
                    value={email}
                    onValueChange={setEmail}
                    type="email"
                    variant="bordered"
                    isRequired
                  />
                  <Textarea
                    label="Message"
                    placeholder="How can I help you?"
                    value={message}
                    onValueChange={setMessage}
                    variant="bordered"
                    minRows={4}
                    isRequired
                  />
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    radius="full"
                    className="w-full"
                    isLoading={isSubmitting}
                    endContent={
                      !isSubmitting && <Icon icon="lucide:send" width={18} />
                    }
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
