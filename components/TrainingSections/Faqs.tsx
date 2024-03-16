"use client";
import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What prior knowledge do I need to take this course?",
      answer:
        "No prior knowledge of ServiceNow is required, but basic understanding of IT service management concepts can be beneficial.",
    },
    {
      question: "What will I learn in this course?",
      answer:
        "You will learn about the ServiceNow ITSM module and the ServiceNow platform, including scripting and integrations. We also provide resume building, interview preparation, and placement support.",
    },
    {
      question: "How long is the course?",
      answer:
        "The course is a comprehensive 30-day full-time training program.",
    },
    {
      question: "Do you provide any support after the course?",
      answer:
        "Yes, we provide interview preparation, mock tests, and placement support after the course completion.",
    },
  ];

  const handleClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h1>

        <div className="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
            >
              <button
                onClick={() => handleClick(index)}
                className="flex items-center justify-between w-full p-8"
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  {faq.question}
                </h1>

                <span className="text-white bg-blue-500 rounded-full w-6">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-200 dark:border-gray-700">
                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
