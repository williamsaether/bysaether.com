import fs from "fs";
import path from "path";

const projectsDir = path.join(process.cwd(), "/data/projects");

export function getProjects() {
  const filenames = fs.readdirSync(projectsDir);
  return filenames.map((filename) => {
    const filepath = path.join(projectsDir, filename);
    const fileContents = fs.readFileSync(filepath,'utf-8');
    return JSON.parse(fileContents);
  })
}

export function getProjectById(id) {
  const filepath = path.join(projectsDir, `${id}.json`);
  const fileContents = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(fileContents);
}