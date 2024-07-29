import { createBrowserRouter } from "react-router-dom";
import global from "./_inc/global";
import dashboard from "./_inc/dashboard";
import dataReference from "./_inc/dataReference";
import document from "./_inc/document";
import administrator from "./_inc/administrator";

const router = createBrowserRouter([
  ...global,
  ...dashboard,
  ...dataReference,
  ...document,
  ...administrator,
]);
export default router;
