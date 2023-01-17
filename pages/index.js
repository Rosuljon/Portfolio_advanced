import Head from "next/head";
import { Main, About, Skills, Projects, Contact } from "../components";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ronny Dev | MERN Stack Developer</title>
        <meta name="description" content="Ronny Dev's Portfolio website" />
        <link rel="icon" href="/assets/r_dev.png" />
      </Head>
      <div className="dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:text-white">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
    </div>
  );
}
