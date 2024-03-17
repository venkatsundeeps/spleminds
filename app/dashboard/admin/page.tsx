import React from "react";
import Link from "next/link";
const Admin = () => {
  const cards = [
    {
      href: "/dashboard",
      title: "Current Batch 1",
      description: "Attendies upto 10",
    },
    {
      href: "/dashboard",
      title: "Assignments",
      description: "Total Assignments 0",
    },
    {
      href: "/dashboard",
      title: "Jobs",
      description: "Upcoming Jobs on Servicenow",
    },
  ];
  return (
    <>
      {/* <Sidebar /> */}
      <section className="container p-6 mx-auto -mt-4 ">
        <h4 className="text-xl ml-5 mt-40 font-bold text-gray-700 capitalize md:text-3xl text-center">
          Training Batch 1 in Progress
        </h4>
        <p className="text-center">30 Days Training</p>
        <div className="flex items-center justify-center ml-32 space-x-3 mt-10">
          {cards.map((card, index) => (
            <div key={index} className="w-full max-w-xs text-center">
              <Link href={card.href}>
                <div className="object-cover object-center w-full h-48 mx-auto rounded-lg bg-blue-100 border-4 border-blue-200">
                  <div className="py-16 px-4">
                    <h5 className="text-lg font-bold">{card.title}</h5>
                    <span className="mt-1 font-medium">{card.description}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Admin;
