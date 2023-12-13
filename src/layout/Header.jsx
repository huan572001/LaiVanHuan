import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useAuth } from "@/context/AuthProvider";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { logo } from "@/assets";
import "./index.less";
const menu = ["Products", "Protocols", "Tokens", "Use Cases"];
const HeaderComponent = () => {
  const { user } = useAuth();
  const getAptosWallet = () => {
    if ("aptos" in window) {
      return window.aptos;
    } else {
      window.open("https://petra.app/", `_blank`);
    }
  };
  const petra = async () => {
    const wallet = getAptosWallet();
    console.log(wallet, "dá");
    try {
      const response = await wallet.connect();
      console.log(response); // { address: string, address: string }

      const account = await wallet.account();
      console.log(account); // { address: string, address: string }
    } catch (error) {
      console.log(error);
      // { code: 4001, message: "User rejected the request."}
    }
  };
  return (
    <Header className="h-36 bg-white flex justify-between items-center header">
      <img src={logo} className="w-[260px] h-[135px]" />
      <div className="flex items-center justify-between w-[821px] h-[45px]  bg-red-200 rounded-xl pl-8 pr-[14px]">
        {menu?.map((e, index) => {
          return (
            <div
              key={index}
              className="w-16 h-[15.75px] text-gray-500 text-sm font-bold  leading-[21px]"
            >
              {e}
            </div>
          );
        })}
        <Button
          className="bg-white rounded-[32px] shadow !px-9"
          onClick={() => petra()}
        >
          {user ? (
            user?.name
          ) : (
            <div className="flex justify-center items-center text-center text-blue-950 text-base font-bold gap-1">
              <div>Connect Wallet</div>
              <div className=" text-center text-blue-950 text-base font-normal ">
                →
              </div>
            </div>
          )}
        </Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
