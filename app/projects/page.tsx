import Image from "next/image";
import styles from './projects.module.css'
import {getProjects} from "@/lib/projects";

export default function Projects() {

  const renderAllProjects = () => {
    const projects = getProjects()

    return (
      projects.map((project) => (
        <a key={project.id} href={`/projects/${project.id}`}>
          <div className={styles.card}>
            <Image
              src={project.logoURL}
              alt={`Image for ${project.name}`}
              width={500}
              height={500}
            />
            <div className={styles.cardText}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
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
          <a className={styles.active} aria-selected={true}>All</a>
          <a>Website</a>
          <a>App</a>
        </div>
        <div className={styles.projects}>
          {renderAllProjects()}
        </div>
      </main>
    </div>
  )
}