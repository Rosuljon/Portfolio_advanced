import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.png";
import Link from "next/link";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-white">
            About
          </p>
          <h2 className="py-2 dark:text-white">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-white">
            I am Ikromjanov Rosuljon (Ronny) and graduated from Sejong
            University in 2022 with a degree in Computer Science.My interests
            are in Web Development, and I love to create beautiful and
            performant products with delightful user experiences.
          </p>
          <p className="py-2 text-gray-600 dark:text-white">
            I have been working at a Blockchain Company named Hessegg since
            August 2022. As a frontend developer at a blockchain company, I
            have had the privilege of working on exciting projects that have
            allowed me to push my skills to the limit. Specifically, I have had
            the opportunity to create a wallet and explorer website for our
            clients.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer dark:text-white">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            className="rounded-xl md:min-h-[200px]"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
