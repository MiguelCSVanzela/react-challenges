import { useState, useEffect } from "react";
import styles from "./LightDark.module.css";
const LightDark = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme === "light" ? styles.dark : styles.light;
  }, [theme]);
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default LightDark;
