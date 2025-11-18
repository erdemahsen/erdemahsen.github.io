import { motion } from "motion/react"
import ExperienceCard from "./ExperienceCard"
import { experienceData } from "../data";
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



export default function Experiences() {

  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % experienceData.length)
  }

  const prev = () => {
    setIndex((prev) => 
      prev === 0 ? experienceData.length - 1 : prev - 1
    )
  }
  return (
    <motion.div 
      className="experiences"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Experiences</h2>

      {experienceData.map((experience) => (
        experience.id === index+1 && <ExperienceCard key={experience.id} experience={experience} />
      ))}


      <div className="switcher">
        <button onClick={prev} className="nav-btn">
          <FaChevronLeft size={20} />
        </button>
        <div className="dots">
    {experienceData.map((_, i) => (
      <span 
        key={i} 
        className={`dot ${index === i ? "active" : ""}`}
      ></span>
    ))}
  </div>
        <button onClick={next} className="nav-btn">
          <FaChevronRight size={20} />
        </button>
      </div>

      

    </motion.div>
  );
}
