"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Developer", "Data Analyst", "Data Engineer", "Tech Enthusiast"];

export function Hero() {
	const [displayedText, setDisplayedText] = useState("");
	const [roleIndex, setRoleIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	// (removed popover) keep hero compact — socials shown inline in a subtle pill

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

	// no popover effect required since socials are inline

	return (
		<section className="h-[40rem] flex flex-col justify-center items-center text-center px-6 md:px-12">


			<h1 className="text-5xl font-extrabold leading-tight max-w-4xl mb-6">
				Hi, I’m <span className="text-primary">Hussein Motiwala</span> — a{" "}
				<span className="text-yellow-400 dark:text-yellow-300">{displayedText}&nbsp;</span>
				<span className="border-r-2 border-secondary animate-pulse inline-block" />
			</h1>
			<p className="max-w-xl text-muted-foreground mb-8 text-lg">
				I’m passionate about exploring data to uncover valuable insights and trends. Technology excites me, and I enjoy building smart solutions that truly make a difference.
			</p>
			{/* Resume + context-aware Connect popover */}
			<div className="flex items-center justify-center gap-4 mt-6">
				<div className="flex items-center gap-4">
					<Button
						asChild
						variant="outline"
						size="lg"
						className="flex items-center gap-2 cursor-pointer"
					>
						<a href="https://drive.google.com/file/d/1h7Zts7XzGHk8jQDjBDSpE2QItXfCyaFd/view?usp=share_link" download>
							Resume
						</a>
					</Button>

					<div className="ml-4 inline-flex items-center gap-2 bg-muted/6 dark:bg-muted/8 rounded-full px-2 py-2">
						<Link href="mailto:motiwalahussein@gmail.com" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/10" aria-label="Email">
							<Mail className="w-4 h-4" />
						</Link>
						<Link href="https://github.com/hussein-hub" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/10 motion-safe:transition-transform motion-safe:duration-150 motion-safe:hover:scale-105" aria-label="GitHub">
							<Github className="w-5 h-5" />
						</Link>
						<Link href="https://www.linkedin.com/in/hussein-motiwala" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/10 motion-safe:transition-transform motion-safe:duration-150 motion-safe:hover:scale-105" aria-label="LinkedIn">
							<Linkedin className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
