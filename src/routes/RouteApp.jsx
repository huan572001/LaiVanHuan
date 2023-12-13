import { useAuth } from "@/context/AuthProvider";
import LayoutPage from "@/layout";
// import Login from "@/pages/Auth/Login";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes, { routesAuth } from "./routes";
import Test1 from "@/pages/test1";
import routerLinks from "@/utils/router-links";
import axios from "axios";
import NotFound from "@/pages/404";
import { checkIp } from "@/services/auth";

const getPageRoute = (isAuthen) => {
  let R = [];
  if (isAuthen) {
    R = [...routes, ...routesAuth];
  } else {
    R = routes;
  }
  return R.map((route) => {
    const Comp = route?.component;
    return {
      path: route?.path,
      element: <PrivateRoute component={Comp} isAllowed={true} />,
    };
  });
};

const RenderRoutes = (isAuthen, ip) => {
  let routes = [];
  if (ip) {
    if (ip?.country === "JP") {
      routes = [
        {
          path: "/",
          element: <NotFound />,
        },
      ];
    } else {
      routes = [
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/",
          element: <LayoutPage />,
          children: getPageRoute(isAuthen),
        },
      ];
    }
  }

  return routes;
};

const RouterApp = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [ip, setIP] = useState();
  const checkIpAddress = async () => {
    try {
      const req = await checkIp();
      setIP(req.data);
    } catch (error) {}
  };
  useEffect(() => {
    if (!auth?.user) {
      navigate("/", { replace: true });
    }
    checkIpAddress();
  }, [auth?.user]);
  const element = useRoutes(RenderRoutes(auth?.user, ip));

  return element;
};

export default RouterApp;
