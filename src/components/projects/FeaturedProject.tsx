
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
    <Card className="overflow-hidden shadow-md hover-lift hover-glow transition-all duration-500 group animate-scale-in">
      {imageSrc ? (
        <div className="h-56 overflow-hidden relative">
          <AspectRatio ratio={16 / 9}>
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </AspectRatio>
        </div>
      ) : (
        <div 
          className={`h-48 bg-gradient-to-r from-${gradientColors.from} to-${gradientColors.to} flex items-center justify-center relative overflow-hidden`}
        >
          <h3 className="text-2xl font-bold text-white text-shimmer">{title}</h3>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      )}
      <CardContent className="pt-6 space-y-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className={`hover-scale animate-bounce-in animate-stagger-${Math.min(index + 1, 6)} transition-colors hover:bg-primary hover:text-primary-foreground`}
            >
              {badge}
            </Badge>
          ))}
        </div>
        
        <h4 className="text-xl font-bold mb-3 text-gradient animate-slide-in-left">
          {title}
        </h4>
        
        <p className="text-gray-600 mb-4 animate-fade-in animate-stagger-2 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2 text-gray-700 mb-4 animate-slide-up animate-stagger-3">
          <p><strong className="text-primary">Key Features:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className={`animate-slide-in-right animate-stagger-${Math.min(index + 4, 6)} hover:text-primary transition-colors duration-200`}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 text-sm mt-6">
          {tags.map((tag, index) => (
            <div 
              key={index} 
              className={`bg-gray-100 px-3 py-1 rounded-full hover-scale hover:bg-primary hover:text-white transition-all duration-300 animate-bounce-in animate-stagger-${Math.min(index + 1, 6)} cursor-pointer`}
            >
              {tag}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedProject;
