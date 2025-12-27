# Firebase Deployment Guide

This guide will help you deploy your portfolio website to Firebase Hosting.

## Prerequisites

1. Install Firebase CLI globally:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

## Initial Setup

1. Create a Firebase project (if you haven't already):
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" or select an existing project
   - Note your Project ID

2. Update `.firebaserc` with your Project ID:
   ```json
   {
     "projects": {
       "default": "your-actual-project-id"
     }
   }
   ```

3. Initialize Firebase (if needed):
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or "Create a new project"
   - Set public directory to: `out`
   - Configure as single-page app: `Yes`
   - Set up automatic builds and deploys: `No` (optional)

## Deployment Steps

1. Build the Next.js application:
   ```bash
   npm run build
   ```
   This will create an `out` directory with the static export.

2. Deploy to Firebase:
   ```bash
   firebase deploy --only hosting
   ```

   Or use the npm script:
   ```bash
   npm run deploy
   ```

3. Your site will be live at:
   ```
   https://your-project-id.web.app
   ```
   or
   ```
   https://your-project-id.firebaseapp.com
   ```

## Custom Domain Setup (Optional)

1. In Firebase Console, go to Hosting
2. Click "Add custom domain"
3. Follow the instructions to verify your domain
4. Update DNS records as instructed

## Continuous Deployment (Optional)

You can set up automatic deployments using GitHub Actions or Firebase GitHub integration:

1. Push your code to GitHub
2. Connect your repository in Firebase Console
3. Enable automatic deployments

## Troubleshooting

- **Build fails**: Make sure all dependencies are installed (`npm install`)
- **Deployment fails**: Check that `.firebaserc` has the correct project ID
- **404 errors**: Ensure `firebase.json` has the correct rewrite rules
- **Images not loading**: Next.js images are set to unoptimized for static export

## Notes

- The site is exported as static HTML/CSS/JS (no server-side rendering)
- All routes are handled client-side via Next.js routing
- Image optimization is disabled (use optimized images manually if needed)

