import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import React from "react";

const page = () => {
  return (
    <main className="mt-12 flex flex-col items-center justify-between scroll-smooth">
      <AboutMe bg={false} />
      <Education />
    </main>
  );
};

export default page;
