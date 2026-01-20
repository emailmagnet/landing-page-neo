# EM Landing 3 - Project Context

## Project Overview
This is a landing page project built with **Next.js 16**, using the App Router. It is designed for high performance and visual appeal, featuring advanced animations, masonry layouts, and A/B testing capabilities.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, CSS Variables
- **UI Components:** Shadcn UI (`@/components/ui`)
- **Fonts:** Wix Madefor Display (`@fontsource/wix-madefor-display`)
- **Animations:** Framer Motion, Motion, tw-animate-css
- **Analytics & Testing:** PostHog (A/B testing implementation)
- **Icons:** Lucide React, Phosphor Icons

## Key Features
- **A/B Testing:** Integrated with PostHog to test variants (e.g., `example-gallery-vs-none`).
- **Masonry Gallery:** Custom implementation adapted from `@ss-blocks/gallery-component-01` with zoom effects.
- **Full-Screen Hero:** Layout designed to be `min-h-screen` for initial impact.
- **Responsive Design:** Optimized for Mobile (1 col), Tablet (4 col), and Desktop (1080px breakpoint).
- **Theming:** Custom color palette (`emGreen`, `emBlue`, `emDark`) defined in `tailwind.config.js`.

## Setup & Development
### Scripts
- `npm run dev`: Start development server (localhost:3000)
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### Directory Structure
- `app/`: Next.js App Router pages and layouts.
  - `globals.css`: Global styles and Tailwind directives.
- `components/`:
  - `landing/`: Landing page specific sections (Hero, Gallery, Pricing, etc.).
  - `ui/`: Reusable UI components (Shadcn).
  - `shadcn-studio/`: Imported external blocks.
- `public/`: Static assets (images, logos, fonts).
- `lib/`: Utility functions (`utils.ts`).
- `docs/`: Project documentation (Note: ignored in git).

## Development Conventions
- **Components:** Prefer functional components with strict TypeScript typing.
- **Styling:** Use Tailwind utility classes. Use `className` prop for overrides.
- **Icons:** Use `lucide-react` or `@phosphor-icons/react`.
- **Imports:** Use absolute imports with `@/` alias.
