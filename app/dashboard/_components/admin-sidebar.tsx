"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import Header from "./Header";
import { useSession, useOrganizationList } from "@clerk/nextjs";
import router from "next/router";

const Sidebar: React.FC = (): ReactNode => {
  // const {
  //   isLoaded,

  //   createOrganization,
  //   setActive,
  //   userMemberships,
  //   userInvitations,
  //   userSuggestions,
  // } = useOrganizationList();
  // Replace "path/to/OrganizationResource" with the actual path to the OrganizationResource type

  const managementCategories = [
    {
      title: "Batch Management",
      items: [
        { name: "View Batch List", href: "/dashboard/admin/batch-list" },
        { name: "Add New Batch", href: "/dashboard/admin/add-batch" },
        { name: "Edit Batch Details", href: "/dashboard/admin/edit-batch" },
        { name: "Delete Batch", href: "/dashboard/admin/delete-batch" },
      ],
      href: "/dashboard/admin/course",
    },
    {
      title: "Job Management",
      items: [
        { name: "View Job List", href: "/dashboard/admin/job-list" },
        { name: "Add New Job", href: "/dashboard/admin/add-job" },
        { name: "Edit Job Details", href: "/dashboard/admin/edit-job" },
        { name: "Delete Job", href: "/dashboard/admin/delete-job" },
      ],
      href: "/admin/course",
    },
    {
      title: "Assignment Management",
      items: [
        {
          name: "View Assignment List",
          href: "/dashboard/admin/assignment-list",
        },
        { name: "Add New Assignment", href: "/dashboard/admin/add-assignment" },
        {
          name: "Edit Assignment Details",
          href: "/dashboard/admin/edit-assignment",
        },
      ],
      href: "/dashboard/admin/assignments",
    },
    {
      title: "User Management",
      items: [
        { name: "View User List", href: "/dashboard/admin/user-list" },
        { name: "Add New User", href: "/dashboard/admin/add-user" },
        { name: "Edit User Details", href: "/dashboard/admin/edit-user" },
        { name: "Delete User", href: "/dashboard/admin/delete-user" },
      ],
      href: "/dashboard/admin/users",
    },
    {
      title: "Session Management",
      items: [
        { name: "View Session List", href: "/dashboard/admin/session-list" },
        { name: "Add New Session", href: "/dashboard/admin/add-session" },
        { name: "Edit Session Details", href: "/dashboard/admin/edit-session" },
        { name: "Delete Session", href: "/dashboard/admin/delete-session" },
      ],
      href: "/dashboard/admin/sessions",
    },
    {
      title: "Course Content Management",
      items: [
        {
          name: "View Course Content",
          href: "/dashboard/admin/course-content",
        },
        { name: "Add New Content", href: "/dashboard/admin/add-content" },
        { name: "Edit Content Details", href: "/dashboard/admin/edit-content" },
        { name: "Delete Content", href: "/dashboard/admin/delete-content" },
      ],
      href: "/dashboard/admin/course-content",
    },
  ];

  // const userOptions = [
  //   {
  //     title: "View Batches",
  //     // items: [
  //     //   {
  //     //     name: "View Available Batches",
  //     //     href: "/dashboard/user/batches",
  //     //   },
  //     //   { name: "View Batch Details", href: "/dashboard/user/batches" },
  //     // ],
  //     href: "/dashboard/user/batches",
  //   },
  //   {
  //     title: "View Jobs",
  //     // items: [
  //     //   { name: "View Available Jobs", href: "/dashboard/user/jobsavailable" },
  //     //   // { name: "View Job Details", href: "/dashboard/user/jobdetails" },
  //     // ],
  //     href: "/dashboard/user/jobs",
  //   },
  //   {
  //     title: "View Assignments",
  //     // items: [
  //     //   {
  //     //     name: "View Assigned Assignments",
  //     //     href: "/dashboard/user/assignments",
  //     //   },
  //     // ],
  //     href: "/dashboard/user/assignments",
  //   },
  // ];
  const { session } = useSession();

  const user = session?.user;
  const userRole = session?.user?.organizationMemberships ?? []; // Add nullish coalescing operator to provide a default empty array value

  const isAdmin = userRole.some(
    (membership) => membership.role === "org:admin"
  );
  // console.log(isAdmin);
  const categories = isAdmin ? managementCategories : [];
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };
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
            {categories.map((category, index) => (
              <li key={index} className="group bg-gray-300 rounded-xl">
                <div
                  className="flex items-center p-2 text-gray-900 rounded-lg bg-gray-100 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
                  // onClick={() => toggleExpand(index)}
                >
                  <div className="ms-3">{category.title}</div>
                </div>
                <ul
                  className={`pl-4 ${
                    expandedCategory === index ? "" : "hidden"
                  }`}
                >
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-300 cursor-pointer hover:text-slate-600"
                    >
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

export default Sidebar;
