import React from "react";

export default function ButtonAdd({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-primary d-flex gap-1 align-items-center text-nowrap"
    >
      <i className="fas fa-plus"></i>
      Add
    </button>
  );
}
