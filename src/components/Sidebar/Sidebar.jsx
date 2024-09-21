//_Utils:
import clsx from 'clsx';

//_Styles:
import styles from './Sidebar.module.scss';

//_Components:
import { Logo } from '../Logo/Logo';
import { Documents } from './Documents/Documents';
import { ThemSwitcher } from './ThemSwitcher/ThemSwitcher';

function Sidebar({ isOpenedSidebar }) {
  const sidebarStyles = clsx(
    styles.sidebar,
    !isOpenedSidebar && styles.sidebarClosed
  );

  return (
    <div className={sidebarStyles}>
      <Logo />
      <p className="section-title">my documents</p>
      <Documents classes={[styles.sidebarDocuments]} />
      <ThemSwitcher />
    </div>
  );
}
export { Sidebar };
