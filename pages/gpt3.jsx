import React from "react";
import Image from "next/image";
import gpt3 from "../public/assets/projects/gpt333.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const GPT3 = () => {
  return (
    <div className="w-full h-auto sm:h-screen  dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:text-white">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={gpt3}
          alt="/"
        />
        <div className="absolute top-[70%] w-full max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">GPT3 OpenAI Design</h2>
          <h3>React Js / Tailwind / Figma</h3>
        </div>
      </div>

      <div className="max-w-[1240px] m-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-white">
            Project
          </p>
          <h2 className="pb-4">Overview</h2>
          <p>
            I created and practised this project in order to increase my UI/UX
            design skills, In this project, i revised the following topics:<br />
            1.React Functional components and their reusability<br />
            2.React file and folder structure<br />
            3.Fundamental CSS properties to master flex & grid<br />
            4.Fundamentals of the CSS BEM Model<br />
            5.From soft and pleasant animations to complex gradients<br />
            6.Perfectly placed media queries for satisfactory responsiveness covering almost devices<br />
          </p>
          <button className="py-2 px-8 mt-4 mr-8">
            <Link href="https://gpt3-ronny.netlify.app">Demo</Link>
          </button>
          <button className="py-2 px-8 mt-4 ">
            <Link href="https://github.com/Rosuljon/gpt3_ui_ux">
              Code
            </Link>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                Animista for animation
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                Figma
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default GPT3;
