import projects from "@/data/projects";
import Image from "next/image";
import styles from './project.module.css'


export default async function Project({ params }: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {return <div className={styles.notFound}>404 - Project Not Found</div>}

  return (
    <div className={styles.page}>

      <header className={styles.header}>
        <div className={styles.leftSide}>
          <span id="intersector"/>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <div className={styles.otherInfo}>
            <p className={styles.techStack}>
              {project.techStack.join(', ')}
            </p>
            <a href={project.websiteLink}>{project.websiteLink.split('://')[1]}</a>
          </div>
        </div>
        <div className={styles.rightSide}>
          <Image
            src={project.squareLogoURL}
            alt={`${project.name} Logo`}
            width={500}
            height={500}
            style={{objectFit: "contain"}}
          />
        </div>
      </header>
    </div>
  )
}