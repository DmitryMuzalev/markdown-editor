//_Styles:
import styles from './Header.module.scss';

//_Components:
import { SidebarSwitcher } from '../../features/SidebarSwitcher/SidebarSwitcher';
import { Logo } from '../Logo/Logo';
import { FileName } from './FileName/FileName';
import { DeleteButton } from './DeleteButton/DeleteButton';
import { SaveButton } from './SaveButton/SaveButton';

function Header() {
  return (
    <div className={styles.header}>
      <SidebarSwitcher />
      <Logo classes={[styles.headerLogo]} />
      <FileName classes={[styles.headerField]} />
      <div className={styles.headerButtons}>
        <DeleteButton />
        <SaveButton />
      </div>
    </div>
  );
}

export { Header };
