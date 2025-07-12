"use client";
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { LuThumbsUp } from "react-icons/lu";
import { IoTrophy } from "react-icons/io5";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import Tooltip from "./components/Tooltip";
import MessageBox from "./components/MessageBox";
import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
function Task2() {
  const [hoverBox, setHoverBox] = useState(false);
  const [hoverIcon, setHoverIcon] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  {/* This display message for 2 second on every 6 sec  */}
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen h-screen bg-gray-100 flex items-center justify-center">
      {/* Hover Div This trigger the icons position changing */}
      <div
        className="w-[70%] h-[75%] flex items-center rounded-2xl justify-center relative "
        onMouseEnter={() => setHoverBox(true)}
        onMouseLeave={() => {
          setHoverBox(false);
          setHoverIcon(false);
        }}
      >
        {/* Content Box */}
        <div className="w-[35%] h-[25%] space-y-2 relative z-0">
          <p className="font-medium text-xl text-center text-gray-800">
            Here How They Level Up Their Game
          </p>
          <p className="font-bold text-3xl text-center text-gray-950">
            Skill <span className="text-green-600">Masters</span> Unite!
          </p>
          <p className="text-gray-800 text-lg font-semibold text-center w-2/3 mx-auto hover:space-x-4 space-x-2 flex justify-center">
            <span>View all testimonials</span>
            <span className="flex items-center">
              <FaArrowRight />
            </span>
          </p>
        </div>

        {/* ICONS */}

        {/* TOP LEFT This contains tooltip which shows on hover */}
        <div
          className={`absolute transition-all duration-500  ${
            hoverBox
              ? "animate-floatUp top-[8%] left-[30%]"
              : "top-[24%] left-[38%]"
          }`}
          style={{ width: 60, height: 60 }}
        >
          <Tooltip
           name={'Manish K.C.'}
           post={'Frontend Developer'}
           content=" Hello my name is Manish K.C. I am amazed by the course structure. This is amazing content. Content are always amazing this is a tooltip wow. Hello I am a frontend Developer. "
            direction="bottom"
          >
            <FcBusinessman
              size={70}
              className="text-gray-800"
              onMouseEnter={() => setHoverIcon(true)}
              onMouseLeave={() => setHoverIcon(false)}
            />
          </Tooltip>

          {showMessage && !hoverIcon && (
            <div className="absolute left-full -ml-2 w-34 top-1/2 -translate-y-1/2 z-50">
              <MessageBox message="Amazing ⭐⭐⭐" />
            </div>
          )}
        </div>

        {/* TOP CENTER*/}
        <LuThumbsUp
          className={`text-yellow-400 absolute transition-all duration-500 ${
            hoverBox ? "top-[15%] right-[48%]" : "top-[24%] right-[48%]"
          }`}
          size={40}
        />

        {/* TOP RIGHT */}
        <FaUserCircle
          className={`text-gray-800 absolute transition-all duration-500 ${
            hoverBox
              ? "animate-floatDown top-[8%] right-[30%]"
              : "top-[24%] right-[38%]"
          }`}
          size={60}
        />

        {/* LEFT CENTER */}
        <FaUserCircle
          className={`text-gray-800 absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${
            hoverBox ? "animate-floatUp left-[10%]" : "left-[26%]"
          }`}
          size={60}
        />

        {/* RIGHT CENTER */}
        <FaUserCircle
          className={`text-gray-800 absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${
            hoverBox ? "animate-floatDown right-[10%]" : "right-[26%]"
          }`}
          size={60}
        />

        {/* BOTTOM LEFT */}
        <FaUserCircle
          className={`text-gray-800 absolute transition-all duration-500 ${
            hoverBox
              ? "animate-floatUp bottom-[8%] left-[30%]"
              : "bottom-[24%] left-[38%]"
          }`}
          size={60}
        />

        {/* BOTTOM CENTER*/}
        <IoTrophy
          className={`text-yellow-400 absolute transition-all duration-500 ${
            hoverBox ? "bottom-[1%] left-[48%]" : "bottom-[24%] left-[48%]"
          }`}
          size={60}
        />

        {/* BOTTOM RIGHT This contains tooltip which shows on hover */}
        <div
          className={`absolute transition-all duration-500 ${
            hoverBox
              ? "animate-floatDown bottom-[8%] right-[30%]"
              : "bottom-[24%] right-[38%]"
          }`}
          style={{ width: 60, height: 60 }}
        >
          <Tooltip
            direction="top"
            content={
              <video
                src="/video.mp4" 
                controls
                className="w-full h-54 object-cover"
                autoPlay
                muted
                playsInline
                loop
              />
            }
          >
            <FcBusinesswoman size={70} className="text-gray-800" />
          </Tooltip>

          {showMessage && !hoverIcon && (
            <div className="absolute left-full -ml-2 top-1/2 -translate-y-1/2 z-50">
              <MessageBox message="⭐⭐⭐" />
            </div>
          )}
        </div>

        {/* EXTRA BOTTOM LEFT */}
        <BsEmojiHeartEyesFill
          className={`text-yellow-400 absolute transition-all duration-500 ${
            hoverBox ? "bottom-[26%] left-[20%]" : "bottom-[30%] left-[30%]"
          }`}
          size={50}
        />

        {/* EXTRA BOTTOM RIGHT*/}
        <BsEmojiHeartEyesFill
          className={`text-yellow-400 absolute transition-all duration-500 ${
            hoverBox ? "bottom-[26%] right-[20%]" : "bottom-[30%] right-[30%]"
          }`}
          size={50}
        />
      </div>
    </div>
  );
}

export default Task2;
