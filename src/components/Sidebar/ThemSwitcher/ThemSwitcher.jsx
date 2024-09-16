import styles from "./ThemSwitcher.module.scss";
import { useState, useEffect } from "react";

import clsx from "clsx";

function ThemSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleSwitcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const switcherStyles = clsx(
    styles.switcher,
    theme === "dark" && styles.switcherChecked
  );

  return (
    <div className={styles.themeSwitcher}>
      <i
        className="icon-light-mode"
        style={{
          color: theme === "dark" ? "var(--natural-500)" : "var(--white)",
        }}
      ></i>
      <button className={switcherStyles} onClick={toggleSwitcher}>
        <span className={styles.switcherSlider}></span>
      </button>
      <i
        className="icon-dark-mode"
        style={{
          color: theme === "dark" ? "var(--white)" : "var(--natural-500)",
        }}
      ></i>
    </div>
  );
}
export { ThemSwitcher };
