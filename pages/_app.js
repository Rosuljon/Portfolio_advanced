import "../styles/globals.css";
import { useState } from "react";
import { NavBar } from "../components";
function MyApp({ Component, pageProps }) {
  const [darkMode,setDarkMode] = useState(false);
  const darkHandler = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? "dark" : "" }>
      <NavBar darkHandler={darkHandler} darkMode={darkMode} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
