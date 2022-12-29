import Head from "next/head";
import { NavBar, Main, About, Skills } from "../components";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ronny Dev | MERN Stack Developer</title>
        <meta name="description" content="Ronny Dev's Portfolio website" />
        <link rel="icon" href="/assets/r_dev.png" />
      </Head>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <h1>Ronny vs CR7</h1>
    </div>
  );
}
