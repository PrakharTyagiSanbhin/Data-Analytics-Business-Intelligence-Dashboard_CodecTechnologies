const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const pool = require("./db");
const importCSV = require("./csvImporter");
const importExcel = require("./excelImporter");
const importJSON = require("./jsonImporter");
const importAPI = require("./apiImporter");

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
  dest: "uploads/",
});

/* ==================================================
   DASHBOARD CARDS
================================================== */

app.get("/api/dashboard", async (req, res) => {
  try {
    const totalSales = await pool.query(`
      SELECT COALESCE(SUM(amount),0) total
      FROM recent_sales
    `);

    const totalOrders = await pool.query(`
      SELECT COUNT(*) total
      FROM recent_sales
    `);

    const totalCustomers = await pool.query(`
      SELECT COUNT(DISTINCT customer) total
      FROM recent_sales
    `);

    const averageOrder = await pool.query(`
      SELECT COALESCE(AVG(amount),0) total
      FROM recent_sales
    `);

    res.json({
      totalSales: Number(totalSales.rows[0].total),
      totalOrders: Number(totalOrders.rows[0].total),
      totalCustomers: Number(totalCustomers.rows[0].total),
      averageOrder: Math.round(
        Number(averageOrder.rows[0].total)
      ),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Database Error",
    });
  }
});

/* ==================================================
   REVENUE CHART
================================================== */

app.get("/api/revenue", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        product AS month,
        SUM(amount) AS revenue
      FROM recent_sales
      GROUP BY product
      ORDER BY revenue DESC;
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Database Error",
    });
  }
});

/* ==================================================
   CITY SALES CHART
================================================== */

app.get("/api/city-sales", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        city,
        SUM(amount) AS sales
      FROM recent_sales
      GROUP BY city
      ORDER BY sales DESC;
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Database Error",
    });
  }
});

/* ==================================================
   RECENT SALES
================================================== */

app.get("/api/recent-sales", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
      id,
      customer,
      city,
      product,
      amount,
      status
      FROM recent_sales
      ORDER BY id DESC
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Database Error",
    });
  }
});

/* ==================================================
   DELETE SALE
================================================== */

app.delete("/api/recent-sales/:id", async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM recent_sales WHERE id=$1",
      [req.params.id]
    );

    res.json({
      message: "Deleted successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Delete failed",
    });
  }
});

/* ==================================================
   FILE UPLOAD
================================================== */

app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "No file selected",
      });
    }

    const extension = req.file.originalname
      .split(".")
      .pop()
      .toLowerCase();

    let result;

    if (extension === "csv") {
      result = await importCSV(req.file.path);
    } else if (
      extension === "xlsx" ||
      extension === "xls"
    ) {
      result = await importExcel(req.file.path);
    } else if (extension === "json") {
      result = await importJSON(req.file.path);
    } else {
      fs.unlinkSync(req.file.path);

      return res.status(400).json({
        error: "Unsupported file",
      });
    }

    fs.unlinkSync(req.file.path);

    res.json({
      message: `${result.imported} imported, ${result.skipped} skipped.`,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

/* ==================================================
   IMPORT FROM API
================================================== */

app.post("/api/import-api", async (req, res) => {
  try {
    const result = await importAPI();

    res.json({
      message: `${result.imported} imported, ${result.skipped} skipped.`,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});