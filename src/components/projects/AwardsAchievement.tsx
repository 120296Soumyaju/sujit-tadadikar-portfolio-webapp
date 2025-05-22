
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
    <Card>
          <CardContent className="pt-6">
            
                <h2 className="text-xl font-bold">{title}</h2>
                <p><strong>Project Title:</strong> {project}</p>
                <p><strong>Level:</strong> {level}</p>
                <p><strong>Team Members:</strong> {teamMembers.join(", ")}</p>
                <p><strong>Mentor:</strong> {mentor}</p>
                <p><strong>Highlights:</strong></p>
                <ul className="list-disc list-inside">
                    {highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                    ))}
                </ul>
                <img src={image} alt={project} className="rounded-xl mt-4" />
            
         </CardContent>
    </Card>  
  );
};

export default AwardsAchievement;
