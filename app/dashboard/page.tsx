'use client';

import React, { useState } from 'react';
import { Input } from "@heroui/react";

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const apps = [
    { 
      title: "Color Palette Generator", 
      description: "Generate and save beautiful color combinations",
      icon: "fas fa-palette",
      linkUrl: "/colorpicker"
    },
    { 
      title: "Portfolio Website", 
      description: "My personal portfolio showcasing my projects and skills",
      icon: "fas fa-briefcase",
      linkUrl: "/"
    },
    { 
      title: "Weather App", 
      description: "Check the current weather and forecast for any location",
      icon: "fas fa-cloud-sun",
      linkUrl: "#"
    },
    { 
      title: "Task Manager", 
      description: "Simple task management application with drag and drop support",
      icon: "fas fa-tasks",
      linkUrl: "#"
    },
    { 
      title: "Notes App", 
      description: "Create, edit and manage your notes with markdown support",
      icon: "fas fa-sticky-note",
      linkUrl: "#"
    },
    { 
      title: "Calculator", 
      description: "Basic and scientific calculator with history feature",
      icon: "fas fa-calculator",
      linkUrl: "#"
    }
  ];

  const filteredApps = apps.filter(app => 
    app.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    app.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col p-6 bg-background">
      <div className="bg-animation">
        <div className="gradient-circle-1"></div>
        <div className="gradient-circle-2"></div>
        <div className="gradient-circle-3"></div>
      </div>
      
      <header className="py-6 px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground">My Applications</h1>
              <p className="text-xl text-default-500">A collection of my personal projects and applications</p>
            </div>
            
            <div className="relative w-full md:w-auto">
              <div className="relative">
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-default-400"></i>
                <Input
                  className="pl-10 pr-4 py-2 w-full md:w-64"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  startContent={
                    <i className="fas fa-search text-default-400" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="app-grid">
          {filteredApps.map((app, index) => (
            <AppCard 
              key={index}
              title={app.title} 
              description={app.description}
              icon={app.icon}
              linkUrl={app.linkUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function AppCard({ title, description, icon, linkUrl }: { 
  title: string; 
  description: string; 
  icon: string;
  linkUrl: string;
}) {
  return (
    <a 
      href={linkUrl} 
      className="block bg-default-50 rounded-lg p-6 hover:bg-default-100 transition-colors border border-divider"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
          <i className={`${icon} text-xl`}></i>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-default-500">{description}</p>
      
      <div className="mt-4 flex justify-end">
        <span className="text-primary font-medium flex items-center">
          Open <i className="fas fa-arrow-right ml-2"></i>
        </span>
      </div>
    </a>
  );
} 