import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { usePageStateContext } from "../../../../contexts/PageContextProvider";
import Select from "react-select";
import ButtonSyncFile from "../../../../components/Button/ButtonSyncFile";
import axiosClient from "../../../../axiosClient";
import { toast } from "react-toastify";

export default function ModalPost() {
  /* Define variable */
  const limits = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 50, label: 50 },
    { value: 100, label: 100 },
    { value: 500, label: 500 },
    { value: 1000, label: 1000 },
  ];

  const resetFormData = {
    limit: "",
  };

  /* Props */
  /* Context */
  const {
    basePath,
    setReloadDataTable,
    showModalPost,
    setShowModalPost,
    formError,
    setFormError,
    formProcessing,
    setFormProcessing,
  } = usePageStateContext();

  const [formData, setFormData] = useState(resetFormData);
  const [selectedLimit, setSelectedLimit] = useState(null);

  /* State */
  /* useEffect */
  /* Handler */
  const closeModal = () => {
    setShowModalPost(false);
    setSelectedLimit(null);
    setFormError([]);
  };

  const selectOnChangeLimit = (selectedLimit) => {
    setSelectedLimit(selectedLimit);
    setFormData({
      ...formData,
      ...{
        limit: selectedLimit.value,
      },
    });
  };

  /* Create */
  /* Read */
  /* Update */
  /* Delete */
  /* Define Function */
  const doSubmit = (event) => {
    event.preventDefault();
    setFormProcessing(true);
    axiosClient
      .post(`${basePath}-file`, formData)
      .then(({ data }) => {
        setFormProcessing(false);
        setReloadDataTable(new Date());
        toast.success(data.message);
        closeModal();
      })
      .catch((err) => {
        setFormProcessing(false);
        const { response } = err;
        if (response != undefined) {
          const { data, status } = response;
          if (status == 422) {
            setFormError(data.message);
          } else {
            toast.error(data.message);
          }
        } else {
          console.log(err);
        }
      });
  };

  return (
    <Modal
      show={showModalPost}
      onHide={closeModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Sync File</Modal.Title>
      </Modal.Header>
      <form onSubmit={doSubmit}>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12 mb-3">
              <label className="form-label">Limit</label>
              <Select
                isDisabled={formProcessing}
                options={limits}
                onChange={selectOnChangeLimit}
                value={selectedLimit}
                classNamePrefix="my-react-select"
              />
              {formError.limit && (
                <div className="form-text text-danger">{formError.limit}</div>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-end">
          <ButtonSyncFile type="submit" processing={formProcessing} />
        </Modal.Footer>
      </form>
    </Modal>
  );
}
