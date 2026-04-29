import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Instagram, Twitter, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-5xl px-4 transition-all duration-300 ${
        scrolled ? "w-[95%] md:w-[80%]" : "w-full"
      }`}>
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 border border-white/20" 
            : "bg-transparent px-4 py-2"
        }`}>
          <Link to="/" className="text-xl font-bold text-primary tracking-tight">
            Sujit<span className="text-foreground">Tadadikar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={location.pathname === link.path ? "text-primary" : "text-gray-600"}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            {[
              { icon: Github, href: "https://github.com/120296Soumyaju" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sujit-tadadikar/" },
              { icon: Instagram, href: "https://www.instagram.com/sujjusoumyaprakashtadadikar" },
              { icon: Twitter, href: "https://twitter.com/suju_tadadikar" },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-600 p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full mt-2 px-4 overflow-hidden"
          >
            <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl py-4 flex flex-col space-y-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl transition-colors ${
                    location.pathname === link.path ? "bg-primary/10 text-primary font-medium" : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Social Links for Mobile */}
              <div className="flex items-center justify-center space-x-6 pt-4 mt-2 border-t border-gray-100">
                {[
                  { icon: Github, href: "https://github.com/120296Soumyaju" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/sujit-tadadikar/" },
                  { icon: Instagram, href: "https://www.instagram.com/sujjusoumyaprakashtadadikar" },
                  { icon: Twitter, href: "https://twitter.com/suju_tadadikar" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-50"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
