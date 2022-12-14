import Head from "next/head";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import About from "../components/About";
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
    </div>
  );
}
