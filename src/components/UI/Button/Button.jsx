//_Utils:
import clsx from 'clsx';

//_Styles:
import styles from './Button.module.scss';

function Button({ children, cb = () => {}, type = 'default', classes = [] }) {
  const buttonStyles = clsx(
    styles.button,
    type === 'primary' && styles.buttonPrimary,
    ...classes
  );

  return (
    <button className={buttonStyles} onClick={cb}>
      {children}
    </button>
  );
}
export { Button };
