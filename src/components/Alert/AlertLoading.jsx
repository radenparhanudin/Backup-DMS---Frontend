import React from "react";
import { usePageStateContext } from "../../contexts/PageContextProvider";

export default function AlertLoading() {
  /* Context */
  const { loadingMessage } = usePageStateContext();
  return (
    <div className="alert alert-info" role="alert">
      <div className="d-flex align-items-center">
        <div className="spinner-border spinner-border-sm" aria-hidden="true" />
        <span className="ms-2" role="status">
          {loadingMessage}
        </span>
      </div>
    </div>
  );
}
