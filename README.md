# Akira Minami - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Senior Software Engineer specializing in AI & Geospatial technologies.

## Features

- **Modern Design**: Clean, dark-themed UI with gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── About.tsx        # About section
│   ├── Certificates.tsx # Certificates section
│   ├── Contact.tsx      # Contact section
│   ├── Experience.tsx   # Work experience
│   ├── Hero.tsx         # Hero section
│   ├── Navigation.tsx   # Navigation bar
│   ├── Projects.tsx     # Projects showcase
│   └── Skills.tsx       # Skills section
└── public/              # Static assets
```

## Customization

To customize the portfolio with your own information:

1. Update personal information in `components/Hero.tsx`
2. Modify experience details in `components/Experience.tsx`
3. Update skills in `components/Skills.tsx`
4. Add your projects in `components/Projects.tsx`
5. Update certificates in `components/Certificates.tsx`
6. Modify contact information in `components/Contact.tsx`
7. Update metadata in `app/layout.tsx`

## Deployment

### 🚀 Vercel (Recommended - Best for Next.js)

**Vercel is the fastest and most reliable option for Next.js:**

1. **Push code to GitHub** (if not already done)
2. **Go to [vercel.com](https://vercel.com)** and sign up/login
3. **Click "Add New Project"** and import your repository
4. **Click "Deploy"** - That's it! ✨

Your site will be live in ~2 minutes at `https://your-project-name.vercel.app`

**Why Vercel?**
- Made by Next.js creators - perfect integration
- Zero configuration needed
- Lightning-fast global CDN
- Free SSL certificates
- Automatic deployments on every push
- Preview deployments for PRs

📖 **For detailed deployment guide, see [DEPLOY.md](./DEPLOY.md)**

### Alternative Platforms

- **Netlify**: Similar to Vercel, also excellent choice
- **Firebase Hosting**: Requires Firebase CLI setup
- **AWS Amplify**: Good for AWS ecosystem integration

All platforms will work with the current static export configuration.

## License

This project is open source and available under the MIT License.

