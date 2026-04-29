import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Type, 
  Contrast, 
  Link as LinkIcon, 
  BookOpen, 
  RotateCcw,
  Accessibility
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const AccessibilityRibbon = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [settings, setSettings] = useState({
    largeText: false,
    highContrast: false,
    highlightLinks: false,
    dyslexiaFont: false,
  });

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("a11y-settings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  // Apply classes to document element when settings change
  useEffect(() => {
    const html = document.documentElement;
    
    html.classList.toggle("a11y-large-text", settings.largeText);
    html.classList.toggle("a11y-high-contrast", settings.highContrast);
    html.classList.toggle("a11y-highlight-links", settings.highlightLinks);
    html.classList.toggle("a11y-dyslexia-font", settings.dyslexiaFont);

    localStorage.setItem("a11y-settings", JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetAll = () => {
    setSettings({
      largeText: false,
      highContrast: false,
      highlightLinks: false,
      dyslexiaFont: false,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-slate-900 text-white overflow-hidden z-50 relative shadow-inner"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <Accessibility className="h-5 w-5" />
                <span>Accessibility Tools</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button 
                  variant={settings.largeText ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSetting("largeText")}
                  className={`text-xs h-8 ${settings.largeText ? 'bg-primary text-primary-foreground' : 'bg-transparent text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'}`}
                >
                  <Type className="mr-2 h-3.5 w-3.5" /> Large Text
                </Button>
                
                <Button 
                  variant={settings.highContrast ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSetting("highContrast")}
                  className={`text-xs h-8 ${settings.highContrast ? 'bg-primary text-primary-foreground' : 'bg-transparent text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'}`}
                >
                  <Contrast className="mr-2 h-3.5 w-3.5" /> High Contrast
                </Button>
                
                <Button 
                  variant={settings.highlightLinks ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSetting("highlightLinks")}
                  className={`text-xs h-8 ${settings.highlightLinks ? 'bg-primary text-primary-foreground' : 'bg-transparent text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'}`}
                >
                  <LinkIcon className="mr-2 h-3.5 w-3.5" /> Highlight Links
                </Button>
                
                <Button 
                  variant={settings.dyslexiaFont ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSetting("dyslexiaFont")}
                  className={`text-xs h-8 ${settings.dyslexiaFont ? 'bg-primary text-primary-foreground' : 'bg-transparent text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'}`}
                >
                  <BookOpen className="mr-2 h-3.5 w-3.5" /> Dyslexia Font
                </Button>

                <div className="w-px h-6 bg-slate-700 mx-1 hidden md:block"></div>

                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={resetAll}
                  className="text-xs h-8 text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <RotateCcw className="mr-2 h-3.5 w-3.5" /> Reset
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onClose}
                  className="text-xs h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-800 ml-2 rounded-full"
                  aria-label="Close Accessibility Tools"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
