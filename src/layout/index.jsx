import { Layout } from "antd";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import HeaderComponent from "./Header";
import "./index.less";
import ReactGA from "react-ga";
import { useEffect } from "react";
const { Header, Sider, Content } = Layout;
const LayoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <HeaderComponent />
      <Content className="gradient !min-h-[200vh] md:!min-h-[120vh]">
        <Outlet />
      </Content>
    </Layout>
  );
};
export default LayoutPage;
