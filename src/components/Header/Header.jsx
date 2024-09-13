import { Button } from '../UI/Button/Button';
import styles from './Header.module.scss';

import SaveIcon from '../../assets/icon-save.svg';
import DeleteIcon from '../../assets/icon-delete.svg';
import DocumentIcon from '../../assets/icon-document.svg';

import { useState } from 'react';
import clsx from 'clsx';
import { Logo } from '../Logo/Logo';
import { useMediaQuery } from 'react-responsive';

function Header() {
  const isSmallDesktop = useMediaQuery({ query: '(max-width: 992px)' });
  return (
    <div className={styles.header}>
      <MenuButton />
      {!isSmallDesktop && <Logo />}
      <FileName />
      <HeaderButtons />
    </div>
  );
}

function FileName() {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className={styles.fileName}>
      <div className={styles.fileNameIcon}>
        <img src={DocumentIcon} alt="file" />
      </div>
      <div className={styles.fileNameField}>
        {!isTablet && <label htmlFor="fileName">document name</label>}
        <input type="text" id="fileName" value={'welcome.md'} />
      </div>
    </div>
  );
}

function HeaderButtons() {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className={styles.headerButtons}>
      <Button>
        <img src={DeleteIcon} alt="delete file" />
      </Button>
      <Button type="primary">
        <img src={SaveIcon} alt="save changes" />
        {!isTablet && <span>save changes</span>}
      </Button>
    </div>
  );
}

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

export { Header };
