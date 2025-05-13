
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedProjectProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  badges: string[];
  gradientColors: {
    from: string;
    to: string;
  };
}

const FeaturedProject = ({
  title,
  subtitle,
  description,
  features,
  tags,
  badges,
  gradientColors,
}: FeaturedProjectProps) => {
  return (
    <Card className="overflow-hidden">
      <div 
        className={`h-48 bg-gradient-to-r from-${gradientColors.from} to-${gradientColors.to} flex items-center justify-center`}
      >
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <CardContent className="pt-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge, index) => (
            <Badge key={index}>{badge}</Badge>
          ))}
        </div>
        <h4 className="text-xl font-bold mb-3">{subtitle}</h4>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="space-y-2 text-gray-700 mb-4">
          <p><strong>Key Features:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 text-sm mt-6">
          {tags.map((tag, index) => (
            <div key={index} className="bg-gray-100 px-3 py-1 rounded-full">{tag}</div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedProject;
