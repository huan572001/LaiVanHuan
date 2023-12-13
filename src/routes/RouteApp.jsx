import { useAuth } from "@/context/AuthProvider";
import LayoutPage from "@/layout";
// import Login from "@/pages/Auth/Login";
import { useEffect } from "react";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes, { routesAuth } from "./routes";
import Test1 from "@/pages/test1";
import routerLinks from "@/utils/router-links";

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

const RenderRoutes = (isAuthen) => {
  return [
    {
      path: "/",
      element: <LayoutPage />,
      children: getPageRoute(isAuthen),
    },
  ];
};

const RouterApp = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.user) {
      navigate("/", { replace: true });
    }
  }, [auth?.user]);
  const element = useRoutes(RenderRoutes(auth?.user));

  return element;
};

export default RouterApp;
