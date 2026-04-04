# NextGenCodeAI Innovations — Official Website

A modern, responsive, dark-themed single-page website for **NextGenCodeAI Innovations** — a software development startup building Web, Mobile, and AI solutions.

---

## 🚀 Live Demo

> [https://nextgencodeai.com](https://nextgencodeai.com) _(connect after Vercel/Netlify deploy)_

---

## 📁 Folder Structure

```
nextgencodeai/
├── public/
│   └── index.html              # SEO meta tags, fonts
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Sticky nav with scroll tracking
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── SectionWrapper.jsx  # Scroll-animation wrapper
│   │   └── SectionHeader.jsx   # Badge + title + subtitle block
│   ├── sections/               # Page sections (one per route area)
│   │   ├── Hero.jsx            # Landing hero with canvas animation
│   │   ├── About.jsx           # About + highlights grid
│   │   ├── Services.jsx        # Service cards
│   │   ├── TechStack.jsx       # Filterable tech grid
│   │   ├── Portfolio.jsx       # Project cards with hover
│   │   └── Contact.jsx         # Contact form + info
│   ├── hooks/                  # Custom React hooks
│   │   ├── useScrollAnimation.js  # IntersectionObserver hook
│   │   └── useTypewriter.js       # Typewriter animation hook
│   ├── utils/
│   │   └── constants.js        # All site data (edit here!)
│   ├── App.jsx                 # Root component
│   ├── index.js                # React entry point
│   └── index.css               # Tailwind + custom styles
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Layer     | Technology              |
|-----------|------------------------|
| Frontend  | React 18, JSX          |
| Styling   | Tailwind CSS 3         |
| Fonts     | Syne + JetBrains Mono  |
| Animations| CSS + Canvas API       |
| Hosting   | Vercel / Netlify       |

---

## ⚙️ Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/nextgencodeai/website.git
cd website
npm install
```

### 2. Run locally
```bash
npm start
```
Opens at `http://localhost:3000`

### 3. Build for production
```bash
npm run build
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the /build folder to Netlify
```

---

## ✏️ Customization

All site content lives in **`src/utils/constants.js`**:

- `COMPANY` — name, email, WhatsApp, social links
- `SERVICES` — service cards (title, icon, description, tags)
- `TECH_STACK` — technology grid items
- `PROJECTS` — portfolio cards
- `HIGHLIGHTS` — about section bullet points
- `NAV_LINKS` — navigation items

### Change WhatsApp Number
Open `src/utils/constants.js`, update:
```js
whatsapp: "+919999999999",  // ← replace with real number
```

### Connect Contact Form to Backend
In `src/sections/Contact.jsx`, replace the `setTimeout` simulation with a `fetch()` call to your API or a service like [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com).

---

## 📦 Connecting Domain

1. Deploy to Vercel/Netlify
2. Go to your domain registrar → DNS settings
3. Add a CNAME record pointing `nextgencodeai.com` to your Vercel/Netlify URL
4. Done ✅

---

## 🔮 Future Scope

- [ ] Admin panel
- [ ] Blog system with CMS
- [ ] Client login dashboard
- [ ] AI service pages
- [ ] Backend API integration for contact form

---

## 📄 License

MIT — Free to use and modify.

---

Made with ♥ by **NextGenCodeAI Innovations**
