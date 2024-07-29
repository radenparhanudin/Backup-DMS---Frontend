import React from "react";
import LoadingButton from "../Loading/LoadingButton";
import { usePageStateContext } from "../../contexts/PageContextProvider";

export default function ButtonSimpan() {
  /* Context */
  const { formProcessing, loadingDetail } = usePageStateContext();

  return (
    <button
      className="btn btn-primary d-flex gap-1 align-items-center"
      type="submit"
      disabled={formProcessing || loadingDetail}
    >
      {formProcessing ? <LoadingButton /> : <i className="bi bi-hdd"></i>}
      Save
    </button>
  );
}
