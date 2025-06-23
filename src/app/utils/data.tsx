
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGoogleanalytics,
  SiAmazon,
} from "react-icons/si";

type Project = {
    id: number;
    title: string;
    url: string;
    description: string;
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

export const Projects: Project[] = [
    {
        id: 1,
        title: "Void",
        url: "https://github.com/Winter-Soren/void",
        description: "A cloud native deployment platform to reduce deployment time on OCI, automating infrastructure provisioning via custom CLI.",
        tech_stack: ["Next.js", "TypeScript", "OCI", "Docker", "WebSockets"],
        date: new Date("2025-04-01"),
    },
    {
        id: 2,
        title: "Edumate",
        url: "https://github.com/hussein-hub/Edumate",
        description: "Edumate is a flexible education management system that simplifies admin and academic tasks, boosts efficiency, and enhances the digital experience for teachers and students.",
        tech_stack: ["Python", "Django", "TensorFlow", "Keras", "OpenCV", "JavaScript", "SQLite"],
        date: new Date("2023-05-01"),
    },
    {
        id: 3,
        title: "Panacea",
        url: "https://github.com/Panacea-4-U/Modular-Panacea",
        description: "Built a web platform leveraging ML models (80% accuracy) to assess lung, kidney, and heart disease risks, with geolocation-based specialist search, enhancing early diagnosis and care access.",
        tech_stack: ["Python", "Django", "Machine Learning", "JavaScript"],
        date: new Date("2022-06-01"),
    },
    {
        id: 4,
        title: "Portfolio Website",
        url: "https://github.com/time-557/portfolio",
        description: "A personal portfolio built with Next.js showcasing my projects and skills.",
        tech_stack: ["Next.js", "TailwindCSS", "TypeScript"],
        date: new Date("2025-06-01"),
    },
    {
        id: 5,
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
    ],
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
    issuer: "Coursera (Taught by Google)",
    year: "February 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/HFCH760LP1QS",
    description:
      "Fundamentals of data science, problem solving, and decision making using data — taught by Google experts.",
    courses: [],
  },
  {
    id: 5,
    title: "AWS Certified Developer Associate (DVA-C02)",
    issuer: "Amazon Web Services",
    year: "In Progress",
    description:
      "Currently preparing for certification. Focused on building and deploying cloud applications on AWS.",
    courses: [],
  },
];

export const skillsWithProficiency = [
  { skill: "JavaScript", level: 90, Icon: SiJavascript, learning: false },
  { skill: "TypeScript", level: 85, Icon: SiTypescript, learning: false },
  { skill: "React", level: 95, Icon: SiReact, learning: false },
  { skill: "Next.js", level: 90, Icon: SiNextdotjs, learning: true },
  { skill: "Tailwind CSS", level: 80, Icon: SiTailwindcss, learning: true },
  { skill: "Node.js", level: 75, Icon: SiNodedotjs, learning: false },
  { skill: "Python", level: 85, Icon: SiPython, learning: false },
  { skill: "SQL", level: 80, Icon: SiPostgresql, learning: false },
  { skill: "Data Analytics", level: 70, Icon: SiGoogleanalytics, learning: true },
  { skill: "AWS", level: 65, Icon: SiAmazon, learning: false },
];


export const education: Education [] = [
  {
    title: "10th, Indian Certificate of Secondary Education (ICSE)",
    institution: "Christ Church School",
    country: "India",
    duration: "2007 – 2017",
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
    duration: "2019 – 2023",
    url: "https://kjsce.somaiya.edu/en",
    description: "Graduated with a B.Tech in Computer Science, focusing on software development, data structures, and algorithms.",
  },
  {
    title: "Masters in Business Analytics",
    institution: "University College Dublin",
    country: "Ireland",
    duration: "Upcoming",
    url: "https://www.ucd.ie/"
  },
];