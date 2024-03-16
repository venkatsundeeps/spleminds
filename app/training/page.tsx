import React from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
// import Navbar from "@/components/NavBar";

import CourseDetails from "@/components/TrainingSections/CourseDetails";
import CourseOfferings from "@/components/TrainingSections/CourseOfferings";
import TrainingOverview from "@/components/TrainingSections/TrainingOverview";
import FAQs from "@/components/TrainingSections/Faqs";

const TrainingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <TrainingOverview />
      <CourseDetails />
      <CourseOfferings />
      <FAQs />
    </div>
  );
};

export default TrainingPage;
