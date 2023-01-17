import React from "react";
import GridItem from "./GridItem";
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-white">
           Skills
        </p>
        <h2 className="py-2">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <GridItem name="HTML" link="/assets/skills/html.png" />
          <GridItem name="CSS" link="/assets/skills/css.png" />
          <GridItem name="JAVASCRIPT" link="/assets/skills/javascript.png" />
          <GridItem name="REACT" link="/assets/skills/react.png" />
          <GridItem name="SVELTE" link="/assets/skills/svelte.png" />
          <GridItem name="NEXT.JS" link="/assets/skills/nextjs.png" />
          <GridItem name="TAILWIND" link="/assets/skills/tailwind.png" />
          <GridItem name="NODE" link="/assets/skills/node.png" />
          <GridItem name="EXPRESS" link="/assets/skills/express.png" />
          <GridItem name="MONGODB" link="/assets/skills/mongo.png" />
          <GridItem name="MONGOOSE" link="/assets/skills/mongoose.png" />
          <GridItem name="FIREBASE" link="/assets/skills/firebase.png" />
          <GridItem name="GITHUB" link="/assets/skills/github1.png" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
