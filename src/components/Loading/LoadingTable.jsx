import React from "react";
import GridLoader from "react-spinners/GridLoader";

export default function LoadingTable() {
  return (
    <div className="position-absolute d-flex justify-content-center w-100 h-100 align-items-center start-0 end-0">
      <GridLoader color="#10487A" size={7} />
    </div>
  );
}
