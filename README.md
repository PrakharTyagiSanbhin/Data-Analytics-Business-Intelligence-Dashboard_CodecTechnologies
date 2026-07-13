# 📊 Business Analytics Dashboard

A full-stack Business Analytics Dashboard built using **React.js**, **Node.js**, and **PostgreSQL**.

This project allows users to visualize business data, manage sales records, import/export datasets, and analyze key business metrics through an interactive dashboard.

---

# 🚀 Features

## Dashboard

- Dynamic KPI Cards
- Total Sales
- Total Orders
- Total Customers
- Average Order Value

## Analytics

- Revenue by Product Chart
- Sales by City Chart
- Live PostgreSQL Data
- Responsive Dashboard

## Recent Sales

- Search Records
- Sort Columns
- Pagination
- Delete Records

## Import Data

- CSV Import
- Excel (.xlsx) Import
- JSON Import
- API Import

## Export Data

- Export to Excel
- Export to PDF

## Database

- PostgreSQL Integration
- Duplicate Detection
- REST API
- Live Dashboard Updates

## CRUD Options
 ✔ Create
 ✔ Read
 ✔ Delete

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Recharts
- React Icons

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL

## Packages

- multer
- csv-parser
- xlsx
- axios
- file-saver
- jspdf
- jspdf-autotable

---

# 📁 Project Structure

```
BusinessDashboard
│
├── client
│   ├── public
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src
│   │   ├── components
│   │   │   ├── RecentSales
│   │   │   ├── Charts.jsx
│   │   │   ├── DashboardCards.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── RecentSales.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── styles
│   │   │   └── dashboard.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── server.js
│   ├── db.js
│   ├── csvImporter.js
│   ├── excelImporter.js
│   ├── jsonImporter.js
│   ├── apiImporter.js
│   ├── sampleData.js
│   └── package.json
│
├── package.json
├── .gitignore
└── README.md
```

---

# 📈 Dashboard Modules

- Dashboard Cards
- Revenue Analytics
- City Sales Analytics
- Recent Sales
- File Import
- File Export

---

# 📂 Supported File Types

| Type | Supported |
|------|-----------|
| CSV | ✅ |
| Excel (.xlsx) | ✅ |
| JSON | ✅ |
| API | ✅ |

---

# 📤 Export Formats

| Format | Supported |
|---------|-----------|
| Excel | ✅ |
| PDF | ✅ |

---

# ⚙ Installation

## Clone the repository

```bash
git clone https://github.com/PrakharTyagiSanbhin/Data-Analytics-Business-Intelligence-Dashboard_CodecTechnologies.git
```

---

## Install Frontend

```bash
cd client
npm install
npm run dev
```

---

## Install Backend

```bash
cd server
npm install
node server.js
```

---

## PostgreSQL

Create the required database and tables.

Update database credentials in:

```
server/db.js
```
# ▶ Running the Project

### Terminal 1

cd server

node server.js

### Terminal 2

cd client

npm run dev

Open:

http://localhost:5173
---
---

# 🌐 API Endpoints

| Method | Endpoint |
|---------|----------|
| GET | /api/dashboard |
| GET | /api/revenue |
| GET | /api/city-sales |
| GET | /api/recent-sales |
| POST | /api/upload |
| POST | /api/import-api |
| DELETE | /api/recent-sales/:id |

---

# 📸 Screenshots

<img width="1920" height="1019" alt="Screenshot (1054)" src="https://github.com/user-attachments/assets/a35bb286-1a38-458f-94b2-d5eecb006092" />
<img width="1920" height="1015" alt="Screenshot (1055)" src="https://github.com/user-attachments/assets/e453d49c-8120-412e-a0b7-fde870a2b32d" />
<img width="1920" height="1025" alt="Screenshot (1056)" src="https://github.com/user-attachments/assets/93437049-b13c-4056-9f9a-0f789ce9f67b" />


- Dashboard
- Charts
- Recent Sales
- Import Feature

---

# 🔮 Future Enhancements

- User Authentication
- Role Based Access
- Dark Mode
- Date Range Filters
- Dashboard Themes
- AI Sales Forecasting
- Email Reports

---

# 👨‍💻 Developed By

**Prakhar Tyagi**

Business Analytics Dashboard

---

