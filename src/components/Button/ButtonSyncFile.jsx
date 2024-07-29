import React from "react";
import LoadingButton from "../Loading/LoadingButton";

export default function ButtonSyncFile({
  onClick,
  type = "button",
  processing = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={processing}
      className="btn btn-warning d-flex gap-1 align-items-center text-nowrap"
    >
      {processing ? <LoadingButton /> : <i className="far fa-copy"></i>}
      Sync File
    </button>
  );
}
