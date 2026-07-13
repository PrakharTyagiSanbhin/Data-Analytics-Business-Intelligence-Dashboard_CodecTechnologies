const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "business_dashboard",
  password: "PrTy(23)",
  port: 5432,
});

module.exports = pool;