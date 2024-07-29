import React from "react";
import AlertLoading from "../Alert/AlertLoading";
import { usePageStateContext } from "../../contexts/PageContextProvider";

export default function LoadingInfo() {
  /* Context */
  const { loading } = usePageStateContext();

  return <>{loading && <AlertLoading />}</>;
}
