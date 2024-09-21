//_Utils:
import clsx from 'clsx';

//_Styles:
import styles from './MenuButton.module.scss';

function MenuButton({ toggle, isOpenedSidebar }) {
  const menuButtonStyles = clsx(
    styles.menuButton,
    isOpenedSidebar && styles.menuButtonActive
  );

  return (
    <button className={menuButtonStyles} onClick={toggle}>
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
