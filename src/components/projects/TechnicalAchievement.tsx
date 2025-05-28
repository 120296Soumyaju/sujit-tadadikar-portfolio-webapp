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
  tags,
}: TechnicalAchievementProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 text-sm">
          {tags.map((tag, index) => (
            <div key={index} className="bg-gray-100 px-3 py-1 rounded-full">
              {tag}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnicalAchievement;
