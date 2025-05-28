import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const ResearchProjects = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Research Projects</h2>

        <Card className="overflow-hidden">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>Research</Badge>
              <Badge>Machine Learning</Badge>
              <Badge>Healthcare</Badge>
            </div>
            <h4 className="text-xl font-bold mb-3">
              Early Cancer Detection using Prediction Algorithm
            </h4>
            <p className="text-gray-600 mb-4">
              Conducted a comprehensive survey of machine learning algorithms
              for early cancer detection, resulting in a published paper in the
              International Journal of Advanced Research in Science,
              Communication and Technology (IJARSCT).
            </p>
            <div className="space-y-2 text-gray-700 mb-4">
              <p>
                <strong>Key Contributions:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Analysis of predictive algorithms for cancer detection</li>
                <li>Comparison of machine learning approaches in healthcare</li>
                <li>Evaluation of early detection methodologies</li>
                <li>Published research with DOI: 10.48175/IJARSCT-15203</li>
              </ul>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://lnkd.in/dCHJZCPg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 mr-1" /> Read Publication
              </a>
              <a
                href="https://lnkd.in/d7JKNsn2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 mr-1" /> CrossRef
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResearchProjects;
