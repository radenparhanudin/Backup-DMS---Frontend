import React from "react";
import { GridLoader } from "react-spinners";

export default function LoadingPage() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 w-100">
      <GridLoader color="#10487A" size={7} />
    </div>
  );
}
