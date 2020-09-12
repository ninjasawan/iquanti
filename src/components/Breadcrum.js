import React from "react";

const Breadcrum = () => {
  const breadcrumList = ["Optimize site", "Optimiation", "Keywords"];
  return (
    <ul className="breadcrum">
      {breadcrumList.map((item, i) => (
        <li key={`breadcrum-${i}`}>
          <a href="/">{item}</a>
          {i !== breadcrumList.length - 1 && <span>{">"}</span>}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrum;
