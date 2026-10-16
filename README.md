
# Haiku Refugio & Spa

A responsive, bilingual hospitality website developed for **Haiku Refugio & Spa**, a nature-focused retreat located near Lake Maihue in Chile's Los Ríos Region.

The project brings together cabin accommodations, wellness experiences, and outdoor activities through a digital experience designed to reflect the brand's connection with nature, tranquility, and well-being.

**[View Live Website →](https://haikurefugio.cl/)**

## Project Overview

Haiku Refugio & Spa is a tourism and wellness project located in Hueinahue, near Lake Maihue in southern Chile.

The website was developed to establish the retreat's digital presence, showcase its accommodations and experiences, and simplify the process of contacting the business about availability.

The implementation combines a brand-focused visual identity with responsive interfaces, reusable React components, bilingual content, and a custom WhatsApp-based inquiry flow.

## Key Features

- **Bilingual interface:** Spanish and English content with a persistent language preference.
- **Accommodation showcase:** Three cabins presented with photography, guest capacity, amenities, and individual accommodation information.
- **Availability inquiries:** A custom interface for selecting accommodation and travel dates before contacting the business through WhatsApp.
- **Experiences and wellness:** Interactive presentation of outdoor activities, wellness services, and event spaces.
- **Responsive navigation:** Desktop navigation and a mobile menu adapted to different screen sizes.
- **Dynamic navigation styling:** Visual changes to the navigation bar based on page scroll position.
- **Brand-focused UI:** Typography, photography, and a consistent color palette inspired by the surrounding landscape.

## Tech Stack

**Frontend**
- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- React Icons

**State Management**
- React Context API
- React Hooks
- Browser localStorage

**Development Tools**
- Git & GitHub
- ESLint
- npm

**Deployment**
- Vercel
- Custom domain: [haikurefugio.cl](https://haikurefugio.cl/)

## Availability Inquiry Flow

The website includes a custom availability inquiry interface integrated with WhatsApp.

Visitors can:

1. Select their preferred cabin.
2. Choose check-in and check-out dates.
3. Generate a WhatsApp message containing the selected accommodation and dates.
4. Review and send the inquiry directly to the business.

```text
Accommodation Selection
          |
          v
Check-in / Check-out Dates
          |
          v
Pre-filled WhatsApp Message
          |
          v
Direct Availability Inquiry
```

This approach reduces manual data entry and provides the business with a structured inquiry.

**The website does not automatically confirm bookings or manage real-time availability.** Reservation confirmation remains with the accommodation provider.

## Bilingual Experience

Haiku supports Spanish and English through a custom language management system built with React Context and TypeScript.

The implementation includes:

- Shared language state managed through `LanguageProvider`.
- A reusable `useLanguage` hook.
- Component-level translation dictionaries.
- Type-safe language selection (`es` and `en`).
- Language preference persistence using browser `localStorage`.
- Language switching available in desktop and mobile navigation.

This provides a lightweight bilingual experience without relying on a dedicated internationalization library.

## Component-Based Architecture

The interface is organized into reusable React components, separating navigation, accommodation presentation, booking inquiries, and informational sections.

Key components include:

- `Navbar.tsx` — responsive navigation and language selection.
- `Alojamientos.tsx` — accommodation presentation.
- `CabanaCarousel.tsx` — cabin carousel interface.
- `Reservar.tsx` — reservation inquiry section.
- `ReservaFlotante.tsx` — floating booking interface.
- `QuienesSomos.tsx` — brand and retreat information.
- `SeccionesInfo.tsx` — informational content.
- `LanguageContext.tsx` — shared language state and persistence.

This structure supports separation of concerns and makes individual interface sections easier to maintain.

## Local Development

### Prerequisites

- Node.js and npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/andreshf44/haiku-web.git
cd haiku-web
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server after building |

## Deployment

The website is deployed on **Vercel** and accessible through its custom domain:

**https://haikurefugio.cl/**

## Project Status

**Live / Production**

The website is publicly accessible and includes the accommodation showcase, bilingual interface, experiences section, and WhatsApp-based availability inquiry flow.

## Developer

**Andrés Herrera**  
Frontend Developer · JavaScript · TypeScript · React · UX/UI

[Portfolio](https://andresenrique.com/) · [LinkedIn](https://www.linkedin.com/in/andres-herrera-frey-b4879335/) · [GitHub](https://github.com/andreshf44)
