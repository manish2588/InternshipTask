"use client";
import React, { useState } from "react";
export default function Tooltip({ children, content, direction = "top" }) {
  const [show, setShow] = useState(false);
  //for defining position for content
  const position = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2 origin-bottom",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2 origin-top",
    left: "right-full mr-2 top-1/2 -translate-y-1/2 origin-right",
    right: "left-full ml-2 top-1/2 -translate-y-1/2 origin-left",
  };
  //for defining arrow direction
  const arrow = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-white border-x-transparent border-x-8 border-t-8",
    bottom:
      "bottom-full left-1/2 -translate-x-1/2 border-b-white border-x-transparent border-x-8 border-b-8",
    left: "left-full top-1/2 -translate-y-1/2 border-l-white border-y-transparent border-y-8 border-l-8",
    right:
      "right-full top-1/2 -translate-y-1/2 border-r-white border-y-transparent border-y-8 border-r-8",
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>

      {show && (
        <div className={`absolute ${position[direction]} z-50 w-40`}>
          <div className="animate-tooltip-open" data-direction={direction}>
            <div className="bg-white text-gray-800 text-sm px-3 py-2 rounded-md shadow-lg relative">
              {content}
              <div className={`absolute w-0 h-0 ${arrow[direction]}`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}