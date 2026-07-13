import { useEffect, useMemo, useState } from "react";

function useRecentSales() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  const loadSales = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/recent-sales"
      );

      const data = await response.json();

      const formattedData = data.map((sale) => ({
        id: sale.id,
        customer: sale.customer,
        city: sale.city || "-",
        product: sale.product,
        amount: Number(sale.amount),
        status: sale.status,
      }));

      setSales(formattedData);
    } catch (error) {
      console.error("Error fetching recent sales:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSales();
  }, []);

  const deleteSale = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/recent-sales/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      alert(result.message);

      loadSales();
    } catch (error) {
      console.error(error);

      alert("Delete failed.");
    }
  };

  const requestSort = (key) => {
    let direction = "ascending";

    if (
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    setSortConfig({
      key,
      direction,
    });
  };

  const filteredSales = useMemo(() => {
    const filtered = sales.filter((sale) =>
      `${sale.customer} ${sale.city} ${sale.product} ${sale.status}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (!sortConfig.key) {
      return filtered;
    }

    return [...filtered].sort((a, b) => {
      let valueA = a[sortConfig.key];
      let valueB = b[sortConfig.key];

      if (sortConfig.key === "amount") {
        valueA = Number(valueA);
        valueB = Number(valueB);
      } else {
        valueA = valueA.toString().toLowerCase();
        valueB = valueB.toString().toLowerCase();
      }

      if (valueA < valueB) {
        return sortConfig.direction === "ascending"
          ? -1
          : 1;
      }

      if (valueA > valueB) {
        return sortConfig.direction === "ascending"
          ? 1
          : -1;
      }

      return 0;
    });
  }, [sales, search, sortConfig]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredSales.length / recordsPerPage)
  );

  const currentSales = filteredSales.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  return {
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
  };
}

export default useRecentSales;