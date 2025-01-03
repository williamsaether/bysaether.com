'use client'

import projects from '@/data/projects'
import Image from "next/image";
import styles from './projects.module.css'
import {useState} from "react";

export default function Projects() {
  const categories = ["All", "Website", "App"]
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const renderAllProjects = () => {
    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory)

    return (
      filteredProjects.map((project) => (
        <a key={project.id} href={`/projects/${project.id}`}>
          <div className={styles.card}>
            <Image
              src={project.logoURL}
              alt={`Image for ${project.name}`}
              width={500}
              height={500}
              style={{objectFit: "contain"}}
            />
            <div className={styles.cardText}>
              <h3>{project.name} - {project.short}</h3>
              <p>{project.techStack}</p>
            </div>
          </div>
        </a>
      ))
    )
  }

  return (
    <div className={styles.page}>
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