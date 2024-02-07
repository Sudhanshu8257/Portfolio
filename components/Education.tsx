import { educationDetails } from "@/utils";
import Link from "next/link";
import React from "react";

const Education = () => {
  return (
    <section
      className={`flex h-fit w-full flex-col items-start justify-center gap-4 bg-white bg-opacity-[0.02] px-4 py-16 lg:gap-3 lg:px-32 lg:py-28`}
    >
      <span className="text-[24px] font-black text-primary lg:text-[34px]">
        Education
      </span>
      <div className="flex h-[260px] w-full max-w-7xl items-center justify-between gap-4 px-6 max-lg:h-full max-lg:justify-start lg:gap-12">
        <div className="flex h-full w-1 shrink-0 rounded-sm bg-primary max-lg:h-[910px]"></div>
        <div className="flex size-full items-center justify-between gap-4 max-lg:w-fit max-lg:flex-col">
          {educationDetails?.map((education, i) => (
            <div
              key={i}
              className="flex h-full min-h-[220px] w-64 max-w-72 flex-col rounded-xl bg-white bg-opacity-[0.02] p-6"
            >
              <span className="text-[28px] font-black max-lg:text-[24px]">
                {education.title}
              </span>
              <span className="mt-auto text-[14px] font-light">
                {education.date}
              </span>
              <Link
                href={education.link}
                className="mt-1 text-[14px] font-light underline"
              >
                {education.platform}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
