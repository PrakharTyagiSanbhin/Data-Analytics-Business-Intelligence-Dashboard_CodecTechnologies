const pool = require("./db");
const sampleData = require("./sampleData");

async function importAPI() {
  let imported = 0;
  let skipped = 0;

  for (const row of sampleData) {
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
        row.customer,
        row.city,
        row.product,
        row.amount,
        row.status,
      ]
    );

    if (existing.rows.length > 0) {
      skipped++;
      continue;
    }

    await pool.query(
      `
      INSERT INTO recent_sales
      (
        customer,
        city,
        product,
        amount,
        status
      )
      VALUES
      ($1,$2,$3,$4,$5)
      `,
      [
        row.customer,
        row.city,
        row.product,
        row.amount,
        row.status,
      ]
    );

    imported++;
  }

  return {
    imported,
    skipped,
  };
}

module.exports = importAPI;