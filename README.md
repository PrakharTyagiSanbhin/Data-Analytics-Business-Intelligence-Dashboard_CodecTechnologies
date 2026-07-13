# Data Analytics & Business Intelligence Dashboard

## Project Overview

This project is a web-based Business Intelligence Dashboard developed using React.js, Node.js, and PostgreSQL. It helps businesses visualize sales data, monitor key performance indicators (KPIs), import business records from CSV files, and export reports in Excel and PDF formats.

This project was developed as a first-year college project.

---

## Objective

To build a platform that visualizes and analyzes business data through an interactive dashboard.

---

## Technologies Used

### Frontend
- React.js
- Vite
- Recharts
- CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### Additional Libraries
- XLSX
- jsPDF
- jspdf-autotable
- Multer
- csv-parser

---

## Features

- Business Dashboard
- KPI Monitoring
- Revenue Analysis
- City-wise Sales Analysis
- Recent Sales Table
- Search Records
- Sort Records
- Pagination
- Import Data from CSV
- Prevent Duplicate Records
- Export Reports to Excel
- Export Reports to PDF
- Delete Records

---

## Project Structure

```
BusinessDashboard
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   └── styles
│
├── server
│   ├── uploads
│   ├── db.js
│   └── server.js
│
├── package.json
└── README.md
```

---

## How to Run the Project

### Backend

```
cd server
node server.js
```

Backend runs on:

```
http://localhost:5000
```

### Frontend

```
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Database

Database Used:

PostgreSQL

Example Table:

- recent_sales

---

## Future Improvements

- Edit Existing Records
- User Authentication
- Advanced Dashboard Filters
- Interactive Reports

---

## Author

Developed as a First-Year College Project.