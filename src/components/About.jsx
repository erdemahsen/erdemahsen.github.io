import { motion } from "motion/react"
import Projects from "./Projects"

export default function About()
{
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <p>I’m a Software Engineer who graduated from METU with a degree in Computer Engineering in 2025. My passion lies in building high-impact applications, with a strong focus on full-stack development, mobile applications, and applied AI.</p>
            <Projects/>
        </motion.div>
    )
}