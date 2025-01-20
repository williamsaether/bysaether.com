'use client'

import projects from '@/data/projects'
import Image from "next/image";
import styles from './projects.module.css'
import {useState} from "react";
import Head from "next/head";

export default function Projects() {
  const categories = ["All", "Website", "App", "Design"]
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const renderAllProjects = () => {
    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.categories.includes(selectedCategory))

    return (
      filteredProjects.map((project) => (
        <a key={project.id} href={`/projects/${project.id}`}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.showURL}
                alt={`Image for ${project.name}`}
                width={500}
                height={500}
                style={{objectFit: "contain"}}
              />
            </div>
            <div className={styles.cardText}>
              <h3>{project.name} - {project.short}</h3>
              <p>{project.techStack.join(', ')}</p>
            </div>
          </div>
        </a>
      ))
    )
  }

  return (
    <div className={styles.page}>
      <title>Projects - BySaether</title>
      <header>
        <span id="intersector"/>
        <h1>Our Projects</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.filter}>
          {categories.map((category) => (
            <a key={category} className={selectedCategory === category ? styles.active : ''}
               onClick={() => setSelectedCategory(category)}
            >
              {category}
            </a>
          ))}
        </div>
        <div className={styles.projects}>
          {renderAllProjects()}
        </div>
      </main>
    </div>
  )
}