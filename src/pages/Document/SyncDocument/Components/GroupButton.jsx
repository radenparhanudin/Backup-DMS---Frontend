import React, { useState } from "react";
import ButtonFilter from "../../../../components/Button/ButtonFilter";
import ButtonSync from "../../../../components/Button/ButtonSync";
import axiosClient from "../../../../axiosClient";
import { usePageStateContext } from "../../../../contexts/PageContextProvider";
import { toast } from "react-toastify";
import ButtonSyncFile from "../../../../components/Button/ButtonSyncFile";

export default function GroupButton() {
  /* Define variable */
  /* Props */
  /* Context */
  const { basePath, setReloadDataTable, setShowModalPost } =
    usePageStateContext();

  /* State */
  const [loadingSync, setLoadingSync] = useState(false);

  /* useEffect */
  /* Handler */
  /* Create */
  /* Read */
  /* Update */
  /* Delete */
  /* Define Function */
  const doSync = () => {
    setLoadingSync(true);
    axiosClient
      .post(`${basePath}`)
      .then(({ data }) => {
        setLoadingSync(false);
        setReloadDataTable(new Date());
        toast.success(data.message);
      })
      .catch((err) => {
        setLoadingSync(false);
        const { response } = err;
        if (response != undefined) {
          const { data, status } = response;
          toast.error(data.message);
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="mb-3 d-flex gap-1 flex-wrap">
      <ButtonSync onClick={() => doSync()} processing={loadingSync} />
      <ButtonSyncFile onClick={() => setShowModalPost(true)} />
    </div>
  );
}
