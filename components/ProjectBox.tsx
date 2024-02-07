import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface ProjectProps {
  project: Project;
  i: number;
  pathName: string;
  hide?: boolean;
}
const ProjectBox = ({ project, i, pathName, hide }: ProjectProps) => {
  const commonImageProps = {
    src: project.image,
    alt: project.name,
    width: 625,
    height: 0,
    quality: 100,
  };
  return (
    <div
      className={`flex ${
        i % 2 !== 0 && "lg:flex-row-reverse"
      } items-center justify-start gap-6 max-lg:mt-6 max-lg:max-w-[650px] max-lg:flex-col max-lg:rounded-lg max-lg:bg-white max-lg:bg-opacity-[0.02] max-lg:p-4 lg:gap-12`}
    >
      {/* Desktop Image */}
      <Link href={project.deployedLink} className="shrink-0">
        <Image {...commonImageProps} className="rounded-xl max-lg:hidden" />
      </Link>

      <div
        className={`flex h-full flex-col justify-between max-lg:hidden ${
          i % 2 === 0 ? "items-start text-left" : "items-end text-right"
        }`}
      >
        <span className="text-[34px] font-black text-white">
          {project.name}
        </span>
        <span className="mt-5 text-[18px] font-bold text-[#999]">
          {project.shortDescription}
        </span>
        <div className="flex items-center gap-4">
          {!hide && (
            <Link
              href={`/projects/${project.name}`}
              className="mt-10 flex size-16 cursor-pointer items-center justify-center rounded-full bg-primary"
            >
              <Image
                src="/assets/icons/arrowright.svg"
                alt="arrow"
                width={42}
                height={42}
              />
            </Link>
          )}
          {pathName.includes("/projects") && (
            <Link
              href={project.githubLink}
              className="mt-10 flex size-16 cursor-pointer items-center justify-center rounded-full bg-primary"
            >
              <Image
                src="/assets/icons/github-black.svg"
                alt="arrow"
                width={38}
                height={38}
              />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Image */}
      <Link href={project.deployedLink}>
        <Image {...commonImageProps} className="rounded-xl lg:hidden" />
      </Link>

      <div
        className={`flex size-full items-center justify-between gap-1 lg:hidden`}
      >
        <div className="flex flex-col ">
          <span className="text-[24px] font-black text-white max-sm:text-[20px]">
            {project.name}
          </span>
          <span className="mt-1 text-[14px] font-bold text-[#999] max-sm:text-[12px]">
            {project.shortDescription}
          </span>
        </div>
        <div className="flex items-center gap-4">
          {!hide && (
            <Link
              href={`/projects/${project.name}`}
              className="flex size-20 shrink-0 items-center justify-center rounded-full bg-primary max-lg:size-14 max-sm:size-12 "
            >
              <Image
                src="/assets/icons/arrowright.svg"
                alt="arrow"
                width={32}
                height={32}
              />
            </Link>
          )}
          {pathName.includes("/projects") && (
            <Link
              href={project.githubLink}
              className="flex size-20 shrink-0 items-center justify-center rounded-full bg-primary max-lg:size-14 max-sm:size-12 "
            >
              <Image
                src="/assets/icons/github-black.svg"
                alt="arrow"
                width={32}
                height={32}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
