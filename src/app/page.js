import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Websites from "@/components/Websites";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Experience />
      <Projects />
      <Websites />
      <Skills />
      <Contact />
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Preeti Saini. All rights reserved.</p>
      </footer>
    </main>
  );
}
