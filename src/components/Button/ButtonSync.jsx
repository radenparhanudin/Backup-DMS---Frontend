import React from "react";
import LoadingButton from "../Loading/LoadingButton";

export default function ButtonSync({ onClick, processing = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={processing}
      className="btn btn-primary d-flex gap-1 align-items-center text-nowrap"
    >
      {processing ? <LoadingButton /> : <i className="fas fa-sync-alt"></i>}
      Sync Data
    </button>
  );
}
