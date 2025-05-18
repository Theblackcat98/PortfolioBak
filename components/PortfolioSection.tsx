import React from 'react';
import ProjectCard, { Project } from './ProjectCard';
// import {Tabs, Tab} from "@heroui/react"; // For later filter implementation

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Application Dashboard',
    description: 'A modern, responsive dashboard with animated elements and glassmorphism design, showcasing data visualization and user interactions.',
    imageUrl: 'https://via.placeholder.com/600x400/2e2e3a/8d99ae?text=Project+Dashboard',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'NextUI'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product catalog, shopping cart, user accounts, and a streamlined checkout process.',
    imageUrl: 'https://via.placeholder.com/600x400/2e2e3a/8d99ae?text=E-commerce+Site',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A productivity application for managing tasks and projects with an intuitive drag-and-drop interface and collaboration features.',
    imageUrl: 'https://via.placeholder.com/600x400/2e2e3a/8d99ae?text=Task+Manager',
    tags: ['Vue.js', 'Firebase', 'SCSS', 'WebSockets'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
  // Add more projects as needed
];

export default function PortfolioSection() {
  // const [selectedTab, setSelectedTab] = React.useState("all"); // For filter

  // const filteredProjects = React.useMemo(() => {
  //   if (selectedTab === "all") return sampleProjects;
  //   return sampleProjects.filter(project => project.tags.includes(selectedTab));
  // }, [selectedTab]);

  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built with care and attention to detail.
          </p>
        </div>

        {/* Filter Tabs - To be implemented if needed
        <div className="flex justify-center mb-12">
          <Tabs 
            aria-label="Project filter tabs" 
            selectedKey={selectedTab} 
            onSelectionChange={(key) => setSelectedTab(key as string)}
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-primary",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-primary"
            }}
          >
            <Tab key="all" title="All Projects" />
            <Tab key="React" title="React" />
            <Tab key="Next.js" title="Next.js" />
            <Tab key="Vue.js" title="Vue.js" />
          </Tabs>
        </div>
        */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
} 