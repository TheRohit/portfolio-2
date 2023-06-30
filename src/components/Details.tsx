import Link from "next/link";
import { FC } from "react";

interface DetailsProps {}

const Details: FC<DetailsProps> = ({}) => {
  return (
    <div>
      <h2 className="mt-0">
        Full Stack Developer
      </h2>
      
      <p className="md:text-lg 2xl:text-2xl text-brand-tint">
        Are you searching for a practical enthusiast for your{" "}
        <span className="highlight">project</span>?
      </p>
      <p className="md:text-lg 2xl:text-2xl text-brand-tint">
      I&apos;m a 2023 Engineering Grad, My preferred work is {" "}<span className="highlight">fullstack development</span>. I&apos;m using the best tool for the job, be it a reliable framework or the latest web features.
      </p>
      <p className="max-w-2xl md:text-lg 2xl:max-w-5xl 2xl:text-2xl text-brand-tint">
          Neither impressive interfaces nor blazing performance are the solution, but the{' '}
          <span className="highlight">balance</span> between a maintainable implementation and
          <br className="hidden md:inline-block 2xl:hidden" /> user-focused functionality.
        </p>
      <div className="mt-8 flex flex-row flex-wrap gap-x-2">
        <Link className="cta" href="#section-tech">
          techstack
        </Link>
        <Link className="cta" href="#section-project">
          projects
        </Link>
        <Link className="cta" href="#section-contact">
          contact
        </Link>
      </div>
    </div>
  );
};

export default Details;
