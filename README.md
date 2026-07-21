# Swayam — 3D Developer Portfolio

A production-ready, futuristic 3D developer portfolio built with React 19, Three.js, and modern web technologies. Features a full-screen 3D hero scene, glassmorphism UI, AI assistant chatbot, and smooth animations.

![Tech Stack](https://img.shields.io/badge/React-19-6366F1?style=flat-square)
![Three.js](https://img.shields.io/badge/Three.js-R3F-06B6D4?style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-8B5CF6?style=flat-square)

## Features

- **3D Hero Scene** — Floating particles, animated avatar, star field (React Three Fiber)
- **Loading Screen** — Animated logo with progress indicator
- **Glassmorphism UI** — Premium dark theme with gradient accents
- **AI Assistant** — Jarvis-like chatbot with mock knowledge base
- **Full Sections** — About, Skills, Projects, Experience, DSA Dashboard, Certificates, Blog, Contact
- **Animations** — Framer Motion, GSAP scroll reveals, mouse-follow glow
- **Responsive** — Desktop, tablet, and mobile optimized
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation
- **Performance** — Lazy loading, code splitting, optimized Three.js scene

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | React 19 + Vite + TypeScript |
| Styling | Tailwind CSS v4 |
| 3D | Three.js, React Three Fiber, Drei |
| Animation | Framer Motion, GSAP |
| Routing | React Router |
| Icons | React Icons |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone or navigate to the project
cd SWAYAM_Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable UI, layout, 3D, AI components
├── sections/        # Page sections (Hero, About, Skills, etc.)
├── pages/           # Route pages
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── utils/           # Helper functions
├── constants/       # Theme constants, nav links
├── data/            # JSON mock data
├── styles/          # Global CSS + Tailwind
├── App.tsx          # Root app component
└── main.tsx         # Entry point
```

## Customization

### Profile Data

Edit JSON files in `src/data/`:

- `profile.json` — Bio, education, CGPA, career objectives
- `skills.json` — Skills by category
- `projects.json` — Project cards
- `experience.json` — Work timeline
- `dsaStats.json` — Coding statistics
- `certificates.json` — Certifications
- `blog.json` — Blog posts
- `aiKnowledge.json` — AI chatbot responses

### Theme Colors

Update `src/constants/theme.ts` and `src/styles/globals.css` `@theme` block.

### Social Links

Update `src/constants/theme.ts` → `SOCIAL_LINKS`.

## Deploy to Vercel

1. Push the project to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

SPA routing is configured via `vercel.json`.

## Performance Tips

- Three.js scene uses reduced particle count on mobile
- Heavy components are lazy-loaded (HeroScene, AIAssistant, Home page)
- Manual code splitting for three.js and animation libraries
- Images use lazy loading

## License

MIT — Built by Swayam
# Portfoli
# Portfoli
# Portfoli
# Portfoli
# Portfoli
# Portfoli
