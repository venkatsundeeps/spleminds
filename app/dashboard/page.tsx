import Link from "next/link";
import React from "react";

const Dashboard = async () => {
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
    <section className="container p-6 mx-auto -mt-4">
      <h4 className="text-xl ml-5 font-bold text-gray-700 capitalize md:text-3xl text-center">
        Training Batch 1 in Progress
      </h4>
      <p className="text-center">30 Days Training</p>
      <div className="flex items-center justify-center ml-32 space-x-3 mt-4">
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
  );
};

export default Dashboard;
