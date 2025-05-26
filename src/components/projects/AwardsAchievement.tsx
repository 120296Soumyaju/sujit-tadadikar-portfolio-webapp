
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface AwardsAchievementProps {
  title: string;
  project: string;
  level: string;
  teamMembers: string[];
  mentor: string;
  highlights: string[];
  image: string;
}

const AwardsAchievement = ({ title, project, level, teamMembers, mentor, highlights, image }: AwardsAchievementProps) => {
  return (
    <Card className="hover-lift hover-glow transition-all duration-700 group hover:shadow-2xl hover:shadow-primary/15 transform-gpu hover:border-primary/30">
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold animate-slide-in-left text-gradient group-hover:scale-105 transition-transform duration-300 mb-3">
          {title}
        </h2>
        <p className="animate-fade-in group-hover:text-gray-900 transition-colors duration-300">
          <strong className="text-primary">Project Title:</strong> {project}
        </p>
        <p className="animate-fade-in group-hover:text-gray-900 transition-colors duration-300">
          <strong className="text-primary">Level:</strong> {level}
        </p>
        <p className="animate-fade-in group-hover:text-gray-900 transition-colors duration-300">
          <strong className="text-primary">Team Members:</strong> {teamMembers.join(", ")}
        </p>
        <p className="animate-fade-in group-hover:text-gray-900 transition-colors duration-300">
          <strong className="text-primary">Mentor:</strong> {mentor}
        </p>
        <p className="animate-fade-in group-hover:text-gray-900 transition-colors duration-300">
          <strong className="text-primary">Highlights:</strong>
        </p>
        <ul className="list-disc list-inside animate-slide-up">
          {highlights.map((highlight, i) => (
            <li 
              key={i} 
              className={`animate-slide-in-right hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer transform-gpu`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-4 overflow-hidden rounded-xl group-hover:shadow-lg transition-shadow duration-300">
          <img 
            src={image} 
            alt={project} 
            className="rounded-xl transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 w-full h-auto" 
          />
        </div>
      </CardContent>
    </Card>  
  );
};

export default AwardsAchievement;
