
import React from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import GitHubProjectsSection from "@/components/projects/GitHubProjectsSection";
import ResearchProjects from "@/components/projects/ResearchProjects";
import TechnicalAchievements from "@/components/projects/TechnicalAchievements";

const Projects = () => {
  return (
    <div className="pt-20 pb-16">
      <ProjectsHero />
      <FeaturedProjects />
      <GitHubProjectsSection />
      <ResearchProjects />
      <TechnicalAchievements />
    </div>
  );
};

export default Projects;
