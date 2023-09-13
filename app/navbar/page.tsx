"use client"

import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import React from 'react';
import { useState } from "react";

export default function Navbar() {

  const [showPop, setShowPop] = useState()

  return (
    <div className="w-full">
      <div className="h-[50px] w-full flex-row p-2">
        <div className="flex justify-between">
          <div className="flex flex-row justify-center gap-1">
            <p className="text-[18px] font-bold">Demo</p>
            <div className="flex justify-center pt-1">
              <RiArrowDownSLine size={25} />
            </div>
          </div>
          <div className="flex gap-2">
            <AiOutlineHeart size={30}/>
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
      </div>
    </div>
  );
}
