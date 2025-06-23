"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Projects } from "../../utils/data";
import { CiCalendar } from "react-icons/ci";


export function ProjectsSection() {

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">Projects</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {Projects.map((project, index) => (
          <Card
            key={index}
            className="transition-transform transform hover:scale-105 hover:shadow-lg hover:border-primary hover:bg-muted/10"
          >
            <CardHeader className="flex flex-col items-start gap-2">
              <div className="flex w-full justify-between items-start">
                <div>
                  <CardTitle className="text-lg font-semibold leading-tight">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CiCalendar className="mr-1" />
                    {new Date(project.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long"
                    })}
                  </div>
                </div>
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </Link>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map((tech, i) => (
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
