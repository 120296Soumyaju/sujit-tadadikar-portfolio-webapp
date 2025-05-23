
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <div className="pt-20 pb-16">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Professional Experience</h1>
          <p className="text-gray-600 mt-4 max-w-3xl">
            My professional journey in software development, API integration, and IoT solutions.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Work Timeline</h2>

          <div className="space-y-12">
            {/* Entrepreneurial Experience */}
            <div className="border-l-4 border-primary pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary"></div>
              <div className="mb-2">
                <Badge className="mb-2">Nov 2023 - Present</Badge>
                <h3 className="text-xl font-bold">Company Owner & Lead Computer Engineer</h3>
                <div className="flex items-center gap-3 mt-1">
                  <img src="company-logos/SCS.png" alt="SCS Logo" className="w-8 h-8 object-contain" />
                  <p className="text-gray-600">
                    Soumya's Computer Solution's, Navi Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              <Card className="mt-4">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Founded and Managed Business:</strong> Established and grew Soumya's Computer Solutions, overseeing all facets of the company, including strategic planning, operations, and financial management.
                    </li>
                    <li>
                      <strong>Led Technical Operations:</strong> Directed and performed complex technical tasks, including system installations, repairs, and troubleshooting, ensuring high-quality IT support and customer satisfaction.
                    </li>
                    <li>
                      <strong>Developed Client Relationships:</strong> Built and maintained strong client relationships through excellent service delivery, tailored solutions, and effective communication.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* LEXI DEVICES Experience */}
            <div className="border-l-4 border-gray-300 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="mb-2">
                <Badge variant="secondary" className="mb-2">Oct 2022 - Oct 2023</Badge>
                <h3 className="text-xl font-bold">Embedded Software Engineer</h3>
                <div className="flex items-center gap-3 mt-1">
                  <img src="company-logos/lexidevices_logo.png" alt="Lexi Logo" className="w-8 h-8 object-contain" />
                  <p className="text-gray-600">
                    LEXI DEVICES INC., Lebanon, Ohio ,United States
                  </p>
                </div>
              </div>

              <Card className="mt-4">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Project: Lexi's Universal IoT Gateway</h4>
                  <p className="text-gray-700 mb-4">
                    Worked on a multi-protocol smart home and industrial IoT hub, enabling seamless connectivity across devices using Wi-Fi, Bluetooth, Zigbee, Z-Wave, 900 MHz, LoRaWAN, and cellular networks.
                  </p>

                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Firmware & Embedded Development:</strong> Engineered Python-based IoT libraries for the NXP i.MX8-based Universal IoT Gateway, handling device onboarding, control, and automation.
                    </li>
                    <li>
                      <strong>Edge AI & Smart Processing:</strong> Implemented AI-powered edge computing for real-time decision-making, enabling faster and more efficient IoT device automation.
                    </li>
                    <li>
                      <strong>API Development & Mobile App Integration:</strong> Developed and deployed Flask-based REST APIs for Lexi's white-label iOS & Android apps, allowing users to add, control, and manage IoT devices.
                    </li>
                    <li>
                      <strong>Platform-as-a-Service (PaaS) Deployment:</strong> Assisted in deploying and scaling Lexi's PaaS, reducing operational costs and enhancing flexibility for enterprise smart home solutions.
                    </li>
                    <li>
                      <strong>IoT Protocol & Security Implementation:</strong> Integrated secure multi-protocol connectivity for Google Smart Home, Amazon Alexa, Philips Hue, TP-Link, Lifx, and IFTTT, ensuring interoperability.
                    </li>
                    <li>
                      <strong>Firmware Deployment & OTA Updates:</strong> Implemented Mender-based OTA firmware updates, streamlining device management and minimizing downtime.
                    </li>
                    <li>
                      <strong>Security & Compliance:</strong> Developed multi-layered security measures to ensure safe communication between IoT devices and cloud platforms.
                    </li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Optimized IoT Gateway performance, improving real-time device response by 30% through edge AI and protocol optimization.</li>
                    <li>Enabled seamless integration of 50,000+ IoT devices, enhancing connectivity and automation for smart home and industrial applications.</li>
                    <li>Reduced firmware update failures by 40%, improving device reliability and user experience with OTA updates.</li>
                    <li>Expanded interoperability, increasing Lexi's supported IoT ecosystem, attracting more B2B clients, and strengthening Platform-as-a-Service adoption.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CMA CGM Experience */}
            <div className="border-l-4 border-gray-300 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="mb-2">
                <Badge variant="secondary" className="mb-2">May 2022 - Sep 2022</Badge>
                <h3 className="text-xl font-bold">Junior Executive - Import Service Delivery - Centralized Documentation</h3>
                <div className="flex items-center gap-3 mt-1">
                  <img src="company-logos/cma_cgm_logo.png" alt="CMA CGM Logo" className="w-8 h-8 object-contain" />
                  <p className="text-gray-600">
                    CMA CGM INDIA PVT. LTD., Navi Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              <Card className="mt-4">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Managed Documentation:</strong> Coordinated and processed import documentation, ensuring accuracy and compliance with regulatory requirements.
                    </li>
                    <li>
                      <strong>Streamlined Processes:</strong> Improved efficiency in documentation workflows by centralizing and standardizing processes, reducing errors and turnaround time.
                    </li>
                    <li>
                      <strong>Liaised with Stakeholders:</strong> Acted as a point of contact for internal and external stakeholders, facilitating smooth communication and resolution of import-related issues.
                    </li>
                    <li>
                      <strong>Monitored Shipments:</strong> Tracked and monitored import shipments, ensuring timely and accurate delivery while addressing any discrepancies or delays.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* SEAHORSE Experience */}
            <div className="border-l-4 border-gray-300 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="mb-2">
                <Badge variant="secondary" className="mb-2">Mar 2021 - Mar 2022</Badge>
                <h3 className="text-xl font-bold">Import/Export Documentation Assistant</h3>
                <div className="flex items-center gap-3 mt-1">
                  <img src="company-logos/seahorseshipping_logo.png" alt="SSA Logo" className="w-8 h-8 object-contain" />
                  <p className="text-gray-600">
                    SEAHORSE SHIP AGENCIES PVT. LTD., Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              <Card className="mt-4">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Processed Documentation:</strong> Managed the preparation and submission of Import General Manifest (IGM) and Export General Manifest (EGM) documents, ensuring compliance with shipping regulations.
                    </li>
                    <li>
                      <strong>Data Entry and Verification:</strong> Entered and verified shipping data into systems, maintaining accuracy and completeness of documentation.
                    </li>
                    <li>
                      <strong>Coordinated with Authorities:</strong> Liaised with customs and port authorities to facilitate smooth processing and clearance of import/export shipments.
                    </li>
                    <li>
                      <strong>Documentation Accuracy:</strong> Ensured precise documentation and compliance with shipping regulations, including resolving discrepancies and performing EDI corrections for both import and export records.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* SPERENTES SOLUTIONS Experience */}
            <div className="border-l-4 border-gray-300 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="mb-2">
                <Badge variant="secondary" className="mb-2">Mar 2020 - Feb 2021</Badge>
                <h3 className="text-xl font-bold">Software Developer (Full Stack Python)</h3>
                <div className="flex items-center gap-3 mt-1">
                  <img src="company-logos/sperentes_logo.png" alt="Sperentes Logo" className="w-8 h-8 object-contain" />
                  <p className="text-gray-600">
                    SPERENTES SOLUTIONS LLP, Navi Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              <Card className="mt-4">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Project: Enterprise SaaS ERP Software</h4>
                  <p className="text-gray-700 mb-4">
                    Sperentes Solutions LLP was developing an Enterprise SaaS ERP Software from scratch to enhance business operations and streamline customer relationship management (CRM) and human resource management (HRM).
                  </p>

                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Enterprise SaaS ERP Development:</strong> Designed and developed key modules for an integrated ERP system, including CRM, HRM, and Business Management features.
                    </li>
                    <li>
                      <strong>Front-End Development:</strong> Built responsive and interactive UI components using HTML, CSS, JavaScript, and Bootstrap, improving user engagement.
                    </li>
                    <li>
                      <strong>Back-End Development:</strong> Developed robust API-driven backend services using Python and Django, ensuring smooth business workflows.
                    </li>
                    <li>
                      <strong>Database Management:</strong> Designed and optimized PostgreSQL/MySQL databases, ensuring efficient data storage and retrieval for ERP functionalities.
                    </li>
                    <li>
                      <strong>Business Process Automation:</strong> Implemented automated workflows within the ERP system to enhance productivity and reduce manual intervention.
                    </li>
                    <li>
                      <strong>Version Control & CI/CD:</strong> Managed code versioning with Git and SourceTree, ensuring smooth deployments and team collaboration.
                    </li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Successfully developed and deployed a scalable SaaS-based ERP solution tailored for business process automation.</li>
                    <li>Improved client relationship management with a well-structured CRM module, leading to better customer engagement.</li>
                    <li>Enhanced data security and system performance, ensuring high availability and reliability of the ERP software.</li>
                    <li>Delivered an intuitive and user-friendly UI, improving adoption rates and operational efficiency.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Software Consultant Experience */}
            <div className="border-l-4 border-gray-300 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="mb-2">
                <Badge variant="secondary" className="mb-2">Feb 2019 - Feb 2020</Badge>
                <h3 className="text-xl font-bold">Software Consultant | Full Stack Software Engineer</h3>
                <div className="flex items-center gap-3 mt-1">
                  <img src="company-logos/freelancer_com_logo.png" alt="Freelancer Logo" className="w-8 h-8 object-contain" />
                  <p className="text-gray-600">
                    Freelancer.com ,Sydney, NSW
                  </p>
                </div>
              </div>

              <Card className="mt-4">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Software Development:</strong> Developed and delivered major software projects for graduation and post-graduation students, utilizing Java, C++, ASP.NET, PHP, and MySQL to create robust applications.
                    </li>
                    <li>
                      <strong>IoT Hardware Integration:</strong> Designed and implemented IoT-based hardware projects, integrating software solutions with physical devices to meet project requirements.
                    </li>
                    <li>
                      <strong>Android App Development:</strong> Created and optimized Android applications, enhancing user experience and functionality for various client needs.
                    </li>
                    <li>
                      <strong>Technical Support and Guidance:</strong> Provided expert technical support and mentorship to students, ensuring successful project completion and addressing complex technical challenges.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Internship Experience</h2>

          <div className="border-l-4 border-primary pl-6 relative">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary"></div>
            <div className="mb-2">
              <Badge className="mb-2">Aug 2023</Badge>
              <h3 className="text-xl font-bold">Python Programmer</h3>
              <div className="flex items-center gap-3 mt-1">
                  <img src="company-logos/contetra_logo.png" alt="Contetra Logo" className="w-8 h-8 object-contain" />
                  <p className="text-gray-600">
                    Contetra Private Limited, Mumbai, India
                  </p>
              </div>
            </div>

            <Card className="mt-4">
              <CardContent className="pt-6">
                <p className="mb-4">Contetra Python Developer Internship: Winter 2023</p>
                <p className="mb-4">The internship program involved Data Scraping & Warehousing.</p>

                <h4 className="font-semibold mb-2">Key Achievements and Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Developed and maintained Python scripts to automate Web Scraping.</li>
                  <li>Collaborated with the Finance to understand and address their programming needs.</li>
                  <li>Assisted in troubleshooting and debugging Python code, contributing to the overall improvement of the codebase.</li>
                  <li>Actively participated in team meetings, discussions, and brainstorming sessions, providing valuable insights and solutions.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Research & Publications</h2>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Early Cancer Detection using Prediction Algorithm: A Survey.</h3>
                  <div className="flex items-center gap-3 mt-1">
                  <img src="company-logos/IJARSCT Logo.png" alt="IJARSCT Logo" className="w-8 h-8 object-contain" />
                  <p className="text-gray-600" mt-1>
                    International Journal of Advanced Research in Science, Communication and Technology (IJARSCT)
                  </p>
              </div>
                </div>
                <Badge>Jan 2024</Badge>
              </div>

              <div className="mt-4 text-gray-700">
                <p className="mb-2 flex items-center space-x-2">
                  <img src="company-logos/doi.png" alt="DOI" className="w-7 h-7 object-contain" />
                  <span className="text-lg font-semibold">10.48175/IJARSCT-15203</span>
                </p>

                <div className="flex space-x-8 items-start mt-2">
                  {/* Read Publication */}
                  <a
                    href="https://lnkd.in/dCHJZCPg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-primary hover:opacity-80"
                  >
                    <img src="company-logos/reading-book.png" alt="Read Publication" className="w-8 h-8 object-contain mb-1" />
                    <span className="text-sm">Read Publication</span>
                  </a>

                  {/* CrossRef */}
                  <a
                    href="https://lnkd.in/d7JKNsn2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-primary hover:opacity-80"
                  >
                    <img src="company-logos/crossref-logo-landscape-200.png" alt="CrossRef" className="w-8 h-8 object-contain mb-1" />
                    <span className="text-sm">CrossRef</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Experience;
