import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  imageSrc?: string;
}

const FeaturedProject = ({
  title,
  subtitle,
  description,
  features,
  tags,
  badges,
  gradientColors,
  imageSrc,
}: FeaturedProjectProps) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group border-gray-100 flex flex-col h-full bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
      {imageSrc ? (
        <div className="h-56 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </AspectRatio>
        </div>
      ) : (
        <div
          className={`h-48 bg-gradient-to-br from-${gradientColors.from} to-${gradientColors.to} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}
        >
          <h3 className="text-2xl font-bold text-white relative z-10">{title}</h3>
        </div>
      )}
      <CardContent className="pt-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge, index) => (
            <Badge key={index} variant="outline">
              {badge}
            </Badge>
          ))}
        </div>
        <h4 className="text-xl font-bold mb-3">{title}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 text-gray-700 mb-4">
          <p>
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 text-sm mt-6">
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

export default FeaturedProject;
