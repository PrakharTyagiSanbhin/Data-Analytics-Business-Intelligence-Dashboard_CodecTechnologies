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
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   └── assets
│   │
│   └── package.json
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

## Clone Repository

```bash
https://github.com/PrakharTyagiSanbhin/Data-Analytics-Business-Intelligence-Dashboard_CodecTechnologies.git
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

<img width="1920" height="1019" alt="Screenshot (1054)" src="https://github.com/user-attachments/assets/14b01aaa-99c1-4204-a77a-5d267d3d4c72" />
<img width="1920" height="1015" alt="Screenshot (1055)" src="https://github.com/user-attachments/assets/5733e5cb-8de7-4022-b0e6-b340826a9503" />
<img width="1920" height="1025" alt="Screenshot (1056)" src="https://github.com/user-attachments/assets/f8394844-3248-4ac3-8b0d-b72ae621221a" />


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
