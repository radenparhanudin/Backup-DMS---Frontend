import React from "react";

export default function ButtonMetaData({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-secondary btn-sm d-flex gap-1 align-items-center"
    >
      <i className="fas fa-edit"></i>Meta Data
    </button>
  );
}
