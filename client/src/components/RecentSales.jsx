import SearchBar from "./RecentSales/SearchBar";
import ExportButtons from "./RecentSales/ExportButtons";
import SalesTable from "./RecentSales/SalesTable";
import Pagination from "./RecentSales/Pagination";
import UploadButton from "./RecentSales/UploadButton";

import {
  exportToExcel,
  exportToPDF,
} from "./RecentSales/exportUtils";

import useRecentSales from "./RecentSales/useRecentSales";

function RecentSales() {
  const {
    loading,
    search,
    setSearch,

    sortConfig,
    requestSort,

    filteredSales,
    currentSales,

    currentPage,
    totalPages,
    recordsPerPage,

    nextPage,
    previousPage,

    loadSales,
    deleteSale,
  } = useRecentSales();

  async function importFromAPI() {
    try {
      const response = await fetch(
        "http://localhost:5000/api/import-api",
        {
          method: "POST",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "API Import failed.");
        return;
      }

      alert(result.message);

      loadSales();
    } catch (error) {
      console.error(error);
      alert("Unable to import from API.");
    }
  }

  if (loading) {
    return <h2>Loading Recent Sales...</h2>;
  }

  return (
    <div className="recent-sales">
      <div
        className="table-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div>
          <h2>Recent Sales</h2>
          <p>Latest business transactions</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <UploadButton
            onUploadSuccess={loadSales}
          />

          <ExportButtons
            importFromAPI={importFromAPI}
            exportToExcel={() =>
              exportToExcel(filteredSales)
            }
            exportToPDF={() =>
              exportToPDF(filteredSales)
            }
          />
        </div>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <SalesTable
        sales={currentSales}
        requestSort={requestSort}
        sortConfig={sortConfig}
        deleteSale={deleteSale}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalRecords={filteredSales.length}
        recordsPerPage={recordsPerPage}
        onPrevious={previousPage}
        onNext={nextPage}
      />
    </div>
  );
}

export default RecentSales;