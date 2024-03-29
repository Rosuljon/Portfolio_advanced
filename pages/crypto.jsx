import React from "react";
import Image from "next/image";
import wallet from "../public/assets/projects/crypto.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Crypto = () => {
  return (
    <div className="w-full h-auto sm:h-screen lg:h-screen dark:bg-gradient-to-r from-[#4568dc] to-[#b06ab3] dark:text-white">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 w-full"
          
          src={wallet}
          alt="/"
        />
        <div className="absolute top-[70%] w-full max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Crypto App</h2>
          <h3>React Js / Rapid Api / Ant Design</h3>
        </div>
      </div>

      <div className="max-w-[1240px] m-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-white">
            Project
          </p>
          <h2 className="pb-4">Overview</h2>
          <p>
            When I was hired by my first company which was a blockchain company,
            I was new to blockchain technology and cryptocurrencies. And then I
            decided to learn and research them. During that period, I created
            this website where you can see information about all available
            cryptocurrencies and more.
          </p>
          <Link href="https://crypto-ronny.netlify.app">
            <button className="py-2 px-8 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/Rosuljon/Meet-up-project">
            <button className="py-2 px-8 mt-4 ">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                React-Redux
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                Rapid Api
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                chart js
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                axios
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

export default Crypto;
