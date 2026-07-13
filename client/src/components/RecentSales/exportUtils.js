import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportToExcel(sales) {
  const exportData = sales.map((sale) => ({
    Customer: sale.customer,
    City: sale.city,
    Product: sale.product,
    Amount: `₹${sale.amount.toLocaleString("en-IN")}`,
    Status: sale.status,
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Recent Sales"
  );

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const fileData = new Blob([excelBuffer], {
    type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(fileData, "Recent_Sales_Report.xlsx");
}

export function exportToPDF(sales) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Recent Sales Report", 14, 20);

  autoTable(doc, {
    startY: 30,
    head: [["Customer", "City", "Product", "Amount", "Status"]],
    body: sales.map((sale) => [
      sale.customer,
      sale.city,
      sale.product,
      `₹${sale.amount.toLocaleString("en-IN")}`,
      sale.status,
    ]),
  });

  doc.save("Recent_Sales_Report.pdf");
}