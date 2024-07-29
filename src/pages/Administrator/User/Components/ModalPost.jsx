import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { usePageStateContext } from "../../../../contexts/PageContextProvider";
import ButtonSimpan from "../../../../components/Form/ButtonSimpan";
import { toast } from "react-toastify";
import axiosClient from "../../../../axiosClient";
import Select from "react-select";
import LoadingDetail from "../../../../components/Loading/LoadingDetail";
import { pluck } from "../../../../helpers";

export default function ModalPost() {
  /* Define variable */
  let searchDistricts;
  const resetFormData = {
    district_id: "",
  };

  /* Context */
  const {
    basePath,
    setReloadDataTable,
    showModalPost,
    setShowModalPost,
    formProcessing,
    setFormProcessing,
    formError,
    setDetail,
    loadingDetail,
    setFormError,
    dataSelected,
    setDataSelected,
  } = usePageStateContext();

  /* State */
  const [formData, setFormData] = useState(resetFormData);
  const [districts, setDistricts] = useState([]);
  const [selectedDistricts, setSelectedDistricts] = useState(null);

  /* useEffect */
  useEffect(() => {
    getDistricts();
  }, []);

  useEffect(() => {
    if (dataSelected !== null) {
      const districts = dataSelected.districts;
      let tempDistricts = [];
      districts.map((district) => {
        tempDistricts.push({
          value: district.id,
          label: district.name,
        });
      });

      setSelectedDistricts(tempDistricts);

      setFormData({
        ...formData,
        ...{
          district_id: pluck(tempDistricts, "value"),
        },
      });
    }
  }, [dataSelected]);

  /* Handler */
  const closeModal = () => {
    setShowModalPost(false);
    setFormData(resetFormData);
    setFormError([]);
    setDataSelected(null);
    setDetail(null);
    setSelectedDistricts(null);
  };

  const onChangeSelectDistrictss = (selectedDistricts) => {
    setSelectedDistricts(selectedDistricts);
    setFormData({
      ...formData,
      district_id: pluck(selectedDistricts, "value"),
    });
  };

  /* Read */

  /* Update */
  const doSubmit = (event) => {
    event.preventDefault();
    setFormProcessing(true);
    setFormError([]);
    axiosClient
      .put(`${basePath}/${dataSelected.id}`, formData)
      .then(({ data }) => {
        setFormProcessing(false);
        closeModal();
        setReloadDataTable(new Date());
        toast.success(data.message);
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

  const getDistricts = () => {
    axiosClient.get(`/data-referensi/districts/search`).then(({ data }) => {
      setDistricts(data.data);
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
        <Modal.Title>User</Modal.Title>
      </Modal.Header>
      <form onSubmit={doSubmit}>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12 mb-3">
              <label className="form-label">District</label>
              <Select
                isDisabled={formProcessing}
                options={districts}
                isMulti
                onChange={onChangeSelectDistrictss}
                value={selectedDistricts}
                classNamePrefix="my-react-select"
              />
              {formError.district_id && (
                <div className="form-text text-danger">
                  {formError.district_id}
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <div>{loadingDetail && <LoadingDetail />}</div>
          <ButtonSimpan />
        </Modal.Footer>
      </form>
    </Modal>
  );
}
