
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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Technical Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <TechnicalAchievement 
              key={index} 
              {...achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalAchievements;
