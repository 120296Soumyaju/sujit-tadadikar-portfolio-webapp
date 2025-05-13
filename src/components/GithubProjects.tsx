
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string;
}

const GithubProjects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.github.com/users/120296Soumyaju/repos?sort=updated&per_page=6');
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        setRepos(data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load repositories. Please try again later.');
        setIsLoading(false);
        console.error('Error fetching GitHub repositories:', err);
      }
    };

    fetchRepos();
  }, []);

  if (isLoading) {
    return <RepositorySkeleton />;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => window.open('https://github.com/120296Soumyaju', '_blank')}
        >
          <Github className="mr-2 h-4 w-4" /> View GitHub Profile
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <Card key={repo.id} className="h-full flex flex-col">
          <CardContent className="pt-6 pb-4 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <div className="flex space-x-2">
                <span className="flex items-center text-sm text-gray-600">
                  <Star className="h-3.5 w-3.5 mr-1" /> {repo.stargazers_count}
                </span>
                <span className="flex items-center text-sm text-gray-600">
                  <GitFork className="h-3.5 w-3.5 mr-1" /> {repo.forks_count}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 flex-grow">
              {repo.description || "No description available"}
            </p>
            
            {repo.language && (
              <div className="mb-3">
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {repo.language}
                </span>
              </div>
            )}
            
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.slice(0, 3).map((topic) => (
                  <Badge key={topic} variant="outline">{topic}</Badge>
                ))}
              </div>
            )}
            
            <div className="flex space-x-3 mt-auto pt-4">
              <Button variant="outline" size="sm" asChild>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="h-4 w-4 mr-2" /> Code
                </a>
              </Button>
              
              {repo.homepage && (
                <Button variant="outline" size="sm" asChild>
                  <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" /> Demo
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Repository Skeleton Component
const RepositorySkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Card key={item} className="h-full flex flex-col">
          <CardContent className="pt-6 pb-4 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-3">
              <Skeleton className="h-7 w-40" />
              <div className="flex space-x-2">
                <Skeleton className="h-5 w-10" />
                <Skeleton className="h-5 w-10" />
              </div>
            </div>
            
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-2" />
            <Skeleton className="h-4 w-4/6 mb-4" />
            
            <Skeleton className="h-6 w-16 mb-3" />
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-12" />
            </div>
            
            <div className="flex space-x-3 mt-auto pt-4">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-24" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GithubProjects;
