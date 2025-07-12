"use client";
import React from "react";

export default function SimpleBox({ data, reverse }) {
  const { bgColor, heading, subHeading, paragraph, Icon } = data;

  return (
    <div
      className={`w-full max-w-2xl py-4 h-84 rounded-2xl flex ${bgColor} ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* Icon section */}
      <div className="w-[35%] flex items-center justify-center">
        {Icon}
      </div>

      {/* Text section */}
      <div className="w-[65%] flex flex-col justify-center space-y-4 px-6 text-white">
        <div>
          <h3 className="text-3xl font-bold">{heading}</h3>
          <h4 className="text-2xl font-medium">{subHeading}</h4>
        </div>
        <p className="text-lg">{paragraph}</p>
      </div>
    </div>
  );
}
