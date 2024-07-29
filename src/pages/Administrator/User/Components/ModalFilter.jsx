import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { usePageStateContext } from "../../../../contexts/PageContextProvider";
import ButtonReset from "../../../../components/Form/ButtonReset";
import ButtonFilter from "../../../../components/Form/ButtonFilter";
import axiosClient from "../../../../axiosClient";
import Select from "react-select";

export default function ModalFilter() {
  /* Define variable */
  const resetFormData = {
    username: "",
    name: "",
  };

  /* Context */
  const { showModalFilter, setShowModalFilter, searchs, setSearchs } =
    usePageStateContext();

  /* State */
  const [formData, setFormData] = useState(resetFormData);
  const [documentTypes, setDocumentTypes] = useState([]);
  const [selecteddocumentType, setSelectedDocumentType] = useState();

  /* useEffect */

  /* Handler */
  const closeModal = () => {
    setShowModalFilter(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /* Define Function */

  const doFilter = (event) => {
    event.preventDefault();
    setSearchs({
      ...searchs,
      ...formData,
      ...{
        page: 1,
      },
    });
  };

  const doReset = () => {
    setFormData(resetFormData);
    setShowModalFilter(false);
    setSearchs({});
    setSelectedDocumentType(null);
  };

  return (
    <Modal show={showModalFilter} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>Filter</Modal.Title>
      </Modal.Header>
      <form onSubmit={doFilter}>
        <Modal.Body>
          <div className="row">
            <div className="col-sm-12 my-2">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="form-control"
                onChange={handleInputChange}
                value={formData.username}
              />
            </div>
            <div className="col-sm-12 my-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="form-control"
                onChange={handleInputChange}
                value={formData.name}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <ButtonFilter onClick={doFilter} />
          <ButtonReset onClick={doReset} />
        </Modal.Footer>
      </form>
    </Modal>
  );
}
