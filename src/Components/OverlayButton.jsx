import React from "react";
import { Fragment } from "react";
import styles from "./style";
export function OverlayButton({ isOpen, onClose, children, btnName }) {
  return (
    <Fragment>
      {isOpen && (
        <div>
          <div className="backdrop-blur-3xl w-screen h-screen fixed top-0 left-0 z-40" />
          <div className="w-[403px] h-[303px] p-10 rounded-3xl fixed z-50 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 top-0 right-0 left-0 bottom-0 m-auto">
            <div className=" bg-gray-800 fixed top-0 right-0 left-0 bottom-0 m-auto z-50 p-[10px] w-[400px] h-[300px] rounded-3xl">
              <div className="flex justify-between items-center pb-2 border-b-2 border-orange-300">
                <h1 className="text-2xl font-poppins px-3 font-bold">
                  {btnName}
                </h1>
                <button
                  className={`${styles.searchButtonGradient} cursor-pointer rounded-2xl font-poppins border-none`}
                  type="button"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default OverlayButton;
