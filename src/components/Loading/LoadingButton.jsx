import React from "react";

export default function LoadingButton() {
  return (
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
