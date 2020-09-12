import React, { lazy, useState, useCallback } from "react";
import discountList from "../mockData/discountList";
const DiscountOutput = lazy(() => import("../components/DiscountOutput"));
const Search = lazy(() => import("../components/Search"));
const DiscountList = lazy(() => import("../components/DiscountList"));

const discountListData = discountList.parameters;

const filtersCount = () => {
  let veryHighCount = [],
    highCount = [],
    mediumCount = [],
    lowCount = [],
    veryLowCount = [],
    allCount = discountListData.length;
  for (let i = 0; i < discountListData.length; i++) {
    const item = discountListData[i];
    if (item.importance === "very high") veryHighCount.push(item);
    if (item.importance === "high") highCount.push(item);
    if (item.importance === "medium") mediumCount.push(item);
    if (item.importance === "low") lowCount.push(item);
    if (item.importance === "very low") veryLowCount.push(item);
  }
  return {
    veryHighCount: veryHighCount.length,
    highCount: highCount.length,
    mediumCount: mediumCount.length,
    lowCount: lowCount.length,
    veryLowCount: veryLowCount.length,
    allCount,
  };
};

const OptimizationPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  const handleSearchFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      alert(searchText);
      setSearchText("");
    },
    [searchText]
  );

  const handleFilter = useCallback((selected) => {
    setFilter(selected);
  }, []);

  const filteredData =
    filter === "all"
      ? discountListData
      : discountListData.filter((item) => item.importance === filter);

  return (
    <div>
      <Search
        value={searchText}
        onChange={handleSearchTextChange}
        onSubmit={handleSearchFormSubmit}
      />
      {searchText && (
        <p className="search-hint">{`Keyword: "${searchText}"`}</p>
      )}
      <div className="output-wrapper">
        <DiscountOutput />
        <DiscountList
          filtersCount={filtersCount()}
          discountList={filteredData}
          handleFilter={handleFilter}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default OptimizationPage;
