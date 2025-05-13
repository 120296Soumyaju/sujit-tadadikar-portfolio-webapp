
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Briefcase, Award, Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary">Sujit Tadadikar</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mt-4">
                Embedded Software Engineer | API Integration | Cloud & IoT Solutions
              </p>
              <p className="text-gray-700 mt-6 max-w-lg">
                I specialize in backend Python development, API integration, and IoT solutions,
                with expertise in building scalable applications and optimizing backend systems.
              </p>
              <div className="mt-8 space-x-4 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/contact">Contact Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/projects">View My Work</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <Avatar className="w-64 h-64 md:w-80 md:h-80">
                  <AvatarImage src="/lovable-uploads/ecf2cbe8-03ba-49b4-a0a9-e831c68ff84f.png" alt="Sujit Tadadikar" className="object-cover" />
                  <AvatarFallback className="text-6xl font-bold text-primary">ST</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg">
                  <Code className="text-primary h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What I Do</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              I combine technical expertise with practical problem-solving to deliver robust software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 w-fit rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">API Development</h3>
                <p className="text-gray-600">
                  Building robust RESTful APIs with Python Flask, focusing on security, performance, and scalability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 w-fit rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">IoT Solutions</h3>
                <p className="text-gray-600">
                  Creating innovative IoT integrations using protocols like MQTT, BLE, Wi-Fi, and LoRa for smart devices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 w-fit rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud Engineering</h3>
                <p className="text-gray-600">
                  Implementing DevOps practices and cloud solutions on platforms like AWS to enhance deployment processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Check out some of my recent work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">IoT Gateway Platform</h3>
                <p className="text-gray-600 mb-4">
                  Developed firmware, APIs, and edge computing solutions for a universal IoT gateway supporting multiple protocols.
                </p>
                <div className="flex gap-2 text-sm">
                  <span className="bg-gray-200 px-3 py-1 rounded-full">Python</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">Flask</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">MQTT</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Enterprise SaaS ERP</h3>
                <p className="text-gray-600 mb-4">
                  Built a scalable SaaS-based ERP solution with CRM, HRM, and business management features.
                </p>
                <div className="flex gap-2 text-sm">
                  <span className="bg-gray-200 px-3 py-1 rounded-full">Python</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">Django</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">PostgreSQL</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/projects">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Interested in working together?</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" asChild className="text-white border-white hover:bg-white hover:text-primary">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" asChild className="text-white border-white hover:bg-white hover:text-primary">
              <a href="mailto:sujit.tadadikar@gmail.com">Email Me</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
