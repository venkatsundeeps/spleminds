"use client";
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSSimport { useSession } from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

// import Navbar from "@/components/NavBar";

import CourseDetails from "@/components/TrainingSections/CourseDetails";
import CourseOfferings from "@/components/TrainingSections/CourseOfferings";
import TrainingOverview from "@/components/TrainingSections/TrainingOverview";
import FAQs from "@/components/TrainingSections/Faqs";
import Navbar from "@/components/navbar";

const TrainingPage = () => {
  const { session } = useSession();
  const router = usePathname();
  useEffect(() => {
    if (session) {
      router.replace(router, "/dashboard");
    }
  }, [session, router]);

  return (
    <div>
      <Navbar />
      <TrainingOverview />
      <CourseDetails />
      <CourseOfferings />
      <FAQs />
    </div>
  );
};

export default TrainingPage;
