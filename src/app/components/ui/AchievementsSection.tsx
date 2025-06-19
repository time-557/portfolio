"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const achievements = [
  {
    title: "Winner - Local Hackathon 2024",
    description: "Led a team to develop an AI-powered web app, winning 1st place out of 50+ teams.",
  },
  {
    title: "Google HashCode Participant 2023",
    description: "Collaborated in a team solving real-world algorithmic challenges.",
  },
  {
    title: "Open Source Contributor",
    description: "Contributed features and bug fixes to popular open source projects on GitHub.",
  },
  {
    title: "Tech Speaker 2024",
    description: "Presented a talk on scalable React apps at DevConf.",
  },
  {
    title: "Certified Kubernetes Administrator",
    description: "Successfully completed CKA certification.",
  },
];

export function AchievementsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollWidth = container.scrollWidth / 2;
    const speed = 0.5; // pixels per frame

    const step = () => {
      if (!container) return;

      if (!isHovered) {
        if (container.scrollLeft >= scrollWidth) {
          container.scrollLeft -= scrollWidth;
        }
        container.scrollLeft += speed;
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-5xl font-bold mb-8 text-center pb-8">Achievements</h2>

      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-hidden scrollbar-hide relative"
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
