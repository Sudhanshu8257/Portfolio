import { experienceDetails } from "@/utils";
import React from "react";

const Experience = () => {
  return (
    <section
      className={`flex h-fit w-full flex-col items-start justify-center gap-6 px-4 py-16 lg:gap-8 lg:px-32 lg:py-28`}
    >
      <span className="text-[24px] font-black text-primary lg:text-[34px]">
        Experience
      </span>

      <div className="flex w-full flex-col gap-10">
        {experienceDetails.map((exp, i) => (
          <div
            key={i}
            className="flex w-full gap-4 max-w-7xl lg:gap-6"
          >
            {/* Vertical accent bar */}
            <div className="flex flex-col items-center gap-0">
              <div className="h-3 w-3 shrink-0 rounded-full bg-primary" />
              <div className="w-1 flex-1 rounded-sm bg-primary opacity-30" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 pb-2 w-full">
              {/* Header */}
              <div className="flex flex-col gap-1 -mt-1">
                <span className="text-[20px] font-black lg:text-[26px]">
                  {exp.role}
                </span>
                <div className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-white/60 lg:text-[15px]">
                  <span className="text-primary font-semibold">{exp.company}</span>
                  <span className="text-white/30">·</span>
                  <span>{exp.location}</span>
                  <span className="text-white/30">·</span>
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-[13px] font-medium text-white/80 lg:text-[15px]"
                  >
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
