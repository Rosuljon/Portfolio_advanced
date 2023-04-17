import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-120%" },
};

const NavBar = ({ darkHandler, darkMode }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/wallet" ||
      router.asPath === "/explorer" ||
      router.asPath === "/best-quote" ||
      router.asPath === "/crypto" ||
      router.asPath === "/troy-kebab" ||
      router.asPath === "/meet-up" ||
      router.asPath === "/gpt3"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);
  const navHandler = (e) => {
    setNav(!nav);
  };
  const OnlyParentClickHandler = (e) => {
    if (e.target === e.currentTarget) setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) setShadow(true);
      else setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:bg-gradient-to-r from-[#4568dc] to-[#b06ab3] dark:text-white">
        <div className="flex w-44 h-36 md:w-52 md:h-48">
          <Link href="/">
            <img
              src={darkMode ? "/assets/white.png" : "/assets/transparent.png"}
              alt="logo"
              className="w-full h-full object-contain"
            ></img>
          </Link>
        </div>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex items-center"
          >
            <li>
              <a href="/assets/Ronny.pdf" download>
                <button className="p-1 px-3 mr-10 capitalize shadow-none">
                  Resume
                </button>
              </a>
            </li>
            <li>
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl dark:text-white"
                onClick={() => darkHandler(!darkMode)}
              />
            </li>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b dark:text-white">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b dark:text-white">
                About
              </li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b dark:text-white">
                Skills
              </li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase hover:border-b dark:text-white">
                Projects
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase hover:border-b dark:text-white">
                Contact
              </li>
            </Link>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            className="md:hidden flex p-4 items-center"
          >
            <a href="/assets/Ronny.pdf" download>
              <button className="bg-green-500 !important p-1 px-3 mr-4 capitalize shadow-none">
                Resume
              </button>
            </a>
            <span className="mr-8">
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl dark:text-white"
                onClick={() => darkHandler(!darkMode)}
              />
            </span>
            <AiOutlineMenu
              className="dark:text-white"
              onClick={navHandler}
              size={25}
            />
          </div>
        </div>
      </div>

      <div
        onClick={OnlyParentClickHandler}
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <motion.nav
          className="fixed  w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 dark:bg-gradient-to-r from-[#4568dc] to-[#b06ab3] dark:text-white"
          initial="closed"
          animate={nav ? "open" : "closed"}
          variants={variants}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link onClick={navHandler} href="/">
                <Image
                  src={
                    darkMode ? "/assets/white.png" : "/assets/transparent.png"
                  }
                  alt="logo"
                  width={140}
                  height={50}
                />
              </Link>
              <div
                onClick={navHandler}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="font-medium w-[85%] md:w-[90%] py-4">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link onClick={navHandler} href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link onClick={navHandler} href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link onClick={navHandler} href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link onClick={navHandler} href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link onClick={navHandler} href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5] dark:text-white">
                Let&apos;s Connect
              </p>
              <div className="flex my-4 items-center justify-between w-full sm:w-[80%]">
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
                <Link href="/#contact" onClick={navHandler}>
                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
  );
};

export default NavBar;
