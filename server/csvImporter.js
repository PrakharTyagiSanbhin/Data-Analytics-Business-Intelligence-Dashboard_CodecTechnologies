const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const XLSX = require("xlsx");
const pool = require("./db");

async function insertRows(rows) {
  let imported = 0;
  let skipped = 0;

  for (const row of rows) {
    const customer = row.customer || row.Customer;
    const city = row.city || row.City;
    const product = row.product || row.Product;
    const amount = Number(row.amount || row.Amount);
    const status = row.status || row.Status;

    const existing = await pool.query(
      `
      SELECT id
      FROM recent_sales
      WHERE customer = $1
        AND city = $2
        AND product = $3
        AND amount = $4
        AND status = $5
      `,
      [
        customer,
        city,
        product,
        amount,
        status,
      ]
    );

    if (existing.rows.length > 0) {
      skipped++;
      continue;
    }

    await pool.query(
      `
      INSERT INTO recent_sales
      (customer, city, product, amount, status)
      VALUES ($1,$2,$3,$4,$5)
      `,
      [
        customer,
        city,
        product,
        amount,
        status,
      ]
    );

    imported++;
  }

  return {
    imported,
    skipped,
  };
}

async function importCSV(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  if (extension === ".xlsx" || extension === ".xls") {
    const workbook = XLSX.readFile(filePath);

    const sheetName = workbook.SheetNames[0];

    const worksheet = workbook.Sheets[sheetName];

    const rows = XLSX.utils.sheet_to_json(worksheet);

    return await insertRows(rows);
  }

  return new Promise((resolve, reject) => {
    const rows = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        rows.push(row);
      })
      .on("end", async () => {
        try {
          const result = await insertRows(rows);

          resolve(result);
        } catch (error) {
          reject(error);
        }
      })
      .on("error", reject);
  });
}

module.exports = importCSV;