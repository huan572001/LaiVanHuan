import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const withPageTracking = (WrappedComponent) => {
  return (props) => {
    const location = useLocation();

    useEffect(() => {
      // Gửi dữ liệu theo dõi Google Analytics khi route thay đổi
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return <WrappedComponent {...props} />;
  };
};

export default withPageTracking;
