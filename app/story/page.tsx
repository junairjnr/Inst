import Image from "next/image";
import Header from "../header/page";
import { HiPlusSm } from "react-icons/hi";
import Jnr from "../assets/jnr.jpeg";

export default function Story() {
  return (
    <div className=" w-full bg-gray-50">
      <div className="w-full ">
        <div className="w-full h-[160px] pl-2 pr-2 flex justify-center bg-gray-100 border-[#cac7c7] pt-[50px]">
          <div className="relative w-full flex justify-center items-center overflow-x-scroll overflow-y-hidden scroll-smooth">
            <div className="w-full flex  gap-2 items-center pt-2">
              <div className="w-full flex relative flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      className="bg-white rounded-full object-fill"
                      width={80}
                      height={80}
                      alt=""
                      src={Jnr}
                    />

                    <div className="absolute right-0 bottom-5 w-5 h-5 rounded-full bg-blue-400 flex justify-center items-center">
                      <HiPlusSm />
                    </div>
                  </div>
                  <p className="text-[12px] text-gray-800">Your story</p>
                </div>
              </div>

              <div className="flex w-full flex-col justify-center items-center">
                <div className="w-[80px] h-[80px] bg-white rounded-full"></div>
                <p className="text-[12px]">person</p>
              </div>
              <div className="flex w-full flex-col justify-center items-center">
                <div className="w-[80px] h-[80px] bg-white rounded-full"></div>
                <p className="text-[12px]">person</p>
              </div>
              <div className="flex w-full flex-col justify-center items-center">
                <div className="w-[80px] h-[80px] bg-white rounded-full"></div>
                <p className="text-[12px]">person</p>
              </div>
              <div className="flex w-full flex-col justify-center items-center">
                <div className="w-[80px] h-[80px] bg-white rounded-full"></div>
                <p className="text-[12px]">person</p>
              </div>
              <div className="flex w-full flex-col justify-center items-center">
                <div className="w-[80px] h-[80px] bg-white rounded-full"></div>
                <p className="text-[12px]">person</p>
              </div>
              <div className="flex w-full flex-col justify-center items-center">
                <div className="w-[80px] h-[80px] bg-white rounded-full"></div>
                <p className="text-[12px]">person</p>
              </div>
              <div className="flex w-full flex-col justify-center items-center">
                <div className="w-[80px] h-[80px] bg-8hite rounded-full"></div>
                <p className="text-[12px]">person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
