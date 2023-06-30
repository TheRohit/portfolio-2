import { FC } from "react";
import Svgpro from "./images/projext-text-white.svg";
import Image from "next/image";
interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div  >
      <Image
        src={Svgpro}
        alt="projects"
        className="active mt-12 flex w-full flex-col items-center justify-center"
        aria-hidden="true"
        

      />

      <div className="flex justify-center">
        <div>
            project 1
        </div>
        <div>
            project 2
        </div>
      </div>
    </div>

  );
};

export default Projects;
