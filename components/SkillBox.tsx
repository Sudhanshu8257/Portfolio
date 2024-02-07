import { skill } from "@/types";
import Image from "next/image";
import React from "react";

const SkillBox = ({ image, label }: skill) => {
  return (
    <div className="flex min-w-[120px] shrink-0 flex-col items-center justify-center gap-3 rounded-lg bg-white bg-opacity-[0.02] px-6 pb-2 pt-3 max-sm:min-w-[90px] max-sm:px-0 max-sm:py-2 lg:gap-5 lg:px-10 lg:pt-8">
      <Image
        src={image}
        alt={label}
        width={90}
        height={90}
        className="h-[90px] w-auto max-lg:h-[80px] max-sm:h-[48px] "
      />
      <span className="mt-2 justify-self-end text-[18px] font-bold capitalize max-sm:text-[14px] lg:mt-5">
        {label}
      </span>
    </div>
  );
};

export default SkillBox;
