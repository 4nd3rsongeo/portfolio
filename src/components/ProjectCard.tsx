"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      whileHover={{ y: -5 }}
      className="flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300"
    >
      {project.image && (
        <div className="relative aspect-video overflow-hidden border-b border-border">
          <img
            src={project.image}
            alt={project.name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
          {project.type}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{project.name}</h3>
        <p className="text-secondary-foreground text-sm flex-grow mb-6">
          {project.description}
        </p>
        
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 p-4 bg-secondary/30 hover:bg-primary text-foreground font-medium transition-colors"
        >
          <span>View Project</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
}