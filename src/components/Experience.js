"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Senior Next.js / React Developer",
    company: "Egnoto Private Limited",
    date: "Aug 2025 – Present",
    description: [
      "Developed and delivered full-stack web projects using Next.js, React.js, SASS, Headless WordPress, and WooCommerce with Git/GitHub version control and Vercel deployment.",
      "Integrated Node.js for backend logic and API handling within headless WordPress architecture projects.",
      "Leveraged AI-assisted development tools including Claude (Anthropic), GitHub Copilot, Codex by OpenAI, GPT Plus, Gemini by Google, Antigravity by Google, and Cursor to accelerate development workflows and code quality.",
      "Built and deployed two production Next.js + Headless WordPress projects: Viking Barns and Viking Metal Garages."
    ]
  },
  {
    role: "Team Leader & Senior Headless WordPress / Next.js Developer",
    company: "Future Profilez Pvt. Ltd.",
    date: "Feb 2022 – Jul 2025",
    description: [
      "Led a team of junior WordPress and frontend developers, reviewing code and ensuring delivery standards.",
      "Designed and developed complete Next.js projects from scratch — including UI/UX design, component architecture, SCSS styling, and full frontend implementation.",
      "Architected headless WordPress solutions using Next.js 13+ App Router with Server Components, ISR, dynamic routing, and advanced SEO optimisation.",
      "Integrated WPGraphQL alongside WordPress REST API to serve structured content to decoupled Next.js frontends efficiently.",
      "Managed frontend deployments on Vercel with Git-based CI/CD workflows and environment-based configuration.",
      "Developed custom WordPress plugins from scratch including payment gateway integrations, AI content tools, warehouse sync systems, and booking solutions.",
      "Integrated third-party APIs: ZOHO CRM, Sendrum, Bizzybee, Copymatic, SpinWriter, BRONID, GreenID.",
      "Implemented SCSS/SASS for scalable, maintainable, responsive frontend styling across all projects.",
      "Drove website performance using Google Lighthouse standards; managed cross-browser compatibility testing.",
      "Owned weekly feature releases, prepared test plans, tracked bugs, and coordinated sprint meetings."
    ]
  },
  {
    role: "PHP / WordPress Developer",
    company: "CMIT Experts LLP",
    date: "Jan 2021 – Feb 2022",
    description: [
      "Developed WordPress themes and plugins, customised WooCommerce stores.",
      "Integrated REST APIs and third-party services into client websites.",
      "Collaborated on PHP/Laravel backend development tasks."
    ]
  },
  {
    role: "Web Developer",
    company: "OnePixelSoft Pvt. Ltd.",
    date: "Jan 2020 – Jan 2021",
    description: [
      "Delivered WordPress and PHP web development projects for diverse clients.",
      "Worked on theme customisation, plugin integration, and site maintenance."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.titleUnderline}></div>
      </motion.div>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={styles.timelineItem}
          >
            <div className={styles.timelineDot}>
              <Briefcase size={20} />
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <h3>{exp.role}</h3>
                <span className={styles.date}>{exp.date}</span>
              </div>
              <h4 className={styles.company}>{exp.company}</h4>
              <ul className={styles.descriptionList}>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
