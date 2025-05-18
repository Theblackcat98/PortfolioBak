import React from 'react';
import { Button, Link } from '@heroui/react';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from './Icons'; // Assuming you'll create an Icons.tsx for SVGs

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center py-32 sm:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 lg:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Hi, I'm <span className="text-primary relative inline-block">
                Your Name
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2.5 sm:h-3.5 bg-primary/30 z-[-1]"></span>
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-300 mb-6">
              Web Developer & Designer
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto md:mx-0">
              I create beautiful, functional websites and applications with a focus on user experience and clean code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
              <Button as={Link} href="#portfolio" color="primary" size="lg" className="font-medium min-w-[180px]">
                View My Work
              </Button>
              <Button as={Link} href="#contact" variant="bordered" size="lg" className="font-medium text-white border-white hover:!bg-white hover:!text-dark min-w-[180px]">
                Get In Touch
              </Button>
            </div>
            <div className="flex gap-6 justify-center md:justify-start">
              <Link href="#" isExternal aria-label="GitHub" className="text-gray-400 hover:text-primary">
                <GithubIcon className="w-7 h-7" />
              </Link>
              <Link href="#" isExternal aria-label="LinkedIn" className="text-gray-400 hover:text-primary">
                <LinkedinIcon className="w-7 h-7" />
              </Link>
              <Link href="#" isExternal aria-label="Twitter" className="text-gray-400 hover:text-primary">
                <TwitterIcon className="w-7 h-7" />
              </Link>
              <Link href="#" isExternal aria-label="Dribbble" className="text-gray-400 hover:text-primary">
                <DribbbleIcon className="w-7 h-7" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:w-2/5 lg:w-1/2 mt-12 md:mt-0 md:pl-12 lg:pl-20">
            <div className="w-full max-w-md h-[400px] lg:h-[500px] bg-[rgba(46,46,58,0.4)] rounded-2xl flex items-center justify-center text-primary border border-[rgba(255,255,255,0.05)] backdrop-blur-lg shadow-2xl">
              {/* Placeholder for image or a more elaborate visual */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 opacity-50">
                <path d="M12 2.5a.75.75 0 01.75.75v.518A7.004 7.004 0 0118.53 5.56a.75.75 0 01.704 1.022A8.504 8.504 0 0013.5 11.813V12.75a.75.75 0 01-1.5 0v-.937A8.504 8.504 0 004.766 6.582a.75.75 0 01.705-1.022A7.004 7.004 0 0111.25 3.768V3.25a.75.75 0 01.75-.75zM12.61 14.042a.75.75 0 01-.518.898l-.002.001a8.999 8.999 0 01-9.179 0l-.002-.001a.75.75 0 01-.518-.898A6.935 6.935 0 012.25 12c0-1.11.263-2.151.741-3.082a.75.75 0 011.224.796A5.435 5.435 0 003.75 12c0 .891.207 1.724.575 2.468l.002.004a7.5 7.5 0 008.346 0l.002-.004A5.435 5.435 0 0014.25 12a.75.75 0 011.465-.314A6.935 6.935 0 0112.61 14.042z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 