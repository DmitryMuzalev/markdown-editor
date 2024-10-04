//_Utils:
import clsx from 'clsx';

//_Styles:
import styles from './Logo.module.scss';

//_Images:
import LogoIcon from '../../assets/logo.svg';

function Logo({ classes = [] }) {
  const logoStyles = clsx(styles.logo, ...classes);

  return (
    <div className={logoStyles}>
      <img src={LogoIcon} alt="logo" />
    </div>
  );
}
export { Logo };
