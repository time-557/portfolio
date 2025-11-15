import Image from "next/image";
import { TopNavigation } from "./components/ui/NavigationMenu";
import { Hero } from "./components/ui/HeroSection";
import { CertificationsSkills } from "./components/ui/CertificationsSkills";
import {EducationTimeline} from "./components/ui/EducationTimeline";
import { ProjectsSection } from "./components/ui/ProjectsSection";
import { PublicationsSection } from "./components/ui/PublicationsSection";
import { AchievementsCarousel } from "./components/ui/AchievementsSection";
// import { InstrumentsServer } from "./components/server/InstrumentsServer";
// import { FileEditorPage } from "./components/ui/WebcontainerTest";

// Removed for static export compatibility

export default function Home() {
  return (
    <div className="pb-60">
      {/* <FileEditorPage></FileEditorPage> */}
      <TopNavigation></TopNavigation>
      <Hero></Hero>
      {/* <InstrumentsServer /> */}
      <CertificationsSkills></CertificationsSkills>
      <EducationTimeline></EducationTimeline>
      <ProjectsSection></ProjectsSection>
      <PublicationsSection></PublicationsSection>
      <AchievementsCarousel></AchievementsCarousel>
    </div>
  );
}
