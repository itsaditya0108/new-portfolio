

# 🌟 Modern Portfolio Project

[![GitHub Repo](https://img.shields.io/badge/GitHub-Portfolio-blue?logo=github)](https://github.com/itsaditya0108/new-portfolio)
[![Live Site](https://img.shields.io/badge/Live-Portfolio-green)](https://new-portfolio-six-flax.vercel.app/)

---

## 🚀 Overview

Welcome to my full-stack portfolio project! This project demonstrates my skills as a **Full Stack Developer**.

It features:

* **Frontend:** React + Vite + Tailwind CSS
* **Backend:** Node.js + Express + Google Gemini AI
* **AI Chatbot:** Ask me anything about my projects, skills, and experience! 🤖

---

## ✨ Features

* 🌐 **Responsive UI** with modern design
* 📚 **Backend APIs** for projects, certifications, and skills
* 🤖 **AI Chatbot** powered by Google Gemini
* 🌙 **Dark mode toggle** for better UX
* 📝 **Contact form** with validation
* 🎥 **“Why Hire Me” video section**
* 📄 **Resume review** and display
* ⚡ **Seamless deployment** with Render & Vercel

---

## 🖼️ Screenshots

### Home Page
# Home Page 
<img width="1912" height="962" alt="image" src="https://github.com/user-attachments/assets/88de38cd-494e-4702-93bb-fa707851b639" />

# Projects Section
<img width="1717" height="879" alt="image" src="https://github.com/user-attachments/assets/c339283f-abee-4a98-9689-7f0e2ac3ec09" />


# AI Chatbot
<img width="1746" height="856" alt="image" src="https://github.com/user-attachments/assets/6085bfd4-f193-4f09-90df-52a2c156d5eb" />


---

## 🛠 Tech Stack

* **Frontend:** React, Vite, Tailwind CSS, Axios
* **Backend:** Node.js, Express, Google Gemini API
* **Deployment:** Render (backend), Vercel (frontend)
* **Other:** dotenv for environment variables, CORS for cross-origin requests

---

## 🏁 Getting Started

### Prerequisites

* Node.js (v16+)
* npm or yarn
* Google Gemini API key

### Local Setup

1. Clone the repo:

```bash
git clone https://github.com/itsaditya0108/new-portfolio.git
cd new-portfolio
```

2. Setup Backend:

```bash
cd server
cp .env.example .env
# Add your GEMINI_API_KEY
npm install
npm run dev
```

3. Setup Frontend:

```bash
cd ../client
cp .env.example .env
# Add VITE_API_BASE_URL=http://localhost:5000/api
npm install
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to see it live 🌟

---

## ☁️ Deployment

### Backend (Render)

* Root directory: `server`
* Build command: `npm install`
* Start command: `npm start`
* Environment variable: `GEMINI_API_KEY=<your-key>`

### Frontend (Vercel)

* Root directory: `client`
* Framework: Vite
* Environment variable:
  `VITE_API_BASE_URL=https://your-backend-url.onrender.com/api`

---

## 📡 API Endpoints

| Endpoint              | Method | Description            |
| --------------------- | ------ | ---------------------- |
| `/api/projects`       | GET    | List of projects       |
| `/api/certifications` | GET    | List of certifications |
| `/api/chat`           | POST   | AI chatbot interaction |
| `/api/skills`         | GET    | List of skills         |

---

## 🔑 Environment Variables

| Variable            | Description                     | Example                                     |
| ------------------- | ------------------------------- | ------------------------------------------- |
| `GEMINI_API_KEY`    | Google Gemini API key (backend) | `AIzaSy...`                                 |
| `VITE_API_BASE_URL` | Backend API URL (frontend)      | `https://your-backend-url.onrender.com/api` |

---

## ⚠️ Troubleshooting

* ✅ Ensure API keys are correct and active
* ✅ Check environment variables on Render and Vercel
* ✅ Verify CORS settings (`cors()` middleware)
* ✅ Check Render backend logs
* ✅ Use browser dev tools for network requests

---

## 📞 Contact

* **Name:** Aditya Verma
* **Email:** [adityaverma0244@gmail.com](mailto:adityaverma0244@gmail.com)

---

## 📜 License

This project is licensed under the MIT License.
