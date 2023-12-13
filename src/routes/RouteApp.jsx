import { useAuth } from "@/context/AuthProvider";
import LayoutPage from "@/layout";
// import Login from "@/pages/Auth/Login";
import { useEffect } from "react";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes from "./routes";

const getPageRoute = () => {
  return routes.map((route) => {
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
      children: getPageRoute(),
    },
  ];
};

const RouterApp = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (auth?.user?.data?.role?.id !== 1) {
  //     navigate("/", { replace: true });
  //   }d
  // }, [auth?.user]);
  const element = useRoutes(RenderRoutes(auth?.user));

  return element;
};

export default RouterApp;
