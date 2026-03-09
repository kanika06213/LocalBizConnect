# LocalBizConnect - Project Overview

## 🧱 High-Level Architecture

This project is a **full-stack web application** built with:

- **Frontend**: React (Create React App)
- **Backend**: Node.js + Express
- **Data store**: Simple JSON file (`backend/orders.json`) used as a lightweight database

The frontend and backend run as two separate processes during development, and the frontend uses a proxy config to dispatch API calls to the backend server.

## 📁 Project Structure

```
LocalBizConnect/
├── backend/                      # Express API server
│   ├── middleware/               # Express middleware (logger)
│   ├── routes/                   # Express routers (orders)
│   ├── orders.json               # Data store for orders
│   ├── server.js                 # Entry point for backend
│   ├── package.json              # Backend dependencies + scripts
│   └── ...
├── public/                       # CRA public assets (frontend)
├── src/                          # React source code (frontend)
│   ├── pages/                    # Page components (AdminOrders, etc.)
│   ├── components/               # Reusable UI components
│   ├── styles/                   # CSS files
│   ├── App.js                    # Routes + app wiring
│   └── index.js                  # React entrypoint
├── package.json                  # Frontend dependencies + CRA scripts
└── PROJECT_ARCHITECTURE.md       # This document
```

## 🔌 Data Flow (Frontend → Backend → Files)

1. **User action in UI** (e.g. create order / delete order)
2. React calls the backend API endpoints:
   - `POST /api/orders` → creates a new order in `backend/orders.json`
   - `DELETE /api/orders/:id` → deletes a specific order from `backend/orders.json`
   - `GET /api/orders` → reads and returns all orders
3. The backend reads/writes `backend/orders.json` and returns JSON 
4. Frontend updates UI state based on the API response

## 🧩 Backend Routing & Middleware

- `backend/server.js`:
  - Uses `express.json()` to parse JSON request bodies
  - Uses a logger middleware (`backend/middleware/logger.js`) to log requests
  - Exposes endpoints under `/api` by mounting `backend/routes/ordersRoutes.js`

- `backend/routes/ordersRoutes.js` (mounted at `/api`):
  - `GET /api/orders` → read all orders
  - `POST /api/orders` → persist a new order (assigns `id`, adds `createdAt`)
  - `DELETE /api/orders/:id` → remove an order by id
  - `DELETE /api/orders` → clear all orders

## 🧠 Tech Stack

### Frontend
- React (Create React App)
- React Router DOM (for client-side route handling)
- CSS styles in `src/styles/*`

### Backend
- Node.js
- Express (v5)
- CORS support via `cors` package

## ⚡ How to Run Locally

### Backend
```sh
cd backend
npm install
npm start
```
The backend will run on **http://localhost:5000**.

### Frontend
```sh
cd ..
npm install
npm start
```
The frontend runs on **http://localhost:3000** and proxies API requests to the backend.

## 🧩 Notes / Next Improvements

- Current backend uses a JSON file as a datastore; this is fine for prototypes but not for production.
- A database (SQLite/Postgres/Mongo) would be recommended for concurrency, scaling, and data integrity.
- Add form validation + better UX (e.g. toast messages, inline errors).
- Add authentication / user roles if the app needs permissions.

## 👤 Demo User

A demo user is pre-configured in the frontend to help you try the app without registering:

- **Email**: `demo@localbiz.com`
- **Password**: `demo123`

Logging in enables cart persistence and lets you place orders using the UI.

## 🚀 Dev Run Commands

From the repo root you can run both frontend and backend together (uses `concurrently`):

```sh
npm run dev
```

Or start each side separately:

```sh
# frontend
npm start

# backend (with auto-reload via nodemon)
cd backend
npm run dev
```
