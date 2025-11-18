import notBeenIcon from "./assets/notBeenIcon.png"
import metuAppIcon from "./assets/metuAppIcon.png"

export const projectsData = [
  {
    id: 1,
    image: metuAppIcon,
    title: "METU App",
    description: "Official mobile app for METU. Cafeteria, bus routes, calendar & more. 10,000+ users.",
    links: {
      website: "https://metuapp.ceng.metu.edu.tr/", 
      googlePlay: "https://play.google.com/store/apps/details?id=tr.edu.metu.ceng.metuapp", 
      appStore: "https://apps.apple.com/us/app/metu-app/id6741060769" 
    }
  },
  {
    id: 2,
    image: notBeenIcon,
    title: "NotBeen App",
    description: "A React Native clone of the 'Been' app for tracking travel locations.",
    links: {
      github: "https://github.com/erdemahsen/notBeen", 
    }
  }
];

export const experienceData = [
  {
    id: 1,
    company: "Fame Crypt",
    duration: "May 2025 - Oct 2025",
    title: "Part-time Software Engineer",
    location: "Ankara, Turkey",
    description: "Developed an LLM-based assistant with capabilities to analyze uploaded files and engage in interactive conversations. Built the system using a React frontend, Django backend, and integrated both Ollama and Gemini models."
  },
  {
    id: 2,
    company: "GT-ARC",
    duration: "Jul 2024 - Sep 2024",
    title: "Machine Learning Intern",
    location: "Berlin, Germany",
    description: "Worked on a website featuring a chatbot that teaches AI topics using AI, integrating ChatGPT and Llama APIs. Developed backend functionality using Flask and implemented frontend features with Vue.js. Utilized vector embeddings for chatbot functionality."
  },
  {
    id: 3,
    company: "Innova Bilisim",
    duration: "Jul 2022 - Aug 2022",
    title: "Software Engineering Intern",
    location: "Ankara, Turkey",
    description: "Worked with React Native to improve the “İs Gucu Yonetim Sistemi (IYS)” mobile app."
  },
  {
    id: 4,
    company: "TÜBİTAK BİLGEM",
    duration: "Feb 2022 - Aug 2022",
    title: "Star Research Intern",
    location: "Kocaeli, Turkey",
    description: "Focused on testing and evaluating various matrix multiplication algorithms in C."
  }
];