const XLSX = require("xlsx");
const pool = require("./db");

async function importExcel(filePath) {
  const workbook = XLSX.readFile(filePath);

  const sheetName = workbook.SheetNames[0];

  const worksheet = workbook.Sheets[sheetName];

  const rows = XLSX.utils.sheet_to_json(worksheet, {
    defval: "",
  });

  let imported = 0;
  let skipped = 0;

  for (const row of rows) {
    const customer = String(row.customer ?? row.Customer ?? "").trim();
    const city = String(row.city ?? row.City ?? "").trim();
    const product = String(row.product ?? row.Product ?? "").trim();

    const rawAmount = row.amount ?? row.Amount;

    const amount = parseInt(
      String(rawAmount).replace(/[₹,\s]/g, ""),
      10
    );

    const status = String(row.status ?? row.Status ?? "").trim();

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
      WHERE customer=$1
        AND city=$2
        AND product=$3
        AND amount=$4
        AND status=$5
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
      (customer,city,product,amount,status)
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

module.exports = importExcel;