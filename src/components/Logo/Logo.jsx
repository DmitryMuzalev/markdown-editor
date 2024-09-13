import styles from './Logo.module.scss';
import LogoIcon from '../../assets/logo.svg';

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={LogoIcon} alt="logo" />
    </div>
  );
}
export { Logo };
