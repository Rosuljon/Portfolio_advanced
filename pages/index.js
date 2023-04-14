import Head from "next/head";
import { Main, About, Skills, Projects, Contact } from "../components";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ronny Dev | MERN Stack Developer</title>
        {/* <meta name="description" content="Ronny Dev's Portfolio website" />
        <meta property="og:image" content="/assets/transparent.png"></meta> */}
        <meta property="og:title" content="Ronny Dev | MERN Stack Developer" />
        <meta property="og:site_name" content="ronny7.netlify.app" />
        <meta property="og:description" content="Ronny Dev's Portfolio website" />
        <meta property="og:image" content="http://www.ronny7.netlify.app/assets/transparent.png" />
        <link rel="icon" href="/assets/r_dev.png" />
      </Head>
      <div className="dark:bg-gradient-to-r from-[#4568dc] to-[#b06ab3] dark:text-white">
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
