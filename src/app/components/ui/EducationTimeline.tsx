"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const education = [
  {
    title: "B.Sc. Computer Science",
    institution: "University of Example",
    country: "USA",
    duration: "2019 – 2023",
    description: "Studied algorithms, software engineering, and artificial intelligence.",
  },
  {
    title: "Full-Stack Web Development",
    institution: "Online Bootcamp",
    country: "Remote",
    duration: "2023",
    description: "Trained in modern frontend/backend frameworks including React and Node.js.",
  },
  {
    title: "Advanced Data Analytics",
    institution: "Google (Coursera)",
    country: "USA",
    duration: "2024 – 2025",
    description: "Gained expertise in machine learning, Python, and business intelligence.",
  },
  {
    title: "AWS Certified Developer",
    institution: "Amazon Web Services",
    country: "USA",
    duration: "In Progress",
    description: "Focused on cloud-native applications and serverless architecture.",
  },
];

export function EducationTimeline() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">Education Timeline</h2>

      <div className="relative">
        {/* Vertical center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-muted z-0" />

        <div className="flex flex-col space-y-24 relative z-10">
          {education.map((edu, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className={cn(
                  "relative w-full flex flex-col items-center md:flex-row",
                  isLeft ? "md:justify-start md:pr-10" : "md:justify-end md:pl-10"
                )}
              >
                {/* Card */}
                <div className="w-full max-w-[400px] z-10">
                  <Card className="transition-transform transform hover:scale-105 hover:shadow-lg hover:border-primary hover:bg-muted/10">
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-lg font-semibold">{edu.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}, {edu.country}
                      </p>
                      <p className="text-xs italic text-muted-foreground">{edu.duration}</p>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Connector Dot */}
                <div className="absolute left-1/2 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 rounded-full bg-background border-4 border-primary z-20" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
