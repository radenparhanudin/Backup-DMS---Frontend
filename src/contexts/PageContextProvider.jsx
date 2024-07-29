import { createContext, useContext, useState } from "react";
const PageStateContext = createContext({
  basePath: null,
  dataTables: [],
  setDataTables: () => {},
  paginations: [],
  setPaginations: () => {},
  searchs: {},
  setSearchs: () => {},
  reloadDataTable: new Date(),
  setReloadDataTable: () => {},
  dataSelected: null,
  setDataSelected: () => {},
  loading: false,
  setLoading: () => {},
  loadingExport: false,
  setLoadingExport: () => {},
  loadingMessage: null,
  setLoadingMessage: () => {},
  alert: null,
  setAlert: () => {},
  alertMessage: null,
  setAlertMessage: () => {},
  formProcessing: false,
  setFormProcessing: () => {},
  formError: [],
  setFormError: () => {},
  loadingDetail: false,
  setLoadingDetail: () => {},
  detail: null,
  setDetail: () => {},
  showModalPost: false,
  setShowModalPost: () => {},
  showModalFilter: false,
  setShowModalFilter: () => {},
  showModalImport: false,
  setShowModalImport: () => {},
});

export const PageContextProvider = ({ children, basePath }) => {
  /* Data Table */
  const [dataTables, setDataTables] = useState([]);
  const [paginations, setPaginations] = useState([]);
  const [searchs, setSearchs] = useState({});
  const [reloadDataTable, setReloadDataTable] = useState(new Date());
  const [dataSelected, setDataSelected] = useState(null);

  /* Loading */
  const [loading, setLoading] = useState(false);
  const [loadingExport, setLoadingExport] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [alert, setAlert] = useState(null);
  const [alertMessage, setAlertMessage] = useState("No Message");
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [detail, setDetail] = useState(null);

  const [formProcessing, setFormProcessing] = useState(false);
  const [formError, setFormError] = useState([]);

  /* Modal */
  const [showModalPost, setShowModalPost] = useState(false);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [showModalImport, setShowModalImport] = useState(false);

  return (
    <PageStateContext.Provider
      value={{
        basePath,
        dataTables,
        setDataTables,
        paginations,
        setPaginations,
        searchs,
        setSearchs,
        reloadDataTable,
        setReloadDataTable,
        dataSelected,
        setDataSelected,
        loading,
        setLoading,
        loadingExport,
        setLoadingExport,
        loadingMessage,
        setLoadingMessage,
        alert,
        setAlert,
        alertMessage,
        setAlertMessage,
        formProcessing,
        setFormProcessing,
        formError,
        setFormError,
        detail,
        setDetail,
        loadingDetail,
        setLoadingDetail,
        showModalPost,
        setShowModalPost,
        showModalFilter,
        setShowModalFilter,
        showModalImport,
        setShowModalImport,
      }}
    >
      {children}
    </PageStateContext.Provider>
  );
};

export const usePageStateContext = () => useContext(PageStateContext);
