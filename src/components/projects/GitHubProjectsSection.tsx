
import React from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import GithubProjects from "@/components/GithubProjects";

const GitHubProjectsSection = () => {
  return (
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
  );
};

export default GitHubProjectsSection;
