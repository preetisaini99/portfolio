"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skills = [
  "Next.js 13+", "React.js", "Headless WordPress", "WPGraphQL",
  "Node.js", "JavaScript (ES6+)", "SASS/SCSS", "ISR / SSR / CSR / SSG", "SEO",
  "Vercel", "WooCommerce", "PHP", "Laravel", "REST API",
  "Git / GitHub", "Claude", "Codex", "GPT", "GPT Plus", "Antigravity", "Cursor"
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        <div className={styles.titleUnderline}></div>
      </motion.div>

      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.05,
              scale: { type: "spring", stiffness: 300, damping: 10 }
            }}
            className={styles.skillPill}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
