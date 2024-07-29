import React from "react";
import LoadingButton from "../Loading/LoadingButton";

export default function ButtonDownload({ onClick, loadingDownload }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loadingDownload}
      className="btn btn-primary d-flex gap-1 align-items-center text-nowrap"
    >
      {loadingDownload ? (
        <LoadingButton />
      ) : (
        <i className="fas fa-cloud-download-alt"></i>
      )}
      Download
    </button>
  );
}
