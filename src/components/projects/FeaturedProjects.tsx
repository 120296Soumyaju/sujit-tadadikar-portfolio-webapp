import React from "react";
import FeaturedProject from "./FeaturedProject";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "IoT Gateway Platform",
      subtitle: "Universal IoT Gateway",
      description:
        "Developed a multi-protocol smart home and industrial IoT hub that enables seamless connectivity across devices using various wireless technologies.",
      features: [
        "Python-based IoT libraries for device control",
        "AI-powered edge computing for real-time decisions",
        "REST APIs for mobile app integration",
        "Multi-protocol support (WiFi, BLE, Zigbee, Z-Wave, LoRa)",
        "OTA firmware update system",
      ],
      tags: ["Python", "Flask", "MQTT", "Docker", "AWS"],
      badges: ["Python", "IoT", "Embedded Systems", "Flask"],
      gradientColors: {
        from: "blue-500",
        to: "purple-600",
      },
      imageSrc: "/lovable-uploads/gateway.png",
    },
    {
      title: "Enterprise SaaS ERP",
      subtitle: "SaaS-based ERP Solution",
      description:
        "Built a comprehensive ERP system for streamlining business operations, with modules for CRM, HRM, and business process automation.",
      features: [
        "Integrated CRM and HRM modules",
        "API-driven backend services",
        "Responsive UI with Bootstrap",
        "Optimized database design",
        "Automated business workflows",
      ],
      tags: ["Python", "Django", "PostgreSQL", "HTML/CSS", "JavaScript"],
      badges: ["Python", "Django", "PostgreSQL", "Full Stack"],
      gradientColors: {
        from: "emerald-500",
        to: "teal-600",
      },
      imageSrc: "/lovable-uploads/2752daad-299c-4219-84ee-05f77537b078.png",
    },
    {
      title: "High-Performance Financial APIs",
      subtitle: "Financial Data Processing APIs",
      description:
        "Developed high-performance APIs for real-time financial data processing with enhanced security and optimization.",
      features: [
        "OAuth2-based authentication system",
        "Advanced caching strategies (40% performance improvement)",
        "RESTful API design",
        "Financial data format handling",
        "PCI DSS compliance implementation",
      ],
      tags: ["Python", "REST", "OAuth2", "JWT", "Redis"],
      badges: ["API", "Python", "Performance Optimization"],
      gradientColors: {
        from: "amber-500",
        to: "orange-600",
      },
      imageSrc: "/lovable-uploads/cae2814e-c6bb-4298-97a4-cfaff2e812b3.png",
    },
    {
      title: "IoT Communication Protocols",
      subtitle: "Smart Hardware Communication",
      description:
        "Designed and implemented communication protocols for smart hardware devices using various wireless technologies.",
      features: [
        "MQTT-based message broker system",
        "BLE connectivity for low-power devices",
        "LoRa implementation for long-range communication",
        "Seamless protocol bridging",
        "Secure communication channel implementation",
      ],
      tags: ["MQTT", "BLE", "LoRa", "Python", "Embedded C"],
      badges: ["IoT", "Embedded Systems", "Communication Protocols"],
      gradientColors: {
        from: "purple-500",
        to: "indigo-600",
      },
      imageSrc: "/lovable-uploads/691ee9f6-9106-426a-9cda-502d22f1498e.png",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FeaturedProject key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
