function SalesTable({
  sales,
  requestSort,
  sortConfig,
  deleteSale,
}) {
  const getArrow = (column) => {
    if (sortConfig.key !== column) {
      return "";
    }

    return sortConfig.direction === "ascending"
      ? " ▲"
      : " ▼";
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th
              onClick={() => requestSort("customer")}
              style={{ cursor: "pointer" }}
            >
              Customer{getArrow("customer")}
            </th>

            <th
              onClick={() => requestSort("city")}
              style={{ cursor: "pointer" }}
            >
              City{getArrow("city")}
            </th>

            <th
              onClick={() => requestSort("product")}
              style={{ cursor: "pointer" }}
            >
              Product{getArrow("product")}
            </th>

            <th
              onClick={() => requestSort("amount")}
              style={{ cursor: "pointer" }}
            >
              Amount{getArrow("amount")}
            </th>

            <th
              onClick={() => requestSort("status")}
              style={{ cursor: "pointer" }}
            >
              Status{getArrow("status")}
            </th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.customer}</td>

              <td>{sale.city}</td>

              <td>{sale.product}</td>

              <td>
                ₹{sale.amount.toLocaleString("en-IN")}
              </td>

              <td>
                <span
                  className={`status ${sale.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {sale.status}
                </span>
              </td>

              <td>
                <button
                  onClick={() => deleteSale(sale.id)}
                  style={{
                    background: "#dc2626",
                    color: "#ffffff",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;