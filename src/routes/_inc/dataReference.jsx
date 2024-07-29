import DashboardLayout from "../../layouts/DashboardLayout";
import DocumentStatus from "../../pages/DataReference/DocumentStatus";
import DocumentType from "../../pages/DataReference/DocumentType";
import UnitOrganisasi from "../../pages/DataReference/UnitOrganisasi";
const dataReference = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/data-reference/document-type",
        element: <DocumentType />,
      },
      {
        path: "/data-reference/document-status",
        element: <DocumentStatus />,
      },
      {
        path: "/data-reference/unit-organisasi",
        element: <UnitOrganisasi />,
      },
    ],
  },
];

export default dataReference;
