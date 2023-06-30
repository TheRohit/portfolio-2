import { FC } from "react";
import Svgpro from "./images/projext-text-white.svg";
import Image from "next/image";
import { ExternalLink, Github, GithubIcon } from "lucide-react";
interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div>
      <h2 id="section-project">./about/projects</h2>
      <Image
        src={Svgpro}
        alt="projects"
        className="active mt-12 flex w-full flex-col items-stretch justify-center"
        aria-hidden="true"
      />

      <div className="grid gap-4 justify-center auto-rows-fr md:grid-cols-2 items-center  ">


        <div className=" max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 h-full ">
          <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
            <h2>Breadit: Full Stack Reddit Clone</h2>
            <p className="text-gray-700 dark:text-gray-300 ">

            Fullstack Reddit clone using Next.js 13, React, TypeScript, Tailwind CSS, and Prisma with MySQL
            </p>

            <div className="mt-8 gap-3 items-center ">
              <div className="flex justify-center gap-4">
                <a href="https://github.com/TheRohit/breadit-r" target="_blank"><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex gap-1 justify-center">
                  {" "}
                  <Github />
                  Github
                </button></a>
                <a href="https://breadit.rohitm.me/" target="_blank">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex gap-1 justify-center">
                  {" "}
                  <ExternalLink />
                  Visit
                </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800  ">
          <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
            <h2>Realtime Health Monitor</h2>
            <p className="text-gray-700 dark:text-gray-300 ">
            Real-time monitoring of vital signs with Eulerian Video Magnification using Next.js 13, Tailwind CSS
            </p>

            <div className="mt-8 gap-4 items-center  ">
              <div className="flex justify-center gap-4  ">
                <a href="https://github.com/TheRohit/Remote-Heartrate-Detection-using-EVM" target="_blank">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex gap-1 justify-center ">
                  {" "}
                  <Github />
                  Github
                </button>
                </a>
                
                <a href="https://evm.rohitm.me/" target="_blank">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex gap-1 justify-center ">
                  {" "}
                  <ExternalLink />
                  Visit
                </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
