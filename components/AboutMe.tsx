import React from "react";

const AboutMe = ({ bg }: { bg: boolean }) => {
  return (
    <section
      className={`flex h-fit w-full flex-col items-start justify-center gap-4 px-4 py-16 lg:gap-3 lg:px-32 lg:py-28 ${
        bg && "bg-white bg-opacity-[0.02]"
      }`}
    >
      <span className="text-[24px] font-black text-primary lg:text-[34px]">
        About Me
      </span>
      <div className="flex w-full gap-4 lg:gap-6">
        <div className="h-1 w-16 shrink-0 rounded-sm bg-primary max-sm:w-12"></div>
        <div className="-mt-3 flex flex-col gap-1 text-[14px] font-medium text-white lg:text-[18px]">
          <div>
            Hello my name is <span className="font-bold">Sudhanshu Lohana</span>
          </div>
          <div>
            I&apos;m a passionate web developer and UI/UX enthusiast based in
            India. My journey in the digital realm is driven by a love for
            turning lines of code into visually stunning and user-centric
            experiences.
          </div>
          <div>
            Beyond the screen, I&apos;m a perpetual learner, always exploring
            the latest trends and technologies to stay at the forefront of my
            craft.
          </div>
          <div>
            I like to have my perspective and belief system challenged so that i
            see the world through new eyes
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
