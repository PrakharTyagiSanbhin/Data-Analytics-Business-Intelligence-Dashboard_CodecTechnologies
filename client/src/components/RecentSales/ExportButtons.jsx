function ExportButtons({
  exportToExcel,
  exportToPDF,
  importFromAPI,
}) {
  return (
    <div className="export-buttons">
      <button
        className="upload-btn"
        onClick={importFromAPI}
      >
        🌐 Import API
      </button>

      <button
        className="export-btn excel-btn"
        onClick={exportToExcel}
      >
        📊 Export Excel
      </button>

      <button
        className="export-btn pdf-btn"
        onClick={exportToPDF}
      >
        📄 Export PDF
      </button>
    </div>
  );
}

export default ExportButtons;