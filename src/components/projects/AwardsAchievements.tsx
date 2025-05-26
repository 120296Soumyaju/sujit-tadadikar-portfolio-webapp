import React from "react";
import AwardsAchievement from "./AwardsAchievement";

const AwardsAchievements = () => {
  const achievements = [
    {
      title: "🏆 Participated in 12th Inter-University Avishkar Research Convention 2017-2018",
      project: "📱 SOS: Signal of Stress / Save Our Soul - Your Personal Safety App",
      level: "UG",
      teamMembers: ["Dhanesh Walgali", "Sujit Prakash Tadadikar"],
      mentor: "Dr. Sujata Shahbade",
      highlights: [
        "Developed a mobile application for emergency alerting using panic buttons and real-time GPS location tracking."
      ],
      image: "/awards-uploads/SOS Poster.jpg"
    },
    {
      title: "🏆 Participated in 12th Inter-University Avishkar Research Convention 2017-2018",
      project: "🤙 Ear to Hear: An Assistive Technology for Deaf and Dumb",
      level: "UG",
      teamMembers: ["Disha Shah", "Saral Joseph", "Tejas Kadam", "Sujit Prakash Tadadikar"],
      mentor: "Dr. Seema Somani (Head, Commerce Department)",
      highlights: [
        "Designed a multifunctional wearable glove to translate sign language gestures into speech using flex sensors.",
        "Won Third Prize at GMRT National Science Day organized by NCRA & TIFR GMRT (Feb 2018).",
        "Selected for final level of university Avishkar convention and SS12 Project Competition Prelims at PCCOE, Pune."
      ],
      image: "/awards-uploads/Ear2Hear.jpg"
    },
    {
      title: "🏆 Participated in 12th Inter-University Avishkar Research Convention 2018-2019",
      project: "🤖🚑 RoboAmbulance",
      level: "UG",
      teamMembers: ["Disha Shah", "Saral Joseph", "Tejas Kadam", "Sujit Prakash Tadadikar"],
      mentor: "Dr. Seema Somani",
      highlights: [
        "Designed a robotic ambulance prototype with GPS, IMU, WiFi, gripper arm and camera modules.",
        "Demonstrated autonomous navigation and assistance features."
      ],
      image: "/awards-uploads/Roboambulance.png"
    },
    {
      title: "🏆 Participated in 13th Inter-University Avishkar Research Convention 2018-2019",
      project: "👨‍🦯 DISHANDH 1.0 - An Electronic Smart Cane for the Blind",
      level: "UG",
      teamMembers: ["Dhanesh Walgali", "Sujit Prakash Tadadikar"],
      mentor: "Dr. Sujata Shahbade",
      highlights: [
        "Developed a smart cane using Arduino Nano, ultrasonic sensors, and IR sensors to help visually impaired individuals detect obstacles."
      ],
      image: "/awards-uploads/DISHAANDH Poster.jpg"
    },
    
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Awards & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AwardsAchievement key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAchievements;
