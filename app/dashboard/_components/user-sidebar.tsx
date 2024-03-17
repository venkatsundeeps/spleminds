"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import Header from "./Header";

const UserSidebar: React.FC = (): ReactNode => {
  const userOptions = [
    {
      title: "View Batches",
      items: [
        {
          name: "View Available Batches",
          href: "/dashboard/user/batchesavailable",
        },
        { name: "View Batch Details", href: "/dashboard/user/batchdetails" },
      ],
      href: "/dashboard/user/batchesavailable",
    },
    {
      title: "View Jobs",
      items: [
        { name: "View Available Jobs", href: "/dashboard/user/jobsavailable" },
        { name: "View Job Details", href: "/dashboard/user/jobdetails" },
      ],
      href: "/dashboard/user/jobs",
    },
    {
      title: "View Assignments",
      items: [
        {
          name: "View Assigned Assignments",
          href: "/dashboard/user/assignments",
        },
      ],
      href: "/dashboard/user/assignments",
    },
  ];

  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedCategory === index) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(index);
    }
  };
  const { user } = useUser();

  return (
    <>
      <aside className="flex flex-col z-10 fixed w-64 h-screen px-4 top-16 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <Link href="#" className="mx-auto">
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
            {user?.username}
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>

        <div className="h-full mt-6 px-4 pb-4 overflow-y-auto  dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {userOptions.map((category, index) => (
              <li key={index} className="group bg-gray-300 rounded-xl">
                <div
                  className="flex items-center p-2 text-gray-900 rounded-lg bg-gray-100 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="ms-3">{category.title}</div>
                </div>
                <ul
                  className={`pl-4 ${
                    expandedCategory === index ? "" : "hidden"
                  }`}
                >
                  {category.items.map((item, idx) => (
                    <li key={idx} className="bg-gray-300 cursor-pointer">
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default UserSidebar;
