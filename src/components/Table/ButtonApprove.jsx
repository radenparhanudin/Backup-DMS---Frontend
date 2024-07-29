import React from "react";

export default function ButtonApprove({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-primary btn-sm d-flex gap-1 align-items-center"
    >
      <i className="far fa-check-circle"></i>Approve
    </button>
  );
}
