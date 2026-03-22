# KSP Portfolio — Full Stack Developer Portfolio

A premium, glassmorphism-styled portfolio website built with **React + Vite + Tailwind CSS + Framer Motion**. Serves dual purpose: placement portfolio for recruiters & freelance lead generation for clients.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
npm run preview   # preview the production build
```

---

## 📁 Project Structure

```
ksp-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx               # Entry point
    ├── App.jsx                # Root component
    ├── index.css              # Global styles + Tailwind
    ├── hooks/
    │   └── useReveal.js       # IntersectionObserver hook
    ├── utils/
    │   └── constants.js       # All data (skills, projects, stats…)
    ├── components/
    │   ├── BlobBg.jsx         # Animated gradient blobs
    │   ├── Counter.jsx        # Animated number counter
    │   ├── Footer.jsx         # Site footer
    │   ├── Navbar.jsx         # Sticky responsive navbar
    │   ├── Reveal.jsx         # Scroll-triggered fade-up wrapper
    │   └── Typewriter.jsx     # Typing animation
    └── sections/
        ├── Hero.jsx           # Hero / landing
        ├── Skills.jsx         # Skills grid
        ├── Projects.jsx       # Projects + modal
        ├── Stats.jsx          # Animated stat counters
        ├── Journey.jsx        # Vertical timeline
        ├── Hire.jsx           # Work With Me + contact form
        └── Contact.jsx        # Links section
```

---

## ✉️ EmailJS Setup (Contact Form)

1. Go to [emailjs.com](https://emailjs.com) → Sign up (free tier: 200 emails/month)
2. **Add an Email Service** (Gmail, Outlook, etc.) → note the **Service ID**
3. **Create an Email Template** with these variables:
   ```
   From: {{name}} <{{email}}>
   Subject: New Project Enquiry — {{type}}

   Name: {{name}}
   Email: {{email}}
   Project Type: {{type}}
   Budget: {{budget}}

   Message:
   {{message}}
   ```
   Note the **Template ID**
4. Go to **Account → API Keys** → copy your **Public Key**
5. Open `src/utils/constants.js` and replace:
   ```js
   export const EMAILJS_CONFIG = {
     serviceId:  'YOUR_SERVICE_ID',   // e.g. 'service_abc123'
     templateId: 'YOUR_TEMPLATE_ID',  // e.g. 'template_xyz789'
     publicKey:  'YOUR_PUBLIC_KEY',   // e.g. 'abcDEF123456'
   }
   ```

---

## 🎨 Customization

### Personal info
Edit `src/utils/constants.js` → `PERSONAL` object:
```js
export const PERSONAL = {
  name: 'Sakthi',
  initials: 'KSP',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  whatsapp: 'https://wa.me/91XXXXXXXXXX?text=...',
}
```

### Projects, Skills, Stats
All data lives in `src/utils/constants.js` — edit the arrays directly.

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent: #6C63FF;
  --purple: #8B5CF6;
  --cyan:   #00D4FF;
}
```

### Resume
Place your resume PDF as `public/resume.pdf` — the Download Resume button links to it.

---

## 🌐 Deployment

### Vercel (Recommended — free)
```bash
npm i -g vercel
vercel
# Follow prompts → auto-detects Vite → deploys instantly
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) → **Import Project** → auto-deploy on every push.

### Netlify
```bash
npm run build
# Drag-and-drop the `dist/` folder at netlify.com/drop
```
Or connect GitHub repo → Build command: `npm run build` → Publish dir: `dist`

---

## 🔧 Adding WhatsApp Button

In `src/utils/constants.js`, replace the WhatsApp number:
```js
whatsapp: 'https://wa.me/919876543210?text=Hi%20Sakthi%2C%20I%27d%20like%20to%20discuss%20a%20project'
```
Replace `919876543210` with your country code + number (no `+` or spaces).

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations |
| @emailjs/browser | Contact form emails |
| react-icons | Icon library |

---

## 📝 License
MIT — use freely for personal and commercial projects.
