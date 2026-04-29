import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  CloudCog,
  Cpu,
  Github,
  FileText,
  Mail,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion, Variants } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-70 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2 flex flex-col items-start"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide">
                Available for new opportunities
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                Hi, I'm <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Sujit Tadadikar</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mt-6 font-medium h-8 md:h-10">
                I'm {' '}
                <span className="text-primary font-semibold">
                  <Typewriter
                    words={['An Entrepreneur', 'Full Stack Developer', 'Embedded Software Engineer', 'Tech Enthusiast', 'DevSecOps Specialist', 'Cloud & IoT Solutions Architect']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 mt-6 max-w-lg text-lg leading-relaxed">
                I engineer robust, end-to-end digital ecosystems. From architecting secure cloud infrastructures and intelligent IoT devices to building scalable full-stack web applications, I transform complex challenges into innovative technical solutions.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" className="w-full sm:w-auto rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all" asChild>
                  <Link to="/contact">
                    Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full hover:bg-gray-50 hover:-translate-y-0.5 transition-all" asChild>
                  <Link to="/projects">View My Work</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="md:w-1/2 flex justify-center md:justify-end w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <Avatar className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] border-4 border-white shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                  <AvatarImage
                    src="/lovable-uploads/ecf2cbe8-03ba-49b4-a0a9-e831c68ff84f.png"
                    alt="Sujit Tadadikar"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-bold text-primary bg-gray-50">
                    ST
                  </AvatarFallback>
                </Avatar>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-4 right-10 md:-right-4 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-100"
                >
                  <Code className="text-primary h-8 w-8" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute top-10 -left-6 md:-left-10 bg-white p-3 rounded-2xl shadow-xl z-20 border border-gray-100"
                >
                  <Cpu className="text-blue-500 h-6 w-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What I Do</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              I combine technical expertise with practical problem-solving to
              deliver robust software solutions
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUp}>
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">API Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building robust RESTful APIs with Python Flask, focusing on
                    security, performance, and scalability for enterprise needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="mb-6 p-4 bg-blue-500/5 rounded-2xl w-fit group-hover:bg-blue-500/10 transition-colors">
                    <Cpu className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors">IoT Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Creating innovative IoT integrations using protocols like
                    MQTT, BLE, Wi-Fi, and LoRa for smart, connected devices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="mb-6 p-4 bg-teal-500/5 rounded-2xl w-fit group-hover:bg-teal-500/10 transition-colors">
                    <CloudCog className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-teal-500 transition-colors">Cloud Engineering</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Implementing DevOps practices and cloud solutions on platforms
                    like AWS to enhance deployment and streamline operations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
              <div className="w-20 h-1 bg-primary mt-6 rounded-full"></div>
            </div>
            <Link to="/projects" className="hidden md:flex items-center text-primary font-medium hover:underline mt-4 md:mt-0 group">
              View all projects <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeUp}>
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-white h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">IoT Gateway Platform</h3>
                  </div>
                </div>
                <CardContent className="pt-6 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    Developed firmware, APIs, and edge computing solutions for a
                    universal IoT gateway supporting multiple protocols like MQTT and BLE.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Python</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Flask</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">MQTT</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-white h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-teal-500/20 to-green-500/20 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">Enterprise SaaS ERP</h3>
                  </div>
                </div>
                <CardContent className="pt-6 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    Built a scalable SaaS-based ERP solution with comprehensive CRM, HRM, and
                    business management features for mid-sized enterprises.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-teal-500/10 text-teal-700 px-3 py-1 rounded-full font-medium">Python</span>
                    <span className="bg-teal-500/10 text-teal-700 px-3 py-1 rounded-full font-medium">Django</span>
                    <span className="bg-teal-500/10 text-teal-700 px-3 py-1 rounded-full font-medium">PostgreSQL</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <div className="md:hidden mt-10 text-center">
            <Button variant="outline" className="w-full rounded-full" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-primary overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-800/90"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to build something amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let's make it happen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 rounded-full text-lg shadow-lg"
                asChild
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-primary border-white bg-white hover:bg-gray-50 rounded-full text-lg group"
                asChild
              >
                <a href="mailto:sujit.tadadikar@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" /> Email Me
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
