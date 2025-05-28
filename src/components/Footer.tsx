import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Sujit Tadadikar</h2>
            <p className="text-gray-400 mt-2">
              Embedded Software Engineer | API Integration | Cloud & IoT
              Solutions
            </p>
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
          <p>
            &copy; {new Date().getFullYear()} Sujit Tadadikar. All rights
            reserved.
          </p>
          <p className="mt-2">
            <a
              href="https://madewithloveinindia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline"
            >
              Made with{" "}
              <span role="img" aria-label="Love" className="text-rose-500">
                &hearts;
              </span>{" "}
              in India
            </a>
          </p>
        </div>
        <div className="text-center mt-2">
          <a
            href="https://visitorbadge.io/status?path=https%3A%2F%2Fsujit-tadadikar.netlify.app%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fsujit-tadadikar.netlify.app%2F&label=VISITORS%20TODAY&labelColor=%23d9e3f0&countColor=%23dce775&style=plastic&labelStyle=lower"
              alt="Visitor badge"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
