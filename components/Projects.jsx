import React from "react";
import ProjectItem from "./ProjectItem";
import wallet from "../public/assets/projects/wallet.png";
import explorer from "../public/assets/projects/niktonet.jpg";
import inae from "../public/assets/projects/inae.png";
import troy from "../public/assets/projects/Troya.png";
import quote from "../public/assets/projects/12.png";
import meetup from "../public/assets/projects/meet-up.png";
import crypto from "../public/assets/projects/crypto.png";
import gpt3 from "../public/assets/projects/gpt333.png";
import klaatoo from "../public/assets/projects/klaato.png";
import docs from "../public/assets/projects/docs.png";

const Projects = () => {
  const data = [
    {
      name: "Wallet for BlockChain Tech.",
      framework: "Svelte js",
      photo: wallet,
      link: "wallet",
    },
    {
      name: "Inae Explorer for BlockChain Tech.",
      framework: "Svelte js",
      photo: inae,
      link: "inae",
    },
    {
      name: "Explorer for BlockChain Tech.",
      framework: "Svelte js",
      photo: explorer,
      link: "explorer",
    },
    {
      name: "Klaatoo Wallet Download Page",
      framework: "Svelte js",
      photo: klaatoo,
      link: "klaatoo",
    },
    {
      name: "Documentation website for Inae coin integration",
      framework: "docusaurus template",
      photo: docs,
      link: "docs",
    },
    {
      name: "ChatGPT3 UI/UX design",
      framework: "React js",
      photo: gpt3,
      link: "gpt3",
    },
    {
      name: "Troy Kebab Food App",
      framework: "React js",
      photo: troy,
      link: "troy-kebab",
    },
    {
      name: "Best Quote App",
      framework: "React js",
      photo: quote,
      link: "best-quote",
    },
    {
      name: "Meet-up",
      framework: "Svelte js",
      photo: meetup,
      link: "meet-up",
    },
    {
      name: "Crypto App",
      framework: "React js",
      photo: crypto,
      link: "crypto",
    },
  ];
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-white">
          Projects
        </p>
        <h2 className="py-2">What i&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((project) => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
