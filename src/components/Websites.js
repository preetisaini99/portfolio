"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import styles from "./Websites.module.css";

const websites = [
  "damnmodz.com", "usbireland.ie", "touqps.com", "projectveloce.com", "esmarahair.ie",
  "articulosreligiosos.com", "moodstory.dk", "orthovitality.nl", "scooterbox.com.au", "freshorganics.com.au",
  "shopifydevelopmentcompany.com", "starsoftware.co", "betrue.nu", "urnatura.com", "xlmotors.ee",
  "bharatdatacenter.com", "indopropertyhub.com", "touq.ae", "ghanoon.ae", "tradeinnovation.in",
  "vetsklinic.co.uk", "monahansen.co.uk", "caranow.org", "promoireland.ie", "imcinsurance.com.au",
  "ecohomefinancial.com", "simplygroupfinancial.com", "snapfinancial.com", "myhomeupgrade.ca", "homeupgradeexperts.ca"
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Websites() {
  return (
    <section id="websites" className={styles.websitesSection}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.sectionTitle}>Website Portfolio</h2>
        <div className={styles.titleUnderline}></div>
      </motion.div>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {websites.map((site, i) => (
          <motion.a
            key={i}
            href={`https://${site}`}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={styles.siteCard}
          >
            <div className={styles.iconWrapper}>
              <Globe size={18} />
            </div>
            <span className={styles.siteName}>{site}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
