"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useClerk();
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-white  shadow dark:bg-gray-800 -mt-10 top-0 sticky ">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {/* SVGs go here */}
              </button>
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
            {/* <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Join Slack
              </Link>
              <Link
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Browse Topics
              </Link>
              <Link
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Random Item
              </Link>
              <Link
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Experts
              </Link>
            </div> */}
            <div className="flex items-center mt-4 lg:mt-0">
              <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                {/* SVG goes here */}
              </button>
              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
                onClick={toggleDropdown}
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  {/* <UserButton /> */}
                  <Image
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                    className="w-32 rounded-full"
                    width={32}
                    height={32}
                    alt="Avatar"
                  />
                </div>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-20 w-32 bg-white rounded-md overflow-hidden shadow-xl z-10">
                  <button
                    onClick={() => signOut(() => router.push("/sign-in"))}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
