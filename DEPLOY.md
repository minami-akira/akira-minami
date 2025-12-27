# Deployment Guide - Vercel (Recommended) 🚀

## Why Vercel?

**Vercel is the BEST choice for Next.js because:**
- ✅ Made by the creators of Next.js
- ✅ Zero configuration needed
- ✅ Lightning-fast global CDN
- ✅ Automatic deployments from GitHub
- ✅ Free tier is very generous (perfect for portfolios)
- ✅ SSL certificates included
- ✅ Preview deployments for every PR
- ✅ Excellent performance and reliability

## Quick Deployment Steps

### Option 1: Deploy via Vercel Website (Easiest - Recommended)

1. **Push your code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign up/login

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure the project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `out` (already configured)
   - Install Command: `npm install` (default)

6. **Click "Deploy"**

7. **Your site will be live in ~2 minutes!** 🎉

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production:**
   ```bash
   vercel --prod
   ```

## After Deployment

- Your site will be live at: `https://your-project-name.vercel.app`
- You can add a custom domain in Vercel dashboard
- Every push to main branch auto-deploys
- Every PR gets a preview URL

## Custom Domain Setup

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `akiraminami.com`)
4. Follow DNS configuration instructions
5. Vercel handles SSL automatically!

---

## Alternative: Netlify (Also Great)

If you prefer Netlify:

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy!

---

## Alternative: Firebase (Already Configured)

If you want to use Firebase instead:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Update `.firebaserc` with your project ID
4. Deploy: `npm run build && firebase deploy --only hosting`

---

**Recommended: Use Vercel for the best Next.js experience! 🚀**


