
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Sujit Tadadikar</h2>
            <p className="text-gray-400 mt-2">Embedded Software Engineer | API Integration | Cloud & IoT Solutions</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/120296Soumyaju"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/sujit-tadadikar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/sujjusoumyaprakashtadadikar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://twitter.com/suju_tadadikar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
            <a
              href="mailto:sujit.tadadikar@gmail.com"
              className="text-white hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sujit Tadadikar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
