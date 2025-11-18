import { motion } from "motion/react"
import { FaGithub } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import { SiAppstore } from "react-icons/si";
import { TbWorld } from "react-icons/tb";

export default function ExperienceCard({ experience }) {
    const { id,company,duration,title,description} = experience
    return (
      <motion.div 
        className="experience-card"
        initial={{  opacity: 0 }}
        animate={{  opacity: 1 }}
        transition={{ duration: 0.15 }}
        whileHover={{ y: 0, scale:1.03}}
      >
          <div className="experience-header">
              <h3>{company}</h3> 
              <i>{duration}</i>
          </div>
          
          <p className="job-title">{title}</p>
          
          <p className="job-description">{description}</p>
      </motion.div>
    );
  }