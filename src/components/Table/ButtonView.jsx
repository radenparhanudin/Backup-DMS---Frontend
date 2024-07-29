import React from "react";

export default function ButtonView({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-secondary btn-sm d-flex gap-1 align-items-center"
    >
      <i className="far fa-eye"></i>View
    </button>
  );
}
