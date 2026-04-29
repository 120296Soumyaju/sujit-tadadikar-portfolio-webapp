import React from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ResearchProjects from "@/components/projects/ResearchProjects";
import TechnicalAchievements from "@/components/projects/TechnicalAchievements";
import AwardsAchievements from "@/components/projects/AwardsAchievements";
import { useGamification } from '@/context/GamificationContext';
import { useEffect } from 'react';

const Projects = () => {
  const { addXP } = useGamification();

  useEffect(() => {
    addXP(10, 'visit_projects', 'Discovered the Projects page!');
  }, [addXP]);
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
