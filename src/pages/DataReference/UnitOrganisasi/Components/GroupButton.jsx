import React from "react";
import { usePageStateContext } from "../../../../contexts/PageContextProvider";
import * as FileSaver from "file-saver";
import { toast } from "react-toastify";
import ButtonExport from "../../../../components/Button/ButtonExport";
import ButtonFilter from "../../../../components/Button/ButtonFilter";
import ButtonAdd from "../../../../components/Button/ButtonAdd";
import axiosClient from "../../../../axiosClient";
import ButtonImport from "../../../../components/Button/ButtonImport";
import ButtonSync from "../../../../components/Button/ButtonSync";

export default function GroupButton() {
  /* Define variable */
  /* Props */
  /* Context */
  /* State */
  /* useEffect */
  /* Handler */
  /* Create */
  /* Read */
  /* Update */
  /* Delete */
  /* Define Function */

  /* Context */
  const { basePath, setReloadDataTable, formProcessing, setFormProcessing } =
    usePageStateContext();

  /* Read */
  const doSycn = () => {
    setFormProcessing(true);
    axiosClient.post(basePath).then(({ data }) => {
      setFormProcessing(false);
      setReloadDataTable(new Date());
      toast.success(data.message);
    });
  };

  return (
    <div className="mb-3 d-flex gap-1 flex-wrap">
      <ButtonSync processing={formProcessing} onClick={() => doSycn()} />
    </div>
  );
}
