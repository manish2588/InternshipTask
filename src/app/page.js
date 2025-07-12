"use client";
import React from "react";
import SimpleBox from "./components/SimpleBox";
import { FaUserGraduate } from "react-icons/fa6";
import BelowBox from "./components/BelowBox";
import HoverBox from "./components/HoverBox";

export default function Task1() {
  const simpleBoxesData = [
    {
      bgColor: "bg-purple-600",
      heading: "Get Mentored & Support",
      subHeading: "You are not learning alone",
      paragraph:
        "Stuck or need feedback? SkillShikshya's community of members and learners has your back with live support. SkillShikshya's community of members and learners has your back with live support.",
      Icon: <FaUserGraduate size={100} color="white" />,
    },
    {
      bgColor: "bg-yellow-600/60",
      heading: "Achieve & Showcase",
      subHeading: "Build Your Portfolio, Get Job Ready",
      paragraph:
        "SkillShikshya’s resources and hands-on projects help you create a portfolio that stands out to employers. Gain confidence and credibility with real results.",
      Icon: <FaUserGraduate size={100} color="white" />,
    },
  ];
  const aboveBoxesData = [
    {
      bgColor: "bg-red-400",
      heading: "Start with Clarity",
      subHeading: "Step into better learning path",
      paragraph:
        "Overwhelmed by to many Learning Options. Overwhelmed by to many Learning Options. SkillShikshya's community action is better of members and learners has your back with live support.",
      Icon: <FaUserGraduate size={100} color="white" />,
    },
    {
      bgColor: "bg-cyan-600",
      heading: "Learn by Doing",
      subHeading: "Practice skills, real projects",
      paragraph:
        "Theory is great but action is better.Theory is great but action is better action is better At SkillShikshya’s you learn by coding. Gain confidence and credibility with real results.",
      Icon: <FaUserGraduate size={100} color="white" />,
    },
  ];

  const belowBoxesData = [
    {
      bgColor: "bg-red-400",
      heading: " Clarity Unlocked ",
      Icon: <FaUserGraduate size={120} color="white" />,
    },
    {
      bgColor: "bg-cyan-600",
      heading: " Focus faces, Learning mode ON",

      Icon: <FaUserGraduate size={120} color="white" />,
    },
  ];

  return (
    <div className="min-h-screen max-w-[100vw] py-4 space-y-4">
      <h3 className="px-28 text-2xl font-medium font-gray-800 ">
        Your SkillShikshya Journey
      </h3>
      <h3 className="px-28 text-2xl font-medium font-gray-800 ">
        <span className="font-bold text-3xl text-teal-600">Stop </span>
        <span className="font-bold text-3xl text-gray-950">In. </span>
        <span className="font-bold text-3xl text-teal-600">Skill </span>
        <span className="font-bold text-3xl text-gray-950">Up .</span>
        <span className="font-bold text-3xl text-teal-600">Stand </span>
        <span className="font-bold text-3xl text-gray-950">Out. </span>
      </h3>
      <div className="grid grid-cols-2 gap-12  px-28">
        {aboveBoxesData.map((item, key) => (
          <HoverBox
            key={key}
            aboveBox={<SimpleBox data={item} reverse={key % 2 === 1} />}
            belowBox={
              <BelowBox data={belowBoxesData[key]} reverse={key % 2 === 1} />
            }
          />
        ))}
        {simpleBoxesData.map((box, index) => (
          <SimpleBox key={index} data={box} reverse={index % 2 === 1} />
        ))}
      </div>
    </div>
  );
}
