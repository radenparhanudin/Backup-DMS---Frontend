import React from "react";

export default function ButtonVerification({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-primary btn-sm d-flex gap-1 align-items-center"
    >
      <i className="fas fa-clipboard-check"></i>Verification
    </button>
  );
}
