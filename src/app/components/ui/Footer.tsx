"use client";

import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-50 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* subtle accent line */}
        <div className="h-[3px] w-24 rounded-full bg-gradient-to-r from-primary/40 via-primary/20 to-transparent mb-6" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-muted/6 flex items-center justify-center text-sm font-semibold">HK</div>
            <div>
              <p className="text-sm font-medium">Hussein Motiwala</p>
              <p className="text-xs text-muted-foreground">Data & Software · Open to opportunities</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Link href="mailto:motiwalahussein@gmail.com" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </Link>

              <Link href="https://github.com/hussein-hub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </Link>

              <Link href="https://www.linkedin.com/in/hussein-motiwala" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-4">
          <p className="text-xs text-muted-foreground text-center">© {year} Hussein Motiwala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
