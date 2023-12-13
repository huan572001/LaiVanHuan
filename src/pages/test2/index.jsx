import { logo } from "@/assets";
import { Button } from "antd";
import { useState } from "react";

const Test2 = () => {
  return (
    <>
      <div className="mx-[130px] mt-[178px]">
        <div className="text-white text-[28px] font-bold  leading-7">
          <p>
            Nút ‘connect wallet': connect with Petra wallet (ví trên blockchain
            network Aptos)
          </p>
          <p>Nút ‘Log in’: allow users to log in using Google</p>
          <p>
            Nút ‘Launch App': once users log in, send them to the #test2 page
            (this page). if users haven't logged in, don't let them see the
            second page
          </p>
          <p>
            {`Photoshop phần white part out ‘testX’ logo và dùng chữ test X => cho
            phần ‘Explore and Earn on testX’`}
          </p>
          <p>The next step is to deploy your work on vercel.</p>
          <p>Block access for IP from Japan.</p>
          <p>
            Share the vercel link along with your code (github link to the
            repo).
          </p>
        </div>
        <div className="text-white text-[28px] font-bold leading-7 mt-[80px]">
          CONGRATS ON PASSING THE CODING INTERVIEW!
        </div>
      </div>
    </>
  );
};
export default Test2;
