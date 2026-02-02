"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Heart,
  Sparkles,
  Globe,
  Calendar,
  Coffee,
  User,
  CircleQuestionMark,
  MessageSquare,
  Rocket,
  Zap,
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hammadarshad481@gmail.com",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 3439319228",
      color: "from-green-400 to-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rawalpindi, Pakistan",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-[var(--color-accent)] rounded-full opacity-30"
      animate={{
        y: [-20, -40, -20],
        x: [-10, 10, -10],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3,
      }}
      style={{
        top: `${20 + i * 15}%`,
        left: `${10 + i * 15}%`,
      }}
    />
  ));

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative bg-[var(--color-bg-primary)] px-6 sm:px-10 lg:px-20 py-24 sm:py-32 overflow-hidden"
    >
      {/* Floating Background Elements */}
      {floatingElements}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent transform -skew-y-12 translate-y-32"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <MessageSquare size={48} className="text-[var(--color-accent)]" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[var(--color-text-primary)] mb-4">
            Let's Connect!
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-[var(--color-accent)] mx-auto rounded-full w-24"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-2 mt-4 sm:mt-6 text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto px-4"
          >
            <Sparkles size={20} className="text-[var(--color-accent)]" />
            <p>
              Ready to bring your ideas to life? Let's create something amazing
              together!
            </p>
            <Heart size={20} className="text-[var(--color-accent)]" />
          </motion.div>
        </motion.div>

        {/* Enhanced Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
          {/* Left Column - Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col"
          >
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-2xl lg:rounded-3xl bg-[var(--color-bg-surface)] backdrop-blur-sm border-0 sm:border border-[var(--color-border)] shadow-none sm:shadow-lg lg:shadow-2xl h-full flex flex-col">
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)] flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="animate-pulse" />
                Get in Touch
              </motion.h3>

              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4 flex-1">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="relative group"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-transparent sm:bg-[var(--color-bg-card)] backdrop-blur-sm border-0 sm:border border-[var(--color-border)] hover:bg-[var(--color-bg-card-hover)] transition-all duration-300">
                      <div
                        className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${info.color} border-0 sm:border border-[var(--color-border)] shadow-none sm:shadow-md lg:shadow-lg`}
                      >
                        <info.icon size={20} className="text-[var(--color-accent)]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-[var(--color-accent)] font-semibold text-sm sm:text-base">
                            {info.label}
                          </p>
                        </div>
                        <p className="text-[var(--color-text-primary)] font-medium text-sm sm:text-base break-words">{info.value}</p>
                      </div>
                      {hoveredCard === index && (
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Sparkles size={16} className="text-[var(--color-accent)]" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-4 sm:mt-6 p-4 sm:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl bg-transparent sm:bg-[var(--color-bg-card)] backdrop-blur-sm border-0 sm:border border-[var(--color-border)]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Coffee size={20} className="text-[var(--color-accent)]" />
                  <Globe size={20} className="text-[var(--color-accent)]" />
                  <Calendar size={20} className="text-[var(--color-accent)]" />
                </div>
                <p className="text-[var(--color-text-primary)] leading-relaxed text-sm sm:text-base">
                  I'm always excited to discuss new opportunities, creative
                  ideas, or potential collaborations. Whether you have a project
                  in mind or just want to chat about tech, let's build something
                  meaningful together!
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col"
          >
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-2xl lg:rounded-3xl bg-[var(--color-bg-surface)] backdrop-blur-sm border-0 sm:border border-[var(--color-border)] shadow-none sm:shadow-lg lg:shadow-2xl h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Rocket size={24} className="text-[var(--color-accent)]" />
                <h4 className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
                  Send me a message
                </h4>
              </div>

              <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] text-sm sm:text-base rounded-lg sm:rounded-xl border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all duration-300"
                    />
                    <span className="text-lg absolute right-3 top-3">
                      <User className="text-[var(--color-text-muted)]" />
                    </span>
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] text-sm sm:text-base rounded-lg sm:rounded-xl border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all duration-300"
                    />
                    <span className="text-lg absolute right-3 top-3">
                      <Mail className="text-[var(--color-text-muted)]" />
                    </span>
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative group"
                >
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] text-sm sm:text-base rounded-lg sm:rounded-xl border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all duration-300"
                  />
                  <span className="text-lg absolute right-3 top-3">
                    <Phone className="text-[var(--color-text-muted)]" />
                  </span>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative group"
                >
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] text-sm sm:text-base rounded-lg sm:rounded-xl border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all duration-300"
                  />
                  <span className="text-lg absolute right-3 top-3"><CircleQuestionMark className="text-[var(--color-text-muted)]" /></span>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative group flex-1"
                >
                  <textarea
                    name="message"
                    placeholder="Tell me about your project ideas..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full h-full min-h-[100px] sm:min-h-[120px] px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] text-sm sm:text-base rounded-lg sm:rounded-xl border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all duration-300 resize-none"
                  ></textarea>
                  <span className="text-lg absolute right-3 top-3"><MessageCircle className="text-[var(--color-text-muted)]" /></span>
                </motion.div>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-bold text-base sm:text-lg rounded-lg sm:rounded-xl hover:opacity-90 transition-all duration-300 shadow-none sm:shadow-lg group"
                  onClick={() => console.log("Form submitted with:", formData)}
                >
                  <span>Send Message</span>
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Send size={20} />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Fun Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-bg-surface)] rounded-full border border-[var(--color-border)]">
            <span className="text-xs sm:text-sm text-[var(--color-text-muted)]">
              Usually responds within 24 hours
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap size={16} className="text-[var(--color-accent)]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
