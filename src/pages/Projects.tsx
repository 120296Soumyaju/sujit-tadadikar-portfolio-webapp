
import React from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ResearchProjects from "@/components/projects/ResearchProjects";
import TechnicalAchievements from "@/components/projects/TechnicalAchievements";

const Projects = () => {
  return (
    <div className="pt-20 pb-16">
      <ProjectsHero />
      <FeaturedProjects />
      <ResearchProjects />
      <TechnicalAchievements />
    </div>
  );
};

export default Projects;
