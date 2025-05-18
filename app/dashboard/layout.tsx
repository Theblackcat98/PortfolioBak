'use client';

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, Link, Button } from "@heroui/react";
import Script from 'next/script';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Add FontAwesome for icons */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
        strategy="afterInteractive"
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar isBordered className="border-b border-divider">
          <NavbarBrand>
            <Link href="/" className="font-bold text-inherit">
              Dashboard <span className="text-primary">Admin</span>
            </Link>
          </NavbarBrand>
          <NavbarContent justify="end">
            <Button 
              as={Link}
              color="primary" 
              href="/" 
              variant="flat"
            >
              Return to Site
            </Button>
          </NavbarContent>
        </Navbar>
        
        {children}
      </div>
    </>
  );
} 