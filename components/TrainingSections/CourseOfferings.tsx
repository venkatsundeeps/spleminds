import React from "react";

const CourseOfferings = () => {
  // const courses = [
  //   {
  //     name: "ServiceNow",
  //     description: "ServiceNow ITSM & Integrations",
  //   },
  //   // Add more courses as needed
  // ];

  return (
    <section className="py-12 bg-bg-custom-color-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Course Offerings
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Courses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a comprehensive 30-day full-time ServiceNow training
            course. This course includes practical exercises for hands-on
            learning, interview preparation to help you succeed in your job
            search, and placement support to assist you in finding a job after
            course completion. Whether you&apos;re new to ServiceNow or looking
            to deepen your expertise, our course is designed to equip you with
            the knowledge and skills you need to excel in your career.
          </p>
        </div>
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-indigo-800">
            Why Choose Us?
          </h3>
          <p className="mt-2 text-indigo-600">
            Our courses are designed by industry professionals with years of
            experience. We focus on practical, hands-on learning to ensure you
            can apply your new skills immediately.
          </p>
        </div>
      </div>
      {/* <div className="mt-10 flex overflow-x-auto hide-scrollbar items-center justify-center bg-indigo-100">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 m-4 bg-white shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              {course.name}
            </h3>
            <p className="mt-2 text-gray-500">{course.description}</p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Register Now
            </button>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default CourseOfferings;
