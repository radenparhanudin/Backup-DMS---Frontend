import React from "react";

export default function ButtonFilter({ onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="btn btn-dark d-flex gap-1 align-items-center"
    >
      <i className="fas fa-filter"></i>
      Filter
    </button>
  );
}
