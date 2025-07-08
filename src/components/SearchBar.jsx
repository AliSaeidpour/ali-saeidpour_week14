function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      onChange={(e) => onSearch(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;
