import React from "react";

export default function ButtonReset({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-danger d-flex gap-1 align-items-center"
    >
      <i className="fas fa-sync-alt"></i>
      Reset
    </button>
  );
}
