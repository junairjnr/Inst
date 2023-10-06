"use client";

import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { FiStar } from "react-icons/fi";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Header() {
  const [showPop, setShowPop] = useState(false);

  useEffect(() => {
    const handleDocClick = (e: any) => {
      setShowPop(false);
    };
    document.body.addEventListener("click", handleDocClick);

    return () => {
      document.body.removeEventListener("click", handleDocClick);
    };
  }, []);

  return (
    <div className="w-full">
      <div className=" fixed z-10 h-[50px] text-white w-full flex-row p-2 bg-gray-800">
        <div className="flex justify-between ">
          <div className="flex flex-row justify-center gap-1">
            <p className="text-[18px] font-bold font-serif">Demo</p>
            <div
              onClick={() => setShowPop(true)}
              className=" flex justify-center pt-1 flex-col"
            >
              <RiArrowDownSLine size={25} className="" />
            </div>
          </div>
          <div className="flex gap-2">
            {/* <AiOutlineHeart size={30}/> */}
            <div className="relative flex items-center justify-center">
              <AiOutlineHeart
                size={30}
                className="text-textColor text-2xl  cursor-pointer "
              />
              <div
                className="absolute -top-0 -right-0 w-2 h-2 rounded-full bg-red-500 flex
         items-center justify-center"
              ></div>
            </div>
            <div className="relative flex items-center justify-center">
              <BsMessenger className="text-textColor text-2xl  cursor-pointer " />
              <div
                className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-red-500 flex
         items-center justify-center"
              >
                <p className="text-xs text-white font-semibold">2</p>
              </div>
            </div>
          </div>
        </div>
        {showPop && (
          <div className="absolute left-2 text-black w-[150px] h-[60px] flex justify-center bg-white flex-col p-2 rounded-md">
            <div className="flex flex-row justify-between">
              <p className="font-semibold  text-[14px] font-serif">Following</p>
              <IoMdContacts  size={20}/>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-semibold  text-[14px] font-serif">Favorites</p>
              <FiStar size={20}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
