import React from "react";

export default function ButtonSend({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-primary btn-sm d-flex gap-1 align-items-center"
    >
      <i className="far fa-paper-plane"></i>Send
    </button>
  );
}
