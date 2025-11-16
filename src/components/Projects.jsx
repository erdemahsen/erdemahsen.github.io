import { motion } from "motion/react"
// 1. Import your reusable card
import ProjectCard from "./ProjectCard"
// 2. Import your data
import { projectsData } from "../projectsData"

export default function Projects() {
  return (
    // You can add a wrapper div for styling
    <div className="projects-list">
      {/* 3. Map over the data array */}
      {projectsData.map((project) => (
        // 4. Pass each project's data as a 'project' prop
        //    Don't forget the 'key' prop for React lists
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}