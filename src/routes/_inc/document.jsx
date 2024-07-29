import DashboardLayout from "../../layouts/DashboardLayout";
import Document from "../../pages/Document/Document";
import SyncDocument from "../../pages/Document/SyncDocument";
const document = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/document",
        element: <Document />,
      },
      {
        path: "/document/sync",
        element: <SyncDocument />,
      },
    ],
  },
];

export default document;
