import React from "react";
import { Fragment } from "react";
import styles from "./style";
export function OverlaySearchButton({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="">
          <div
            className="w-screen h-screen fixed top-0 left-0 z-40"
            onClick={onClose}
          />
          <div className="">
            <div className="xxs:w-[434px] h-[178px] sm:w-[454px] p-10 rounded-3xl fixed z-50 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 top-0 right-0 left-0 bottom-0 items-center mx-auto mt-[64px]">
              <div className=" bg-[#17153B] bg-opacity-75 fixed top-0 right-0 left-0 bottom-0 z-50 p-[10px] sm:w-[450px] xxs:w-[430px] h-[175px] rounded-3xl mx-auto my-[65px]">
                <div className="flex justify-between items-center pb-2 border-b-2 border-orange-300">
                  <h1 className="text-2xl font-poppins font-bold w-full">
                    Search
                  </h1>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default OverlaySearchButton;
