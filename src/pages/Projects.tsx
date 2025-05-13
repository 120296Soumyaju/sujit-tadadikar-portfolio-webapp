
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import GithubProjects from "@/components/GithubProjects";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <div className="pt-20 pb-16">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Projects & Achievements</h1>
          <p className="text-gray-600 mt-4 max-w-3xl">
            A collection of my work, projects, and technical accomplishments
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">IoT Gateway Platform</h3>
              </div>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Python</Badge>
                  <Badge>IoT</Badge>
                  <Badge>Embedded Systems</Badge>
                  <Badge>Flask</Badge>
                </div>
                <h4 className="text-xl font-bold mb-3">Universal IoT Gateway</h4>
                <p className="text-gray-600 mb-4">
                  Developed a multi-protocol smart home and industrial IoT hub that enables seamless connectivity across devices using various wireless technologies.
                </p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <p><strong>Key Features:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Python-based IoT libraries for device control</li>
                    <li>AI-powered edge computing for real-time decisions</li>
                    <li>REST APIs for mobile app integration</li>
                    <li>Multi-protocol support (WiFi, BLE, Zigbee, Z-Wave, LoRa)</li>
                    <li>OTA firmware update system</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 text-sm mt-6">
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Python</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Flask</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">MQTT</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Docker</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">AWS</div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Enterprise SaaS ERP</h3>
              </div>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Python</Badge>
                  <Badge>Django</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Full Stack</Badge>
                </div>
                <h4 className="text-xl font-bold mb-3">SaaS-based ERP Solution</h4>
                <p className="text-gray-600 mb-4">
                  Built a comprehensive ERP system for streamlining business operations, with modules for CRM, HRM, and business process automation.
                </p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <p><strong>Key Features:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Integrated CRM and HRM modules</li>
                    <li>API-driven backend services</li>
                    <li>Responsive UI with Bootstrap</li>
                    <li>Optimized database design</li>
                    <li>Automated business workflows</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 text-sm mt-6">
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Python</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Django</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">PostgreSQL</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">HTML/CSS</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">JavaScript</div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">High-Performance Financial APIs</h3>
              </div>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>API</Badge>
                  <Badge>Python</Badge>
                  <Badge>Performance Optimization</Badge>
                </div>
                <h4 className="text-xl font-bold mb-3">Financial Data Processing APIs</h4>
                <p className="text-gray-600 mb-4">
                  Developed high-performance APIs for real-time financial data processing with enhanced security and optimization.
                </p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <p><strong>Key Features:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>OAuth2-based authentication system</li>
                    <li>Advanced caching strategies (40% performance improvement)</li>
                    <li>RESTful API design</li>
                    <li>Financial data format handling</li>
                    <li>PCI DSS compliance implementation</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 text-sm mt-6">
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Python</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">REST</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">OAuth2</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">JWT</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Redis</div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">IoT Communication Protocols</h3>
              </div>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>IoT</Badge>
                  <Badge>Embedded Systems</Badge>
                  <Badge>Communication Protocols</Badge>
                </div>
                <h4 className="text-xl font-bold mb-3">Smart Hardware Communication</h4>
                <p className="text-gray-600 mb-4">
                  Designed and implemented communication protocols for smart hardware devices using various wireless technologies.
                </p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <p><strong>Key Features:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>MQTT-based message broker system</li>
                    <li>BLE connectivity for low-power devices</li>
                    <li>LoRa implementation for long-range communication</li>
                    <li>Seamless protocol bridging</li>
                    <li>Secure communication channel implementation</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 text-sm mt-6">
                  <div className="bg-gray-100 px-3 py-1 rounded-full">MQTT</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">BLE</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">LoRa</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Python</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Embedded C</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GitHub Projects */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">GitHub Projects</h2>
            <a 
              href="https://github.com/120296Soumyaju" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-primary hover:underline"
            >
              <Github className="w-5 h-5 mr-1" />
              View All Repositories
            </a>
          </div>
          
          <GithubProjects />
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <a 
                href="https://github.com/120296Soumyaju" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center"
              >
                <Github className="mr-2 h-4 w-4" /> Visit My GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Research Projects</h2>
          
          <Card className="overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Research</Badge>
                <Badge>Machine Learning</Badge>
                <Badge>Healthcare</Badge>
              </div>
              <h4 className="text-xl font-bold mb-3">Early Cancer Detection using Prediction Algorithm</h4>
              <p className="text-gray-600 mb-4">
                Conducted a comprehensive survey of machine learning algorithms for early cancer detection, 
                resulting in a published paper in the International Journal of Advanced Research in Science, 
                Communication and Technology (IJARSCT).
              </p>
              <div className="space-y-2 text-gray-700 mb-4">
                <p><strong>Key Contributions:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Analysis of predictive algorithms for cancer detection</li>
                  <li>Comparison of machine learning approaches in healthcare</li>
                  <li>Evaluation of early detection methodologies</li>
                  <li>Published research with DOI: 10.48175/IJARSCT-15203</li>
                </ul>
              </div>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://lnkd.in/dCHJZCPg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4 mr-1" /> Read Publication
                </a>
                <a 
                  href="https://lnkd.in/d7JKNsn2" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4 mr-1" /> CrossRef
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Achievements */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Technical Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">API Performance Optimization</h3>
                <p className="text-gray-700 mb-4">
                  Successfully optimized API response times by 40% through implementing advanced caching strategies, 
                  load balancing techniques, and query optimization.
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <div className="bg-gray-100 px-3 py-1 rounded-full">API Caching</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Load Balancing</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Rate Limiting</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">IoT Gateway Optimization</h3>
                <p className="text-gray-700 mb-4">
                  Improved real-time device response by 30% through the implementation of edge AI and 
                  protocol optimization techniques for IoT gateway devices.
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Edge Computing</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Protocol Optimization</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">AI Integration</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Device Integration at Scale</h3>
                <p className="text-gray-700 mb-4">
                  Enabled seamless integration of 50,000+ IoT devices, enhancing connectivity and automation 
                  for smart home and industrial applications.
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Scalability</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Device Management</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Integration</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Firmware Update Reliability</h3>
                <p className="text-gray-700 mb-4">
                  Reduced firmware update failures by 40%, significantly improving device reliability and user experience 
                  with OTA updates for IoT devices.
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <div className="bg-gray-100 px-3 py-1 rounded-full">OTA Updates</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Reliability</div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full">Firmware Management</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
