import DashboardLayout from "../../layouts/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard";
const dashboard = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default dashboard;
