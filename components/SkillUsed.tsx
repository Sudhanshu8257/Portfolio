import React from "react";
import SkillBox from "./SkillBox";
import { skill } from "@/types";

const SkillUsed = ({ skills }: { skills: skill[] }) => {
  return (
    <section className="w-full px-4 py-16 lg:px-32 lg:py-28 ">
      <div className="flex items-center justify-center gap-3 ">
        <div className="flex shrink-0 items-center">
          <div className="size-2.5 rotate-45 bg-primary"></div>
          <div className="h-[2.5px] w-[100px] rounded-sm bg-primary max-sm:w-[60px]"></div>
        </div>
        <span className="text-[24px] font-black text-primary lg:text-[34px]">
          {" "}
          Skills Used{" "}
        </span>
        <div className="flex shrink-0 items-center">
          <div className="h-[2.5px] w-[100px] rounded-sm bg-primary max-sm:w-[60px]"></div>
          <div className="size-2.5 rotate-45 bg-primary"></div>
        </div>
      </div>
      <div className="mt-24 flex w-full items-center justify-center gap-9 max-lg:flex-wrap">
        {skills.map((skill, i) => (
          <SkillBox key={i} image={skill.image} label={skill.label} />
        ))}
      </div>
      <div className="flex w-full flex-col  items-center max-lg:hidden"></div>
    </section>
  );
};

export default SkillUsed;
