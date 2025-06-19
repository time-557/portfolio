"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";

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

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
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
    title: "Google Advanced Data Analytics Professional Certificate",
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
    title: "Google Data Analytics Professional Certificate",
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
    title: "Foundation of Data Science",
    issuer: "Coursera (Taught by Google)",
    year: "February 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/HFCH760LP1QS",
    description:
      "Fundamentals of data science, problem solving, and decision making using data — taught by Google experts.",
    courses: [],
  },
  {
    title: "AWS Certified Developer Associate (DVA-C02)",
    issuer: "Amazon Web Services",
    year: "In Progress",
    description:
      "Currently preparing for certification. Focused on building and deploying cloud applications on AWS.",
    courses: [],
  },
];

const skillsWithProficiency = [
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

export function CertificationsSkills() {
  const [activeTab, setActiveTab] = useState<"certifications" | "skills">("certifications");

  const tabVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section
      id="certifications"
      className="max-w-7xl mx-auto px-6 md:px-12 py-20 min-h-[350px]"
    >
      <h2 className="text-5xl font-bold mb-10 text-center">
        Certifications & Skills
      </h2>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "certifications" | "skills")}
        className="space-y-6"
      >
        <TabsList className="mx-auto max-w-xs justify-center bg-muted rounded-full p-1">
          <TabsTrigger value="certifications" className="rounded-full">
            Certifications
          </TabsTrigger>
          <TabsTrigger value="skills" className="rounded-full">
            Skills
          </TabsTrigger>
        </TabsList>

        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait" initial={false}>
            {activeTab === "certifications" && (
              <motion.div
                key="certifications"
                variants={tabVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid gap-6 md:grid-cols-3"
              >
                {certifications.map(({ title, issuer, year, description, link, courses }) => (
                  <Card
                    key={title}
                    className="transition-transform transform hover:scale-105 hover:shadow-lg hover:border-primary hover:bg-muted/10 flex flex-col justify-between"
                  >
                    <CardHeader>
                      <CardTitle className="leading-normal" style={{ lineHeight: 1.4 }}>
                        {link ? (
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 hover:text-primary transition-colors"
                          >
                            {title}
                          </a>
                        ) : (
                          title
                        )}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {issuer} &mdash; {year}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow justify-between">
                      <p className="text-sm">{description}</p>

                      <div className="mt-6 flex items-center justify-between border-t pt-4">
                        {courses.length > 0 && (
                          <Popover.Root>
                            <Popover.Trigger
                              className="text-sm text-primary hover:underline flex items-center gap-1"
                              aria-haspopup="true"
                            >
                              View Courses <ChevronDown className="w-4 h-4" />
                            </Popover.Trigger>
                            <Popover.Portal>
                              <Popover.Content
                                className="z-50 rounded-md bg-white dark:bg-black p-4 shadow-lg text-sm text-black dark:text-white border border-black dark:border-white inline-block max-h-auto max-w-max overflow-visible"
                                sideOffset={5}
                              >
                                <ul className="list-disc list-inside space-y-1 max-h-60 overflow-auto">
                                  {courses.map((course, idx) => (
                                    <li key={idx}>{course}</li>
                                  ))}
                                </ul>
                                <Popover.Arrow className="fill-white dark:fill-gray-900" />
                              </Popover.Content>
                            </Popover.Portal>
                            <Badge variant="outline" className="text-xs">
                              {courses.length} Course{courses.length > 1 ? "s" : ""}
                            </Badge>
                          </Popover.Root>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            )}

            {activeTab === "skills" && (
            <motion.div
              key="skills"
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {skillsWithProficiency.map(({ skill, level, Icon, learning }) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: level / 200 }}
                  className="group flex flex-col justify-between p-5 min-h-[110px] border border-border rounded-md bg-background dark:bg-background-dark space-y-3 hover:shadow-lg hover:border-primary transition-transform duration-300 cursor-default hover:scale-105"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-3">
                      {Icon && (
                        <Icon className="w-8 h-8 filter transition duration-300 " />
                      )}
                      <span className="font-semibold text-foreground dark:text-foreground-dark">
                        {skill}
                      </span>
                    </div>
                    {learning && (
                      <Badge
                        variant="secondary"
                        className="text-xs ml-2 shrink-0 max-w-[80px] truncate"
                      >
                        Learning
                      </Badge>
                    )}
                  </div>
                  <div>
                    <span className="text-sm font-mono text-muted-foreground dark:text-muted-foreground-dark">
                      Proficiency: {level}/100
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </Tabs>
    </section>
  );
}
