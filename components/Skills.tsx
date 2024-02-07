import { skillRay, skillMobRay } from "@/utils";
import React from "react";
import SkillBox from "./SkillBox";

const Skills = () => {
  return (
    <section className="w-full px-4 py-16 lg:px-32 lg:py-28 ">
      <div className="flex items-center justify-center gap-3 ">
        <div className="flex shrink-0 items-center">
          <div className="size-2.5 rotate-45 bg-primary"></div>
          <div className="h-[2.5px] w-[100px] rounded-sm bg-primary max-sm:w-[60px]"></div>
        </div>
        <span className="text-[24px] font-black text-primary lg:text-[34px]">
          {" "}
          Skills{" "}
        </span>
        <div className="flex shrink-0 items-center">
          <div className="h-[2.5px] w-[100px] rounded-sm bg-primary max-sm:w-[60px]"></div>
          <div className="size-2.5 rotate-45 bg-primary"></div>
        </div>
      </div>
      {/* Desktop */}
      <div className="mt-24 flex w-full flex-col items-center gap-9 max-lg:hidden">
        {skillRay.map((skills, i) => (
          <div
            key={i}
            className="flex w-full items-center justify-center gap-[48px]"
          >
            {skills.map((skill) => (
              <SkillBox
                image={skill?.image}
                label={skill?.label}
                key={skill?.label}
              />
            ))}
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="mt-12 flex w-full flex-col items-center gap-6 p-2 max-sm:gap-4 lg:hidden">
        {skillMobRay.map((skills, i) => (
          <div
            key={i}
            className="flex w-full items-center justify-evenly gap-[18px] max-sm:gap-[8px]"
          >
            {skills.map((skill) => (
              <SkillBox
                image={skill?.image}
                label={skill?.label}
                key={skill?.label}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
