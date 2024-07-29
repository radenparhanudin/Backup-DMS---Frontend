import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import LoadingButton from "../Loading/LoadingButton";
import axiosClient from "../../axiosClient";
import { usePageStateContext } from "../../contexts/PageContextProvider";

export default function ModalImport() {
  /* Define variable */
  const resetForm = { file_import: "" };

  /* Context */
  const { basePath, showModalImport, setShowModalImport, setReloadDataTable } =
    usePageStateContext();

  /* State */
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState([]);
  const [formData, setFormData] = useState(resetForm);

  /* Handler */
  const closeModal = () => {
    setShowModalImport(false);
    setFormData(resetForm);
    setError([]);
  };

  const handleInputChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  /* Define Function */
  const doImport = (event) => {
    event.preventDefault();
    setProcessing(true);
    setError([]);
    axiosClient
      .post(`${basePath}/import`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        setProcessing(false);
        setReloadDataTable(new Date());
        toast.success(data.message);
        closeModal();
      })
      .catch((err) => {
        setProcessing(false);
        const { response } = err;
        if (response != undefined) {
          const { data, status } = response;
          if (status == 422) {
            setError(data.message);
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
      show={showModalImport}
      onHide={closeModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Import File</Modal.Title>
      </Modal.Header>
      <form onSubmit={doImport}>
        <Modal.Body>
          <input
            type="file"
            name="file_import"
            id="file_import"
            className={`form-control ${error.file_import && "is-invalid"}`}
            onChange={handleInputChange}
          />
          {error.file_import && (
            <div className="invalid-feedback">{error.file_import}</div>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-end">
          <Button
            className="d-flex gap-1 align-items-center"
            type="submit"
            variant="warning"
            disabled={processing}
          >
            {processing ? (
              <LoadingButton />
            ) : (
              <i className="fas fa-file-import"></i>
            )}
            Import
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
