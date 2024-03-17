import Link from "next/link";
import React from "react";

const CourseDetails = () => {
  const courses = [
    {
      name: "ServiceNow",
      description: "ServiceNow ITSM & Integrations",
    },
    // Add more courses as needed
  ];
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl">
      <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-32 gap-x-10 lg:gap-x-24">
        <div>
          <h2 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-center text-black sm:text-left md:text-4xl">
            Course Details
          </h2>
          <p className="mb-6 text-lg text-center text-gray-600 sm:text-left md:text-xl">
            Learn More About Our Course
          </p>
          <p className="text-lg text-gray-700">
            Our ServiceNow training covers the ServiceNow IT Service Management
            (ITSM) module and the ServiceNow platform, including scripting and
            integrations. We provide comprehensive training to help you
            understand and navigate the platform effectively. In addition to
            technical skills, we also offer resume building, interview
            preparation, mock tests, and placement support to ensure you&apos;re
            fully prepared for your career in ServiceNow.
          </p>
        </div>
        <div className="flex flex-col flex-grow space-y-5">
          <div className="w-48 h-64 transition-all duration-200 relative cursor-pointer transform hover:scale-105 hover:rotate-1 overflow-hidden flex items-center justify-center">
            <div className="w-full h-3/4 bg-white bg-opacity-5 shadow-lg backdrop-blur rounded-2xl p-4 flex flex-col justify-center">
              {courses.map((course, index) => (
                <div key={index}>
                  <h2 className="text-xs text-indigo-600 font-semibold tracking-wide uppercase text-center">
                    {course.name}
                  </h2>
                  <p className="mt-2 text-lg leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl text-center">
                    {course.description}
                  </p>
                  <Link href="#register">
                    <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                      Register Now
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            {/* <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full absolute animate-move-up6"></div>
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full absolute bottom-0 right-0 animate-move-down1"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
