import Description from "@/components/Description";
import ProjectBox from "@/components/ProjectBox";
import SkillUsed from "@/components/SkillUsed";
import { projects } from "@/utils";
import React from "react";
export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}
const page = ({ params }: URLProps) => {
  const projectName = params.id.replaceAll("%20", " ");
  const project = projects.filter((n) => n.name === projectName)[0];
  return (
    <>
      <section
        className={`flex w-full flex-col items-center px-4 py-16 lg:px-32 lg:py-28 `}
      >
        <ProjectBox project={project} i={0} pathName="/projects" hide={true} />
      </section>
      <Description description={project.detailedDescription} />
      <SkillUsed skills={project.skills} />
    </>
  );
};

export default page;
