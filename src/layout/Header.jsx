import { Button, Dropdown, Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useAuth } from "@/context/AuthProvider";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { logo, petraIcon } from "@/assets";
import "./index.less";
import { useState } from "react";
import { format } from "prettier";
import { MenuFoldOutlined } from "@ant-design/icons";
import ReactGA from "react-ga4";
const menu = ["Products", "Protocols", "Tokens", "Use Cases"];
const HeaderComponent = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState();
  const [openMenu, setOpenMenu] = useState(false);
  const getAptosWallet = () => {
    if ("aptos" in window) {
      return window.aptos;
    } else {
      window.open("https://petra.app/", `_blank`);
    }
  };
  const petra = async () => {
    ReactGA.event({
      category: "connect",
      action: "connect",
      label: "connect",
      value: "connect",
    });
    const wallet = getAptosWallet();
    try {
      const response = await wallet.connect();
      console.log(response); // { address: string, address: string }

      const account = await wallet.account();
      ReactGA.event({
        category: "connect wallet",
        action: "connect wallet",
        nonInteraction: true,
      });
      setAccount(account);
    } catch (error) {
      console.log(error);
      // { code: 4001, message: "User rejected the request."}
    }
  };
  const formatAddress = (address) => {
    let shortCode =
      address.substring(0, 5) + "....." + address.substring(address.length - 5);
    return shortCode;
  };
  return (
    <Header className="h-48 md:h-36 bg-white  flex justify-between items-center header">
      <img
        src={logo}
        className="w-[260px] h-[135px] cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="hidden min-[900px]:flex items-center justify-between w-[821px] h-[45px]  bg-red-200 rounded-xl pl-8 pr-[14px] ">
        {menu?.map((e, index) => {
          return (
            <div
              key={index}
              className="w-16 h-[15.75px] text-gray-500 hover:text-gray-700 text-sm font-bold  leading-[21px] cursor-pointer"
            >
              {e}
            </div>
          );
        })}
        <div
          className="bg-white hover:bg-slate-100 max-w-[213px] rounded-[32px] shadow !px-0 py-[2px] cursor-pointer  "
          onClick={() => petra()}
        >
          {account ? (
            <div className="px-[14px] w-full flex justify-start items-center gap-2 text-center text-blue-950 text-base font-bold">
              <img src={petraIcon} />
              <div>{formatAddress(account?.address)}</div>
            </div>
          ) : (
            <div className="flex justify-center w-[203px] items-center text-center text-blue-950 text-base font-bold gap-1">
              <div>Connect Wallet</div>
              <div className=" text-center text-blue-950 text-base font-normal ">
                →
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid min-[900px]:hidden justify-end absolute right-5 top-12">
        <MenuFoldOutlined
          style={{ fontSize: 35 }}
          className="hover:text-pink-600 cursor-pointer text-end"
          onClick={() => setOpenMenu(!openMenu)}
        />
        {openMenu && (
          <div className="w-[200px] gradient opacity-90 border-[#000000] rounded-lg">
            <div className="py-4 px-2 ">
              {menu?.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="h-10  hover:bg-rose-400 rounded-lg grid justify-start items-center cursor-pointer"
                  >
                    <div className="px-3  text-gray-900 hover:text-gray-700 text-sm font-bold  leading-[21px] ">
                      {e}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Header>
  );
};

export default HeaderComponent;
