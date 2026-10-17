# 🖥️ Portfolio OS — Interactive Developer Portfolio

An interactive developer portfolio presented as a desktop-style operating system, built with React and TypeScript.

**[Live Demo](https://portfolio-os-lovat.vercel.app/)**

---

## 📋 About the Project

Portfolio OS turns a personal portfolio into a desktop interface. Visitors can open apps in windows, browse projects and case studies, explore skills and experience, and use a terminal with portfolio commands. A mobile layout provides a responsive way to access the same portfolio content on smaller screens.

---

## ✅ Features

- **Desktop interface** — wallpaper, desktop icons, menubar, dock, and app windows
- **Window controls** — open, focus, drag, minimize, and close windows
- **Boot sequence** — animated startup before the portfolio desktop appears
- **Portfolio apps** — About, Projects, Skills, Work, Contact, and Terminal
- **Project details** — project summaries, links, and dedicated case studies
- **Case studies** — detailed pages for selected projects, including Nice Gadgets
- **Terminal** — interactive commands for exploring portfolio information
- **Themes** — switch between light and dark appearance
- **Languages** — switch between English and Ukrainian
- **Responsive layout** — mobile portfolio experience for smaller screens
- **Data-driven content** — profile, projects, skills, and experience maintained in `src/data`
- **Sound effects** — audio feedback for selected interface interactions

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| UI | React 18 |
| Language | TypeScript |
| Routing | React Router v6 |
| State | Zustand |
| Styling | SCSS |
| Icons | Lucide React, React Icons |
| Build tool | Vite |
| Deployment | Vercel |

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Apps/          # Portfolio apps and project details
│   ├── Boot/          # Startup sequence
│   ├── CaseStudies/  # Case study pages
│   ├── Desktop/      # Desktop, dock, menubar, and icons
│   ├── Demos/        # Interactive demos
│   ├── Mobile/       # Responsive mobile portfolio
│   ├── UI/           # Shared interface components
│   └── Window/       # Window frame and controls
├── data/             # Profile, projects, skills, and experience
├── hooks/            # Shared React hooks
├── store/            # Zustand desktop state
├── styles/           # Global styles, variables, and animations
├── types.ts          # Shared TypeScript types
└── i18n.ts           # Language configuration
public/
├── case-studies/     # Static case study pages
├── certificates/     # Certificate documents
├── projects/         # Project preview images
└── sounds/           # Interface sound effects
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/serhiy23471/portfolio-os.git
cd portfolio-os
npm install
```

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## 🌐 Deployment

The project is deployed on Vercel. Routing rewrites are configured in `vercel.json` to support direct access to portfolio and case study routes.
