import React from "react";

export default function ButtonReset({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-danger btn-sm d-flex gap-1 align-items-center"
    >
      <i className="fas fa-info-circle"></i>Reset
    </button>
  );
}
