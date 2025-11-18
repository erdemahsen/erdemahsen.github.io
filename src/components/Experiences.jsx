import { motion } from "motion/react"
import ExperienceCard from "./ExperienceCard"

export default function Experiences() {
  return (
    <motion.div 
      className="experiences"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Experiences</h2>

      <ExperienceCard/>

    </motion.div>
  );
}
