# Durim Rrustemi - Portfolio

A modern, responsive portfolio website showcasing my professional experience, skills, and projects as a Full-Stack Software Engineer.

## 🚀 Live Demo

Visit: [durimrrustemi.com](https://durimrrustemi.com) *(Update after deployment)*

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 🌙 **Dark Mode** - System preference detection with manual toggle
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Next.js 14** - Built with App Router for optimal performance
- 💅 **Tailwind CSS** - Utility-first styling with custom color palette
- 🎯 **Smooth Navigation** - Fixed header with scroll offset and smooth transitions
- 🔤 **Roboto Font** - Professional typography throughout
- 🌐 **SEO Optimized** - Meta tags and semantic HTML
- 🎨 **Custom DR Logo** - Unique SVG logo with purple branding
- 📧 **Working Contact Form** - Formspree integration with validation
- 🛠️ **Tech Stack Icons** - Interactive logos with hover effects and tooltips
- ⚡ **Smooth Transitions** - 0.25s color/background transitions for polished UX

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom dark mode
- **Font**: [Roboto](https://fonts.google.com/specimen/Roboto) from Google Fonts
- **Forms**: [Formspree](https://formspree.io/) for contact form handling
- **Icons**: Custom SVG icons and tech stack logos
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:2602](http://localhost:2602) in your browser.

## 🏗️ Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles, transitions, scroll behavior
│   ├── layout.tsx        # Root layout with metadata & favicon
│   └── page.tsx          # Home page composing all sections
├── components/
│   ├── Header.tsx        # Fixed nav with centered alignment & mobile menu
│   ├── Hero.tsx          # Hero with interactive tech stack icons
│   ├── Skills.tsx        # Four skill categories with descriptions
│   ├── About.tsx         # Professional summary
│   ├── Experience.tsx    # Work history, education, and languages
│   ├── Contact.tsx       # Formspree contact form with validation
│   ├── Footer.tsx        # Navigation links & social icons
│   └── ThemeToggle.tsx   # Dark/light mode toggle with localStorage
├── public/
│   └── icons/
│       ├── dr.svg        # Custom DR logo
│       └── *.svg         # Tech stack logos (.NET, Node.js, etc.)
├── tailwind.config.js    # Custom colors & dark mode config
├── package.json
└── tsconfig.json
```

## 🎨 Color Palette

### Light Mode
- **Primary**: `#5E3BEE` (Purple)
- **Background Shade**: `#F5FCFF` (Light Blue)
- **Accent**: `#E62872` (Pink - hover effects)
- **Heading**: `#282938` (Dark Gray)
- **Body**: `#1C1E53` (Navy)

### Dark Mode
- **Background Shade Dark**: `#0B0E14` (Very Dark Blue)
- **Surface Dark**: `#141823` (Dark Surface)
- **Accent Dark**: `#FF5CA6` (Bright Pink)
- **Heading Dark**: `#F1F3FF` (Off-White)
- **Body Dark**: `#B3B9D0` (Light Purple-Gray)
- **Primary**: `#5E3BEE` (Same purple as light mode)

## 📄 Sections

1. **Header** - Fixed navigation with centered alignment, dark mode toggle, and mobile hamburger menu
2. **Hero** - Introduction with animated tech stack icons (.NET, Node.js, FastAPI, AWS, Angular, React, Docker)
3. **Skills** - Four categories: Backend Development, Cloud & DevOps, Frontend Development, Architecture & Security
4. **About** - Professional summary with 7+ years experience highlights
5. **Experience** - Work history (Elba Technologies, Raiffeisen Bank Kosovo), education, and language proficiency
6. **Contact** - Formspree-powered contact form with topic selection and validation
7. **Footer** - Quick links, social media icons (Email, LinkedIn, GitHub, Phone), and copyright

## 🎯 Key Features

### Dark Mode Implementation
- System preference detection on first load
- Manual toggle with localStorage persistence
- Smooth 0.25s transitions on all color changes
- Alternating section backgrounds for visual rhythm

### Interactive Elements
- Tech stack icons with purple → pink hover effect and tooltips
- Mobile-responsive hamburger menu
- Smooth scroll with fixed header offset (100px)
- Form validation with success/error states
- Pink hover effects on all CTAs and links

### Design System
- Consistent spacing and typography
- Custom DR logo with SVG
- Roboto font family throughout
- Purple (#5E3BEE) and Pink (#E62872) brand colors
- Alternating light/dark sections in dark mode

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically
4. Add custom domain in Vercel settings
5. Environment variables (if using Formspree): Add `NEXT_PUBLIC_FORMSPREE_ID`

## 📧 Contact

- **Email**: [durimrrustemi@gmail.com](mailto:durimrrustemi@gmail.com)
- **LinkedIn**: [linkedin.com/in/durimrrustemi](https://linkedin.com/in/durimrrustemi)
- **GitHub**: [github.com/durimrrustemi](https://github.com/durimrrustemi)
- **Phone**: +383 49 894 870

## 📝 License

© 2025 Durim Rrustemi. All rights reserved.
