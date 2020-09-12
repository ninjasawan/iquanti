import React, { useState } from "react";
import discountOutputData from "../mockData/discountOutput";

const DiscountOutput = () => {
  const [open, isOpen] = useState(true);
  return (
    <div className="discount-output">
      <ul className="discount-output-top">
        <li>
          <span>Highest Rank</span>
          <span>{discountOutputData.highest_rank}</span>
        </li>
        <li>
          <span>Search Volume</span>
          <span>{`${discountOutputData.search_volume / 1000}k`}</span>
        </li>
        <li>
          <span>Theme</span>
          <span>{discountOutputData.theme_list.join(", ")}</span>
        </li>
      </ul>
      <div className="discount-output-bottom">
        <div className="discount-output-bottom-header">
          <h5>Pack Available</h5>
          <button
            className="btn"
            onClick={() => {
              isOpen(!open);
            }}
          >
            {open ? "Close" : "Open"}
          </button>
        </div>
        {open && (
          <ul>
            {discountOutputData.serp_packs.map((item, index) => (
              <li key={`packs-${index}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DiscountOutput;
