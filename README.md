# 🎯 Semester Project 2 – Auction Website

This is the front-end application for an **Auction Website** built as the final project for Semester 2 at Noroff. The application allows users to register, log in, list items for auction, place bids, and manage their profiles — all powered by the Noroff Auction API.

## 📌 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Links](#project-links)
- [Credits](#credits)
- [License](#license)

---

## 📄 Project Overview

This project demonstrates the integration of front-end development best practices, responsive design, and API consumption. It is built with a focus on user experience, performance, and clean code. Only users with `@stud.noroff.no` emails can register and participate in auctions.

---

## ✨ Features

- 🧾 User Registration and Login (with email restrictions)
- 👋 Logout functionality
- 🖼️ Avatar upload and management
- 💰 View total user credits
- 📦 Create auction listings with:
  - Title
  - Description
  - Deadline
  - Media gallery
- 💸 Place bids on other users' listings
- 🔍 Publicly search through listings (without login)
- 👁️ View all bids on a listing

---

## 🛠️ Technologies Used

- **CSS Framework**: Tailwind CSS
- **Design Tool**: Figma
- **Planning Tool**: GitHub Projects
- **API**: [Noroff Auction API](https://v2.api.noroff.dev/docs/auction)
- **Hosting**: Netlify

---

## 🚀 Getting Started

To run the project locally:

### Prerequisites
- Node.js v16+
- npm

### Installation

1. Clone the repository:
git clone https://github.com/yourusername/auction-site.git
cd auction-site

2. Install dependencies:
npm install

3. Create a .env file in the root and add:
VITE_API_BASE_URL=https://api.noroff.dev/api/v1/auction

4. Start the development server:
npm run dev

