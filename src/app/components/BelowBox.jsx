"use client";
import React from "react";

export default function BelowBox({ data, reverse }) {
  const { bgColor, heading, Icon } = data;

  return (
    <div
      className={`w-full max-w-2xl py-12 h-84 rounded-2xl flex ${bgColor} ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* Icon section */}
      <div className="w-[35%] h-full flex px-10 ">{Icon}</div>

      {/* Text section */}
      <div className="w-[65%] h-full flex flex-col items-center space-y-4 px-12 text-white">
        <h3 className="text-3xl font-bold text-center">{heading}</h3>
      </div>
    </div>
  );
}
