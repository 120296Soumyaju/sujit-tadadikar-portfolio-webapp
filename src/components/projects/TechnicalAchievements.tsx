
import React from "react";
import TechnicalAchievement from "./TechnicalAchievement";

const TechnicalAchievements = () => {
  const achievements = [
    {
      title: "API Performance Optimization",
      description: "Successfully optimized API response times by 40% through implementing advanced caching strategies, load balancing techniques, and query optimization.",
      tags: ["API Caching", "Load Balancing", "Rate Limiting"]
    },
    {
      title: "IoT Gateway Optimization",
      description: "Improved real-time device response by 30% through the implementation of edge AI and protocol optimization techniques for IoT gateway devices.",
      tags: ["Edge Computing", "Protocol Optimization", "AI Integration"]
    },
    {
      title: "Device Integration at Scale",
      description: "Enabled seamless integration of 50,000+ IoT devices, enhancing connectivity and automation for smart home and industrial applications.",
      tags: ["Scalability", "Device Management", "Integration"]
    },
    {
      title: "Firmware Update Reliability",
      description: "Reduced firmware update failures by 40%, significantly improving device reliability and user experience with OTA updates for IoT devices.",
      tags: ["OTA Updates", "Reliability", "Firmware Management"]
    }
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center animate-slide-up text-gradient float">
          Technical Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`animate-scale-in hover-lift hover-glow animate-stagger-${Math.min(index + 1, 6)} group`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <TechnicalAchievement {...achievement} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated background patterns */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-secondary/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
    </section>
  );
};

export default TechnicalAchievements;
