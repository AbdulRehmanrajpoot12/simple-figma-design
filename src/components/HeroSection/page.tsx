import React from "react";
import {Libre_Bodoni} from "next/font/google";
import Image from 'next/image';

const libreBodoni = Libre_Bodoni({
    weight:["500","700"],
    subsets:["latin"],
})

const HeroPage = () => {
    return (
      <div className="flex w-[1366px] h-[85px] md:flex-auto sm:place-items-start">
          <div>
              <h2 className={`${libreBodoni.className} flex w-[50%] text-[#000000] text-[32px] font-bold leading-[50px] pt-28  pl-44`}>
                  IMPECCABLE CRAFTSMANSHIP AND FINESSE
              </h2>
              <p className={`${libreBodoni.className} flex w-[65%] text-[#787054] font-medium text-base mt-5 pl-44 tracking-wider leading-8`}>
                  An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
              </p>
              <button className="flex mt-9 pl-44 pb-4">
                  <div className={`${libreBodoni.className} bg-[#A29875] text-[#FFFFFF] font-medium text-lg rounded-[10px] py-2 px-8`}>
                      Explore Now
                  </div>
              </button>
          </div>
          <div className="relative inline-block">
            <Image 
                src="/images/hero-image.jpg" 
                alt="image"
                width={500}
                height={500}
                className="flex w-full mt-14 pr-36 pb-24 rounded-tl-[150px] rounded-br-[250px] " 
            />
            <div 
                className="absolute flex border-[1px] border-[#FFFFFF] w-[280px] h-[390px] -mt-[520px] ml-8 rounded-tl-[150px] rounded-br-[150px]"
            />
          </div>
      </div>
    );
  };
  
  export default HeroPage;