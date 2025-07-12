"use client";
import React from "react";
export default function MessageBox({
  message ,
  direction = "right",
}) {
  const arrowClass = {  //for defining arrow direction
    right:
      "left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-white border-y-transparent border-y-8 border-r-8",
    left: "right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-black/80 border-y-transparent border-y-8 border-l-8",
    top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-b-black/80 border-x-transparent border-x-8 border-b-8",
    bottom:
      "top-0 left-1/2 -translate-x-1/2 -translate-y-full border-t-black/80 border-x-transparent border-x-8 border-t-8",
  };

  return (
    <div className="relative text-sm  bg-white text-gray-800  px-2 py-2 rounded-md shadow-md">
      <p className="w-auto"> {message}</p>
      <div className={`absolute w-0 h-0 ${arrowClass[direction]}`} />
    </div>
  );
}
