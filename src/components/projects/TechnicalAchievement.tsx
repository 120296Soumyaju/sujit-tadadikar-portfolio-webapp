
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TechnicalAchievementProps {
  title: string;
  description: string;
  tags: string[];
}

const TechnicalAchievement = ({ 
  title, 
  description, 
  tags 
}: TechnicalAchievementProps) => {
  return (
    <Card className="hover-lift hover-glow transition-all duration-500 group hover:shadow-xl hover:shadow-primary/10 transform-gpu hover:border-primary/30">
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-3 text-gradient animate-slide-in-left group-hover:scale-105 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-gray-700 mb-4 animate-fade-in leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 text-sm">
          {tags.map((tag, index) => (
            <div 
              key={index} 
              className={`bg-gray-100 px-3 py-1 rounded-full hover-scale hover:bg-primary hover:text-white hover:shadow-md transition-all duration-300 animate-bounce-in cursor-pointer transform-gpu hover:-rotate-1`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnicalAchievement;
