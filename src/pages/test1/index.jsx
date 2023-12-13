import { logo } from "@/assets";
import { useAuth } from "@/context/AuthProvider";
import { checkIp } from "@/services/auth";
import routerLinks from "@/utils/router-links";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const Test1 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    { money: "$1.80B", describe: "30 Day Volume" },
    { money: "$0.84B", describe: "Managed on testX.fi" },
    { money: "$21.43M", describe: "Total Collateral Automated" },
  ]);
  const { loginGoogle } = useAuth();

  return (
    <>
      <div className="ml-9">
        <div className="flex justify-between  mt-24 mr-20">
          <div className="w-[585px] h-[255px] text-white text-[69px] font-normal leading-[80px] tracking-wider">
            Explore and Earn on
            <img src={logo} className="w-[260px] h-[135px]" align="middle" />
          </div>
          <div className="w-[225px] h-[121px] bg-white rounded-[20px] shadow grid justify-center items-center">
            <div className="text-center">
              <img src={logo} className="w-[104px] h-[56px]" />
              <div className=" text-center text-slate-400 text-xs font-normal leading-normal">
                test Front end interview 1
              </div>
            </div>
          </div>
        </div>
        <div className="w-[423px] grid gap-[21px] ml">
          <div className=" h-[39.75px] bg-slate-100 rounded-[32px] flex justify-end items-center px-[9px]">
            <Button className="px-6 bg-rose-300 hover:bg-rose-400 rounded-[32px] shadow text-blue-900 text-base leading-3 line font-normal text-center align-top">
              Sign up
            </Button>
          </div>
          <div className="flex justify-between">
            <div
              className=" h-10 bg-sky-300 hover:bg-sky-400 rounded-[32px] px-[62px] grid items-center"
              onClick={() => loginGoogle()}
            >
              <div className="text-center text-white text-lg font-bold">
                Log in
              </div>
            </div>
            <Button className="h-10 bg-white rounded-[32px] shadow px-[56px]">
              <div className=" text-center text-blue-900 text-base font-bold ">
                Launch App
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center mx-4 mt-[85px] h-[190px] bg-white bg-opacity-50 rounded-[20px] border border-white">
        {data?.map((e, index) => {
          return (
            <div key={index} className="grid gap-3">
              <div className=" text-center text-[#17344F] text-[49px] font-normal leading-[64px]">
                {e?.money}
              </div>
              <div className=" text-center text-gray-500 text-base font-normal leading-normal">
                {e?.describe}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Test1;
