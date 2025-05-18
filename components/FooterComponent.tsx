'use client';

import React from 'react';
import { Input, Button, Link } from '@heroui/react';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon, PaperPlaneIcon } from './Icons'; // Assuming PaperPlaneIcon is added or will be

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle newsletter submission
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    console.log("Newsletter submitted with email:", email);
    // Add toast notification here for success/error
    event.currentTarget.reset(); // Reset form after submission
  };

  return (
    <footer className="bg-neutral-900/70 backdrop-blur-md text-gray-400 py-16 sm:py-20 border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About/Logo Column */}
          <div className="md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="#home" className="font-bold text-2xl text-white mb-4 inline-block">
              Your<span className="text-primary">Name</span>
            </Link>
            <p className="text-sm mb-6 max-w-xs">
              Creating beautiful digital experiences through clean code and thoughtful design.
            </p>
            <div className="flex gap-4">
              <Link href="#" isExternal aria-label="GitHub" className="text-gray-500 hover:text-primary transition-colors">
                <GithubIcon className="w-6 h-6" />
              </Link>
              <Link href="#" isExternal aria-label="LinkedIn" className="text-gray-500 hover:text-primary transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </Link>
              <Link href="#" isExternal aria-label="Twitter" className="text-gray-500 hover:text-primary transition-colors">
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link href="#" isExternal aria-label="Dribbble" className="text-gray-500 hover:text-primary transition-colors">
                <DribbbleIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#home" className="hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-primary text-sm transition-colors">About</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary text-sm transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="hover:text-primary text-sm transition-colors">Contact</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary text-sm transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to my newsletter for the latest updates, projects, and articles.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-sm gap-2 items-start">
              <Input
                type="email"
                name="email"
                aria-label="Email for newsletter"
                placeholder="Your Email"
                variant="bordered"
                size="md"
                required
                classNames={{
                  base: "flex-grow",
                  inputWrapper: "border-neutral-700 group-data-[focus=true]:border-primary bg-transparent",
                  input: "text-sm text-white placeholder:text-gray-500"
                }}
              />
              <Button type="submit" color="primary" isIconOnly aria-label="Subscribe to newsletter">
                <PaperPlaneIcon className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 text-center md:flex md:justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} YourName. All rights reserved.
          </p>
          <div className="flex gap-4 justify-center text-sm">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 