import Projects from "@/components/Projects";
import { projects } from "@/utils";
import React from "react";

const Project = () => {
  return (
    <main className="mt-12 flex flex-col items-center justify-between scroll-smooth">
      <Projects project={projects} pathName="/projects" />
    </main>
  );
};

export default Project;
