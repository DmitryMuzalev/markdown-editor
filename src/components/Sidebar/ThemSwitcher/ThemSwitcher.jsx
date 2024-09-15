import styles from './ThemSwitcher.module.scss';
import { useState, useEffect } from 'react';

import clsx from 'clsx';

function ThemSwitcher() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleSwitcher = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const switcherStyles = clsx(
    styles.switcher,
    theme === 'dark' && styles.switcherChecked
  );

  return (
    <div className={styles.themeSwitcher}>
      <i className="icon-light-mode"></i>
      <button className={switcherStyles} onClick={toggleSwitcher}>
        <span className={styles.switcherSlider}></span>
      </button>
      <i className="icon-dark-mode"></i>
    </div>
  );
}
export { ThemSwitcher };
