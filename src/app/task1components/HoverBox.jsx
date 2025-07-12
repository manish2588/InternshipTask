"use client";
import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

export default function HoverBox({ belowBox, aboveBox }) {
  return (
    <div className="relative w-full max-w-2xl  my-2 h-84 group ">
      {/* Curve Shape*/}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="balancedCShapeCut" clipPathUnits="objectBoundingBox">
            <path
              d="
                  M0,0
                  L0,0.30
                  C0.15,0.35 0.15,0.60 0,0.65
                  L0,1
                  L1,1
                  L1,0.65
                  C0.85,0.60 0.85,0.35 1,0.30
                  L1,0
                  Z
                "
            />
          </clipPath>
        </defs>
      </svg>

      {/* Left Arrow */}
      <button className="absolute -left-0 top-[47.5%] h-15 w-15 flex justify-center items-center -translate-y-1/2 bg-gray-200 rounded-full p-1 shadow-2xl z-10 hover:scale-105 transition-all">
        <MdArrowBack size={35} />
      </button>
      {/* Right Arrow */}
      <button className="absolute -right-0 top-[47.5%] h-15 w-15 flex justify-center items-center -translate-y-1/2 bg-gray-200 rounded-full p-1 shadow-2xl z-10 hover:scale-105 transition-all">
        <MdArrowForward size={35} />
      </button>

      {/* Box above- initially visible */}
      <div className="absolute pointer-events-none delay-[200ms] w-full h-full  rounded-2xl flex items-center justify-center transform group-hover:-translate-x-[50vw]  group-hover:pointer-events-none group-hover:opacity-0 transition-all duration-700 z-20">
        {aboveBox}
      </div>

      {/* Box below - initially hidden */}
      <div
        className="w-full h-full  rounded-2xl flex items-center justify-center opacity-20 group-hover:opacity-100 transition-all duration-700"
        style={{ clipPath: "url(#balancedCShapeCut)" }}
      >
        {belowBox}
      </div>
    </div>
  );
}
