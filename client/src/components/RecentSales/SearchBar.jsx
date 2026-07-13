function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search customer, city, product or status..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        fontSize: "15px",
        outline: "none",
        boxSizing: "border-box",
      }}
    />
  );
}

export default SearchBar;