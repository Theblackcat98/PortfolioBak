import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Link, Chip} from "@heroui/react";
import { ExternalLinkIcon, GithubIconMini } from './IconsMini'; // Assuming smaller/specific icons for cards

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="w-full h-full shadow-lg border border-transparent hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 bg-[rgba(46,46,58,0.4)] backdrop-blur-md border-neutral-700/50">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start p-0 hidden">
        {/* Can add overlay content here if needed */}
      </CardHeader>
      <Image
        removeWrapper
        alt={project.title}
        className="z-0 w-full h-[200px] object-cover"
        src={project.imageUrl || "https://via.placeholder.com/600x400/2e2e3a/8d99ae?text=Project+Image"}
      />
      <CardBody className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden text-ellipsis">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Chip key={tag} color="primary" variant="flat" size="sm" className="bg-primary/10 text-primary text-xs">
              {tag}
            </Chip>
          ))}
        </div>
      </CardBody>
      <CardFooter className="p-6 pt-0 flex justify-start gap-3">
        {project.liveDemoUrl && (
          <Button 
            as={Link} 
            href={project.liveDemoUrl} 
            isExternal 
            color="primary" 
            variant="ghost" 
            size="sm"
            startContent={<ExternalLinkIcon className="w-4 h-4" />}
            className="border-primary/50 text-primary"
          >
            Live Demo
          </Button>
        )}
        {project.sourceCodeUrl && (
          <Button 
            as={Link} 
            href={project.sourceCodeUrl} 
            isExternal 
            variant="light" 
            size="sm"
            startContent={<GithubIconMini className="w-4 h-4" />}
            className="text-gray-400 hover:text-primary"
          >
            Source Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
} 