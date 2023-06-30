import Link from "next/link";
import { FC } from "react";

interface DetailsProps {}

const Details: FC<DetailsProps> = ({}) => {
  return (
    <div>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        
      </h2>
      <br></br>
      <p className="md:text-lg 2xl:text-2xl">
        Are you searching for a practical enthusiast for your{" "}
        <span className="highlight">project</span>?
      </p>

      <div className="mt-8 flex flex-row flex-wrap gap-x-2">
        <Link className="cta" href="#section-tech">
          techstack
        </Link>
        <Link className="cta" href="#section-experience">
          experience
        </Link>
        <Link className="cta" href="#section-blog">
          blog
        </Link>
        <Link className="cta" href="#section-design">
          design
        </Link>
        <Link className="cta" href="#section-contact">
          contact
        </Link>
      </div>
    </div>
  );
};

export default Details;
