'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button, // Keep Button for potential future use like a theme switcher
} from "@heroui/react";

// Placeholder for an icon, replace with actual icons (e.g., from lucide-react)
const HomeIcon = () => <span>🏠</span>; // Example
const AboutIcon = () => <span>ℹ️</span>; // Example
const PortfolioIcon = () => <span>📁</span>; // Example
const ContactIcon = () => <span>📞</span>; // Example
const DashboardIcon = () => <i className="fas fa-th-large"></i>; // Using FontAwesome class

interface MenuItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
}

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems: MenuItem[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
      isBlurred={false} // Keep false if background animation should be fully visible
      classNames={{
        base: "fixed top-0 left-0 w-full z-[1000] bg-transparent data-[scrolled=true]:bg-[rgba(20,20,30,0.9)] data-[scrolled=true]:backdrop-blur-md transition-colors duration-300",
        wrapper: "max-w-[1200px] mx-auto px-4", // Adjusted padding for consistency
        item: [ // Styling for individual navbar items (desktop)
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link href="#home" className="font-bold text-inherit text-xl text-white">
            Your<span className="text-primary">Name</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.href === "#home"}> {/* Placeholder active logic */}
            <Link
              color={item.href === "#home" ? "primary" : "foreground"}
              href={item.href}
              className="text-white hover:text-primary"
              isExternal={item.isExternal}
            >
              <div className="flex items-center gap-1">
                {item.icon && !["Home", "About", "Portfolio", "Contact"].includes(item.name) && item.icon}
                {item.name}
              </div>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        {/* Example for a theme switch button - implement if needed */}
        {/* <NavbarItem className="hidden lg:flex">
          <Button isIconOnly variant="light" onPress={() => console.log("Toggle theme")}>
            ☀️ <span className="sr-only">Toggle Theme</span>
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu className="bg-[rgba(20,20,30,0.95)] backdrop-blur-md pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full text-white hover:text-primary focus:text-primary py-2 text-lg flex items-center gap-2"
              href={item.href}
              onPress={() => setIsMenuOpen(false)} // Close menu on item click
              isExternal={item.isExternal}
            >
              {item.icon}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
} 