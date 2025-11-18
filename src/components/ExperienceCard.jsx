import { motion } from "motion/react"
import { FaGithub } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import { SiAppstore } from "react-icons/si";
import { TbWorld } from "react-icons/tb";

export default function ExperienceCard({  }) {

    return (
      <motion.div 
        className="experience-card"
        initial={{  opacity: 0 }}
        animate={{  opacity: 1 }}
        transition={{ duration: 0.15 }}
        whileHover={{ y: 0, scale:1.03}}
      >
          <div className="experience-header">
              <h3>{"Fame Crypt"}</h3> 
              <i>{"May 2025 - Oct 2025"}</i>
          </div>
          
          <p className="job-title">{"Part time Software Engineer"}</p>
          
          <p className="job-description">{"Developed an LLM-based assistant with capabilities to analyze uploaded files and engage in interactive conversations. Built the system using a React frontend, Django backend, and integrated both Ollama and Geminimodels."}</p>
      </motion.div>
    );
  }