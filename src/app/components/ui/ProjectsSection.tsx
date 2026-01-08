"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { Projects } from "../../utils/data";
import { CiCalendar } from "react-icons/ci";

// Use a minimal, muted badge style for all tech labels to keep the UI calm.
function techClasses(_tech: string) {
  return "bg-muted/6 text-muted-foreground border-border";
}


export function ProjectsSection() {

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">Projects</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {Projects.map((project) => (
          <Card
            key={project.id}
            className="transition-transform transform hover:scale-105 hover:shadow-lg hover:border-primary hover:bg-muted/10 flex flex-col h-full"
          >
            <CardHeader className="flex flex-col items-start gap-2 min-h-[4.5rem]">
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
                <div className="flex items-center gap-2">
                  {project.url && (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer" title="Repository">
                      <SiGithub className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer" title="Live site">
                      <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col flex-1">
              <div className="text-sm text-muted-foreground">{project.description}</div>

              {/* Footer: fixed-height area so badges align across cards */}
              <div className="mt-auto w-full">
                <div className="border-t border-border opacity-40 mb-3" />
                <div className="h-10 flex items-center flex-wrap gap-2">
                  {project.tech_stack.map((tech, i) => (
                    <Badge key={i} variant="outline" className={`text-xs ${techClasses(tech)} px-2 py-0.5`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
