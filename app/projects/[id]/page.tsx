import projects from "@/data/projects";
import Image from "next/image";
import styles from './project.module.css'
import Link from "next/link";

export default async function Project({ params }: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {return <div className={styles.notFound}>404 - Project Not Found</div>}

  return (
    <div className={styles.page}>
      <title>Project - BySaether</title>
      <header className={styles.header}>
        <div className={styles.leftSide}>
          <span id="intersector"/>
          <Link href={"/projects"}>
            <div className={styles.arrowBack}>
              <Image
                src={'/images/icons/arrowback.svg'}
                alt={"Go back arrow"}
                width={123}
                height={108}
                style={{objectFit: "contain"}}
                priority
              />
            </div>
          </Link>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <div className={styles.otherInfo}>
            <p className={styles.techStack}>
              {project.techStack.join(', ')}
            </p>
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >{project.websiteLink?.split('://')[1]}</a>
          </div>
          {project.appStore && <div className={styles.appStore}>
            {project.appStore.apple && <a href={project.appStore.apple}>
              <Image
                src={'/images/appstore/apple-darkmode.svg'}
                alt={`Apple App Store Link`}
                width={150}
                height={50}
                style={{objectFit: "contain"}}
              />
            </a>}
            {project.appStore.google && <a href={project.appStore.google}>
              <Image
                src={'/images/appstore/google.svg'}
                alt={`Google Play Link`}
                width={180}
                height={53}
                style={{objectFit: "contain"}}
              />
            </a>}
            {project.appStore.chrome && <a href={project.appStore.chrome}>
              <Image
                src={'/images/appstore/cws-darkmode.png'}
                alt={`Chrome Webstore Link`}
                width={178}
                height={50}
                style={{objectFit: "contain"}}
              />
            </a>}
          </div>}
        </div>
        <div className={styles.rightSide}>
          <Image
            src={project.squareLogoURL}
            alt={`${project.name} Logo`}
            width={500}
            height={500}
            style={{objectFit: "contain"}}
            priority
          />
        </div>
      </header>
      <main className={styles.main}>
        <p>{project.details.overview}</p>
        {project.details.features && <>
          <h2>Features</h2>
          <ul>
            {project.details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
          ))}
         </ul>
        </>}
        {project.details.goals && <>
          <h2>Goal</h2>
          <p>{project.details.goals}</p>
        </>}
        {project.details.design && <>
          <div className={styles.design}>
            {project.details.design.primaryColors.map((color, index) => (
              <div key={index} style={{backgroundColor: color}}/>
            ))}
          </div>
        </>}
      </main>
      {project.screenshots && project.screenshots.length > 0 && <div className={styles.screenshots}>
        {project.screenshots.map((screenshot, index) => (
          <div key={index}>
            <Image
              src={screenshot}
              alt={`Screenshot of application`}
              height={1920}
              width={1080}
              quality={100}
              style={{objectFit: "contain"}}
            />
          </div>
        ))}
      </div>}
    </div>
  )
}