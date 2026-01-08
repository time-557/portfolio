
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiGoogleanalytics,
  SiAmazon,
  SiSnowflake,
  SiDocker,
  SiOracle,
  SiGnubash,
  SiGit,
  SiApacheairflow,
} from "react-icons/si";

import { DiJava } from "react-icons/di";

type Project = {
    id: number;
    title: string;
    url: string;
    description: string;
    live?: string;
    tech_stack: string[];
    date: Date;
};

type Certificate = {
    id: number;
    title: string;
    issuer: string;
    year: string;
    link?: string;
    description: string;
    courses: string[];
}

type Education = {
    title: string;
    institution: string;
    country: string;
    duration: string;
    description?: string;
    url?: string;
};

type Publication = {
    id: number;
    title: string;
    authors: string[];
    publication: string;
    date: Date;
    description: string;
    url?: string;
    doi?: string;
};
let counter = 0;
export const Projects: Project[] = [
    {
      id: ++counter,
      title: "db-delta",
      url: "https://github.com/hussein-hub/db-delta",
      description: "A 'Git diff for databases' built in Python to find schema, row, and statistical differences in terabyte-scale data. It's SQL-native, pushing computation directly to servers like Snowflake and Postgres by generating dialect-specific queries.",
      tech_stack: ["Python", "SQL", "Snowflake", "PostgreSQL", "MySQL"],
      date: new Date("2025-11-01")
    },
    {
        id: ++counter,
        title: "Void",
        url: "https://github.com/Winter-Soren/void",
        description: "A cloud native deployment platform to reduce deployment time on OCI, automating infrastructure provisioning via custom CLI.",
        tech_stack: ["Next.js", "TypeScript", "OCI", "Docker", "WebSockets"],
        date: new Date("2025-04-01"),
    },
    {
      id: ++counter,
      title: "URL Shortener",
      url: "https://github.com/hussein-hub/url-shortener",
      description: "A modern URL shortener built with Spring Boot featuring click-tracking, custom short codes, and a responsive Tailwind CSS UI. Deployed on Render (may cold-start on the first request).",
      live: "https://url-shortener-bvrg.onrender.com/",
      tech_stack: ["Java", "Spring Boot", "Supabase", "PostgreSQL", "Tailwind CSS", "Render"],
      date: new Date("2026-01-07"),
    },
    {
        id: ++counter,
        title: "Edumate",
        url: "https://github.com/hussein-hub/Edumate",
        description: "Edumate is a flexible education management system that simplifies admin and academic tasks, boosts efficiency, and enhances the digital experience for teachers and students.",
        tech_stack: ["Python", "Django", "TensorFlow", "Keras", "OpenCV", "JavaScript", "SQLite"],
        date: new Date("2023-05-01"),
    },
    {
        id: ++counter,
        title: "Panacea",
        url: "https://github.com/Panacea-4-U/Modular-Panacea",
        description: "Built a web platform leveraging ML models (80% accuracy) to assess lung, kidney, and heart disease risks, with geolocation-based specialist search, enhancing early diagnosis and care access.",
        tech_stack: ["Python", "Django", "Machine Learning", "JavaScript"],
        date: new Date("2022-06-01"),
    },
    {
        id: ++counter,
        title: "Portfolio Website",
        url: "https://github.com/time-557/portfolio",
        description: "A personal portfolio built with Next.js showcasing my projects and skills.",
        tech_stack: ["Next.js", "TailwindCSS", "TypeScript"],
        date: new Date("2025-06-01"),
    },
    {
        id: ++counter,
        title: "Smart Attendance System",
        url: "https://github.com/hussein-hub/Smart-Attendance-System",
        description: "A system for managing attendance using facial recognition.",
        tech_stack: ["Django", "OpenCV", "Python"],
        date: new Date("2021-07-01"),
    },
];


export const certifications: Certificate[] = [
  {
    id: 1,
    title: "AWS Certified Developer Associate (DVA-C02)",
    issuer: "Amazon Web Services",
    year: "In Progress",
    description:
      "Currently preparing for certification. Focused on building and deploying cloud applications on AWS.",
    courses: [],
  },
  {
    id: 2,
    title: "Google Advanced Data Analytics",
    issuer: "Google",
    year: "May 2025",
    link: "https://coursera.org/verify/professional-cert/MAF9LDLD7D6P",
    description:
      "Advanced techniques in statistics, machine learning, and data analysis using real-world datasets and tools.",
    courses: [
      "Foundation of Data Science",
      "Get Started with Python",
      "Go Beyond the Numbers: Translate Data into Insights",
      "The Power of Statistics",
      "Regression Analysis: Simplify Complex Data Relationships",
      "The Nuts and Bolts of Machine Learning",
      "Google Advanced Data Analytics Capstone",
    ],
  },
  {
    id: 3,
    title: "Google Data Analytics",
    issuer: "Google",
    year: "September 2023",
    link: "https://coursera.org/verify/professional-cert/95546EKLPJCV",
    description:
      "Core data analytics skills including data cleaning, visualization, and insights using spreadsheets, SQL, and R.",
    courses: [
      "Foundations: Data, Data, Everywhere",
      "Ask Questions to Make Data-Driven Decisions",
      "Prepare Data for Exploration",
      "Process Data from Dirty to Clean",
      "Analyze Data to Answer Questions",
      "Share Data Through the Art of Visualization",
      "Data Analysis with R Programming",
      "Google Data Analytics Capstone: Complete a Case Study",
    ],
  },
  {
    id: 4,
    title: "Foundation of Data Science",
    issuer: "Google",
    year: "February 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/HFCH760LP1QS",
    description:
      "Fundamentals of data science, problem solving, and decision making using data — taught by Google experts.",
    courses: [],
  },
  {
    id: 5,
    title: "IBM Relational Database Administrator",
    issuer: "IBM",
    year: "June 2025",
    link: "https://coursera.org/verify/professional-cert/EJ6CJ0UFGI5D",
    description:
      "Covers core skills in relational database design, SQL, Python, ETL, and administration using real-world tools and hands-on labs.",
    courses: [
      "Introduction to Data Engineering",
      "Introduction to Relational Databases (RDBMS)",
      "Python for Data Science, AI & Development",
      "Python Project for Data Engineering",
      "Databases and SQL for Data Science with Python",
      "Hands-on Introduction to Linux Commands and Shell Scripting",
      "ETL and Data Pipelines with Shell, Airflow and Kafka",
      "Data Warehouse Fundamentals",
      "Relational Database Administration (DBA)",
      "Relational Database Administration Capstone Project",
      "Generative AI: Elevate your Data Engineering Career",
    ]
  },
];

export const skillsWithProficiency = [
  { skill: "Business Optimisation", level: 70, Icon: SiTailwindcss, learning: true },
  { skill: "Data Analytics", level: 80, Icon: SiGoogleanalytics, learning: true },
  { skill: "Business Analytics", level: 80, Icon: SiGoogleanalytics, learning: true },
  { skill: "Spring Boot", level: 90, Icon: DiJava, learning: true },
  { skill: "Python", level: 90, Icon: SiPython, learning: false },
  { skill: "Java", level: 90, Icon: DiJava, learning: false },
  { skill: "SQL", level: 90, Icon: SiPostgresql, learning: false },
  { skill: "Oracle", level: 90, Icon: SiOracle, learning: false },
  { skill: "PL/SQL", level: 90, Icon: SiOracle, learning: false },
  { skill: "XML", level: 90, Icon: SiOracle, learning: false },
  { skill: "REST API", level: 90, Icon: SiOracle, learning: false },
  { skill: "AWS", level: 70, Icon: SiAmazon, learning: false },
  { skill: "Snowflake", level: 75, Icon: SiSnowflake, learning: false },
  { skill: "Docker", level: 75, Icon: SiDocker, learning: false },
  { skill: "Git", level: 80, Icon: SiGit, learning: false },
  { skill: "Bash", level: 70, Icon: SiGnubash, learning: false },
  { skill: "Airflow", level: 80, Icon: SiApacheairflow, learning: false },
  { skill: "JavaScript", level: 60, Icon: SiJavascript, learning: false },
  { skill: "TypeScript", level: 60, Icon: SiTypescript, learning: false },
  // Added skills requested by user with matching icons where available
];


export const education: Education [] = [
  {
    title: "10th, Indian Certificate of Secondary Education (ICSE)",
    institution: "Christ Church School",
    country: "India",
    duration: "2007 - 2017",
    url: "https://christchurchschoolmumbai.org/",
    description: "Completed my secondary education with a focus on science and mathematics.",
  },
  {
    title: "12th, Higher Secondary Certificate (HSC)",
    institution: "Wilson College",
    country: "India",
    duration: "2017 - 2019",
    url: "https://www.wilsoncollege.edu/",
    description: "Pursued science with a focus on physics, computers, and mathematics.",
  },
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    institution: "KJ Somaiya College of Engineering",
    country: "India",
    duration: "2019 - 2023",
    url: "https://kjsce.somaiya.edu/en",
    description: "Graduated with a B.Tech in Computer Science, focusing on software development, data structures, and algorithms.",
  },
  {
    title: "Masters in Business Analytics",
    institution: "University College Dublin",
    country: "Ireland",
    duration: "2025 - Current",
    url: "https://www.ucd.ie/"
  },
];

export const publications: Publication[] = [
  {
    id: 1,
    title: "Effective Inexpensive and Robust Solution to Classroom Attendance Recording Using Face Detection Technology",
    authors: ["Hussein Motiwala", "Rushabh Gandhi", "Nayan Mandliya", "Kritarth Jain"],
    publication: "International Journal of Research in Engineering, Science and Management",
    date: new Date("2023-05-14"),
    description: "Traditional methods of documenting attendance, such as roll call and sign-in pages, have several inefficiencies, as highlighted in the paper. They demand considerable time and effort from instructors and are susceptible to human error. Furthermore, these methods are frequently susceptible to proxy attendance, which can result in inaccurate records and negatively affect students' grades. To address these issues, the paper proposes a low-cost solution that makes use of class photographs and face detection techniques to track attendance. The system can autonomously locate and identify students' features from class images, removing the need for instructors to manually input data. Students can then register their attendance by distinguishing themselves from the list of detected features using a web application that is fast, simple, and parallel. The paper emphasizes that the proposed solution has several advantages over conventional methods of recording attendance. It is substantially more effective and can reduce instructors' workload. It is more precise and trustworthy because it is not susceptible to human error or fraudulent activity. The paper also notes that the system can aid in the identification of students who may require additional support or attention, as their attendance patterns can be more readily monitored. In spite of these advantages, the paper acknowledges that the proposed system has certain limitations. The instructor must have access to the internet and a camera-equipped device. For optimal use of the proposed system, it is suggested that students have a dependable Internet connection. In the event that students experience internet connectivity issues, they can request assistance from their instructors to ensure that their attendance is precisely recorded.",
    url: "https://journal.ijresm.com/index.php/ijresm/article/view/2694",
  },
];