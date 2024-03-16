import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col z-10 w-64 h-screen px-4 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <Link href="#" className="mx-auto">
        {/* <Image
          className="w-auto h-6 sm:h-7"
          src="https://merakiui.com/images/full-logo.svg"
          alt=""
          width={500}
          height={24}
        /> */}
        <h1>
          <b>Spleminds</b>
        </h1>
      </Link>

      <div className="flex flex-col items-center mt-6 -mx-2">
        <Image
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
          width={96}
          height={96}
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
          John Doe
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          john@example.com
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mx-4 font-medium">Dashboard</span>
          </Link>
          {/* Repeat for other links */}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;