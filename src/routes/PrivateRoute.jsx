import { Navigate } from "react-router-dom";

function PrivateRoute({ component: Component, isAllowed }) {
  return isAllowed ? <Component /> : <Navigate to="/" />;
}

export default PrivateRoute;
