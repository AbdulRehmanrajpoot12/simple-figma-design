import React from "react";
import {Rye} from "next/font/google";

const rye = Rye({
    weight:["400"],
    subsets:["latin"],
    display: "swap",
});

const HeaderPage = () => {
  return (
    <div>
        <div className="flex w-[1366px] h-[85px] bg-[#A29875]">
            <h1 className={`${rye.className} text-[#FFFFFF] text-[45px] leading-[93.75px] pr-5 pl-9`}>MANZZARI</h1>
        </div>
    </div>
  );
};

export default HeaderPage;