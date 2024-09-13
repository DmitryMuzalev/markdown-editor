import clsx from 'clsx';
import styles from './Button.module.scss';

function Button({ children, cb = () => {}, type = 'default' }) {
  const buttonStyles = clsx(
    styles.button,
    type === 'primary' && styles.buttonPrimary
  );
  return (
    <button className={buttonStyles} onClick={cb}>
      {children}
    </button>
  );
}
export { Button };
