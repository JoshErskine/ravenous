import React from 'react';
import './SearchBar.css'; // TODO: Add a CSS file for styling

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for restaurants..." />
      <button type="submit">Search</button>
    </div>
  );
}
export default SearchBar;