# Portfolio Website

This is a personal portfolio website built with Next.js, Tailwind CSS, and HeroUI.

## Features

*   **Responsive Design**: Adapts to various screen sizes (desktop, tablet, mobile).
*   **Dark Mode**: Supports light and dark themes.
*   **Component-Based**: Built with reusable React components.
*   **Styled with Tailwind CSS**: Utilizes a utility-first CSS framework.
*   **HeroUI Components**: Leverages a modern React UI library.
*   **Color Picker Tool**: Includes a mini-application for creating and exporting color palettes.

## Tech Stack

*   **Next.js**: React framework for server-side rendering and static site generation.
*   **React**: JavaScript library for building user interfaces.
*   **TypeScript**: Superset of JavaScript that adds static typing.
*   **Tailwind CSS**: Utility-first CSS framework.
*   **HeroUI**: React UI library.
*   **Framer Motion**: Animation library for React.
*   **next-themes**: Theme management for Next.js.

## Project Structure

```
/
├── app/                  # Next.js App Router (pages, layouts, components)
│   ├── (main)/           # Main application routes
│   │   ├── about/
│   │   ├── contact/
│   │   ├── layout.tsx
│   │   ├── page.tsx      # Home page
│   │   └── ...
│   ├── colorpicker/      # Color Picker mini-application
│   │   ├── components/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx        # Root layout
│   └── providers.tsx     # Theme and UI providers
├── components/           # Shared React components
├── public/               # Static assets (images, fonts, etc.)
├── styles/               # Global styles and Tailwind CSS configuration
├── .env.local.example    # Example environment variables
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore file
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn or pnpm

## Key Components and Features

*   **`HeroSection`**: The main landing section of the portfolio.
*   **`AboutSection`**: Displays information about you and your skills.
*   **`PortfolioSection`**: Showcases your projects.
*   **`ProjectCard`**: Individual card component for each project.
*   **`ContactForm`**: Allows users to send messages.
*   **`Navbar`**: Navigation bar with links to different sections and theme switcher.
*   **`Footer`**: Site footer with copyright and social links.
*   **`ColorPicker`**: A separate application route (`/colorpicker`) that allows users to:
    *   Select colors using a color wheel or input fields.
    *   Generate color palettes.
    *   Export palettes in various formats (CSS HEX, CSS HSL, SCSS HEX, SCSS HSL, SCSS RGB, SCSS Gradient) via an `ExportModal`.

## Customization

*   **Theme Colors**: Defined in `tailwind.config.js` within the `heroui` plugin configuration.
*   **Global Styles**: Located in `styles/globals.css`.
*   **Content**: Update the content in the respective components (e.g., `HeroSection.tsx`, `AboutSection.tsx`, `projectsData.ts`).
*   **Images and Assets**: Place new images in the `public` directory and reference them accordingly.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE.md). 