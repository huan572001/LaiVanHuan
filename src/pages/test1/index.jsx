import { logo } from "@/assets";
import { useAuth } from "@/context/AuthProvider";
import { checkIp } from "@/services/auth";
import routerLinks from "@/utils/router-links";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ReactGA from "react-ga";
import withPageTracking from "@/hook/withPageTracking";

const Test1 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    { money: "$1.80B", describe: "30 Day Volume" },
    { money: "$0.84B", describe: "Managed on testX.fi" },
    { money: "$21.43M", describe: "Total Collateral Automated" },
  ]);
  const { loginGoogle } = useAuth();
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname);
  // }, []);
  const check = () => {
    ReactGA.event({
      category: "connect",
      action: "connect",
      nonInteraction: true,
    });
    // navigate(routerLinks("Home"));
  };
  return (
    <>
      <div className=" mx-3 sm:mx-9 ">
        <div className="grid justify-center md:flex md:justify-between  mt-24  gap-3">
          <div className="max-w-[585px]  text-white text-[69px] font-normal leading-[80px] tracking-wider text-center md:text-start">
            Explore and Earn on
            <img src={logo} className="w-[260px] h-[135px]" align="middle" />
          </div>
          <div className="grid justify-center w-full md:w-auto">
            <div className="w-[225px] h-[121px] bg-white rounded-[20px] shadow grid justify-center items-center">
              <div className="text-center">
                <img src={logo} className="w-[104px] h-[56px]" />
                <div className=" text-center text-slate-400 text-xs font-normal leading-normal">
                  test Front end interview 1
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center sm:justify-start">
          <div className="max-w-[423px] grid gap-[21px] mt-4 ">
            <div className=" h-[39.75px] bg-slate-100 rounded-[32px] flex justify-end items-center px-[9px]">
              <Button
                id="test"
                className="testGa px-6 bg-rose-300 hover:bg-rose-400 rounded-[32px] shadow text-blue-900 text-base leading-3 line font-normal text-center align-top"
              >
                Sign up
              </Button>
            </div>
            <div className="flex justify-between">
              <Button
                className="testGa h-10 bg-sky-300 hover:bg-sky-400 rounded-[32px] w-[150px] min-[480px]:w-[202px] grid items-center"
                onClick={() => loginGoogle()}
              >
                <div className="text-center text-white text-lg font-bold">
                  Log in
                </div>
              </Button>
              <Button
                className="h-10 w-[150px] bg-white rounded-[32px] shadow min-[480px]:w-[202px]"
                onClick={() => check()}
              >
                <div className=" text-center text-blue-900 text-base font-bold ">
                  Launch App
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid gap-4 md:gap-0 md:flex justify-around items-center mx-4 mt-[85px] min-h-[190px] py-11 bg-white bg-opacity-50 rounded-[20px] border border-white">
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
export default withPageTracking(Test1);
