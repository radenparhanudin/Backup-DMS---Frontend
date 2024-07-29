import React from "react";

export default function ButtonEdit({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-warning btn-sm d-flex gap-1 align-items-center"
    >
      <i className="fas fa-edit"></i>Edit
    </button>
  );
}
