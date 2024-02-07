import React from "react";
import ProjectBox from "./ProjectBox";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

const Projects = ({
  project,
  pathName,
}: {
  project: Project[];
  pathName: string;
}) => {
  const CurrentProjects = project;
  return (
    <section
      className={`flex w-full flex-col items-center px-4 py-16 lg:px-32 lg:py-28 ${
        pathName === "/" && "bg-white bg-opacity-[0.02]"
      }`}
    >
      {pathName === "/" && (
        <div className="mb-12 flex items-center justify-center gap-3 lg:mb-24 ">
          <div className="flex shrink-0 items-center">
            <div className="size-2.5 rotate-45 bg-primary"></div>
            <div className="h-[2.5px] w-[90px] rounded-sm bg-primary max-sm:w-[30px]"></div>
          </div>
          <span className="text-[24px] font-black text-primary lg:text-[34px]">
            My Projects
          </span>
          <div className="flex shrink-0 items-center">
            <div className="h-[2.5px] w-[90px] rounded-sm bg-primary max-sm:w-[30px]"></div>
            <div className="size-2.5 rotate-45 bg-primary"></div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-10 lg:gap-20">
        {CurrentProjects?.map((project, i) => (
          <ProjectBox
            key={i}
            pathName={pathName}
            project={project}
            i={pathName === "/" ? i : 0}
          />
        ))}
      </div>
      {pathName === "/" && (
        <Link
          href={"/projects"}
          className="mt-20 flex gap-1 text-[20px] font-black text-primary max-sm:text-[18px]"
        >
          View More
          <Image
            src={"/assets/icons/chevronright.svg"}
            alt="chevron"
            width={20}
            height={20}
          />
        </Link>
      )}
    </section>
  );
};

export default Projects;
