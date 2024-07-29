import React from "react";
import LoadingButton from "../Loading/LoadingButton";

export default function ButtonExport({ onClick, loadingExport }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loadingExport}
      className="btn btn-success d-flex gap-1 align-items-center text-nowrap"
    >
      {loadingExport ? (
        <LoadingButton />
      ) : (
        <i className="fas fa-file-export"></i>
      )}
      Export
    </button>
  );
}
