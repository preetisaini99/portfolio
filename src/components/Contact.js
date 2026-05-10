"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <div className={styles.titleUnderline}></div>
      </motion.div>

      <div className={styles.contactContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.contactInfo}
        >
          <h3>Let's build something amazing together.</h3>
          <p>
            I'm currently available for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <Phone className={styles.icon} />
              <span>+91 8740027165</span>
            </div>
            <div className={styles.infoItem}>
              <Mail className={styles.icon} />
              <span>sainipreeti531@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <MapPin className={styles.icon} />
              <span>Open to Remote Work / Jaipur, Rajasthan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
