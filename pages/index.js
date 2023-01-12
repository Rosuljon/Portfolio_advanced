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
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
