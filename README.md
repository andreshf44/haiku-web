# Haiku Refugio & Spa

A responsive, bilingual hospitality website developed for **Haiku Refugio & Spa**, a nature-focused retreat located near Lake Maihue in Chile's Los Ríos Region.

The project brings together cabin accommodations, wellness experiences, and outdoor activities through a digital experience designed to reflect the brand's connection with nature, tranquility, and well-being.

**[View Live Website →](https://haikurefugio.cl/)**

---

## Project Overview

Haiku Refugio & Spa is a tourism and wellness project located in Hueinahue, near Lake Maihue in southern Chile.

The website was developed to establish the retreat's digital presence, showcase its accommodations and experiences, and simplify the process of contacting the business about availability.

The implementation combines a brand-focused visual identity with responsive interfaces, reusable React components, bilingual content, and a custom WhatsApp-based inquiry flow.

The goal was to create a digital experience that balances visual simplicity, usability, and the practical needs of a hospitality business.

## My Role & Contributions

**Role:** Frontend Developer · UI/UX Implementation

My work focused on developing a responsive, component-based interface that communicates the identity of Haiku Refugio & Spa while supporting its accommodation and experience inquiry processes.

Key contributions include:

- Developed the frontend using **Next.js, React, TypeScript, and Tailwind CSS**.
- Built responsive layouts and navigation for desktop and mobile devices.
- Implemented reusable components for accommodation pages, galleries, and informational sections.
- Developed a custom bilingual interface using React Context and browser localStorage.
- Implemented an accommodation inquiry flow integrated with WhatsApp.
- Added cabin-specific navigation to the reservation form.
- Developed interactive elements, including accommodation galleries and dynamic navigation styling.
- Applied consistent typography, spacing, imagery, and visual hierarchy throughout the interface.
- Improved code quality through ESLint checks and component maintenance.

The project combines frontend engineering with attention to visual design, user experience, and business functionality.

---

## Key Features

### Bilingual Interface

Spanish and English content with a persistent language preference.

### Accommodation Showcase

Three cabins presented through individual pages featuring photography, guest capacity, amenities, and accommodation information.

### Availability Inquiries

A custom interface for selecting accommodation and travel dates before contacting the business through WhatsApp.

### Experiences & Wellness

Interactive presentation of outdoor activities, wellness services, and event spaces.

Experiences include:

- Spa and wellness services.
- Espacio Arrayán.
- Trekking.
- Stand Up Paddle.
- Waterfall rappelling.
- Canyoning.

Booking inquiries are directed to Haiku Refugio & Spa or the corresponding experience provider.

### Responsive Navigation

Desktop navigation and a mobile menu adapted to different screen sizes.

### Interactive Image Galleries

Accommodation galleries with an expanded image viewer, navigation controls, and keyboard interaction.

### Dynamic Navigation Styling

Visual changes to the navigation bar based on page scroll position.

### Brand-Focused UI

Typography, photography, and a consistent color palette inspired by the surrounding landscape.

---

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- React Icons

### State Management

- React Context API
- React Hooks
- Browser localStorage

### Development Tools

- Git & GitHub
- ESLint
- npm

### Deployment

- Next.js static export
- Production hosting: Bluehost
- Preview and testing: Vercel
- Custom domain: [haikurefugio.cl](https://haikurefugio.cl/)

---

## Availability Inquiry Flow

The website includes a custom availability inquiry interface integrated with WhatsApp.

Visitors can:

1. Select their preferred cabin.
2. Choose check-in and check-out dates.
3. Generate a WhatsApp message containing the selected accommodation and dates.
4. Review and send the inquiry directly to the business.

**User flow:**

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

### Cabin-Specific Navigation

Visitors can access the reservation interface directly from individual cabin pages.

The selected accommodation is passed through the URL and used to preselect the corresponding cabin in the reservation form.

This creates a more direct experience and reduces unnecessary interaction steps.

---

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

---

## Component-Based Architecture

The interface is organized into reusable React components, separating navigation, accommodation presentation, booking inquiries, and informational sections.

Key components include:

| Component | Responsibility |
|---|---|
| `Navbar.tsx` | Responsive navigation and language selection |
| `Alojamientos.tsx` | Accommodation presentation |
| `CabanaCarousel.tsx` | Cabin carousel interface |
| `CabanaHero.tsx` | Individual cabin page header |
| `CabanaGallery.tsx` | Interactive accommodation image gallery |
| `Reservar.tsx` | Reservation inquiry section |
| `ReservaFlotante.tsx` | Floating booking interface |
| `QuienesSomos.tsx` | Brand and retreat information |
| `SeccionesInfo.tsx` | Experiences and wellness presentation |
| `LanguageContext.tsx` | Shared language state and persistence |

This structure supports separation of concerns and makes individual interface sections easier to maintain.

---

## UI/UX Approach

The interface was developed around three principles:

### 1. Visual Simplicity

A restrained visual language allows the photography and natural surroundings to remain central to the experience.

Typography, spacing, and color are used to create a calm and consistent interface.

### 2. Responsive Experience

Layouts and interactions adapt to different screen sizes, maintaining accessible navigation and readable content across desktop and mobile devices.

### 3. Clear User Journeys

Accommodation information, experience descriptions, and reservation actions are organized to help visitors find relevant information and contact the business with minimal friction.

The inquiry flow prioritizes simplicity without introducing unnecessary booking-system complexity.

---

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

Open `http://localhost:3000` in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Run ESLint checks |
| `npm run build` | Generate the production build and static export |

---

## Deployment

The project uses Next.js static export to generate a production-ready static website.

The configuration includes:

```ts
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}
```

The production website is hosted on **Bluehost** and is accessible through its custom domain:

**[haikurefugio.cl](https://haikurefugio.cl/)**

Vercel is used for preview deployments and testing.

The static export can be generated using:

```bash
npm run build
```

The generated files are placed in the `out/` directory for static hosting.

---

## Project Status

**Live / Production**

The website is publicly accessible and includes:

- Responsive accommodation pages.
- Bilingual interface.
- Interactive image galleries.
- Experiences and wellness sections.
- WhatsApp-based availability inquiries.
- Cabin-specific reservation navigation.

The project is maintained with an emphasis on usability, responsive behavior, and frontend code quality.

---

## Developer

**Andrés Herrera**  
Frontend Developer · JavaScript · TypeScript · React · UX/UI

[Portfolio](https://andresenrique.com/) · [LinkedIn](https://www.linkedin.com/in/andres-herrera-frey-b4879335/) · [GitHub](https://github.com/andreshf44)
