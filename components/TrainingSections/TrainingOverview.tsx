import React from "react";
import Image from "next/image";
import Link from "next/link";

const TrainingOverview = () => {
  return (
    <section className="relative w-full h-[70%] flex flex-col justify-center items-center bg-bg-custom-color overflow-hidden">
      <div className=" pt-10  w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-gray-600">
          <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="py-5 text-3xl sm:text-5xl font-light tracking-wide leading-tight">
              Boost business productivity <br />
              with our <br />
              ServiceNow training solutions
            </h1>
            <p className="text-lg font-semibold text-gray-400 tracking-wide">
              Our comprehensive training programs are designed to equip your
              team with the knowledge and skills to maximize the potential of
              the ServiceNow platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center">
              <Link
                href="#register"
                className="m-1.5 py-2.5 px-5 rounded-md bg-teal-800 text-white font-semibold uppercase hover:bg-teal-800"
              >
                Start your journey
              </Link>
              <Link
                href="/sign-in"
                className="m-1.5 py-2.5 px-5 rounded-md border-2 border-teal-400 text-teal-800 font-semibold uppercase hover:text-teal-800 hover:border-teal-400"
              >
                Take a Free Class
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
          <Image
            src="/hero-training.svg"
            alt=""
            className="w-2/3 lg:w-full"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="container mt-14 p-5 w-full grid grid-cols-12 sm:grid-cols-5 gap-2 text-xs md:text-sm">
        {/* Add your features here */}
      </div>
    </section>
  );
};

export default TrainingOverview;
