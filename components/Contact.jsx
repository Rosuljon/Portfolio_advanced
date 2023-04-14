import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'


const SERVICE_ID = 'ronny';
const TEMPLATE_ID = 'template_t48s05c';
const USER_ID = 'uiOKYPE3pcvFOZDoj';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  }; 
  const img =
    "https://hexagon.com/-/media/project/one-web/master-site/company/contact-us/contact-us-sales.png?h=704&iar=0&w=801&hash=977FE0ECBE43CF95612D4750AE89CFF6";
  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-white">
          Contact
        </p>
        <h2 className="py-2">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-700  rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={img}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Ikromjanov Rosuljon</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance and full-time positions. Contact
                  me and let&apos;s talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
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
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-700  rounded-xl p-4 ">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="from_name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="number"
                      name="phone_number"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">E-mail</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="from_email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    rows={8}
                    type="text"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="w-[50%] p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-lg uppercase bg-gradient-to-r from-[#5651e5] to-[#770dff] px-8" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5] dark:text-white" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
