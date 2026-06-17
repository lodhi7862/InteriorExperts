# Vercel Deployment Guide

## Prerequisites
- Vercel account (free tier available at https://vercel.com)
- GitHub account (recommended for continuous deployment)
- Node.js 16+ installed locally

## Deployment Steps

### Option 1: One-Click Deploy via Git (Recommended)

#### Step 1: Push Your Repository to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

#### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Click "New Project"
4. Select "Import Git Repository"
5. Select your GitHub repository
6. Click "Import"

#### Step 3: Configure Project Settings
In the Vercel dashboard:
- **Framework Preset**: Select "Vite" (auto-detected)
- **Build Command**: `npm run build` (pre-filled)
- **Output Directory**: `dist` (pre-filled)
- **Install Command**: `npm install` (pre-filled)
- Keep other settings as default
- Click "Deploy"

#### Step 4: Wait for Deployment
- Vercel will install dependencies
- Build your project
- Deploy to production
- You'll get a live URL in ~2-3 minutes

### Option 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm install --global vercel
```

#### Step 2: Authenticate
```bash
vercel login
```

#### Step 3: Deploy
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

#### Step 4: Follow Prompts
- Confirm project settings
- Choose to link to existing project or create new one
- Wait for deployment to complete

### Option 3: Docker/Manual Deployment
If you prefer manual control:

```bash
# Build locally first
npm run build

# Test the build
npm run preview

# Then push to Vercel via CLI
vercel --prod
```

## Post-Deployment Configuration

### 1. Domain Configuration
- Go to your project settings in Vercel Dashboard
- Navigate to "Domains"
- Add your custom domain or use the provided Vercel domain

### 2. Environment Variables
If you need environment variables:
1. Go to Project Settings → Environment Variables
2. Add your variables:
   - Name: `VITE_API_URL` (prefix with `VITE_` for client-side)
   - Value: Your API URL
3. Re-deploy after adding variables

### 3. Enable Analytics (Optional)
1. In Vercel Dashboard, go to Analytics
2. Enable Web Analytics for performance monitoring

### 4. Configure Auto-Deployment
By default, Vercel will:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Disable these in Project Settings if needed

## Continuous Integration/Deployment (CI/CD)

### GitHub Actions Setup
The `.github/workflows/vercel.yml` file is already configured.

To enable it:

1. **Get Vercel Token**:
   - Go to [Vercel Settings → Tokens](https://vercel.com/account/tokens)
   - Create a new token
   - Copy it

2. **Get Project IDs**:
   ```bash
   vercel project ls
   # Note your PROJECT_ID and ORG_ID from output
   ```

3. **Add Secrets to GitHub**:
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add these secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `VERCEL_ORG_ID`: Your organization ID
     - `VERCEL_PROJECT_ID`: Your project ID

4. **Push to Trigger Deployment**:
   ```bash
   git push origin main
   ```

## Environment Variables for Build

### Client-Side Variables (Vite)
Must be prefixed with `VITE_`:

```bash
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
```

Usage in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Server-Side Variables (Node.js/API Routes)
No prefix needed (if using API routes).

## Troubleshooting

### Build Fails
```bash
# Check logs in Vercel Dashboard
# Likely causes:
# 1. Missing dependencies - run: npm install
# 2. TypeScript errors - run: npm run build locally
# 3. Build script issues - check vite.config.ts
```

### Site Not Loading
1. Check browser console (F12) for errors
2. Verify environment variables are set
3. Check Vercel deployment logs
4. Ensure all imports have correct paths

### Performance Issues
1. Enable Vercel Analytics to identify bottlenecks
2. Check bundle size: `npm run build` and review dist/ folder
3. Consider using code splitting (Vite handles this automatically)

### Custom Domain Issues
1. Add DNS records provided by Vercel
2. Wait 24-48 hours for propagation
3. Verify CNAME/A records with `nslookup`

## Useful Commands

```bash
# Build locally
npm run build

# Preview production build
npm run preview

# Check for lint errors
npm run lint

# Deploy with Vercel CLI
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List projects
vercel project ls

# Remove project
vercel remove
```

## Best Practices

✅ **Do:**
- Always test locally with `npm run preview` before deploying
- Use meaningful commit messages
- Keep dependencies updated regularly
- Monitor performance with Vercel Analytics
- Set up branch protection for main branch

❌ **Don't:**
- Commit `.env` files with secrets
- Deploy without testing locally
- Use `npm install` in production (done automatically)
- Keep unused dependencies (they increase build time)

## Support

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev
- Contact Vercel Support: https://vercel.com/support

## Quick Reference

| Action | Command |
|--------|---------|
| Deploy | `vercel --prod` |
| View Logs | `vercel logs` |
| View Status | `vercel status` |
| Rollback | Use Vercel Dashboard |
| Purge Cache | Use Vercel Dashboard → Settings |

---

**You're all set!** Your site will be live on Vercel after deployment. 🚀
