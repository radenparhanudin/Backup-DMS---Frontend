import React from "react";

export default function ButtonDetail({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-info btn-sm d-flex gap-1 align-items-center"
    >
      <i className="fas fa-info-circle"></i>Detail
    </button>
  );
}
