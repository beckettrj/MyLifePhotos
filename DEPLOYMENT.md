# MyLifePictures.ai - GitHub Deployment Guide

## 🚀 Deploying to GitHub Repository

### Step 1: Initialize Git Repository
```bash
# Initialize git in your project directory
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: MyLifePictures.ai MVP - AI-powered slideshow for elderly care"
```

### Step 2: Connect to GitHub Repository
```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/beckettrj/MyLifePictures.git

# Verify remote is added correctly
git remote -v
```

### Step 3: Push to GitHub
```bash
# Push to main branch
git branch -M main
git push -u origin main
```

## 📋 Pre-Deployment Checklist

### ✅ Files to Include
- [x] All source code (`src/` directory)
- [x] Configuration files (`package.json`, `vite.config.ts`, `tailwind.config.js`)
- [x] Documentation (`README.md`, `docs/` directory)
- [x] Environment template (`.env.example`)
- [x] Database migrations (`supabase/migrations/`)
- [x] Build configuration files
- [x] Deployment scripts (`scripts/` directory)

### ❌ Files to Exclude (already in .gitignore)
- [x] `.env` (contains sensitive API keys)
- [x] `node_modules/` (dependencies)
- [x] `dist/` (build output)
- [x] `.bolt/` (Bolt.new specific files)
- [x] Local development files

## 🔐 Environment Variables Setup

### GitHub Repository Secrets
After pushing to GitHub, set up these repository secrets for deployment:

1. Go to your repository: `https://github.com/beckettrj/MyLifePictures`
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following secrets:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# AI Provider Keys (add the ones you have)
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key

# Optional
VITE_N8N_WEBHOOK_URL=your_n8n_webhook_url
```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
```bash
# Build command
npm run build

# Publish directory
dist

# Environment variables
# Add all VITE_ prefixed variables from above
```

### Option 2: Vercel
```bash
# Framework Preset: Vite
# Build Command: npm run build
# Output Directory: dist
# Install Command: npm install
```

### Option 3: GitHub Pages
```bash
# Enable GitHub Pages in repository settings
# Source: GitHub Actions
# The included workflow will handle deployment
```

## 🔄 Continuous Deployment

### GitHub Actions Workflow
The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Builds the project on every push to main
- Runs tests and linting
- Deploys to your chosen platform
- Handles environment variable injection

## 📊 Post-Deployment Verification

### Test These Features:
1. **Basic Functionality**
   - [ ] Application loads without errors
   - [ ] Sample photos display in slideshow
   - [ ] Navigation between views works

2. **AI Integration**
   - [ ] AI provider setup page accessible
   - [ ] API key validation works
   - [ ] Voice commands functional (if keys configured)

3. **Database Connection**
   - [ ] Supabase connection test passes
   - [ ] User authentication works
   - [ ] Photo upload functionality

4. **Accessibility**
   - [ ] Large fonts and high contrast mode
   - [ ] Voice recognition permissions
   - [ ] Touch targets appropriate size

## 🐛 Troubleshooting

### Common Issues:

1. **Build Fails**
   ```bash
   # Check for TypeScript errors
   npm run type-check
   
   # Check for linting issues
   npm run lint
   ```

2. **Environment Variables Not Working**
   - Ensure all VITE_ prefixed variables are set
   - Check deployment platform environment variable configuration
   - Verify .env.example matches required variables

3. **Supabase Connection Issues**
   - Verify Supabase URL and keys are correct
   - Check Supabase project is active
   - Ensure RLS policies are properly configured

## 📞 Support

### Resources:
- **Documentation**: See `docs/` directory
- **Setup Guide**: `docs/SETUP_GUIDE.md`
- **API Reference**: Auto-generated from code
- **Troubleshooting**: `docs/TROUBLESHOOTING.md`

### Contact:
- **Repository**: https://github.com/beckettrj/MyLifePictures
- **Issues**: Use GitHub Issues for bug reports
- **Discussions**: Use GitHub Discussions for questions

---

**🎉 Your MyLifePictures.ai MVP is ready for the world! This hackathon-winning application showcases cutting-edge AI integration with compassionate elderly care design.**