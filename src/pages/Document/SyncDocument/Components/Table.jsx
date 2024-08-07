import React, { useEffect, useState } from "react";
import axiosClient from "../../../../axiosClient";
import { usePageStateContext } from "../../../../contexts/PageContextProvider";
import SimpleBar from "simplebar-react";
import LoadingTable from "../../../../components/Loading/LoadingTable";

export default function Table() {
  /* Context */
  const {
    basePath,
    dataTables,
    setDataTables,
    setPaginations,
    searchs,
    setSearchs,
    reloadDataTable,
    setReloadDataTable,
    setDataSelected,
    setLoading,
    setLoadingMessage,
    setShowModalPost,
  } = usePageStateContext();

  /* State */
  const [loadingTable, setLoadingTable] = useState(false);

  /* useEffect */
  useEffect(() => {
    const params = new URLSearchParams(searchs).toString();
    getDataTable(params);
  }, [searchs, reloadDataTable]);

  /* Define Function */
  const getDataTable = (params) => {
    setLoadingTable(true);
    axiosClient
      .get(`${basePath}?${params}`)
      .then(({ data }) => {
        setLoadingTable(false);
        setDataTables(data.data.data);
        setPaginations(data.data.links);
      })
      .catch((err) => {
        setLoading(false);
        setLoadingMessage(null);
        console.log(err);
      });
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="position-relative">
          <SimpleBar>
            {loadingTable && <LoadingTable />}
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Update</th>
                  <th scope="col">USER</th>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                  <th scope="col">Size</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {dataTables.length == 0 && (
                  <tr>
                    <td colSpan={7} className="text-secondary">
                      No data available yet!
                    </td>
                  </tr>
                )}
                {dataTables &&
                  dataTables.map((dataTable) => {
                    return (
                      <tr key={dataTable.id}>
                        <td>{dataTable.tanggal_update}</td>
                        <td className="text-nowrap">
                          {dataTable.user && dataTable.user.username}
                        </td>
                        <td className="text-nowrap">
                          {dataTable.user && dataTable.user.name}
                        </td>
                        <td className="text-nowrap">
                          {dataTable.document_type &&
                            dataTable.document_type.name}
                        </td>
                        <td className="text-nowrap">
                          {dataTable.additional_name}
                        </td>
                        <td className="text-nowrap">
                          {dataTable.file_size} KB
                        </td>
                        <td className="text-nowrap">
                          {[1, 4].includes(dataTable.document_status_id) && (
                            <span className="text-danger fw-medium">
                              {dataTable.document_status &&
                                dataTable.document_status.status}
                            </span>
                          )}
                          {[2, 3].includes(dataTable.document_status_id) && (
                            <span className="text-info fw-medium">
                              {dataTable.document_status &&
                                dataTable.document_status.status}
                            </span>
                          )}
                          {[5].includes(dataTable.document_status_id) && (
                            <span className="text-success fw-medium">
                              {dataTable.document_status &&
                                dataTable.document_status.status}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
}
