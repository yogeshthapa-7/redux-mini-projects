<div align="center">

<br />
<h1 style="font-size: 56px; font-weight: 900; letter-spacing: -1px; margin: 0;">RACE<span style="color:#dc2626;">HUB</span></h1>
<p style="color:#9ca3af; font-weight:600; letter-spacing:3px; margin-top:8px;">NEXT.JS AUTH UI • F1-THEMED GALLERY</p>

<div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-top:16px;">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="Formik" src="https://img.shields.io/badge/Formik-2-02569B?style=for-the-badge" />
  <img alt="Yup" src="https://img.shields.io/badge/Yup-1-FF6C37?style=for-the-badge" />
</div>

</div>

<br />

## 🏎️ Overview

RaceHub is a Next.js App Router project that showcases a polished authentication experience and a Formula 1–inspired gallery screen. It uses React 19, Tailwind CSS v4, Formik, and Yup for client-side validation.

Key highlights:
- Sliding login/signup experience with real-time validation
- Clean, responsive UI with racing-inspired styling
- Organized validation schemas using Yup
- App Router structure with typed components

<br />

## 📸 Screenshots

- Login: ./screenshots/login.png
- Signup: ./screenshots/signup.png
- Homepage: ./screenshots/homepage.png

<br />

## ⚙️ Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Formik + Yup
- TypeScript

Package versions (from package.json):
- next: 16.1.4
- react: 19.2.3, react-dom: 19.2.3
- tailwindcss: ^4.1.18
- formik: ^2.4.9, yup: ^1.7.1
- eslint, typescript, postcss, autoprefixer

<br />

## 📁 Project Structure

```
react-login/
│
├─ app/
│  ├─ auth/
│  │  └─ page.tsx            # Auth page (login/signup UI)
│  ├─ f1home/
│  │  └─ page.tsx            # F1-themed gallery page
│  ├─ favicon.ico
│  ├─ globals.css            # Global styles (Tailwind v4 via PostCSS)
│  ├─ layout.tsx             # Root layout
│  └─ page.tsx               # Root page (if used)
│
├─ components/
│  └─ AuthSlider.tsx         # Authentication slider component
│
├─ lib/
│  └─ validation/
│     ├─ loginSchema.ts      # Yup login schema
│     └─ signupSchema.ts     # Yup signup schema
│
├─ public/                   # Static assets (svgs)
├─ screenshots/
│  ├─ homepage.png
│  ├─ login.png
│  └─ signup.png
│
├─ next.config.ts
├─ eslint.config.mjs
├─ postcss.config.mjs
├─ tsconfig.json
├─ package.json
└─ README.md
```

Note: If there are duplicate validation files under app/validation, the canonical schemas live in lib/validation/*.ts and should be imported from there.

<br />

## 🧭 Routes

- /auth → Authentication (login/signup)
- /f1home → F1 gallery page
- / → Root page (if implemented)

<br />

## 🔐 Validation

Validation is implemented with Yup and integrated with Formik.
- Login schema: lib/validation/loginSchema.ts
- Signup schema: lib/validation/signupSchema.ts

These schemas provide field-level constraints and error messages that display in real-time during user input and on submit.

<br />

## 🚀 Getting Started

Prerequisites
- Node.js 18+

Install and run

```bash
# clone
git clone https://github.com/yogeshthapa-7/react-login.git
cd react-login

# install dependencies
npm install

# development
npm run dev

# build
npm run build

# start production server (after build)
npm start
```

Open http://localhost:3000 in your browser.

<br />

## 📦 Available Scripts

- npm run dev: Start the Next.js development server
- npm run build: Build the production bundle
- npm start: Start the production server
- npm run lint: Run ESLint

<br />

## ✨ Features

- Dual-pane authentication with sliding transition
- Formik forms with Yup validation
- Responsive layout and utility-first styling (Tailwind v4)
- Accessible form controls and error states
- Modular component design (AuthSlider, route pages)

<br />

## 🧩 Key Files

- components/AuthSlider.tsx: UI/UX for the auth slider
- app/auth/page.tsx: Auth route page
- app/f1home/page.tsx: Gallery route page
- lib/validation/loginSchema.ts: Yup schema for login
- lib/validation/signupSchema.ts: Yup schema for signup

<br />

## 🗺️ Roadmap

- [x] Authentication UI
- [x] Basic gallery page
- [ ] API integration for real auth
- [ ] Image optimization and code-splitting refinements
- [ ] Additional F1 data views (drivers, standings, details)

<br />

## 🤝 Contributing

1) Fork the repo
2) Create a feature branch: git checkout -b feature/xyz
3) Commit: git commit -m "feat: add xyz"
4) Push: git push origin feature/xyz
5) Open a Pull Request

Code style
- Functional components and hooks
- Tailwind-first styling
- Keep components small and typed
- Meaningful commit messages

<br />

## 📧 Contact

- GitHub: https://github.com/yogeshthapa-7
- LinkedIn: https://linkedin.com/in/yogeshthapa
- Email: yogsthapa@gmail.com

Project link: https://github.com/yogeshthapa-7/react-login

<br />

---

<div align="center" style="color:#6b7280; font-size: 13px;">
  Built with ❤️ using Next.js, React, Tailwind CSS, Formik, and Yup.
</div>
