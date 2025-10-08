# Batten Digital Commons Intranet - Project Documentation

## Project Overview

A comprehensive intranet replacement for the Frank Batten School of Leadership and Public Policy at the University of Virginia. This modern web application replaces the existing SharePoint-based intranet with a custom-built solution featuring improved design, better user experience, and integration with Azure services.

## Project Goals

- Replace the existing local SharePoint intranet
- Provide SSO authentication via NetBadge
- Enable permission-based access to AI tools using Azure Entra ID groups
- Deliver a modern, clean design inspired by contemporary web aesthetics
- Maintain UVA branding throughout (navy blue #232D4B and orange #E57200)

## Technology Stack

### Frontend
- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS v4
- **Component Library**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**:
  - Libre Baskerville (serif, Adobe Caslon-inspired)
  - Inter (sans-serif fallback)

### Planned Backend/Infrastructure
- **Authentication**: NextAuth.js with Azure AD provider (NetBadge integration)
- **Authorization**: Azure Entra ID groups for permission-based access
- **AI Tools**: Separate Azure Static Web Apps
- **AI Chatbot**: Azure OpenAI with custom embeddings (planned)
- **Hosting**: Azure Static Web Apps

## Design Philosophy

### Visual Design
- **Inspiration**: trustditto.com design elements
- **Style**: Clean, professional, minimalist
- **Restrictions**:
  - No gradients
  - No emojis
  - Lots of whitespace
  - High contrast for readability

### UVA Branding
- **Primary Color**: Navy Blue (#232D4B)
- **Accent Color**: Orange (#E57200)
- **Typography**: Serif-based (Libre Baskerville) for classic academic feel
- **Color Usage**: Orange dividers under section headings, navy blue for headers/footer

## Current Implementation

### Pages & Components

#### Main Page (`app/page.tsx`)
- **Hero Section**:
  - Large title: "Batten Digital Commons"
  - Orange divider line
  - Descriptive tagline
  - Department navigation pills (12 departments)

- **Services Section**:
  - 6 featured service tiles in 3-column grid
  - Each tile includes:
    - Background image at 20% opacity
    - Orange icon container
    - Title and description
    - Hover effects (shadow, border color, transform)

- **Upcoming Events Section**:
  - Full-width orange background bar
  - 3-column grid layout
  - Text-only format with event names, dates, and locations

- **Background**:
  - Garrett Hall sunset photo at 30% opacity (Note: Currently having visibility issues, needs debugging)

#### Header Component (`components/header.tsx`)
- **Layout**: Three-column design
  - Left: Batten logo with "Digital Commons" subtitle
  - Center: Weather widget (Charlottesville, VA | 77°F | Mostly cloudy)
  - Right: Welcome message for logged-in user
- **Styling**: Sticky header with backdrop blur

#### Footer Component (`components/footer.tsx`)
- **Background**: Navy blue (UVA primary color)
- **Content**:
  - "Quick Links" section heading
  - 10 quick links in 4-column grid (text-only, no icons)
  - Copyright notice
- **Links Include**:
  - Sign Up for UVA Alerts
  - Garrett Hall Emergency Action Plan
  - Batten Website
  - Staff Support Guide
  - Org Chart
  - UVA Batten Internal Directory
  - Systems and Process Documentation
  - Document Retention Schedule
  - UVA Student Rights
  - UVA Workday

#### Service Tiles Component (`components/service-tile.tsx`)
- **FeaturedServiceTile**: Large cards with background images
- **QuickLinkTile**: Compact rows (not currently used in main layout)

### Data Structure

#### Services Data (`data/services.ts`)
Contains all service tiles with:
- ID, title, description
- Icon name (Lucide React icon)
- Background image URL (Unsplash images)
- Link/href
- Type (featured or quick-link)

**Featured Services**:
1. Room Reservations
2. Email Lists
3. Support
4. Onboarding and Offboarding
5. Staff Meeting Docs
6. Batten 2030 Strategic Plan

**Quick Links** (10 items listed in footer)

### Department Navigation
All 12 departments listed as pill-style buttons below hero:
- Home
- News
- Staff Directory
- Academics
- Admissions
- Career Services
- MarCom
- Faculty
- Finance
- Student Services
- IT and Operations
- Teaching

## Design Decisions & Changes

### Layout Evolution
1. **Initial Plan**: Traditional sidebar navigation
2. **First Iteration**: Header navigation with all departments
3. **Second Iteration**: Department pills below hero (current)
4. **Rationale**: Better mobile experience, cleaner header, more prominent department access

### Events Section Evolution
1. **Initial**: Weather + Events in sidebar card
2. **Intermediate**: Weather in header, events in sidebar
3. **Final**: Weather in header, events in full-width orange section
4. **Rationale**: Saves space, creates visual hierarchy, uses UVA orange for emphasis

### Quick Links Evolution
1. **Initial**: Cards in main content area with icons
2. **Final**: Text-only links in navy blue footer
3. **Rationale**: Reduces clutter, uses footer real estate, maintains hierarchy

### Color Scheme
- **Primary (Navy)**: Header, footer, section titles, service tile icons
- **Accent (Orange)**: Section dividers, upcoming events bar, hover states, icon backgrounds
- **White/Light**: Card backgrounds, main content area
- **Subtle Gray**: Borders, muted text

## Known Issues & TODO

### Critical Issues
1. **Background Image**: Garrett Hall sunset image not displaying (file is loaded but not visible)
   - File path: `/public/garrett-hall-sunset.jpg`
   - Size: 1.4MB
   - Opacity set to 30%
   - Needs debugging

### Pending Features
1. **Authentication**:
   - NetBadge SSO integration
   - Azure AD/Entra ID connection
   - Session management
   - Understand NetBadge → Azure AD authentication flow

2. **Authorization**:
   - Implement Entra group checks
   - Create permission-based routing
   - Protect AI tool routes

3. **AI Features**:
   - Embedded AI chatbot on main page for intranet Q&A
   - Azure OpenAI integration
   - Custom embeddings on intranet content
   - Vercel AI SDK for streaming responses

4. **Dynamic Content**:
   - Live weather API integration (currently static data)
   - Events calendar sync (currently hardcoded)
   - Real-time data for services

5. **AI Tools Infrastructure**:
   - Create Azure Static Web App template for individual AI tools
   - Set up separate apps for each AI tool
   - Implement Entra group-based access control

6. **Content Management**:
   - Add data for all service pages (room reservations, email lists, etc.)
   - Build out department pages
   - Populate resource pages

## File Structure

```
batten-intranet/
├── app/
│   ├── globals.css          # Tailwind + UVA color variables
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx              # Main homepage
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── footer.tsx            # Navy blue footer with quick links
│   ├── header.tsx            # Header with weather widget
│   └── service-tile.tsx      # Featured service card components
├── data/
│   └── services.ts           # Service tiles data
├── lib/
│   └── utils.ts              # Utility functions
├── types/
│   └── index.ts              # TypeScript interfaces
├── public/
│   ├── garrett-hall-sunset.jpg
│   └── background.mp4        # (84MB - consider removing)
└── [Next.js config files]
```

## GitHub Repository

- **URL**: https://github.com/behartless67-a11y/TheBattenSpace
- **Branch**: master
- **Last Commit**: Initial implementation with all features described above

## Future Architecture

### Planned Structure
```
batten-intranet/
├── apps/
│   ├── main-portal/          # Current main intranet
│   ├── ai-tool-1/            # Individual AI tools
│   ├── ai-tool-2/
│   └── ...
├── packages/
│   ├── ui/                   # Shared component library
│   ├── auth/                 # Shared auth utilities
│   └── config/               # Shared configs
```

### Authentication Flow (Planned)
1. User accesses intranet
2. Redirected to NetBadge login
3. NetBadge authenticates with Azure AD
4. Azure AD returns JWT with Entra group claims
5. NextAuth.js manages session
6. App checks group membership for protected routes

### AI Tools Architecture (Planned)
- Each AI tool deployed as separate Azure Static Web App
- Shared authentication via NextAuth.js
- API routes check Entra group membership before access
- Tools can be added/removed independently

## Development Notes

### Running Locally
```bash
cd batten-intranet
npm run dev
```
Server runs on http://localhost:3000

### Key Decisions Log
- **Serif Typography**: Chosen to match academic/professional feel, inspired by Adobe Caslon
- **No Gradients/Emojis**: Per explicit requirement for clean, professional aesthetic
- **Orange Events Bar**: Creates visual break, uses brand color, saves space
- **Department Pills**: Better UX than cramped header nav
- **Footer Quick Links**: Utilizes space efficiently, follows common web patterns

### Design References
- **Primary Inspiration**: https://keq.lpf.mybluehost.me/ (Virginia Policy Review site)
- **Style Elements Used**:
  - Clean card-based layouts
  - Subtle shadows and borders
  - Modern sans-serif + serif combination
  - Grid-based modular components
  - Smooth hover states

## Upcoming Milestones

### Phase 1: Foundation ✅ (COMPLETE)
- [x] Initialize Next.js project with TypeScript
- [x] Set up Tailwind + shadcn/ui
- [x] Configure UVA color scheme
- [x] Create basic layout and components
- [x] Design modern tile/card components
- [x] Add service tiles with images
- [x] Implement header and footer
- [x] Add department navigation

### Phase 2: Content & Polish (IN PROGRESS)
- [ ] Debug background image visibility
- [ ] Add real weather API integration
- [ ] Create department landing pages
- [ ] Build out service pages
- [ ] Add mobile responsive refinements
- [ ] Performance optimization

### Phase 3: Authentication (PENDING)
- [ ] Research NetBadge → Azure AD integration
- [ ] Implement NextAuth.js
- [ ] Set up Azure AD provider
- [ ] Create protected routes
- [ ] Add login/logout flows
- [ ] Test with Entra groups

### Phase 4: AI Integration (PENDING)
- [ ] Set up Azure OpenAI instance
- [ ] Create embeddings from intranet content
- [ ] Build AI chatbot component
- [ ] Integrate with main page
- [ ] Create AI tool template
- [ ] Deploy first AI tool

### Phase 5: Deployment (PENDING)
- [ ] Configure Azure Static Web Apps
- [ ] Set up CI/CD pipeline
- [ ] Configure custom domain
- [ ] Set up staging environment
- [ ] Production deployment
- [ ] User acceptance testing

## Notes & Reminders

- Video file (background.mp4) is 84MB and flagged by GitHub - consider using Git LFS or removing
- Image quality warning for Next.js Image component - need to configure `images.qualities` in next.config
- Background image visibility issue needs investigation
- Need to understand how NetBadge integrates with Azure AD before implementing auth
- Consider whether existing SharePoint content needs migration or recreation
- Plan for Out of Office calendar feature integration (mentioned but not yet designed)

## Contact & Support

- **Project Owner**: Batten School IT Department
- **Developer**: Claude Code + User collaboration
- **Repository**: https://github.com/behartless67-a11y/TheBattenSpace

---

*Last Updated: October 7, 2025*
*Version: 1.0.0*
