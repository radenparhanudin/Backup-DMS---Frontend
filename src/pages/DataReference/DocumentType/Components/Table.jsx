import React, { useEffect, useState } from "react";
import axiosClient from "../../../../axiosClient";
import { usePageStateContext } from "../../../../contexts/PageContextProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import SimpleBar from "simplebar-react";
import LoadingTable from "../../../../components/Loading/LoadingTable";
import ButtonDelete from "../../../../components/Table/ButtonDelete";
import ButtonEdit from "../../../../components/Table/ButtonEdit";

export default function Table() {
  /* Context */
  const {
    basePath,
    dataTables,
    setDataTables,
    setPaginations,
    searchs,
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
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col" className="text-nowrap align-middle">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataTables.length == 0 && (
                  <tr>
                    <td colSpan={1} className="text-secondary">
                      No data available yet!
                    </td>
                  </tr>
                )}
                {dataTables &&
                  dataTables.map((dataTable) => {
                    return (
                      <tr key={dataTable.id}>
                        <td className="text-nowrap">{dataTable.name}</td>
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
