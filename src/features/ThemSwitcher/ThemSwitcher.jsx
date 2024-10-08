//_Utils:
import clsx from 'clsx';

//_Styles:
import styles from './ThemSwitcher.module.scss';

//_Hooks:
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//_Helpers:
import { setItem } from '../../helpers/localStorage';

//_Actions:
import { toggleTheme } from './theme-slice';

function ThemSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    setItem('theme', theme);
  }, [theme]);

  const handlerThemSwitcher = () => dispatch(toggleTheme());

  const switcherStyles = clsx(
    styles.switcher,
    theme === 'dark' && styles.switcherChecked
  );

  return (
    <div className={styles.themeSwitcher}>
      <i
        className="icon-light-mode"
        style={{
          color: theme === 'dark' ? 'var(--natural-500)' : 'var(--white)',
        }}
      ></i>
      <button className={switcherStyles} onClick={handlerThemSwitcher}>
        <span className={styles.switcherSlider}></span>
      </button>
      <i
        className="icon-dark-mode"
        style={{
          color: theme === 'dark' ? 'var(--white)' : 'var(--natural-500)',
        }}
      ></i>
    </div>
  );
}
export { ThemSwitcher };
