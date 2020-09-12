import React from "react";
import PropTypes from "prop-types";

const Search = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="search">
      <input
        value={value}
        onChange={onChange}
        type="search"
        placeholder="Search"
      />
      <button type="submit" className="btn">
        Go
      </button>
    </form>
  );
};

Search.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Search;
