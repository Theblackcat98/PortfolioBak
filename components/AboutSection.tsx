import React from 'react';
import { Chip } from '@heroui/react';

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js", // Added from project overview
  "Tailwind CSS", // Added from project overview
  "Node.js",
  "UI/UX Design",
  "Responsive Design",
  "Git",
  // Add more skills from project-overview.md if relevant
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get to know me better.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="md:grid md:grid-cols-1 md:gap-12 items-center">
            <div> 
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Who am I?</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed text-center sm:text-left">
                I'm a passionate web developer with a keen eye for design and a love for creating seamless user experiences. With several years of experience in the industry, I specialize in front-end development using modern technologies like React and Next.js, along with UI/UX design principles.
              </p>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed text-center sm:text-left">
                My journey in web development started when I built my first website in high school, and I've been hooked ever since. I love turning complex problems into simple, beautiful, and intuitive designs, always striving to write clean, maintainable, and efficient code.
              </p>
            </div>
            
            <div className="mt-12 md:mt-0">
              <h4 className="text-2xl font-semibold text-white mb-8 text-center">My Skills</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <Chip 
                    key={skill} 
                    color="primary" 
                    variant="flat" // or "solid", "bordered", "light"
                    size="lg"
                    className="text-base font-medium bg-primary/10 text-primary border-primary/30 border"
                  >
                    {skill}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 