"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  github: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js showcasing my projects and skills.",
    github: "https://github.com/username/portfolio",
    techStack: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Task Manager API",
    description: "RESTful API for managing tasks with authentication and CRUD operations.",
    github: "https://github.com/username/task-manager-api",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "E-commerce Frontend",
    description: "Frontend for an e-commerce platform with dynamic filtering and shopping cart.",
    github: "https://github.com/username/ecommerce-frontend",
    techStack: ["React", "Redux", "TailwindCSS"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js showcasing my projects and skills.",
    github: "https://github.com/username/portfolio",
    techStack: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Task Manager API",
    description: "RESTful API for managing tasks with authentication and CRUD operations.",
    github: "https://github.com/username/task-manager-api",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "E-commerce Frontend",
    description: "Frontend for an e-commerce platform with dynamic filtering and shopping cart.",
    github: "https://github.com/username/ecommerce-frontend",
    techStack: ["React", "Redux", "TailwindCSS"],
  },
];

export function ProjectsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">Projects</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="transition-transform transform hover:scale-105 hover:shadow-lg hover:border-primary hover:bg-muted/10">
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <CardTitle className="text-lg font-semibold leading-tight">
                {project.title}
              </CardTitle>
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
