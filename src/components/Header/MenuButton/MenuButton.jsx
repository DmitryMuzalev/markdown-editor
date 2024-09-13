//_Utils:
import clsx from 'clsx';

//_Hooks:
import { useState } from 'react';

//_Styles:
import styles from './MenuButton.module.scss';

function MenuButton() {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const toggleMenu = () => setIsOpenedMenu((prev) => !prev);

  const menuButtonStyles = clsx(
    styles.menuButton,
    isOpenedMenu && styles.menuButtonOpened
  );

  return (
    <button className={menuButtonStyles} onClick={toggleMenu}>
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
    </button>
  );
}
export { MenuButton };
