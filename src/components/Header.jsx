import { motion } from "motion/react"

export default function Header(){
    return(
        <header >
            <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Hi, this is Ömer Erdem Ahsen. 
            </motion.h1>
        </header>
    )
}