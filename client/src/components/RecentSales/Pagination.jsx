function Pagination({
  currentPage,
  totalPages,
  totalRecords,
  recordsPerPage,
  onPrevious,
  onNext,
}) {
  const startRecord =
    totalRecords === 0
      ? 0
      : (currentPage - 1) * recordsPerPage + 1;

  const endRecord = Math.min(
    currentPage * recordsPerPage,
    totalRecords
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20px",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <div>
        Showing {startRecord}–{endRecord} of {totalRecords} records
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            background:
              currentPage === 1 ? "#d1d5db" : "#2563eb",
            color: "#fff",
            cursor:
              currentPage === 1
                ? "not-allowed"
                : "pointer",
          }}
        >
          ◀ Previous
        </button>

        <strong>
          Page {currentPage} of {totalPages}
        </strong>

        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            background:
              currentPage === totalPages
                ? "#d1d5db"
                : "#2563eb",
            color: "#fff",
            cursor:
              currentPage === totalPages
                ? "not-allowed"
                : "pointer",
          }}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}

export default Pagination;