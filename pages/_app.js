import "../styles/globals.css";
import { useState, useEffect } from "react";
import { NavBar } from "../components";
function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    themeCheck();
  }, [darkMode]);

  // check theme on component mount
  useEffect(() => {
    themeCheck();
  }, []);

  // check and reset theme
  const themeCheck = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
      console.log(!("theme" in localStorage));
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };
  const darkHandler = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar darkHandler={darkHandler} darkMode={darkMode} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
