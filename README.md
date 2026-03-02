# 🎨 Luxury Portfolio - Dark Maroon Theme

A stunning, premium portfolio website with a dark luxury theme featuring deep maroon, black, white, and gold accents.

## ✨ Features

- **Luxury Dark Theme** - Deep maroon, velvet black, and muted gold aesthetics
- **Smooth Animations** - Micro-interactions and fade-in effects
- **Fully Responsive** - Perfect on all devices
- **7 Project Showcase** - Grid layout with hover effects
- **Modern Stack** - Built with React + Vite
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to `http://localhost:5173`

## 📝 Customization Guide

### Step 1: Update Personal Information

#### In `src/components/Hero.jsx`:
- Line 19: Change `"Your Name"` to your actual name
- Line 21: Change `"Full Stack Developer"` to your title

#### In `src/components/Contact.jsx`:
- Line 50: Update email to `your.email@example.com`
- Line 15-32: Update social media links:
  - GitHub URL
  - LinkedIn URL
  - Twitter URL
  - Personal website URL

#### In `index.html`:
- Line 8: Change author name
- Line 13: Update page title

### Step 2: Add Your 7 Projects

Open `src/data/projectsData.js` and replace the placeholder data:

```javascript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Detailed description of what the project does',
  image: 'https://your-image-url.com/screenshot.png',
  tags: ['React', 'Node.js', 'MongoDB'],
  liveLink: 'https://your-deployed-project.com',
  githubLink: 'https://github.com/yourusername/project',
  featured: true // Set ONE project as featured
}
```

#### How to Get Project Images:
1. **Take screenshots** of your projects
2. Upload to:
   - [Imgur](https://imgur.com) - Free image hosting
   - [Cloudinary](https://cloudinary.com) - Free tier available
   - Or host in your repo: `/public/projects/project1.png`
3. Use the URL in the `image` field

### Step 3: Customize About Section

In `src/components/About.jsx`:
- Lines 26-30: Update the bio paragraphs with your story
- Lines 6-25: Customize skills and technologies

### Step 4: Update Colors (Optional)

In `src/App.css`, modify CSS variables (lines 10-16):
```css
:root {
  --black: #0A0A0A;
  --maroon: #8B2635;        /* Change to your maroon */
  --maroon-light: #A63446;
  --gold: #D4AF37;          /* Change to your gold */
  --white: #FAFAFA;
  --gray: #2A2A2A;
}
```

## 📁 Project Structure

```
luxury-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx/css    # Top navigation bar
│   │   ├── Hero.jsx/css          # Landing section with name
│   │   ├── About.jsx/css         # About & skills section
│   │   ├── Projects.jsx/css      # Project grid with 7 projects
│   │   └── Contact.jsx/css       # Contact & social links
│   ├── data/
│   │   └── projectsData.js       # YOUR 7 PROJECTS GO HERE
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # Global styles
│   └── main.jsx                  # React entry point
├── index.html                    # HTML template
└── package.json                  # Dependencies
```

## 🎨 Design Features

### Color Palette
- **Primary Dark**: `#0A0A0A` (Deep Black)
- **Maroon**: `#8B2635` (Deep Maroon)
- **Accent**: `#A63446` (Vibrant Maroon)
- **Gold**: `#D4AF37` (Muted Gold)
- **White**: `#FAFAFA` (Off-White)

### Typography
- Font: Inter (Google Fonts)
- Hero Name: 3rem - 6rem (responsive)
- Section Titles: 2rem - 3.5rem
- Body Text: 1rem - 1.1rem

### Animations
- Fade-in on scroll
- Smooth hover transitions
- Floating gradient orbs
- Card lift effects

## 🚀 Deployment Guide

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Your site is live!

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Lucide React** - Beautiful icons
- **CSS3** - Custom animations & styling

## 📱 Responsive Breakpoints

- Desktop: 1400px+
- Laptop: 1024px - 1399px
- Tablet: 768px - 1023px
- Mobile: < 768px

## 💡 Tips for Best Results

1. **Project Images**: Use high-quality screenshots (1200x800px recommended)
2. **Descriptions**: Keep them concise but informative (2-3 sentences)
3. **Live Links**: Ensure all deployed projects work before adding
4. **GitHub Links**: Make repositories public or provide proper access
5. **Bio**: Make it personal but professional
6. **Featured Project**: Mark your BEST project as featured

## 🎯 Next Steps After Setup

1. ✅ Update all personal information
2. ✅ Add your 7 projects with real data
3. ✅ Upload project screenshots
4. ✅ Test all links (live & GitHub)
5. ✅ Review and edit About section
6. ✅ Test on mobile devices
7. ✅ Deploy to Vercel/Netlify
8. ✅ Share your portfolio!

## 📄 License

Free to use for your personal portfolio.

## 💬 Need Help?

If you encounter issues:
1. Check console for errors
2. Ensure all dependencies are installed
3. Verify Node.js version (16+ recommended)
4. Clear browser cache

---

**Built with ❤️ using React + Vite**