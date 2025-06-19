import Image from "next/image";
import { TopNavigation } from "./components/ui/NavigationMenu";
import { Hero } from "./components/ui/HeroSection";
import { CertificationsSkills } from "./components/ui/CertificationsSkills";
import {EducationTimeline} from "./components/ui/EducationTimeline";
import { ProjectsSection } from "./components/ui/ProjectsSection";
import { AchievementsCarousel } from "./components/ui/AchievementsSection";
// import { FileEditorPage } from "./components/ui/WebcontainerTest";

export default function Home() {
  return (
    <div className="pb-60">
      {/* <FileEditorPage></FileEditorPage> */}
      <TopNavigation></TopNavigation>
      <Hero></Hero>
      <CertificationsSkills></CertificationsSkills>
      <EducationTimeline></EducationTimeline>
      <ProjectsSection></ProjectsSection>
      <AchievementsCarousel></AchievementsCarousel>
    </div>
  );
}
