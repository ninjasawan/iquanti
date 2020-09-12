import React, { lazy } from "react";
import PropTypes from "prop-types";
const Filters = lazy(() => import("../components/Filters"));

const DiscountList = ({ discountList, handleFilter, filtersCount, filter }) => {
  return (
    <div className="discount-list-wrapper">
      <Filters
        handleFilter={handleFilter}
        filtersCount={filtersCount}
        filter={filter}
      />
      <ul className="discount-list">
        {discountList.map((item, index) => (
          <li key={`list-${index}`}>
            <div>
              <span className="indicator"></span>
              <span>{item.display_text}</span>
            </div>
            <span
              className={item.is_positive_correlation ? "positive" : "negative"}
            >
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

DiscountList.prototype = {
  discountList: PropTypes.array,
  handleFilter: PropTypes.func,
  filtersCount: PropTypes.object,
  filter: PropTypes.string,
};

export default DiscountList;
