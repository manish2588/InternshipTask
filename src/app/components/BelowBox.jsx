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
      <div className="w-[35%] flex px-18 ">{Icon}</div>

      {/* Text section */}
      <div className="w-[65%] flex flex-col items-center space-y-4 px-12 text-white">
        <h3 className="text-2xl font-medium text-center">{heading}</h3>
      </div>
    </div>
  );
}
