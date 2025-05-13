import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter-buttons">
      {["All", "Pending", "Completed"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={filter === f ? "active" : ""}
        >
          {f}
        </button>
      ))}
    </div>
  );
};


export default Filter;