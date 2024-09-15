//_Hooks:
import { useMediaQuery } from 'react-responsive';

//_Styles:
import styles from './Header.module.scss';

//_Images:
import SaveIcon from '../../assets/icon-save.svg';
import DeleteIcon from '../../assets/icon-delete.svg';

//_Components:
import { MenuButton } from './MenuButton/MenuButton';
import { FileName } from './FileName/FileName';
import { Button } from '../UI/Button/Button';
import { Logo } from '../Logo/Logo';

function Header() {
  const isSmallDesktop = useMediaQuery({ query: '(max-width: 992px)' });

  return (
    <div className={styles.header}>
      <MenuButton />
      {!isSmallDesktop && <Logo />}
      <FileName classes={[styles.headerField]} />
      <HeaderButtons />
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

export { Header };
