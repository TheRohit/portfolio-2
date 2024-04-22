import { FC } from "react";
import Tags from "./Tags";

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  return (
    <div>
      <h2 className="text-gray-900 dark:text-gray-900">./about/tech</h2>
      <p>
        I am an Engineer with a deep passion for the worlds of Full Stack and
        DevOps. Keep scrolling if you wanna know why, how and what I work on!
      </p>
      <h3>What is my tech stack?</h3>
      <span className="amblock font-bold">Languages</span>

      <Tags
        tags={["TypeScript", "JavaScript", "Java", "C++", "SQL"]}
        className="bg-gray-800 text-brand-accent"
      />

      <span className="block font-bold">Frameworks</span>
      <Tags
        tags={["NextJS 🇳", "React ⚛️", "Tailwind CSS 🍃", "Express"]}
        className="bg-gray-800 text-brand-accent"
      />
      <span className="block font-bold">Tools</span>
      <Tags
        tags={[
          "NodeJS 🟩",
          "Prisma",
          "Docker 🐳",
          "Jenkins 🎩",
          "Sentry",
          "PostHog",
        ]}
        className="bg-gray-800 text-brand-accent"
      />
      <span className="block font-bold">Platforms</span>
      <Tags
        tags={["GitHub", "AWS", "Google Cloud", "Vercel", "Coolify"]}
        className="bg-gray-800 text-brand-accent"
      />
    </div>
  );
};

export default TechStack;
