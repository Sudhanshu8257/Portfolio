import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="container1 flex flex-col items-center justify-center px-2 md:px-32">
      <span className="text-[32px] font-black max-sm:text-[28px] lg:text-[54px]">
        Sudhanshu Lohana
      </span>
      <span className="-mt-3 text-[32px] font-black text-secondary  max-lg:-mt-1 max-sm:text-[24px] lg:text-[44px]">
        Web Developer
      </span>
      <div className="mt-2 flex gap-5">
        <span className="text-[14px] text-secondary lg:text-[18px]">
          Html/Css
        </span>
        <span className="text-[14px] text-secondary lg:text-[18px]">React</span>
        <span className="text-[14px] text-secondary lg:text-[18px]">
          Next Js
        </span>
      </div>
      <Link
        href={"/assets/SudhanshuLohanaResume.pdf"}
        download={"/assets/SudhanshuLohanaResume.pdf"}
        className="mt-14 rounded-2xl bg-primary px-16 py-4 text-[20px] font-[800] text-primary-foreground hover:bg-[#0993efd8] max-sm:px-12 max-sm:py-3"
      >
        Download CV
      </Link>
    </section>
  );
};

export default Hero;
