"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { education } from "../../utils/data";

export function EducationTimeline() {
	return (
		<section id="education" className="w-full max-w-4xl mx-auto px-4 py-20">
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
								<div className="w-full max-w-[400px] z-10 group">
									<Card className="transition-transform transform hover:scale-105 hover:shadow-lg hover:border-primary hover:bg-muted/10 flex flex-col justify-between">
										<CardContent className="flex flex-col flex-grow justify-between p-6 space-y-3 z-10">
											<div className="flex items-center gap-2 mb-2">
												<span className="text-2xl">🎓</span>
												<h3 className="text-lg font-bold text-primary">{edu.title}</h3>
											</div>
											<div className="flex items-center gap-2">
												<span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-semibold">
													{edu.institution}
												</span>
												<span className="text-xs text-muted-foreground">{edu.country}</span>
											</div>
											<span className="inline-block text-xs italic text-blue-500 dark:text-blue-300 mb-1">
												{edu.duration == "Upcoming" ? (
													<>
														<span className="inline-block w-2 h-2 rounded-full bg-yellow-400 custom-pulse mr-2"></span>
														<span className="text-yellow-400">{edu.duration}</span>
													</>
												) : edu.duration}
											</span>
											<p className="text-sm text-muted-foreground leading-relaxed">
												{edu.description}
											</p>
											{edu.url && (
												<a
													href={edu.url}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-block mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
												>
													Visit Website
												</a>
											)}
										</CardContent>
									</Card>
								</div>

								{/* Connector Dot */}
								<div className="absolute left-1/2 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
									<div className="w-5 h-5 rounded-full bg-background border-4 border-primary z-20 animate-pulse shadow-md" />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
