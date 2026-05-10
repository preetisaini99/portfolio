"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, TorusKnot } from "@react-three/drei";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

function TechShape() {
  const meshRef = useRef();
  const wireframeRef = useRef();


  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <group>
        {/* Core solid shape */}
        <Icosahedron args={[1, 1]} ref={meshRef}>
          <MeshDistortMaterial
            color="#6d28d9"
            attach="material"
            distort={0.4}
            speed={2.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Icosahedron>

        {/* Outer techy wireframe */}
        <TorusKnot args={[1.6, 0.05, 100, 16]} ref={wireframeRef}>
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0.5}
            roughness={0.1}
            metalness={1}
          />
        </TorusKnot>

        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={2} color="#c4b5fd" />
        <pointLight position={[-3, -3, -3]} intensity={1.5} color="#3b82f6" />
      </group>
    </Float>
  );
}

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <TechShape />
        </Canvas>
      </div>

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Preeti Saini</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className={styles.subtitle}>
            Senior Headless WordPress & Next.js Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className={styles.description}
        >
          <p>
            Architecting modern, scalable, and high-performance web applications
            by bridging the gap between decoupled CMS solutions and cutting-edge frontend frameworks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href="#projects" className={styles.ctaButton}>
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
