import NotFound from "../../pages/Global/NotFound";
import Login from "../../pages/Authentication/Login";

const global = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default global;
