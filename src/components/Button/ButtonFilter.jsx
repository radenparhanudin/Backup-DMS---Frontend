import React from "react";

export default function ButtonFilter({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-secondary d-flex gap-1 align-items-center text-nowrap"
    >
      <i className="fas fa-filter"></i>
      Filter
    </button>
  );
}
