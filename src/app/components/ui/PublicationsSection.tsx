"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { publications } from "../../utils/data";
import { CiCalendar } from "react-icons/ci";


export function PublicationsSection() {
  const count = publications.length;

  return (
    <section id="publications" className="w-full max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Publications</h2>

      {count === 0 && (
        <div className="text-center text-muted-foreground">No publications yet.</div>
      )}

      {count === 1 && (
        <div className="max-w-3xl mx-auto">
          {publications.map((publication) => (
            <Card
              key={publication.id}
              className="transition-transform transform hover:scale-102 hover:shadow-lg hover:border-primary hover:bg-muted/10"
            >
              <CardHeader className="flex flex-col items-start gap-2">
                <div className="flex w-full justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold leading-tight">
                      {publication.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <CiCalendar className="mr-1" />
                      {new Date(publication.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </div>
                  </div>
                  {publication.url && (
                    <Link href={publication.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary flex-shrink-0" />
                    </Link>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Publication</p>
                  <p className="text-sm">{publication.publication}</p>
                </div>

                {publication.authors.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Authors</p>
                    <p className="text-sm">{publication.authors.join(", ")}</p>
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed">{publication.description}</p>

                {publication.doi && (
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      DOI: <span className="font-mono">{publication.doi}</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {count > 1 && (
        <div className="grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {publications.map((publication) => (
            <Card
              key={publication.id}
              className="transition-transform transform hover:scale-105 hover:shadow-lg hover:border-primary hover:bg-muted/10"
            >
              <CardHeader className="flex flex-col items-start gap-2">
                <div className="flex w-full justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold leading-tight">
                      {publication.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <CiCalendar className="mr-1" />
                      {new Date(publication.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </div>
                  </div>
                  {publication.url && (
                    <Link href={publication.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary flex-shrink-0" />
                    </Link>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Publication</p>
                  <p className="text-sm">{publication.publication}</p>
                </div>

                {publication.authors.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Authors</p>
                    <p className="text-sm">{publication.authors.join(", ")}</p>
                  </div>
                )}

                <p className="text-sm text-muted-foreground">{publication.description}</p>

                {publication.doi && (
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      DOI: <span className="font-mono">{publication.doi}</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
