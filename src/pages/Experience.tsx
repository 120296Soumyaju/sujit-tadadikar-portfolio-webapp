import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { useGamification } from '@/context/GamificationContext';
import { useEffect } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Experience = () => {
  const { addXP } = useGamification();

  useEffect(() => {
    addXP(10, 'visit_experience', 'Discovered the Experience page!');
  }, [addXP]);
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <section className="py-16 md:py-24 bg-white relative border-b border-gray-100 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              My professional journey in software development, API integration,
              and IoT solutions. Building scalable systems and leading technical teams.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
              Work Timeline
            </h2>
          </motion.div>

          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-gray-200 before:to-transparent">
            {/* Entrepreneurial Experience */}

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="pl-8 relative group"
            >
              <div className="absolute left-0 top-1 w-6 h-6 -translate-x-[11px] rounded-full bg-white border-4 border-primary shadow-sm z-10 group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="mb-2">
                <Badge className="mb-2">Aug 2025 - Present</Badge>
                <h3 className="text-xl font-bold">
                  Head of Technology & Engineering - Full Stack Engineer
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src="company-logos/rubit.png"
                    alt="rubitcube Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-gray-600">
                    RubitCube Information Technologies LLC. Dubai,UAE
                  </p>
                </div>
              </div>

              <Card className="mt-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">SUMMARY OF ROLE</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <p>
                     
                      Lead end-to-end engineering for client and internal products across the UAE market. Responsible for full-stack development, DevOps, server & hosting management, product architecture, cloud deployment, SEO optimization, R&D, and technical leadership. Collaborate cross-functionally with business, operations, SEO, and design teams to deliver high-impact solutions.
                    </p>
                    <li>
                      <strong>
                        Situation
                      </strong>{" "}
                      RubitCube needed a unified engineering lead to build and deploy multiple high-impact digital products while managing technical operations, servers, and client expectations.
                    </li>
                    <li>
                      <strong>
                        Task
                      </strong>{" "}
                      Design, develop, deploy, optimize, and maintain client & in-house applications, ensure 99% uptime, improve SEO, secure servers, and guide new technical hires.
                    </li>
                    <li>
                      <strong>
                        Action
                      </strong>{" "}
                      <ul>
                        <li>Architected, developed, and deployed 7+ end-to-end applications (React, Laravel, Django DRF, Next.js, PHP, MySQL).</li>
                        <li>Performs full server/hosting management across VPS, cPanel, WHMCS, Cloudflare CDN, and email systems.</li>
                        <li>Implemented Linux security hardening—SSH RSA keys, firewall rules, fail2ban, auditd, AIDE, CIS benchmark controls.</li>
                        <li>Migrated legacy systems to AlmaLinux 8 VPS with optimized Apache + NGINX load balancing layers.</li>
                        <li>Conducted performance tuning—DB indexing, caching, rate limiting, API optimization, MPM worker tuning.</li>
                        <li>Implemented CI/CD-style version control workflows using GitHub/Bitbucket with multi-domain Git integration.</li>
                        <li>Spearheaded R&D initiatives and delivered POCs for emerging in-house products aligned with business KPIs.</li>
                        <li>Provided SEO technical improvements—site speed, schema, structured data, on-page optimization.</li>
                        <li>Conducted interviewing, onboarding, mentoring and task management for technical interns.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>
                        Results
                      </strong>{" "}
                      <ul>
                        <li>Delivered 100% of client projects on time, reducing development cycle by 35%.</li>
                        <li>Improved server uptime to 99.9% through proactive monitoring & hardening.</li>
                        <li>Reduced website load times by 40–60%, directly improving SEO scores.</li>
                        <li>Increased Google ranking for clients (BlueCatalyst, ShamsNaturals) by up to 90%.</li>
                        <li>Reduced bot attacks & unauthorized access attempts by 95% using hardened SSH + Fail2Ban.</li>
                        <li>Automated backup & monitoring processes, decreasing manual workload by 70%.</li>
                        <li>Successfully mentored interns, increasing team productivity by 30%.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Highlighted Projects:</strong>
                      <ul className="list-disc pl-5 space-y-4 mt-2 text-gray-700">
                        <li>
                          <a
                            href="https://benoit.ae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                           Benoit Contracting LLC – Modern Construction Web App
                          </a>
                          <br />
                          <strong>Delivered to:</strong> Benoit Contracting LLC
                          <br />
                          Delivered a responsive, SEO-optimized landing site with dynamic project portfolios, modal-based details, and high-performance UX.
                          <br />
                          <strong>Tech Stack:</strong> React.js, Typescript, vite, Tailwind CSS, php backend 
                        </li>

                        <li>
                          <a
                            href="https://rubitcube.com/bigbrandlogo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            Big Brand Logos – Branding Agency SPA
                          </a>
                          <br />
                          <strong>Delivered to:</strong> Rubitcube Information Technologies LLC.
                          <br />
                          Built full website with pricing plans, live portfolio, and optimized load performance for UAE audience.
                          <br />
                          <strong>Tech Stack:</strong> React.js, React Router SPA, Typescript, vite, Tailwind CSS, php email backend
                        </li>
                        <li>
                          <a
                            href="https://nachoflixuae.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            NachoflixUAE – End-to-End Server Migration & Optimization
                          </a>
                          <br />
                          <strong>Delivered to:</strong> NachoflixUAE
                          <br />
                          <ul>
                            <li>AlmaLinux 8 VPS + Apache+NGINX + MySQL + Security Hardening</li>
<li>Migrated legacy JSP/PHP site to optimized VPS.</li>
<li>Enabled RSA SSH login, Fail2Ban, Netdata monitoring.</li>
<li>Reduced downtime, fixed SMTP mail delivery with custom cron automation.</li>
<li>Implemented Apache MPM worker tuning & NGINX load balancing.</li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.bluecatalystcs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            Blue Catalyst – Technical SEO optimization & Performance Audit
                          </a>
                          <br />
                          <strong>Delivered to:</strong> Blue Catalyst
                          <br />
                          Improved on-page SEO resulting in ~90% improvement in ranking and resolved core technical bugs.
                        </li>
                        <li>
                            <strong>Ephemeral QR Attendance System – R&D to Production</strong>
                          <br />
                          <strong>Delivered to:</strong> RubitCube Information Technologies LLC.
                          <br />
                          Developed a secure, multi-timezone QR-based attendance system with geofencing, OT tracking, and real-time QR rotation.
                          <br />
                          <strong>Tech Stack:</strong> React TS + Django DRF + Redis + Celery + MySQL + Cloudflare R2 + Docker + JWT auth + NGINX + WebSockets 
                        </li>
                        <li>
                          <a
                            href="https://ecobags.rubitcubedev.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            ShamsNaturals UAE – Multi-Domain Migration & Redesign
                          </a>
                          <br />
                          <strong>Delivered to:</strong> ShamsNaturals UAE
                          <br />
                          <ul>
                            <li>Migrated multiple CMS systems to optimized cPanel architecture.</li>
                            <li>Implemented Git-based version tracking & CodeGuard backups</li>
                            <li>Optimized Apache MPM worker tuning & NGINX load balancing</li>
                            <li>Ensured 24/7 uptime for the e-commerce platform</li>
                            <li>Managed daily server maintenance and security updates</li>
                            <li>Implemented automated daily backups and security monitoring</li>
                            <li>Configured SSH key authentication and restricted root access</li>
                            <li>Hardened Apache + PHP installations against common vulnerabilities</li>
                            <li>Installed and tuned Netdata for real-time server monitoring and anomaly detection</li>
                            <li>Implemented Fail2Ban with custom rules for WordPress protection</li>
                            <li>Configured Apache MPM worker tuning & NGINX load balancing</li>
                            <li>Optimized MySQL queries and database configurations for faster response times</li>
                            <li>Resolved critical payment integration issues & API failures</li>
                            <li>Enabled 2FA login for all admin accounts</li>
                            <li>Built complete new e-commerce platform + CMS using React TS + Laravel 11 with full SEO module, banners, dealers, pages, events, blog, and multi-image system to overcome outdated functionalities and outdated plain php based website . Outdated Plain php based Website: <a
                            href="https://shamsnaturals.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >https://shamsnaturals.com</a></li>
                            <li>Secured MySQL databases with proper user permissions and encryption</li>
                            <li>Implemented firewall rules to block suspicious traffic and potential attacks</li>
                            <li>Configured domain email routing & restored lost messages</li>
                            <li>Enabled remote access for developers.</li>
                            <li>Migrated legacy CMS to modern architecture.</li>
                            <li>Resolved critical payment integration issues & API failures.</li>
                            <li>Built multi-domain e-commerce platform (UAE focus) with real-time shipping integration and localized payment gateways.</li>
                            <li>Implemented AI-powered recommendation engine, boosting repeat purchases by 18%.</li>
                            <li>Optimized site for local search, achieving #1 ranking for target produce keywords.</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="pl-8 relative group"
            >
              <div className="absolute left-0 top-1 w-6 h-6 -translate-x-[11px] rounded-full bg-white border-4 border-primary shadow-sm z-10 group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="mb-2">
                <Badge className="mb-2">Nov 2023 - Present</Badge>
                <h3 className="text-xl font-bold">
                  Company Owner & Lead Software Engineer
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src="company-logos/SCS.png"
                    alt="SCS Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-gray-600">
                    Soumya's Computer Solution's, Navi Mumbai, Maharashtra,
                    India
                  </p>
                </div>
              </div>

              <Card className="mt-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Business Strategy & Operations:</strong>{" "}
                      Identified a market gap in IT solutions for small
                      businesses and academic institutions. Secured AMC with M/s
                      Lakashmipathi Engineering for regular IT support and
                      system maintenance, improving uptime and efficiency.
                    </li>
                    <li>
                      <strong>
                        Full-Stack Development & Client Solutions:
                      </strong>{" "}
                      Founded Soumya's Computer Solutions to provide end-to-end
                      software services. Delivered custom backend systems,
                      dashboards, and applications across industries.
                    </li>
                    <li>
                      <strong>Highlighted Projects:</strong>
                      <ul className="list-disc pl-5 space-y-4 mt-2 text-gray-700">
                        <li>
                          <a
                            href="https://github.com/120296Soumyaju/pocketsense"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            PocketSense API
                          </a>
                          <br />
                          <strong>Delivered to:</strong> UniLedger Technologies
                          <br />
                          Built a mobile-first web application for college
                          students to track and split expenses, with daily
                          summaries and budgeting tips.
                          <br />
                          <strong>Tech Stack:</strong> React.js, Django REST
                          API, SQLite
                        </li>

                        <li>
                          <a
                            href="https://github.com/120296Soumyaju/Quiz2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            Employee Data Analytics API
                          </a>
                          <br />
                          <strong>Delivered to:</strong> PeoplePulse HR
                          Analytics
                          <br />
                          Developed a secure backend service for managing
                          employee records, leave balances, and HR insights with
                          BI integration.
                          <br />
                          <strong>Tech Stack:</strong> Django DRF, PostgreSQL,
                          Swagger
                        </li>
                        <li>
                          <a
                            href="https://github.com/120296Soumyaju/SILK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            MyDoList
                          </a>
                          <br />
                          <strong>Delivered to:</strong> Nimbus Productivity
                          Tools
                          <br />
                          Created a to-do list app with smart filtering and
                          persistent login for power users and minimalists.
                          <br />
                          <strong>Tech Stack:</strong> Django DRF, Django ORM,
                          SQLite, HTML5, Bootstrap
                        </li>
                        <li>
                          <a
                            href="https://job-portal-webapp-iota.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            Job Portal WebApp
                          </a>
                          <br />
                          <strong>Delivered to:</strong> TalentBridge Systems
                          <br />
                          Full-stack platform enabling candidates and recruiters
                          to manage applications, job posts, and communication.
                          <br />
                          <strong>Tech Stack:</strong> Next.js, Tailwind CSS,
                          React Hooks, Django DRF, PostgreSQL, JWT Auth
                        </li>
                        <li>
                          <a
                            href="https://github.com/120296Soumyaju/-Academic-Assignment-Management-Backend-Service"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            Academic Assignment Management
                          </a>
                          <br />
                          <strong>Delivered to:</strong> EduTrack Solutions
                          <br />
                          Flask backend with role-based access for teachers,
                          students, and principals to handle academic workflows.
                          <br />
                          <strong>Tech Stack:</strong> Flask, SQLAlchemy ORM,
                          Alembic
                        </li>
                        <li>
                          <a
                            href="https://github.com/120296Soumyaju/Agrocraft"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            Agrocraft
                          </a>
                          <br />
                          <strong>Delivered to:</strong> GreenRoots Commerce
                          Pvt. Ltd.
                          <br />
                          E-commerce platform for buying/selling farm produce,
                          reducing middlemen and improving farm income.
                          <br />
                          <strong>Tech Stack:</strong> PHP, MySQL, Bootstrap
                        </li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* LEXI DEVICES Experience */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="pl-8 relative group"
            >
              <div className="absolute left-0 top-1 w-6 h-6 -translate-x-[11px] rounded-full bg-white border-4 border-gray-300 shadow-sm z-10 group-hover:border-primary group-hover:scale-125 transition-all duration-300"></div>
              
              <div className="mb-2">
                <Badge variant="secondary" className="mb-2">
                  Oct 2022 - Oct 2023
                </Badge>
                <h3 className="text-xl font-bold">
                  Embedded Software Engineer
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src="company-logos/lexi_logo.png"
                    alt="Lexi Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-gray-600">
                    LEXI DEVICES INC., Lebanon, Ohio ,United States
                  </p>
                </div>
              </div>

              <Card className="mt-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">
                    Project: Lexi's Universal IoT Gateway
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Worked on a multi-protocol smart home and industrial IoT
                    hub, enabling seamless connectivity across devices using
                    Wi-Fi, Bluetooth, Zigbee, Z-Wave, 900 MHz, LoRaWAN, and
                    cellular networks.
                  </p>

                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Firmware & Embedded Development:</strong>{" "}
                      Engineered Python-based IoT libraries for the NXP
                      i.MX8-based Universal IoT Gateway, handling device
                      onboarding, control, and automation.
                    </li>
                    <li>
                      <strong>Edge AI & Smart Processing:</strong> Implemented
                      AI-powered edge computing for real-time decision-making,
                      enabling faster and more efficient IoT device automation.
                    </li>
                    <li>
                      <strong>API Development & Mobile App Integration:</strong>{" "}
                      Developed and deployed Flask-based REST APIs for Lexi's
                      white-label iOS & Android apps, allowing users to add,
                      control, and manage IoT devices.
                    </li>
                    <li>
                      <strong>Platform-as-a-Service (PaaS) Deployment:</strong>{" "}
                      Assisted in deploying and scaling Lexi's PaaS, reducing
                      operational costs and enhancing flexibility for enterprise
                      smart home solutions.
                    </li>
                    <li>
                      <strong>IoT Protocol & Security Implementation:</strong>{" "}
                      Integrated secure multi-protocol connectivity for Google
                      Smart Home, Amazon Alexa, Philips Hue, TP-Link, Lifx, and
                      IFTTT, ensuring interoperability.
                    </li>
                    <li>
                      <strong>Firmware Deployment & OTA Updates:</strong>{" "}
                      Implemented Mender-based OTA firmware updates,
                      streamlining device management and minimizing downtime.
                    </li>
                    <li>
                      <strong>Security & Compliance:</strong> Developed
                      multi-layered security measures to ensure safe
                      communication between IoT devices and cloud platforms.
                    </li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      Optimized IoT Gateway performance, improving real-time
                      device response by 30% through edge AI and protocol
                      optimization.
                    </li>
                    <li>
                      Enabled seamless integration of 50,000+ IoT devices,
                      enhancing connectivity and automation for smart home and
                      industrial applications.
                    </li>
                    <li>
                      Reduced firmware update failures by 40%, improving device
                      reliability and user experience with OTA updates.
                    </li>
                    <li>
                      Expanded interoperability, increasing Lexi's supported IoT
                      ecosystem, attracting more B2B clients, and strengthening
                      Platform-as-a-Service adoption.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* CMA CGM Experience */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="pl-8 relative group"
            >
              <div className="absolute left-0 top-1 w-6 h-6 -translate-x-[11px] rounded-full bg-white border-4 border-gray-300 shadow-sm z-10 group-hover:border-primary group-hover:scale-125 transition-all duration-300"></div>
              
              <div className="mb-2">
                <Badge variant="secondary" className="mb-2">
                  May 2022 - Sep 2022
                </Badge>
                <h3 className="text-xl font-bold">
                  Junior Executive - Import Service Delivery - Centralized
                  Documentation
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src="company-logos/cma_cgm_logo.png"
                    alt="CMA CGM Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-gray-600">
                    CMA CGM INDIA PVT. LTD., Navi Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              <Card className="mt-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Managed Documentation:</strong> Coordinated and
                      processed import documentation, ensuring accuracy and
                      compliance with regulatory requirements.
                    </li>
                    <li>
                      <strong>Streamlined Processes:</strong> Improved
                      efficiency in documentation workflows by centralizing and
                      standardizing processes, reducing errors and turnaround
                      time.
                    </li>
                    <li>
                      <strong>Liaised with Stakeholders:</strong> Acted as a
                      point of contact for internal and external stakeholders,
                      facilitating smooth communication and resolution of
                      import-related issues.
                    </li>
                    <li>
                      <strong>Monitored Shipments:</strong> Tracked and
                      monitored import shipments, ensuring timely and accurate
                      delivery while addressing any discrepancies or delays.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* SEAHORSE Experience */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="pl-8 relative group"
            >
              <div className="absolute left-0 top-1 w-6 h-6 -translate-x-[11px] rounded-full bg-white border-4 border-gray-300 shadow-sm z-10 group-hover:border-primary group-hover:scale-125 transition-all duration-300"></div>
              
              <div className="mb-2">
                <Badge variant="secondary" className="mb-2">
                  Mar 2021 - Mar 2022
                </Badge>
                <h3 className="text-xl font-bold">
                  Import/Export Documentation Assistant
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src="company-logos/seahorseshipping_logo.png"
                    alt="SSA Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-gray-600">
                    SEAHORSE SHIP AGENCIES PVT. LTD., Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              <Card className="mt-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Processed Documentation:</strong> Managed the
                      preparation and submission of Import General Manifest
                      (IGM) and Export General Manifest (EGM) documents,
                      ensuring compliance with shipping regulations.
                    </li>
                    <li>
                      <strong>Data Entry and Verification:</strong> Entered and
                      verified shipping data into systems, maintaining accuracy
                      and completeness of documentation.
                    </li>
                    <li>
                      <strong>Coordinated with Authorities:</strong> Liaised
                      with customs and port authorities to facilitate smooth
                      processing and clearance of import/export shipments.
                    </li>
                    <li>
                      <strong>Documentation Accuracy:</strong> Ensured precise
                      documentation and compliance with shipping regulations,
                      including resolving discrepancies and performing EDI
                      corrections for both import and export records.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* SPERENTES SOLUTIONS Experience */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="pl-8 relative group"
            >
              <div className="absolute left-0 top-1 w-6 h-6 -translate-x-[11px] rounded-full bg-white border-4 border-gray-300 shadow-sm z-10 group-hover:border-primary group-hover:scale-125 transition-all duration-300"></div>
              
              <div className="mb-2">
                <Badge variant="secondary" className="mb-2">
                  Mar 2020 - Feb 2021
                </Badge>
                <h3 className="text-xl font-bold">
                  Software Developer (Full Stack Python)
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src="company-logos/sperentes_logo.png"
                    alt="Sperentes Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-gray-600">
                    SPERENTES SOLUTIONS LLP, Navi Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              <Card className="mt-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">
                    Project: Enterprise SaaS ERP Software
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Sperentes Solutions LLP was developing an Enterprise SaaS
                    ERP Software from scratch to enhance business operations and
                    streamline customer relationship management (CRM) and human
                    resource management (HRM).
                  </p>

                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Enterprise SaaS ERP Development:</strong> Designed
                      and developed key modules for an integrated ERP system,
                      including CRM, HRM, and Business Management features.
                    </li>
                    <li>
                      <strong>Front-End Development:</strong> Built responsive
                      and interactive UI components using HTML, CSS, JavaScript,
                      and Bootstrap, improving user engagement.
                    </li>
                    <li>
                      <strong>Back-End Development:</strong> Developed robust
                      API-driven backend services using Python and Django,
                      ensuring smooth business workflows.
                    </li>
                    <li>
                      <strong>Database Management:</strong> Designed and
                      optimized PostgreSQL/MySQL databases, ensuring efficient
                      data storage and retrieval for ERP functionalities.
                    </li>
                    <li>
                      <strong>Business Process Automation:</strong> Implemented
                      automated workflows within the ERP system to enhance
                      productivity and reduce manual intervention.
                    </li>
                    <li>
                      <strong>Version Control & CI/CD:</strong> Managed code
                      versioning with Git and SourceTree, ensuring smooth
                      deployments and team collaboration.
                    </li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      Successfully developed and deployed a scalable SaaS-based
                      ERP solution tailored for business process automation.
                    </li>
                    <li>
                      Improved client relationship management with a
                      well-structured CRM module, leading to better customer
                      engagement.
                    </li>
                    <li>
                      Enhanced data security and system performance, ensuring
                      high availability and reliability of the ERP software.
                    </li>
                    <li>
                      Delivered an intuitive and user-friendly UI, improving
                      adoption rates and operational efficiency.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Software Consultant Experience */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="pl-8 relative group"
            >
              <div className="absolute left-0 top-1 w-6 h-6 -translate-x-[11px] rounded-full bg-white border-4 border-gray-300 shadow-sm z-10 group-hover:border-primary group-hover:scale-125 transition-all duration-300"></div>
              
              <div className="mb-2">
                <Badge variant="secondary" className="mb-2">
                  Feb 2018 - Feb 2020
                </Badge>
                <h3 className="text-xl font-bold">
                  Software Consultant | Full Stack Software Engineer
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src="company-logos/freelancer_logo.png"
                    alt="Freelancer Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-gray-600">Freelancer.com ,Sydney, NSW</p>
                </div>
              </div>

              <Card className="mt-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Software Development:</strong> Developed and
                      delivered custom software for academic and freelance
                      clients using Java, C++, ASP.NET, PHP, MySQL, and Android.
                    </li>
                    <li>
                      <strong>IoT Hardware Integration:</strong> Built IoT-based
                      hardware solutions by integrating microcontrollers and
                      sensors with cloud-connected apps for academic research.
                    </li>
                    <li>
                      <strong>Android App Development:</strong> Designed
                      user-friendly Android applications with real-time data
                      handling and optimized UI/UX.
                    </li>
                    <li>
                      <strong>Technical Mentorship:</strong> Provided guidance
                      and debugging support for students and freelancers,
                      improving project quality and completion rates.
                    </li>
                    <li>
                      <strong>Consulting Impact:</strong>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>
                          <strong>Situation:</strong> Academic and freelance
                          clients lacked access to reliable custom software
                          solutions and technical support.
                        </li>
                        <li>
                          <strong>Task:</strong> Deliver software, IoT
                          integration, Android apps, and mentorship tailored to
                          project needs.
                        </li>
                        <li>
                          <strong>Action:</strong>
                          <ul className="list-disc pl-5">
                            <li>
                              Developed apps using Java, C++, ASP.NET, PHP, and
                              Android Studio.
                            </li>
                            <li>
                              Engineered IoT systems integrating
                              microcontrollers and cloud data services.
                            </li>
                            <li>
                              Created Android apps with real-time sync and
                              database connectivity.
                            </li>
                            <li>
                              Mentored students on debugging, optimization, and
                              best practices.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Result:</strong> Successfully delivered
                          multiple high-quality software projects that enhanced
                          client satisfaction and academic performance.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Key Projects Delivered:</strong>
                      <ul className="list-disc pl-5 space-y-4 mt-2 text-gray-700">
                        <li>
                          <span className="font-semibold">
                            Pathology Lab Management System
                          </span>
                          <br />
                          <strong>Delivered to:</strong> Dr. Mehta Diagnostics
                          <br />
                          Desktop application for automating pathology test
                          records and result generation.
                          <br />
                          <strong>Tech Stack:</strong> C#.NET, SQL Server,
                          Crystal Report
                        </li>
                        <li>
                          <span className="font-semibold">
                            Hospital Management System
                          </span>
                          <br />
                          <strong>Delivered to:</strong> MedCare Labs
                          <br />
                          Web-based solution to manage hospital operations
                          including billing and appointments.
                          <br />
                          <strong>Tech Stack:</strong> ASP.NET, SQL Server
                        </li>
                        <li>
                          <a
                            href="https://github.com/120296Soumyaju/online-shopping-site"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-semibold"
                          >
                            MOTOROID – Automobile Accessories E-Commerce Portal
                          </a>
                          <br />
                          <strong>Delivered to:</strong> Mr. Prashant Gawari
                          <br />
                          E-commerce site for two-wheeler accessories with cart
                          and order tracking.
                          <br />
                          <strong>Tech Stack:</strong> PHP, MySQL, Bootstrap
                        </li>
                        <li>
                          <span className="font-semibold">
                            Farmer-to-Consumer Crop Delivery Portal
                          </span>
                          <br />
                          <strong>Delivered to:</strong> AgroBridge Solutions
                          <br />
                          Platform enabling direct crop sales from farmers to
                          consumers with delivery tracking.
                          <br />
                          <strong>Tech Stack:</strong> JSP, Servlets, MySQL
                        </li>
                        <li>
                          <span className="font-semibold">
                            Crime Information Management System
                          </span>
                          <br />
                          <strong>Delivered to:</strong> SafeCity Research
                          Initiative
                          <br />
                          Secure platform to log and manage crime reports and
                          case data.
                          <br />
                          <strong>Tech Stack:</strong> PHP, MySQL, HTML/CSS
                        </li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Internship Experience</h2>

          <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="pl-8 relative group"
            >
              <div className="absolute left-0 top-1 w-6 h-6 -translate-x-[11px] rounded-full bg-white border-4 border-primary shadow-sm z-10 group-hover:scale-125 transition-transform duration-300"></div>
            
            <div className="mb-2">
              <Badge className="mb-2">Aug 2023</Badge>
              <h3 className="text-xl font-bold">Python Programmer</h3>
              <div className="flex items-center gap-3 mt-1">
                <img
                  src="company-logos/contetra_logo.png"
                  alt="Contetra Logo"
                  className="w-8 h-8 object-contain"
                />
                <p className="text-gray-600">
                  Contetra Private Limited, Mumbai, India
                </p>
              </div>
            </div>

            <Card className="mt-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="pt-6">
                <p className="mb-4 text-gray-700">
                  During my winter internship at Contetra, I worked as a Python
                  Developer, contributing to data scraping and warehousing
                  solutions that streamlined financial data workflows.
                </p>

                <h4 className="font-semibold mb-2">
                  Key Achievements and Responsibilities:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Developed and maintained Python scripts to automate Web
                    Scraping.
                  </li>
                  <li>
                    Collaborated with the Finance team to understand and address
                    their programming needs.
                  </li>
                  <li>
                    Debugged and optimized existing Python codebase for enhanced
                    efficiency.
                  </li>
                  <li>
                    Participated in brainstorming sessions and delivered
                    practical solutions to data challenges.
                  </li>
                </ul>

                {/* Tool Used */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2">
                    Strike-That Official Tool
                  </h4>
                  <a
                    href="https://contetra.com/strike-that/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition"
                  >
                    Contetra Strike-That Official Website
                  </a>
                </div>

                {/* Internship Certificate Image */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-3">
                    Internship Certificate
                  </h4>
                  <img
                    src="/certs/Internship Certificate_Sujit.png"
                    alt="Certificate"
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-md border"
                  />
                </div>
              </CardContent>
            </Card>
            </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Research & Publications</h2>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">
                    Early Cancer Detection using Prediction Algorithm: A Survey.
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <img
                      src="company-logos/IJARSCT Logo.png"
                      alt="IJARSCT Logo"
                      className="w-8 h-8 object-contain"
                    />
                    <p className="text-gray-600" mt-1>
                      International Journal of Advanced Research in Science,
                      Communication and Technology (IJARSCT)
                      <strong>ISSN (Online) 2581-9429</strong>
                    </p>
                    <div className="mt-4 text-gray-700 text-sm leading-relaxed space-y-2">
                      <p>
                        <strong>Authors:</strong> Mr. Sujit Prakash Tadadikar
                        <sup>1</sup>, Mr. Pankaj Sakpal<sup>2</sup>, Mrs. Sujata
                        Shahabade<sup>3</sup>
                      </p>

                      <p>
                        <strong>Affiliations:</strong>
                        <br />
                        Embedded Software Engineer, Department of Science and
                        Technology, IDOL, Mumbai, India<sup>1</sup>
                        <br />
                        Assistant Manager, Department of Science and Technology,
                        IDOL, Mumbai, India<sup>2</sup>
                        <br />
                        Assistant Professor, Department of Computer Science,
                        PCACS, Navi Mumbai, India<sup>3</sup>
                      </p>

                      <p>
                        <strong>Emails:</strong>
                        <br />
                        logic.codedebugrepeat@gmail.com<sup>1</sup>,
                        pankaj.sakpal1819@gmail.com<sup>2</sup>,
                        sujathashahabade@gmail.com<sup>3</sup>
                      </p>

                      <p>
                        <strong>Abstract:</strong> This survey paper provides an
                        overview of the advancements in early cancer detection
                        through the application of prediction algorithms. Early
                        detection of cancer plays a crucial role in improving
                        patient outcomes and reducing mortality rates. With the
                        rise of computational technologies and machine learning
                        techniques, predictive algorithms have emerged as
                        powerful tools for identifying potential cancer cases at
                        an early stage. This survey explores various prediction
                        algorithms, their applications, challenges, and future
                        directions in the realm of early cancer detection.
                      </p>

                      <p>
                        <strong>Keywords:</strong> Cancer detection, DNA,
                        Machine learning, Prediction Algorithm
                      </p>
                    </div>
                  </div>
                </div>
                <Badge>January 2024</Badge>
              </div>

              <div className="mt-4 text-gray-700">
                <p className="mb-3 flex items-center space-x-3">
                  <img
                    src="company-logos/DOI_logo.png"
                    alt="DOI"
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-lg font-semibold">
                    10.48175/IJARSCT-15203
                  </span>
                </p>

                <div className="flex space-x-10 items-start mt-3">
                  {/* Read Publication */}
                  <a
                    href="https://lnkd.in/dCHJZCPg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-primary hover:opacity-80"
                  >
                    <img
                      src="company-logos/reading-book.png"
                      alt="Read Publication"
                      className="w-12 h-12 object-contain mb-2"
                    />
                    <span className="text-base font-medium">
                      Read Publication
                    </span>
                  </a>

                  {/* CrossRef */}
                  <a
                    href="https://lnkd.in/d7JKNsn2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-primary hover:opacity-80"
                  >
                    <img
                      src="company-logos/crossref-logo-landscape-200.png"
                      alt="CrossRef"
                      className="w-16 h-auto object-contain mb-2"
                    />
                    <span className="text-base font-medium">CrossRef</span>
                  </a>
                </div>
              </div>
              {/* Certificate Image */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">
                  Certificate of Publication
                </h4>
                <img
                  src="/certs/203-1-1.png"
                  alt="Certificate"
                  className="w-full max-w-3xl mx-auto rounded-lg shadow-md border"
                />
              </div>
            </CardContent>
          </Card>
            </div>
      </section>
    </div>
  );
};

export default Experience;
