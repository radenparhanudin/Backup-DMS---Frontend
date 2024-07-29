import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { usePageStateContext } from "../../../../contexts/PageContextProvider";
import axiosClient from "../../../../axiosClient";
import LoadingDetail from "../../../../components/Loading/LoadingDetail";
import ButtonDownload from "../../../../components/Button/ButtonDownload";

export default function ModalDetail() {
  /* Define variable */
  /* Props */
  /* Context */
  const {
    basePath,
    dataSelected,
    setDataSelected,
    showModalPost,
    setShowModalPost,
  } = usePageStateContext();

  /* State */
  const [metaDataLoading, setMetaDataLoading] = useState(false);
  const [metaDatas, setMetaDatas] = useState([]);
  const [downloadingFile, setDownloadingFile] = useState(false);

  const [fileLoading, setFileLoading] = useState(false);
  const [fileMimeType, setFileMimeType] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  /* useEffect */

  useEffect(() => {
    if (dataSelected != null) {
      getFileUrl(dataSelected.id);
      getMetData(dataSelected.id);
    }
  }, [dataSelected]);

  /* Handler */
  const closeModal = () => {
    setShowModalPost(false);
    setDataSelected(null);
    setFileMimeType(null);
    setFileUrl(null);
    setMetaDatas([]);
  };

  /* Create */
  /* Read */
  const getFileUrl = (id) => {
    setFileLoading(true);
    axiosClient.get(`${basePath}/view/${id}`).then(({ data }) => {
      setFileLoading(false);
      setFileMimeType(data.data.mime_type);
      setFileUrl(data.data.url);
    });
  };

  const getMetData = (id) => {
    setMetaDataLoading(true);
    axiosClient.get(`/document/meta-datas/${id}`).then(({ data }) => {
      setMetaDataLoading(false);
      setMetaDatas(data.data);
    });
  };

  /* Update */
  /* Delete */
  /* Define Function */
  const doDownload = async () => {
    const path = dataSelected.path;
    const fileName = path.split("/").pop();
    setDownloadingFile(true);
    axiosClient
      .get(`${basePath}/download/${dataSelected.id}`, {
        responseType: "blob",
      })
      .then(({ data }) => {
        setDownloadingFile(false);
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
      });
  };

  return (
    <Modal
      show={showModalPost}
      onHide={closeModal}
      backdrop="static"
      keyboard={false}
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Detail Document</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-4">
            {metaDataLoading && <LoadingDetail />}
            {metaDatas &&
              metaDatas.map((metaData) => {
                return (
                  <div key={metaData.id} className="form-group mb-3">
                    <label className="fw-semibold">
                      {metaData.column_description}
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={metaData.value}
                    />
                  </div>
                );
              })}
          </div>
          <div className="col-md-8">
            {fileLoading && <LoadingDetail />}
            {fileUrl && (
              <>
                {fileMimeType == "image/jpeg" && (
                  <img src={fileUrl} width="60%" />
                )}
                {fileMimeType == "application/pdf" && (
                  <iframe
                    src={`${fileUrl}#toolbar=0`}
                    width="100%"
                    height="500px"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {fileUrl && (
          <ButtonDownload
            loadingDownload={downloadingFile}
            onClick={() => {
              doDownload(fileUrl);
            }}
          />
        )}
      </Modal.Footer>
    </Modal>
  );
}
