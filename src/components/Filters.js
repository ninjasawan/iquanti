import React from "react";
import PropTypes from "prop-types";

const Filters = ({ handleFilter, filtersCount, filter }) => {
  return (
    <div className="filters">
      <p>Importance</p>
      <ul>
        <li className={filter === "all" ? "active" : ""}>
          <button onClick={() => handleFilter("all")}>
            <span>{filtersCount.allCount}</span>
            <span>all</span>
          </button>
        </li>
        <li className={filter === "very high" ? "active" : ""}>
          <button onClick={() => handleFilter("very high")}>
            <span>{filtersCount.veryHighCount}</span>
            <span>Very High</span>
          </button>
        </li>
        <li className={filter === "high" ? "active" : ""}>
          <button onClick={() => handleFilter("high")}>
            <span>{filtersCount.highCount}</span>
            <span>High</span>
          </button>
        </li>
        <li className={filter === "medium" ? "active" : ""}>
          <button onClick={() => handleFilter("medium")}>
            <span>{filtersCount.mediumCount}</span>
            <span>Medium</span>
          </button>
        </li>
        <li className={filter === "low" ? "active" : ""}>
          <button onClick={() => handleFilter("low")}>
            <span>{filtersCount.lowCount}</span>
            <span>Low</span>
          </button>
        </li>
        <li className={filter === "very low" ? "active" : ""}>
          <button onClick={() => handleFilter("very low")}>
            <span>{filtersCount.veryLowCount}</span>
            <span>Very Low</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

Filters.prototype = {
  handleFilter: PropTypes.func,
  filtersCount: PropTypes.object,
  filter: PropTypes.string,
};

export default Filters;
