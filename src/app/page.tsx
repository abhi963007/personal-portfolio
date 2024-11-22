"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"
          >
            Hi, I'm ABHIRAM A K
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            MCA Student | Full Stack Developer | Technology Enthusiast
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-4"
          >
            📍 Pala, Kerala, 686573 | 📱 073063 64765 | ✉️ abhiramak963@gmail.com
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        id="about" 
        className="w-full py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold mb-8"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              variants={fadeInUp}
              className="space-y-4"
            >
              <p className="text-gray-600 dark:text-gray-300">
                Enthusiastic MCA student at Mangalam College of Engineering, Ettumanoor with a strong foundation in AI and full-stack development. I'm passionate about technology and eager to apply my analytical skills to innovative projects.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Education</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>MCA - Mangalam College of Engineering (Expected Mar 2025)</li>
                  <li>B.S. in Physics - St. Thomas College, Pala (Mar 2022)</li>
                  <li>Higher Secondary - St. John Nepumucian's HSS (Mar 2019)</li>
                </ul>
              </div>
            </motion.div>
            <div className="space-y-4">
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C', 'HTML', 'CSS', 'JavaScript', 'Flask', 'Git', 'DBMS', 'Shell Scripting'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Malayalam', level: 'Native' },
                    { name: 'English', level: 'Fluent' },
                    { name: 'Hindi', level: 'Intermediate' }
                  ].map((language, index) => (
                    <motion.span
                      key={language.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm"
                    >
                      {`${language.name} (${language.level})`}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        id="projects" 
        className="w-full py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold mb-8"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Full Stack Development Using Python",
                description: "Developed a comprehensive web application using Python and Flask framework.",
                date: "Feb 2024 - Mar 2024"
              },
              {
                title: "Todo List Project",
                description: "Created a feature-rich todo list application with task creation, editing, and deletion capabilities using HTML, CSS, and JavaScript.",
                date: "Nov 2023 - Jan 2024"
              },
              {
                title: "Wedding Company Website",
                description: "Designed and developed the front-end of a wedding company website using HTML, CSS, and JavaScript.",
                date: "Sep 2023 - Nov 2023"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {project.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="w-full py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold mb-8"
          >
            Certifications
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Full Stack Development Using Python",
              "Git and GitHub: A Comprehensive Guide",
              "CYBERSAFE Workshop - Asthra 8.0"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow transform transition-all duration-300"
              >
                <h3 className="font-semibold mb-2">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        id="contact" 
        className="w-full py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold mb-8"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="max-w-xl mx-auto"
          >
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out!
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:abhiramak963@gmail.com"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+917306364765"
                className="px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                Call Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
