"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const achievements = [
  {
    title: "Google HashCode Participant 2022",
    description: "Collaborated in a team solving real-world algorithmic challenges.",
  },
  {
    title: "Open Source Contributor",
    description: "Hacktober 2021 and 2022: Contributed features and bug fixes to popular open source projects on GitHub.",
  },
  {
    title: "Oracle Internal Hackathon 2025",
    description: "Runner-up in Oracle's internal hackathon with an innovative cloud solution.",
  },
];

export function AchievementsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const halfScroll = container.scrollWidth / 2;
    const speed = 1; // pixels per frame (increased for visible motion)

    const step = () => {
      if (!container) return;

      if (!isHovered) {
        // Advance the scroll
        container.scrollLeft += speed;

        // If we've scrolled past the first (original) block, wrap back
        if (container.scrollLeft >= halfScroll) {
          container.scrollLeft -= halfScroll;
        }
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  return (
    <section id="achievements" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-5xl font-bold mb-8 text-center pb-8">Achievements</h2>

      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide relative"
        style={{
          scrollBehavior: "auto",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...achievements, ...achievements].map(({ title, description }, index) => (
          <Card
            key={index}
            className="min-w-[350px] max-w-[350px] flex-shrink-0 hover:shadow-lg transition-shadow mr-6"
          >
            <CardHeader className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <style jsx>{`
        /* Hide scrollbar for webkit browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
