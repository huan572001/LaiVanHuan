import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useAuth } from "@/context/AuthProvider";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { logo, petraIcon } from "@/assets";
import "./index.less";
import { useState } from "react";
import { format } from "prettier";
const menu = ["Products", "Protocols", "Tokens", "Use Cases"];
const HeaderComponent = () => {
  const { user } = useAuth();
  const [account, setAccount] = useState({
    address:
      "0xab8cc8b5e6b70ba3332d4284316bcae4e671390dfd57608277827f1da5919db0",
    publicKey:
      "0xf01dffb5aea5dce48909cc1210025bffa22eacd838806bb79dfcf90996a7c3d4",
  });
  const getAptosWallet = () => {
    if ("aptos" in window) {
      return window.aptos;
    } else {
      window.open("https://petra.app/", `_blank`);
    }
  };
  const petra = async () => {
    const wallet = getAptosWallet();
    try {
      const response = await wallet.connect();
      console.log(response); // { address: string, address: string }

      const account = await wallet.account();
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
        <div
          className="bg-white hover:bg-slate-100 w-[213px] rounded-[32px] shadow !px-0 py-[2px] cursor-pointer  "
          onClick={() => petra()}
        >
          {user ? (
            user?.name
          ) : (
            <>
              {!account ? (
                <div className="px-[14px] w-full flex justify-start items-center gap-2 text-center text-blue-950 text-base font-bold">
                  <img src={petraIcon} />
                  <div>{formatAddress(account?.address)}</div>
                </div>
              ) : (
                <div className="flex justify-center items-center text-center text-blue-950 text-base font-bold gap-1">
                  <div>Connect Wallet</div>
                  <div className=" text-center text-blue-950 text-base font-normal ">
                    →
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
