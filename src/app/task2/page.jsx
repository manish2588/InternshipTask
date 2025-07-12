"use client";
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { LuThumbsUp } from "react-icons/lu";
import { IoTrophy } from "react-icons/io5";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import Tooltip from "./components/Tooltip";
import MessageBox from "./components/MessageBox";

function Task2() {
  const [hoverBlue, setHoverBlue] = useState(false);
  const [hoverIcon, setHoverIcon] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 1500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen h-screen flex items-center justify-center">
      {/* Blue Div */}
      <div
        className="w-[70%] h-[75%] flex items-center rounded-2xl justify-center relative bg-blue-100"
        onMouseEnter={() => setHoverBlue(true)}
        onMouseLeave={() => {
          setHoverBlue(false);
          setHoverIcon(false);
        }}
      >
        {/* Pink Box */}
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

        {/* TOP LEFT — floatUp */}
        <div
          className={`absolute transition-all duration-500 ${
            hoverBlue
              ? "animate-floatUp top-[8%] left-[30%]"
              : "top-[24%] left-[38%]"
          }`}
          style={{ width: 60, height: 60 }}
        >
          <Tooltip
            content="This is so amazing.This is amazing content.This is amazing content.This is amazing content.This is amazing content.This is amazing content "
            direction="bottom"
          >
            <FaUserCircle
              size={60}
              className="text-gray-800"
              onMouseEnter={() => setHoverIcon(true)}
              onMouseLeave={() => setHoverIcon(false)}
            />
          </Tooltip>

          {showMessage && !hoverIcon && (
            <div className="absolute left-full ml-2 w-34 top-1/2 -translate-y-1/2 z-50">
              <MessageBox message="Amazing ⭐⭐⭐" />
            </div>
          )}
        </div>

        {/* TOP CENTER SMALL — no float */}
        <LuThumbsUp
          className={`text-yellow-400 absolute transition-all duration-500 ${
            hoverBlue ? "top-[15%] right-[48%]" : "top-[24%] right-[48%]"
          }`}
          size={40}
        />

        {/* TOP RIGHT — floatDown */}
        <FaUserCircle
          className={`text-gray-800 absolute transition-all duration-500 ${
            hoverBlue
              ? "animate-floatDown top-[8%] right-[30%]"
              : "top-[24%] right-[38%]"
          }`}
          size={60}
        />

        {/* LEFT CENTER — floatUp */}
        <FaUserCircle
          className={`text-gray-800 absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${
            hoverBlue ? "animate-floatUp left-[10%]" : "left-[26%]"
          }`}
          size={60}
        />

        {/* RIGHT CENTER — floatDown */}
        <FaUserCircle
          className={`text-gray-800 absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${
            hoverBlue ? "animate-floatDown right-[10%]" : "right-[26%]"
          }`}
          size={60}
        />

        {/* BOTTOM LEFT — floatUp */}
        <FaUserCircle
          className={`text-gray-800 absolute transition-all duration-500 ${
            hoverBlue
              ? "animate-floatUp bottom-[8%] left-[30%]"
              : "bottom-[24%] left-[38%]"
          }`}
          size={60}
        />

        {/* BOTTOM CENTER — no float */}
        <IoTrophy
          className={`text-yellow-400 absolute transition-all duration-500 ${
            hoverBlue ? "bottom-[1%] left-[48%]" : "bottom-[24%] left-[48%]"
          }`}
          size={60}
        />

        {/* BOTTOM RIGHT — floatDown */}
        <div
          className={`absolute transition-all duration-500 ${
            hoverBlue
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
            <FaUserCircle size={60} className="text-gray-800" />
          </Tooltip>

          {showMessage && !hoverIcon && (
            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50">
              <MessageBox message="⭐⭐⭐" />
            </div>
          )}
        </div>

        {/* EXTRA BOTTOM LEFT — no float */}
        <BsEmojiHeartEyesFill
          className={`text-yellow-400 absolute transition-all duration-500 ${
            hoverBlue ? "bottom-[26%] left-[20%]" : "bottom-[30%] left-[30%]"
          }`}
          size={50}
        />

        {/* EXTRA BOTTOM RIGHT — no float */}
        <BsEmojiHeartEyesFill
          className={`text-yellow-400 absolute transition-all duration-500 ${
            hoverBlue ? "bottom-[26%] right-[20%]" : "bottom-[30%] right-[30%]"
          }`}
          size={50}
        />
      </div>

      {/* Add these to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes floatUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes floatDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
        }
        .animate-floatUp {
          animation: floatUp 3s ease-in-out infinite;
        }
        .animate-floatDown {
          animation: floatDown 3s ease-in-out infinite;
        }
        @keyframes tooltip-open-top {
          0% {
            opacity: 0;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              scaleY(0.1);
            transform-origin: bottom;
          }
          100% {
            opacity: 1;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              scaleY(1);
          }
        }

        @keyframes tooltip-open-bottom {
          0% {
            opacity: 0;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              scaleY(0.1);
            transform-origin: top;
          }
          100% {
            opacity: 1;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              scaleY(1);
          }
        }

        @keyframes tooltip-open-left {
          0% {
            opacity: 0;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              scaleX(0.1);
            transform-origin: right;
          }
          100% {
            opacity: 1;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              scaleX(1);
          }
        }

        @keyframes tooltip-open-right {
          0% {
            opacity: 0;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              scaleX(0.1);
            transform-origin: left;
          }
          100% {
            opacity: 1;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              scaleX(1);
          }
        }

        .animate-tooltip-open[data-direction="top"] {
          animation: tooltip-open-top 1s ease-out forwards;
        }

        .animate-tooltip-open[data-direction="bottom"] {
          animation: tooltip-open-bottom 1s ease-out forwards;
        }

        .animate-tooltip-open[data-direction="left"] {
          animation: tooltip-open-left 1s ease-out forwards;
        }

        .animate-tooltip-open[data-direction="right"] {
          animation: tooltip-open-right 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Task2;
