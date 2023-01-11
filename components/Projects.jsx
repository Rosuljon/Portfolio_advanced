import React from "react";
import ProjectItem from "./ProjectItem";
import wallet from "../public/assets/projects/wallet.png";
import explorer from "../public/assets/projects/explorer.png";
import troy from "../public/assets/projects/Troya.png";
import quote from "../public/assets/projects/12.png";
import meetup from "../public/assets/projects/meet-up.png";
import crypto from "../public/assets/projects/crypto.png";

const Projects = () => {
  const data = [
    {
      name: "Wallet for BlockChain Tech.",
      framework: "Svelte js",
      photo: wallet,
      link: "https://wallet.niktonet.com",
    },
    {
      name: "Explorer for BlockChain Tech.",
      framework: "Svelte js",
      photo: explorer,
      link: "https://explorer.niktonet.com",
    },
    {
      name: "Troy Kebab Food App",
      framework: "React js",
      photo: troy,
      link: "https://troykebab.netlify.app",
    },
    {
      name: "Best Quote App",
      framework: "React js",
      photo: quote,
      link: "https://best-quote.netlify.app",
    },
    {
      name: "Meet-up",
      framework: "Svelte js",
      photo: meetup,
      link: "https://meet-up-ronny.netlify.app",
    },
    {
      name: "Crypto App",
      framework: "React js",
      photo: crypto,
      link: "https://crypto-ronny.netlify.app",
    },
  ];
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-2">What i've built</h2>
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
