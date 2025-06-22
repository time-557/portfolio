"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const roles = ["Developer", "Upcoming Business Analyst", "Tech Enthusiast"];

export function Hero() {
	const [displayedText, setDisplayedText] = useState("");
	const [roleIndex, setRoleIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentRole = roles[roleIndex];
		let timeout: NodeJS.Timeout;

		if (!isDeleting && charIndex <= currentRole.length) {
			timeout = setTimeout(() => {
				setDisplayedText(currentRole.substring(0, charIndex));
				setCharIndex(charIndex + 1);
			}, 150);
		} else if (isDeleting && charIndex >= 0) {
			timeout = setTimeout(() => {
				setDisplayedText(currentRole.substring(0, charIndex));
				setCharIndex(charIndex - 1);
			}, 75);
		} else if (charIndex === currentRole.length + 1) {
			// Pause before deleting
			timeout = setTimeout(() => setIsDeleting(true), 1000);
		} else if (charIndex === -1) {
			setIsDeleting(false);
			setRoleIndex((roleIndex + 1) % roles.length);
			setCharIndex(0);
		}

		return () => clearTimeout(timeout);
	}, [charIndex, isDeleting, roleIndex]);

	return (
		<section className="h-[40rem] flex flex-col justify-center items-center text-center px-6 md:px-12">


			<h1 className="text-5xl font-extrabold leading-tight max-w-4xl mb-6">
				Hi, I’m <span className="text-primary">Hussein Motiwala</span> — a{" "}
				<span className="text-primary dark:text-secondary">{displayedText}&nbsp;</span>
				<span className="border-r-2 border-secondary animate-pulse inline-block" />
			</h1>
			<p className="max-w-xl text-muted-foreground mb-8 text-lg">
				I’m passionate about exploring data to uncover valuable insights and trends. Technology excites me, and I enjoy building smart solutions that truly make a difference.
			</p>
			<Button
				asChild
				variant="outline"
				size="lg"
				className="flex items-center gap-2 mx-auto cursor-pointer"
			>
				<a href="/resume.pdf" download>
					Resume
				</a>
			</Button>
		</section>
	);
}
