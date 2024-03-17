"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const router = usePathname();
  const isTrainingPage = router === "/training";
  const [isOpen, setIsOpen] = useState(false);

  // const buttonText = isTrainingPage ? "Login" : "Contact";
  const { session } = useClerk();
  const isSignedIn = !!session;
  // const buttonText = isTrainingPage
  //   ? isSignedIn
  //     ? "View Dashboard"
  //     : "login"
  //   : "Contact";

  const buttonText = isTrainingPage ? "View Dashboard" : "Contact";
  const href = isTrainingPage ? "/dashboard" : "#Contact";

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const pathname = usePathname();
  const hideNavbar = pathname.startsWith("/dashboard");
  if (hideNavbar) {
    return null;
  }

  return (
    <nav className="bg-custom-color dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
            height={32}
            width={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            {/* https://res.cloudinary.com/dzsr56zkk/image/upload/v1710711674/og6hhxrxk5cykwltu2ny.png */}
            Spleminds
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href={href}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {buttonText}
            </button>
          </Link>
          <button
            onClick={toggleNav}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isNavVisible ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="#Services"
                className=" py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 "
                aria-current="page"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/training"
                className="block py-2 px-3 text-slate-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Training
              </Link>
            </li>
            <li>
              <Link
                href="#About"
                className="block py-2 px-3 text-slate-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
