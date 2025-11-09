# NextStopRussia

## Overview

NextStopRussia is a web application that serves as an official admission partner for Russian universities, helping international students from India, Pakistan, Saudi Arabia, and Iran secure verified admissions. The platform showcases partner universities, available programs (MBBS, Engineering, Business, etc.), and provides a comprehensive admission process guide. It emphasizes trust and transparency by displaying official authorization letters and verification systems.

The application is built as a full-stack TypeScript solution with a React frontend and Express backend, using an in-memory storage system (currently without a persistent database, though structured to support one).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for the UI layer
- **Vite** as the build tool and development server, configured for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query (React Query)** for server state management, data fetching, and caching

**UI Component Library**
- **Shadcn/ui** component system built on Radix UI primitives
- **Tailwind CSS** for styling with a custom design system defined in `tailwind.config.ts`
- Custom CSS variables for theming (light/dark mode support)
- Design follows guidelines in `design_guidelines.md` emphasizing trust, professionalism, and cultural sensitivity

**State Management Approach**
- Server state managed through TanStack Query with infinite stale time and no automatic refetching
- Form state handled with React Hook Form and Zod for validation
- No global client state management library (Redux/Zustand) - keeps state local or in server cache

**Component Organization**
- Pages in `/client/src/pages/` (Home, Universities, Programs, Contact, etc.)
- Reusable components in `/client/src/components/` (UniversityCard, ProgramCard, TestimonialCard, etc.)
- UI primitives in `/client/src/components/ui/` (shadcn components)
- Custom hooks in `/client/src/hooks/`

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- RESTful API design with routes defined in `/server/routes.ts`
- JSON request/response format
- Custom logging middleware for API requests

**Storage Layer**
- **In-memory storage** (`MemStorage` class) currently used for development
- Storage interface (`IStorage`) abstracts data access, making it easy to swap implementations
- Initialized with sample data for universities, programs, testimonials, and inquiries
- **Future-ready for PostgreSQL**: Schema defined with Drizzle ORM in `/shared/schema.ts`, though database is not currently connected

**API Structure**
- `/api/universities` - List and retrieve university information
- `/api/programs` - List and retrieve academic programs
- `/api/testimonials` - Retrieve student testimonials
- `/api/inquiries` - Submit contact/inquiry forms
- Routes follow RESTful conventions (GET for retrieval, POST for creation)

**Data Validation**
- **Zod schemas** derived from Drizzle table definitions using `drizzle-zod`
- Shared schemas in `/shared/schema.ts` used by both frontend and backend
- Type safety across the full stack with TypeScript

### Database Design (Prepared, Not Connected)

**Schema Tables**
- `universities` - University profiles with name, location, programs, authorization letters
- `programs` - Academic program details (category, duration, fees, eligibility)
- `testimonials` - Student testimonials with country, program, and quotes
- `inquiries` - Contact form submissions from prospective students

**ORM Choice**
- **Drizzle ORM** configured for PostgreSQL dialect
- Schema-first approach with TypeScript types inferred from tables
- Migration system configured (`drizzle.config.ts`) but not yet executed
- Uses `@neondatabase/serverless` driver for potential Neon PostgreSQL deployment

**Future Database Integration**
- Environment variable `DATABASE_URL` required for connection
- Migration files would be generated in `/migrations/` directory
- Storage layer can be swapped from `MemStorage` to database implementation without changing API routes

### Development & Deployment Strategy

**Development Workflow**
- Vite dev server proxies API requests to Express backend
- HMR (Hot Module Replacement) for instant frontend updates
- TypeScript compilation checking via `tsc --noEmit`
- Replit-specific plugins for runtime error overlays and dev banners

**Build Process**
- Frontend: Vite builds to `/dist/public/`
- Backend: esbuild bundles server code to `/dist/index.js` with ESM format
- Separate build commands allow independent frontend/backend deployments

**Production Considerations**
- Express serves static frontend files in production
- All assets aliased and resolved through Vite's path resolution
- Environment-based configuration (NODE_ENV)

### Key Architectural Decisions

**Why In-Memory Storage Initially?**
- Allows rapid prototyping and development without database setup
- Easy to populate with sample data for demos
- Storage interface makes future database migration straightforward
- All data structures already defined in Drizzle schema for smooth transition

**Why Wouter Over React Router?**
- Minimal bundle size (~1.2kB vs 50kB+)
- Hook-based API aligns with React patterns
- Sufficient for the application's routing needs (no complex nested routes or data loaders required)

**Why TanStack Query?**
- Eliminates need for manual loading states and error handling
- Built-in caching reduces API calls
- Optimistic updates and mutations support
- Server state separated from client state conceptually

**Why Shadcn/ui Over Material-UI or Chakra?**
- Copy-paste component model gives full ownership of code
- Built on accessible Radix UI primitives
- Tailwind CSS integration matches design system
- No runtime dependency on large component library

**Path Alias Strategy**
- `@/` maps to `client/src/` for frontend imports
- `@shared/` maps to `shared/` for types/schemas used by both frontend and backend
- `@assets/` maps to `attached_assets/` for static files
- Prevents brittle relative import paths