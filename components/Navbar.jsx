import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [collapse, setCollapse] = useState(true);
  return (
    <div
      className={
        (!collapse ? "bg-black text-white " : "") +
        "md:bg-transparent md:text-black py-5 md:py-5 px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28"
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-wrap items-center justify-between">
          <Link href="#home">
            <img
              src="/images/logo.jpeg"
              className="2-16 h-16 md:w-24 md:h-24 inline-block"
              alt="Stractora"
            />
          </Link>
          <button
            onClick={() => setCollapse(!collapse)}
            className="md:hidden cursor-pointer text-gray-900 outline-none"
          >
            {collapse ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="#fff"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
              </svg>
            )}
          </button>
        </div>
        <div
          className={
            (collapse ? "hidden " : "block h-screen md:h-auto ") +
            "col-span-2 md:flex md:flex-wrap md:items-center md:justify-around"
          }
        >
          <Link href="#home" className="pt-24 md:pt-0">
            <p className="pt-24 md:pt-6 py-6 cursor-pointer text-sm font-bold text-center border-b border-gray-600 md:border-none uppercase md:capitalize">
              Home
            </p>
          </Link>
          <Link href="#about">
            <p className="text-light py-6 cursor-pointer text-sm text-center border-b border-gray-600 md:border-none uppercase md:capitalize">
              About
            </p>
          </Link>
          <Link href="#service">
            <p className="text-light py-6 cursor-pointer text-sm text-center border-b border-gray-600 md:border-none uppercase md:capitalize">
              Services
            </p>
          </Link>
          <Link href="#project">
            <p className="text-light py-6 cursor-pointer text-sm text-center border-b border-gray-600 md:border-none uppercase md:capitalize">
              Projects
            </p>
          </Link>
          <Link href="#contact">
            <p className="text-light py-6 cursor-pointer text-sm text-center border-b border-gray-600 md:border-none uppercase md:capitalize">
              Contact
            </p>
          </Link>
          {/* <p className="hidden xl:flex w-32"></p> */}
          <p className="hidden lg:flex w-32"></p>
          <Link href="#">
            <p className="inline-block py-16 md:hidden lg:py-6 lg:flex text-sm font-bold">
              en
            </p>
          </Link>
          <p className="inline-block py-16  md:hidden lg:py-6 lg:flex text-sm text-light  px-8 lg:px-0 ">
            Kiny
          </p>
        </div>
      </div>
    </div>
  );
}