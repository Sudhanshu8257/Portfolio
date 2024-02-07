import React from "react";

const Description = ({ description }: { description: string[] }) => {
  return (
    <section
      className={`flex h-fit w-full flex-col items-start justify-center gap-12 bg-white bg-opacity-[0.02] px-4 py-16 lg:gap-3 lg:px-32 lg:py-28
    `}
    >
      <span className="text-[24px] font-black text-primary lg:text-[34px]">
        Description
      </span>
      {description.map((desc, i) => (
        <div
          key={i}
          className="mt-2 flex items-center gap-6 max-sm:items-start max-sm:gap-3 "
        >
          <div className="h-1 w-16 shrink-0 rounded-sm bg-primary max-sm:mt-2 max-sm:w-8"></div>
          <span className="text-[14px] font-medium text-white lg:text-[18px]">
            {desc}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Description;
