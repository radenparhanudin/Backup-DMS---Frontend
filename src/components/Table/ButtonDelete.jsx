import React from "react";

export default function ButtonDelete({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-danger btn-sm d-flex gap-1 align-items-center"
    >
      <i className="fas fa-trash"></i>Delete
    </button>
  );
}
