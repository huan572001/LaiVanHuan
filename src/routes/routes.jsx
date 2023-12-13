import { DashboardOutlined } from "@ant-design/icons";
import React, { lazy } from "react";
import routerLinks from "@/utils/router-links";
const routes = [
  {
    label: "Dashboard",
    path: routerLinks("Dashboard"),
    component: React.lazy(() => import("@/pages/test1")),
    key: "/",
  },
];
export const routesAuth = [
  {
    label: "home",
    path: routerLinks("Home"),
    component: React.lazy(() => import("@/pages/test2")),
    key: "/",
  },
];
export default routes;
