import React from "react";

export default function LoadingDetail({ message = "Loading..." }) {
  return (
    <div className="d-flex align-items-center gap-1">
      <div
        className="spinner-border spinner-border-sm"
        aria-hidden="true"
      ></div>
      <span role="status">{message}</span>
    </div>
  );
}
