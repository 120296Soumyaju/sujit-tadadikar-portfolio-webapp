import { FileText, Award, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="pt-20 pb-16">
      {/* About Header */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold">About Me</h1>
              <p className="text-gray-600 mt-4 max-w-lg">
                Experienced Backend Python Engineer with expertise in API development, Flask, database management, and IoT integration.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Avatar className="w-64 h-64">
                <AvatarImage src="/lovable-uploads/ecf2cbe8-03ba-49b4-a0a9-e831c68ff84f.png" alt="Sujit Tadadikar" className="object-cover" />
                <AvatarFallback className="text-6xl font-bold text-primary">ST</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Professional Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              Experienced Backend Python Engineer with expertise in API development, Flask, database management, and IoT integration. Skilled in building scalable applications and optimizing backend systems. Holding an MCA, currently expanding skills in DevOps and Cloud Engineering to enhance deployment and infrastructure management.
            </p>
            <p className="text-gray-700 mb-4">
              Results-driven API Integration Engineer with 5+ years of experience in REST, OAuth2, JWT authentication, and financial data formats, with hands-on skills in Python and FastAPI. Strong background in troubleshooting, performance optimization, and PCI DSS compliance.
            </p>
            <p className="text-gray-700">
              Additionally, experienced in documentation, customer interactions, and technical support within the shipping industry, ensuring efficient service delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">Master of Computer Applications (MCA)</h3>
                  <span className="text-gray-500">2024</span>
                </div>
                <p className="text-gray-600">University of Mumbai</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">Bachelor of Science - Information Technology</h3>
                  <span className="text-gray-500">2020</span>
                </div>
                <p className="text-gray-600">University of Mumbai</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">Diploma in Computer Engineering</h3>
                  <span className="text-gray-500">2015</span>
                </div>
                <p className="text-gray-600">RVIOT, Navi Mumbai</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Programming & Development</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Programming Languages</p>
                  <p className="text-gray-600">Python, Flask</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">MCU</p>
                  <p className="text-gray-600">Arduino Uno, Raspberry Pi, NXP i.MX8</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Scripting Languages</p>
                  <p className="text-gray-600">Shell, HTML5, CSS3, JS</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">API Development</p>
                  <p className="text-gray-600">REST, OAuth2, JWT</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Infrastructure & Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Version Control</p>
                  <p className="text-gray-600">Git, GitHub, Bitbucket</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Security & Compliance</p>
                  <p className="text-gray-600">PCI DSS, Encryption, OWASP</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Cloud & DevOps</p>
                  <p className="text-gray-600">AWS (EC2, EKS, S3), Docker</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Databases</p>
                  <p className="text-gray-600">MySQL, PostgreSQL, MongoDB</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">IoT & Embedded Systems</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600">MQTT</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600">BLE</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600">Wi-Fi</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600">Zigbee</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600">Z-Wave</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600">LoRa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Professional Development</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Advanced Python Workshops</h3>
                </div>
                <p className="text-gray-600">
                  Completed workshops focused on advanced Python programming and backend development.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Cloud Engineering Courses</h3>
                </div>
                <p className="text-gray-600">
                  Pursued courses on cloud platforms and DevOps practices, enhancing skills in AWS and Azure.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">DevOps Training</h3>
                </div>
                <p className="text-gray-600">
                  Engaged in training on containerization, orchestration, and CI/CD processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Personal Interests */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Personal Interests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Swimming</h3>
              <p className="text-gray-600">
                Just like in life, where adaptability is key, swimming teaches me resilience and the ability to navigate challenges with confidence, whether in water or real-world situations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Cooking</h3>
              <p className="text-gray-600">
                Cooking is not just about making food; it's about experimenting, being creative, and understanding the right mix of ingredients—skills that translate well into problem-solving and innovation in daily life.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Coding</h3>
              <p className="text-gray-600">
                Much like solving real-world problems, coding allows me to break down complex challenges into logical steps, reinforcing patience, analytical thinking, and creativity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Learning New Skills</h3>
              <p className="text-gray-600">
                In a fast-evolving world, continuous learning keeps me adaptable and open to growth, helping me stay ahead and apply newfound knowledge to both professional and personal life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Want to know more?</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Download my resume for a complete overview of my experience, skills, and qualifications.
          </p>
          <Button variant="outline" className="mt-6 text-white border-white hover:bg-white hover:text-primary">
            <FileText className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
