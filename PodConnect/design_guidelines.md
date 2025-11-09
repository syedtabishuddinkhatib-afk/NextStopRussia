# NextStopRussia Design Guidelines

## Design Approach
**Reference-Based**: Draw inspiration from premium education platforms (Coursera, edX) and international university websites, emphasizing trust, professionalism, and credibility. Combine modern marketing aesthetics with institutional reliability.

**Core Design Principles:**
- Trust through transparency: Prominent display of credentials, authorization letters, and official partnerships
- Cultural sensitivity: Design elements that resonate with students from India, Pakistan, Saudi Arabia, and Iran
- Conversion-focused: Clear pathways to application submission and contact

---

## Typography

**Font Families:**
- Headings: Inter or Poppins (700, 600) - modern, professional, multilingual support
- Body: Inter or Open Sans (400, 500) - excellent readability
- Accent: For taglines/CTAs, use heading font at 600 weight

**Hierarchy:**
- Hero Headlines: text-5xl lg:text-6xl, font-bold
- Section Headings: text-3xl lg:text-4xl, font-semibold
- Subsections: text-xl lg:text-2xl, font-semibold
- Body Text: text-base lg:text-lg
- Small Text/Captions: text-sm

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 lg:py-24
- Component gaps: gap-8 lg:gap-12
- Inner padding: p-6 lg:p-8
- Tight spacing: space-y-4 or gap-4

**Container Widths:**
- Full-width sections: w-full with max-w-7xl mx-auto px-4
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto

**Grid Strategy:**
- University cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature highlights: grid-cols-1 md:grid-cols-3
- Program listings: grid-cols-1 lg:grid-cols-2
- Mobile: Always single column

---

## Component Library

### Navigation
- Sticky header with logo, main navigation links, and prominent "Apply Now" CTA button
- Mobile: Hamburger menu with full-screen overlay
- Secondary nav row for country flags/language selector (subtle, top-right)

### Hero Section
- Full-viewport hero (min-h-screen) with large background image (Russian university campus or St. Basil's Cathedral)
- Overlay gradient for text readability
- Centered content with headline, tagline, dual CTAs ("Apply Now" + "Explore Universities")
- Blurred-background buttons for CTAs placed on hero image
- Trust badges row beneath hero (3 icons: "Official Partner" + "Transparent Process" + "Visa Support")

### University Cards
- Clean white cards with subtle shadow (shadow-md hover:shadow-lg)
- University logo at top
- Title, brief description, program list
- "View Authorization Letter" link with icon
- "Learn More" button

### Authorization Display
- Large, scannable images of official letters in lightbox-enabled gallery
- PDF download buttons
- QR codes for verification
- Institutional seals/stamps prominently displayed

### Program Finder
- Tab-based or dropdown filter interface
- Quick-access buttons for popular programs (MBBS, Engineering, Business)
- Results display in card grid format

### Testimonial Cards
- Student photo, quote, name, country flag, university attended
- 2-3 column layout on desktop
- Carousel on mobile

### Process Timeline
- Vertical or horizontal stepper component
- 6 steps with icons, titles, descriptions
- Progressive visual connector between steps

### Forms
- Clean, spacious form fields with clear labels
- Grouped sections (Personal Info, Academic Background, Program Interest)
- Dropdown for country selection with flag icons
- WhatsApp contact option prominently displayed
- "Submit Application" primary button

### Footer
- Multi-column layout: About, Quick Links, Programs, Contact
- Social media icons
- Country-specific contact numbers
- Newsletter signup
- Trust indicators (university partnership logos, certifications)

---

## Images

**Hero Section:** 
- Large, high-quality image of iconic Russian architecture (St. Basil's Cathedral, Moscow State University building) or modern Russian university campus with students
- Dimensions: 1920x1080 minimum, optimized for web

**University Pages:**
- Campus photos for each institution (library, classrooms, student life)
- Official university logos
- Scanned authorization letters (high-resolution PDFs viewable in browser)

**Other Sections:**
- Student success photos (diverse, showing students from target countries)
- Program-specific imagery (medical students in labs, engineering facilities, business classrooms)
- Russian cityscape/culture images to showcase student life
- Flag icons for India, Pakistan, Saudi Arabia, Iran throughout site

**Placement Strategy:**
- Hero: Full-width background image with overlay
- Universities page: Logo + 1-2 campus photos per university
- Programs page: Header images for each program category
- Testimonials: Student headshots
- Verification page: Authorization letter scans as primary content
- About section: Personal photo of founder/doctor with I.M. Sechenov University

---

## Trust Elements

- Official seals and university logos displayed prominently
- "Verified Partner" badges with checkmarks
- Authorization letter previews with download/verify options
- Student success statistics (counters: "500+ Students Placed", "15+ Partner Universities")
- Country-specific testimonials with flags
- Secure contact indicators (WhatsApp verified, official email)

---

## Mobile Optimization

- Stack all multi-column layouts to single column
- Larger touch targets for buttons (min h-12)
- WhatsApp integration prominent on mobile (floating chat button)
- Simplified navigation menu
- Hero images optimized for portrait orientation
- Quick-access "Apply Now" sticky button at bottom on mobile