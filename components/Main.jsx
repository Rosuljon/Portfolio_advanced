import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Ronny from "../public/assets/graduate.png";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div id="home" className="w-full h-auto pt-10 text-center md:pt-40">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="flex justify-center my-8 pt-10">
            <Image
              priority
              src={Ronny}
              className="max-w-[230px] md:min-w-[150px] md:max-w-[300px] hover:scale-105 ease-in duration-300"
              alt="/"
            />
          </div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-white">
            Let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700 dark:text-white">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867] dark:text-white">
              Ronny
            </span>👨🏻‍💻
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-white">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "Mern Stack Devs"],
                autoStart: true,
                loop: true,

              }}
            />
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto dark:text-white">
            I am a passionate and experienced frontend developer. I specialize
            in creating dynamic and responsive websites that combine creative
            design with clean, efficient code.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/rosuljon-ikromjanov-46a831185/">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/Rosuljon">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:ikramjanov977@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
