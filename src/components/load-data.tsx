import fs from 'fs';
import path from 'path';

export async function loadProjectsData() {
  const directoryPath = path.join(process.cwd(), 'data/projects');
  const filenames = fs.readdirSync(directoryPath);
  const projects = filenames.map(filename => {
    const filePath = path.join(directoryPath, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  });

  return projects;
}