<div align="center">

# 🏡 Havenly Real Estate

**A modern, full-featured real estate platform connecting property seekers with agencies — built with React 19 & Vite.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-FACC15?style=for-the-badge&logoColor=white)](https://havenly-real-estate.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MUI](https://img.shields.io/badge/MUI-7-007FFF?style=flat-square&logo=mui&logoColor=white)](https://mui.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://havenly-real-estate.vercel.app/)

> 🎓 *Developed as part of a private internship program at **[devWave](https://github.com/devWave)***

</div>

---

## 📌 Overview

**Havenly** is a comprehensive real estate web application that provides a seamless experience for both **property seekers** looking to browse and book properties, and **real estate agencies** managing their listings and bookings through a dedicated dashboard. The platform features a RESTful API backend, role-based access control, and a responsive modern UI.

---

## ✨ Features

### 🏠 Public-Facing (Property Seekers)

| Feature | Description |
|---------|-------------|
| **Hero & Search** | Full-screen hero section with an integrated search form (destination, dates, guests) |
| **Property Listings** | Browse properties with filters by type (House, Apartment, Villa, Penthouse, Townhouse, Commercial, Land Plot) and price range |
| **Property Details** | Rich detail pages with image gallery, ratings, facilities (beds, baths, garages, area), amenities, and agency contact info |
| **Booking System** | Check-in/check-out date picker with guest count — book directly from property pages |
| **My Bookings** | View upcoming bookings and booking history in a tabular format with detailed popup cards |
| **Featured Properties** | Auto-scrolling Swiper carousel showcasing top listings on the homepage |
| **Testimonials** | Marquee-style animated testimonial cards from satisfied users |
| **FAQ Section** | Frequently asked questions with expandable answers |
| **About Section** | Smooth scroll navigation to the About section with trust indicators and stats |

### 🏢 Agency Dashboard (Protected — Agency Role)

| Feature | Description |
|---------|-------------|
| **Dashboard Overview** | Stats cards showing total sales & total earnings at a glance |
| **Booking Management** | View all agency bookings with status filters (Pending, Confirmed, Rejected, Cancelled, Completed) |
| **Update Booking Status** | Accept/reject/cancel bookings directly from the dashboard |
| **Add Property** | Full-featured form with main image upload, multiple gallery images, amenities checkboxes, and property details |
| **List Properties** | View, edit, and delete all agency-owned properties |
| **Sidebar Navigation** | Clean sidebar with Dashboard, Add Property, and List Property navigation |

### 🔐 Authentication & Security

| Feature | Description |
|---------|-------------|
| **Login / Sign Up** | Modal-based auth with email & password |
| **Forgot Password** | OTP-based password reset flow |
| **Role-Based Access** | `User` and `Agency` roles with protected routes |
| **JWT Authentication** | Token-based auth with auto-redirect on 401 |
| **Route Guards** | `ProtectedRoute` component restricting access by role |

### 🌐 General

- **Responsive Design** — Mobile-first, works seamlessly across all screen sizes
- **Skeleton Loading** — Elegant loading placeholders while data is being fetched
- **Toast Notifications** — Real-time success/error feedback via React Hot Toast
- **Smooth Animations** — Framer Motion for page transitions and interactive elements
- **Pagination** — Client-side pagination with MUI Pagination component

---

## 🛠️ Tech Stack

<table>
<tr>
<td><strong>Category</strong></td>
<td><strong>Technologies</strong></td>
</tr>
<tr>
<td>⚛️ Core</td>
<td>React 19, Vite 7, JavaScript (ES Modules)</td>
</tr>
<tr>
<td>🗂️ State Management</td>
<td>React Context API (AuthContext, PropertyContext), Redux</td>
</tr>
<tr>
<td>🧭 Routing</td>
<td>React Router DOM v7 (nested routes, protected routes)</td>
</tr>
<tr>
<td>🎨 Styling</td>
<td>Tailwind CSS 3.4, Emotion (CSS-in-JS), Custom CSS</td>
</tr>
<tr>
<td>🧩 UI Components</td>
<td>Material-UI (MUI) v7 — Select, Checkbox, Rating, Pagination, Table, etc.</td>
</tr>
<tr>
<td>🎬 Animation</td>
<td>Framer Motion (AnimatePresence, page transitions, modals)</td>
</tr>
<tr>
<td>🎠 Carousel</td>
<td>Swiper.js (autoplay featured properties slider)</td>
</tr>
<tr>
<td>📡 HTTP Client</td>
<td>Axios (custom instance with JWT interceptors)</td>
</tr>
<tr>
<td>🔔 Notifications</td>
<td>React Hot Toast, React Toastify</td>
</tr>
<tr>
<td>🔣 Icons</td>
<td>MUI Icons, Lucide React, React Icons</td>
</tr>
<tr>
<td>📊 Charts</td>
<td>Recharts</td>
</tr>
<tr>
<td>☎️ Validation</td>
<td>libphonenumber-js (phone number validation)</td>
</tr>
<tr>
<td>🌍 Deployment</td>
<td>Vercel (with SPA rewrites)</td>
</tr>
</table>

---

## 📂 Project Structure

```
Havenly-Real-Estate/
├── public/
│   └── images/                   # Static images (hero bg, logo, about, etc.)
├── src/
│   ├── API/
│   │   ├── axiosClient.js        # Axios instance with baseURL & JWT interceptors
│   │   ├── authService.js        # Auth API calls (login, register, getUserById)
│   │   ├── bookingService.js     # Booking CRUD (create, upcoming, history, agency)
│   │   └── realEstateService.js  # Property CRUD (getAll, search, create, update, delete)
│   ├── assets/                   # Static assets
│   ├── components/
│   │   ├── Agency/               # Agency-specific components
│   │   │   ├── Sidebar.jsx       # Dashboard sidebar navigation
│   │   │   ├── PropertyForm.jsx  # Reusable property form fields
│   │   │   ├── MainImageUploader.jsx
│   │   │   ├── ImagesUploader.jsx
│   │   │   ├── AmenitiesSection.jsx
│   │   │   ├── ListCard.jsx      # Property card for agency list
│   │   │   ├── ListTable.jsx     # Property table for agency list
│   │   │   ├── ViewBookingsTable.jsx
│   │   │   └── ViewBookingsCard.jsx
│   │   ├── AuthModal/            # Authentication modal components
│   │   ├── HomeModal/            # Homepage section components
│   │   │   ├── Hero.jsx          # Full-screen hero with search
│   │   │   ├── SearchForm.jsx    # Destination + date + guest search
│   │   │   ├── About.jsx         # Trust indicators & feature highlights
│   │   │   ├── FeaturedProperties.jsx  # Swiper carousel
│   │   │   ├── FrequentlyAskedQuestions.jsx
│   │   │   ├── Cta.jsx           # Call to action section
│   │   │   ├── Testimonial.jsx   # Marquee testimonial rows
│   │   │   └── TestimonialCard.jsx
│   │   ├── Header.jsx            # Sticky header with scroll effect
│   │   ├── Navbar.jsx            # Desktop navigation
│   │   ├── MenuToggle.jsx        # Mobile navigation
│   │   ├── Footer.jsx
│   │   ├── Item.jsx              # Property card component
│   │   ├── BookingCard.jsx       # Booking detail popup card
│   │   ├── BookingsTable.jsx     # User bookings table
│   │   ├── ProtectedRoute.jsx    # Role-based route guard
│   │   ├── LoginAndSignup.jsx    # Auth modal (login/register/forgot)
│   │   └── RoleWarningModal.jsx  # Warning when wrong role tries to book
│   ├── context/
│   │   ├── AuthContext.jsx       # Auth state (user, token, roles, saveAuth, logout)
│   │   └── PropertyContext.jsx   # Property state management
│   ├── helpers/
│   │   ├── authHelpers.js        # Login, register, forgot/reset password logic
│   │   └── propertiesHelper.js   # Fetch featured properties helper
│   ├── hooks/
│   │   └── useFilteredProperties.js  # Custom hook for filtering & sorting
│   ├── pages/
│   │   ├── Agency/
│   │   │   ├── Dashboard.jsx     # Agency dashboard with stats & bookings
│   │   │   ├── AddProperty.jsx   # Add new property form
│   │   │   └── ListProperty.jsx  # View/edit/delete agency properties
│   │   ├── Home.jsx              # Landing page (Hero + About + Featured + FAQ + CTA + Testimonials)
│   │   ├── Listing.jsx           # Property listing with filters & pagination
│   │   ├── PropertyDetails.jsx   # Single property page with booking form
│   │   ├── MyBooking.jsx         # User's bookings (upcoming + history)
│   │   ├── AuthPage.jsx          # Auth page wrapper
│   │   ├── Owner.jsx             # Agency layout (Sidebar + Outlet)
│   │   ├── Unauthorized.jsx      # 401 page
│   │   └── NotFoundPage.jsx      # 404 page
│   ├── App.jsx                   # Root component & route definitions
│   ├── App.css                   # Global styles
│   ├── index.css                 # Tailwind directives & custom utilities
│   └── main.jsx                  # Entry point (BrowserRouter, Providers)
├── data.js                       # Static data / constants
├── index.html                    # HTML template
├── tailwind.config.js
├── vite.config.js
├── vercel.json                   # Vercel SPA rewrite rules
└── package.json
```

---

## 🔗 API Integration

The app connects to a **RESTful ASP.NET Core API** backend. All requests are handled via a custom Axios instance with automatic JWT token injection.

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/RealEstate/GetAll` | GET | Fetch all properties |
| `/RealEstate/GetById?Id=` | GET | Get property by ID |
| `/RealEstate/Search?destination=` | GET | Search properties by destination |
| `/RealEstate/GetAllByPages` | GET | Paginated property list |
| `/RealEstate/Create` | POST | Create new property (multipart/form-data) |
| `/RealEstate/Update` | PUT | Update existing property |
| `/RealEstate/delete/:id` | DELETE | Delete a property |
| `/Booking/Create` | POST | Create a new booking |
| `/Booking/user/upcoming/:userId` | GET | User's upcoming bookings |
| `/Booking/user/history/:userId` | GET | User's booking history |
| `/Booking/agency/:ownerId` | GET | Agency's bookings (with status filter) |
| `/Booking/UpdateBookingStatus` | PATCH | Update booking status |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ 
- **npm** v9+ or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Mariam-Huussein/Havenly-Real-Estate.git
cd Havenly-Real-Estate

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be running at **`http://localhost:5173`**

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🗺️ Application Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Homepage |
| `/listing` | Public | Property listings with filters |
| `/listing/:id` | Public | Property details & booking |
| `/Auth/:type` | Public | Login / Register |
| `/my-bookings` | 🔒 User | User's bookings management |
| `/owner` | 🔒 Agency | Agency dashboard |
| `/owner/add-property` | 🔒 Agency | Add new property |
| `/owner/list-property` | 🔒 Agency | Manage agency properties |
| `/unauthorized` | Public | 401 Unauthorized page |
| `*` | Public | 404 Not Found page |

---

## 👩‍💻 Author

**Mariam Hussein**

This project was built during a specialized private internship at **devWave**.

---

<div align="center">

**⭐ Star this repo if you found it useful!**

*Made with ❤️ and React*

</div>
