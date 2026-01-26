# Scale Amplify Website

## Overview

Scale Amplify is a static marketing website for a high-end B2B Revenue Consulting firm. The site is built with pure HTML5, CSS3, and vanilla JavaScript, optimized for static hosting on platforms like Vercel or GitHub Pages. The website focuses on lead revival services and enterprise revenue consulting, featuring a "Revival Audit" as the primary conversion action.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript with no frameworks or build tools
- **Design System**: CSS custom properties (variables) define a consistent "Consulting Grade" minimalist aesthetic with sharp 90-degree corners and high white space
- **Color Palette**: Navy (#0A192F), Teal (#208091), Orange (#F36F21 for CTAs), White, Light Grey
- **Typography**: Inter font family for professional appearance

### Page Structure
The site consists of 11 static HTML pages:
- **Public pages**: Homepage, Revival Audit, Lead Revival methodology, Why Us, About, Careers, Contact
- **Legal pages**: Privacy Policy, Terms of Use, DPA, GDPR Alignment (noindex)

### Component Patterns
- **Sticky navigation header** with logo, nav links, and orange CTA button
- **Breadcrumb navigation** on interior pages
- **Card-based layouts** for content sections
- **CSS-only visual elements** instead of stock photography

### SEO Implementation
- Canonical URLs on all pages
- Proper meta robots directives (index/noindex as appropriate)
- Schema.org structured data (Organization, Person, FAQPage, BreadcrumbList)
- Semantic HTML5 elements

## External Dependencies

### Third-Party Services
- **Calendly**: Embedded scheduling widget for "Revival Audit" consultations
  - Widget CSS and JS loaded from Calendly CDN
  - Popup modal triggered by `.revival-audit-cta` class buttons
  - Booking URL: `https://calendly.com/sukhdeep-scaleamplify/the-revival-audit-pipeline-diagnostic`

### JavaScript Libraries
- **Leaflet.js**: Interactive map on homepage showing global presence
  - Loaded from unpkg CDN (version 1.9.4)
  - Uses CartoDB light basemap tiles
  - Mobile-optimized with disabled scroll zoom and dragging on small screens

### Asset Structure
- `assets/css/styles.css` - Main stylesheet with CSS custom properties
- `assets/js/script.js` - Client-side interactivity (header scroll effects, Calendly triggers, map initialization)
- `assets/images/` - Logo and founder portrait (convert to WebP for production)

### Hosting Requirements
- Static file hosting only (no server-side processing)
- No database required
- No build step required