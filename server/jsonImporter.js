const fs = require("fs");
const pool = require("./db");

async function importJSON(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");

  const rows = JSON.parse(fileContent);

  let imported = 0;
  let skipped = 0;

  for (const row of rows) {
    const customer = String(row.customer || "").trim();
    const city = String(row.city || "").trim();
    const product = String(row.product || "").trim();

    const amount = parseInt(row.amount, 10);

    const status = String(row.status || "").trim();

    if (
      !customer ||
      !city ||
      !product ||
      Number.isNaN(amount) ||
      !status
    ) {
      skipped++;
      continue;
    }

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
      VALUES ($1, $2, $3, $4, $5)
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

module.exports = importJSON;