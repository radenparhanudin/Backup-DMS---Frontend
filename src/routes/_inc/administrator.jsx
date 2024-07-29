import DashboardLayout from "../../layouts/DashboardLayout";
import User from "../../pages/Administrator/User";
const administrator = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/administrator/user",
        element: <User />,
      },
    ],
  },
];

export default administrator;
