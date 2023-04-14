import React from "react";
import Image from "next/image";
import wallet from "../public/assets/projects/wallet.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Wallet = () => {
  return (
    <div className="w-full h-auto sm:h-screen lg:h-screen dark:bg-gradient-to-r from-[#4568dc] to-[#b06ab3] dark:text-white">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={wallet}
          alt="/"
        />
        <div className="absolute top-[70%] w-full max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">BlockChain Wallet</h2>
          <h3>Svelte Js / Websocket / Webpack</h3>
        </div>
      </div>

      <div className="max-w-[1240px] m-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-white">
            Project
          </p>
          <h2 className="pb-4">Overview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            consequat felis et ullamcorper fermentum. Phasellus a dictum neque,
            non porttitor leo. Phasellus vulputate augue nec ipsum sollicitudin
            fringilla. Nulla vel purus id nibh iaculis lacinia. Maecenas leo
            justo, auctor a auctor ac, porttitor ullamcorper mauris.{" "}
          </p>
          <Link href="https://wallet.niktonet.com/">
            <button className="py-2 px-8 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/Rosuljon">
            <button className="py-2 px-8 mt-4 ">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                Svelte
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                Websocket
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                Crypto-js
              </p>

              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" />
                Svelte-i18n
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

export default Wallet;
