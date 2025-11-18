import { motion } from "motion/react"
import ExperienceCard from "./ExperienceCard"
import { experienceData } from "../data";
import { useState } from "react"


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
      <div className="switcher">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>

      {experienceData.map((experience) => (
        experience.id === index+1 && <ExperienceCard key={experience.id} experience={experience} />
      ))}

    </motion.div>
  );
}
