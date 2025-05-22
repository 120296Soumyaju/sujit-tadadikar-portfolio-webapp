
import React from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ResearchProjects from "@/components/projects/ResearchProjects";
import TechnicalAchievements from "@/components/projects/TechnicalAchievements";
import AwardsAchievements from "@/components/projects/AwardsAchievements";

const Projects = () => {
  return (
    <div className="pt-20 pb-16">
      <ProjectsHero />
      <FeaturedProjects />
      <ResearchProjects />
      <TechnicalAchievements />
      <AwardsAchievements />
    </div>
  );
};

export default Projects;
