# Portfolio OS

**Portfolio OS** is an interactive frontend portfolio built as a desktop-style operating system. It includes draggable windows, a dock, boot sequence, terminal, project cards, skeleton image loading, case studies, theme switching, language switching, and a responsive mobile version.

## Live Preview

[Open Portfolio OS](https://portfolio-os-lovat.vercel.app/)

## Design Concept

The project is inspired by desktop operating systems: apps open in windows, projects behave like separate app details, and the portfolio feels more interactive than a static CV page.

## Technologies Used

- React
- TypeScript
- Vite
- Zustand
- SCSS
- React Icons
- Vercel

## Getting Started

### Clone the repository

- git clone https://github.com/serhiy23471/portfolio-os.git
- cd portfolio-os
- npm install
- npm run dev

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - build production files
- `npm run preview` - preview production build locally

## Features

- Desktop-style portfolio interface with windows, dock, menubar, and app icons
- Boot sequence before the main portfolio appears
- Project cards with live demo, GitHub, and case study links
- Skeleton loading placeholders for project and case study previews
- Dedicated case study pages for selected projects
- Vercel routing support for direct case study URLs
- Terminal app with portfolio commands
- Light and dark theme switching
- Ukrainian and English language switching
- Responsive mobile portfolio fallback
- Data-driven profile, projects, skills, certificates, and experience

## Project Structure

- `src/components` - UI components, desktop apps, mobile portfolio, and case studies
- `src/data` - editable portfolio content
- `src/store` - Zustand desktop state
- `src/styles` - SCSS variables, animations, and global styles
- `public` - project images, certificates, and static fallback pages
