import React from "react";

export default function ButtonImport({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-warning d-flex gap-1 align-items-center text-nowrap"
    >
      <i className="fas fa-file-import"></i>
      Import
    </button>
  );
}
