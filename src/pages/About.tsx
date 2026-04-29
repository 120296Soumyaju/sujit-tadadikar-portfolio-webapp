import { FileText, Award, Book, Code, CookingPot, Server, MonitorSmartphone, Database, Terminal, Cloud, ShieldCheck, Briefcase, Network, PenTool, Bug, Smartphone, Brain, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      {/* About Header */}
      <section className="py-16 bg-white border-b border-gray-100 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Me</span>
              </motion.h1>
              <motion.div variants={fadeUp} className="space-y-6">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                  I engineer end-to-end digital ecosystems, bridging the gap between scalable cloud infrastructures and intelligent embedded systems to drive innovation.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg max-w-lg italic text-gray-700">
                  "Talk is cheap. Show me the code." <br />
                  <span className="text-sm font-semibold text-primary not-italic mt-1 inline-block">— Linus Torvalds</span>
                </blockquote>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-white shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                  <AvatarImage
                    src="/lovable-uploads/ecf2cbe8-03ba-49b4-a0a9-e831c68ff84f.png"
                    alt="Sujit Tadadikar"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-bold text-primary bg-gray-50">
                    ST
                  </AvatarFallback>
                </Avatar>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
              Professional Summary
            </h2>
            <Card className="border-0 shadow-md">
              <CardContent className="p-8 md:p-10 text-lg leading-relaxed text-gray-700 space-y-6">
                <p>
                  I am a results-driven <strong>Full Stack & Embedded Software Engineer</strong> with over 9
                   years of experience in architecting robust digital solutions. With a Master of Computer Applications (MCA), my core expertise spans across Python, Flask, FastAPI, and complex IoT integrations. I specialize in building highly scalable applications, optimizing legacy backend systems, and designing resilient APIs using REST, OAuth2, and JWT.
                </p>
                <p>
                  Beyond traditional software development, I have a strong foundation in hardware-software bridging, having built multi-protocol smart home hubs and enterprise-grade IoT edge devices. I am highly focused on system security, performance optimization, and PCI DSS compliance when dealing with sensitive data architectures.
                </p>
                <p>
                  I also bring unique cross-industry operational experience from the shipping sector, equipping me with exceptional skills in technical documentation, high-stakes customer interaction, and delivering reliable IT support. Currently, I am actively expanding my expertise into DevSecOps and Cloud Engineering to master end-to-end infrastructure management and automated deployment pipelines.
                </p>
              </CardContent>
            </Card>
            </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="grid grid-cols-1 gap-6">
            <motion.div variants={fadeUp}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">
                    Master of Computer Applications (MCA)
                  </h3>
                  <span className="text-gray-500">2024</span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src="company-logos/MU.png"
                    alt="MU Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-gray-600">University of Mumbai</p>
                </div>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">
                    Bachelor of Science - Information Technology
                  </h3>
                  <span className="text-gray-500">2020</span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src="company-logos/MU.png"
                    alt="MU Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-gray-600">University of Mumbai</p>
                </div>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">
                    Diploma in Computer Engineering
                  </h3>
                  <span className="text-gray-500">2015</span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src="company-logos/SCOE.png"
                    alt="SCOE Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-gray-600">
                    Saraswati Institute of Technology, Navi Mumbai
                  </p>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Development */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <MonitorSmartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-react-original colored text-base"></i> React.js</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-nextjs-plain text-base"></i> Next.js</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-html5-plain colored text-base"></i> HTML5</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-css3-plain colored text-base"></i> CSS3</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-tailwindcss-original colored text-base"></i> Tailwind CSS</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-cypressio-plain colored text-base"></i> Cypress</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-playwright-plain colored text-base"></i> Playwright</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-google-plain colored text-base"></i> SEO Tools</Badge>
              </div>
            </motion.div>

            {/* Backend Development */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-laravel-plain colored text-base"></i> Laravel</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-python-plain colored text-base"></i> Python</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-flask-original text-base"></i> Flask</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-django-plain colored text-base"></i> Django REST</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-express-original text-base"></i> Express.js</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-java-plain colored text-base"></i> Java (JSP)</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-fastapi-plain colored text-base"></i> FastAPI</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><Network className="w-4 h-4" /> REST / OAuth2</Badge>
              </div>
            </motion.div>

            {/* Database Technologies */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-mariadb-plain colored text-base"></i> MariaDB</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-mysql-plain colored text-base"></i> MySQL</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-postgresql-plain colored text-base"></i> PostgreSQL</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-mongodb-plain colored text-base"></i> MongoDB</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-sqlalchemy-plain text-base"></i> SQLAlchemy</Badge>
                <Badge variant="outline" className="border-orange-200">Query Tuning</Badge>
                <Badge variant="outline" className="border-orange-200">Sharding & Replication</Badge>
              </div>
            </motion.div>

            {/* DevOps & Cloud */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                  <Cloud className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">DevOps & Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-amazonwebservices-original colored text-base"></i> AWS</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-docker-plain colored text-base"></i> Docker</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-cloudflare-plain colored text-base"></i> Cloudflare</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-git-plain colored text-base"></i> Git</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-github-original text-base"></i> GitHub</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-bitbucket-original colored text-base"></i> Bitbucket</Badge>
                <Badge variant="outline" className="border-sky-200">SourceTree</Badge>
              </div>
            </motion.div>

            {/* Linux Security Hardening */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Security</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-linux-plain text-base"></i> Linux Sec</Badge>
                <Badge variant="outline" className="border-red-200">CIS Benchmark</Badge>
                <Badge variant="outline" className="border-red-200">Fail2Ban / AIDE</Badge>
                <Badge variant="outline" className="border-red-200">Firewalld / iptables</Badge>
                <Badge variant="outline" className="border-red-200">SELinux</Badge>
                <Badge variant="outline" className="border-red-200">SSL/TLS</Badge>
                <Badge variant="outline" className="border-red-200">PCI-DSS</Badge>
                <Badge variant="outline" className="border-red-200">LUKS</Badge>
              </div>
            </motion.div>

            {/* Web Hosting & Automation */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Hosting & Auto</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-centos-plain colored text-base"></i> AlmaLinux</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-ubuntu-plain colored text-base"></i> Ubuntu</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-bash-plain text-base"></i> Bash</Badge>
                <Badge variant="outline" className="border-purple-200">Cron Jobs</Badge>
                <Badge variant="outline" className="border-purple-200">cPanel & WHM</Badge>
                <Badge variant="outline" className="border-purple-200">WHMCS</Badge>
                <Badge variant="outline" className="border-purple-200">SSH / RSA</Badge>
              </div>
            </motion.div>

            {/* Project Management */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Project Management</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-jira-plain colored text-base"></i> Jira</Badge>
                <Badge variant="outline" className="border-amber-200">Agile / Scrum</Badge>
                <Badge variant="outline" className="border-amber-200">Kanban</Badge>
              </div>
            </motion.div>

            {/* UI/UX Design Tools */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">UI/UX Design</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-figma-plain colored text-base"></i> Figma</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-photoshop-plain colored text-base"></i> Photoshop</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-canva-original colored text-base"></i> Canva</Badge>
                <Badge variant="outline" className="border-pink-200">Wireframing</Badge>
                <Badge variant="outline" className="border-pink-200">Prototyping</Badge>
              </div>
            </motion.div>

            {/* QA Testing Tools */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-50 text-teal-600 rounded-lg">
                  <Bug className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">QA & Testing</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-jest-plain colored text-base"></i> Jest</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-selenium-original colored text-base"></i> Selenium</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-postman-plain colored text-base"></i> Postman</Badge>
                <Badge variant="outline" className="border-teal-200">Manual Testing</Badge>
                <Badge variant="outline" className="border-teal-200">Automated Testing</Badge>
                <Badge variant="outline" className="border-teal-200">API Testing</Badge>
              </div>
            </motion.div>

            {/* Mobile App Development */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Mobile Apps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-android-plain colored text-base"></i> Android</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-react-original colored text-base"></i> React Native</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-flutter-plain colored text-base"></i> Flutter</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-swift-plain colored text-base"></i> Swift</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-kotlin-plain colored text-base"></i> Kotlin</Badge>
                <Badge variant="outline" className="border-indigo-200">Cross-Platform</Badge>
              </div>
            </motion.div>

            {/* AI & Machine Learning */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-fuchsia-50 text-fuchsia-600 rounded-lg">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">AI & Machine Learning</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-tensorflow-original colored text-base"></i> TensorFlow</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-pytorch-original colored text-base"></i> PyTorch</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-numpy-original colored text-base"></i> NumPy</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-pandas-original colored text-base"></i> Pandas</Badge>
                <Badge variant="outline" className="border-fuchsia-200">Scikit-Learn</Badge>
                <Badge variant="outline" className="border-fuchsia-200">NLP</Badge>
                <Badge variant="outline" className="border-fuchsia-200">Computer Vision</Badge>
                <Badge variant="outline" className="border-fuchsia-200">LLMs</Badge>
              </div>
            </motion.div>

            {/* IoT & Robotics */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">IoT & Robotics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-arduino-plain colored text-base"></i> Arduino</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-raspberrypi-plain colored text-base"></i> Raspberry Pi</Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5"><i className="devicon-cplusplus-plain colored text-base"></i> C++</Badge>
                <Badge variant="outline" className="border-emerald-200">ROS</Badge>
                <Badge variant="outline" className="border-emerald-200">MQTT</Badge>
                <Badge variant="outline" className="border-emerald-200">BLE & Wi-Fi</Badge>
                <Badge variant="outline" className="border-emerald-200">Zigbee & Z-Wave</Badge>
                <Badge variant="outline" className="border-emerald-200">LoRa</Badge>
                <Badge variant="outline" className="border-emerald-200">NXP i.MX8</Badge>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Professional Development</h2>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeUp}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    Advanced Python Workshops
                  </h3>
                </div>
                <p className="text-gray-600">
                  Completed workshops focused on advanced Python programming and
                  backend development.
                </p>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    Cloud Engineering Courses
                  </h3>
                </div>
                <p className="text-gray-600">
                  Pursued courses on cloud platforms and DevOps practices,
                  enhancing skills in AWS and Azure.
                </p>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">DevOps Training</h3>
                </div>
                <p className="text-gray-600">
                  Engaged in training on containerization, orchestration, and
                  CI/CD processes.
                </p>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Personal Interests</h2>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <img
                  src="/lovable-uploads/fa18e4ea-e552-4727-8474-a6e0109da2ac.png"
                  alt="Swimming"
                  className="h-6 w-6 text-primary mr-3"
                />
                <h3 className="text-xl font-semibold">Swimming</h3>
              </div>
              <p className="text-gray-600">
                Just like in life, where adaptability is key, swimming teaches
                me resilience and the ability to navigate challenges with
                confidence, whether in water or real-world situations.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <CookingPot className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Cooking</h3>
              </div>
              <p className="text-gray-600">
                Cooking is not just about making food; it's about experimenting,
                being creative, and understanding the right mix of
                ingredients—skills that translate well into problem-solving and
                innovation in daily life.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Code className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Coding</h3>
              </div>
              <p className="text-gray-600">
                Much like solving real-world problems, coding allows me to break
                down complex challenges into logical steps, reinforcing
                patience, analytical thinking, and creativity.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Book className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Learning New Skills</h3>
              </div>
              <p className="text-gray-600">
                In a fast-evolving world, continuous learning keeps me adaptable
                and open to growth, helping me stay ahead and apply newfound
                knowledge to both professional and personal life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Want to know more?</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Download my resume for a complete overview of my experience, skills,
            and qualifications.
          </p>
          <a
            href="https://drive.google.com/file/d/11AXQnpYBT-zmMv3tzSxSSpk6-2-smKKb/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="mt-6 text-white border-white hover:bg-white hover:text-primary"
            >
              <FileText className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
