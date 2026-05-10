"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Viking Barns",
    description: "Next.js 13+ App Router, Headless WordPress, WPGraphQL, ISR, SASS, Vercel",
    link: "https://www.vikingbarns.com/",
    type: "Production Web App"
  },
  {
    title: "Viking Metal Garages",
    description: "Next.js 13+ App Router, Headless WordPress, WPGraphQL, ISR, Vercel",
    link: "https://vikingmetalgarages.com/",
    type: "Production Web App"
  },
  {
    title: "WooCommerce Sync Plugins",
    description: "Senderum, Bizzybee - Multi-shop sync for products, orders, inventory via custom APIs and webhooks.",
    link: "#",
    type: "WordPress Plugin"
  },
  {
    title: "Content Writer AI Plugin",
    description: "Copymatic AI-powered CSV-to-page/blog generator with configurable intervals.",
    link: "#",
    type: "WordPress Plugin"
  }
];

function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className={styles.cardInner} style={{ transform: "translateZ(50px)" }}>
          <span className={styles.type}>{project.type}</span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          
          <div className={styles.links}>
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <ExternalLink size={20} />
                <span>Live Site</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.titleUnderline}></div>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
