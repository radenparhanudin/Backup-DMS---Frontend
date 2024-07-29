import React from "react";
import { usePageStateContext } from "../../../../contexts/PageContextProvider";
import ButtonFilter from "../../../../components/Button/ButtonFilter";

export default function GroupButton() {
  /* Context */
  const { setShowModalFilter } = usePageStateContext();

  /* Read */

  return (
    <div className="mb-3 d-flex gap-1 flex-wrap">
      <ButtonFilter onClick={() => setShowModalFilter(true)} />
    </div>
  );
}
