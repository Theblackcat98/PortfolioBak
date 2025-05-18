'use client';
import React from 'react';
import { Input, Textarea, Button } from '@heroui/react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from './Icons'; // Assuming these are in your main Icons.tsx or add them

// Helper to create icon components if not already in Icons.tsx
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
    {children}
  </div>
);

export default function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    // e.g., send data to an API endpoint
    console.log("Form submitted");
    // Consider adding toast notifications for success/error states
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Let's talk!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center md:text-left">Contact Information</h3>
            <div className="flex flex-col items-center md:items-start bg-neutral-800/50 p-6 rounded-lg">
              <IconWrapper><EnvelopeIcon className="w-6 h-6" /></IconWrapper>
              <h4 className="text-xl font-medium text-white mb-1">Email</h4>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-primary transition-colors">
                your.email@example.com
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start bg-neutral-800/50 p-6 rounded-lg">
              <IconWrapper><PhoneIcon className="w-6 h-6" /></IconWrapper>
              <h4 className="text-xl font-medium text-white mb-1">Phone</h4>
              <a href="tel:+11234567890" className="text-gray-400 hover:text-primary transition-colors">
                +1 (123) 456-7890
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start bg-neutral-800/50 p-6 rounded-lg">
              <IconWrapper><MapPinIcon className="w-6 h-6" /></IconWrapper>
              <h4 className="text-xl font-medium text-white mb-1">Location</h4>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-800/50 p-6 sm:p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center md:text-left">Send Me a Message</h3>
            <Input 
              type="text" 
              label="Your Name" 
              name="name"
              placeholder="Enter your name"
              isRequired 
              variant="bordered"
              classNames={{ inputWrapper: "border-neutral-700 hover:border-primary focus-within:border-primary" }}
            />
            <Input 
              type="email" 
              label="Your Email" 
              name="email"
              placeholder="Enter your email address"
              isRequired 
              variant="bordered"
              classNames={{ inputWrapper: "border-neutral-700 hover:border-primary focus-within:border-primary" }}
            />
            <Input 
              type="text" 
              label="Subject" 
              name="subject"
              placeholder="What is this about?"
              variant="bordered"
              classNames={{ inputWrapper: "border-neutral-700 hover:border-primary focus-within:border-primary" }}
            />
            <Textarea
              label="Your Message"
              name="message"
              placeholder="Write your message here..."
              isRequired
              variant="bordered"
              minRows={5}
              classNames={{ inputWrapper: "border-neutral-700 hover:border-primary focus-within:border-primary" }}
            />
            <Button type="submit" color="primary" size="lg" fullWidth className="font-medium">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Add EnvelopeIcon, PhoneIcon, MapPinIcon to your components/Icons.tsx if they don't exist
// For example:
// export const EnvelopeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props}><path d="..." /></svg>;
// export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props}><path d="..." /></svg>;
// export const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props}><path d="..." /></svg>; 