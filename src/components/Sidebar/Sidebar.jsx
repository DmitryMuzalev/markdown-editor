//_Utils:
import clsx from 'clsx';

//_Hooks:
import { useSelector } from 'react-redux';

//_Styles:
import styles from './Sidebar.module.scss';

//_Components:
import { Logo } from '../Logo/Logo';
import { ThemSwitcher } from '../../features/ThemSwitcher/ThemSwitcher';
import { Documents } from '../../features/Documents/Documents';

function Sidebar() {
  const showSidebar = useSelector((state) => state.showSidebar);

  const sidebarStyles = clsx(
    styles.sidebar,
    !showSidebar && styles.sidebarClosed
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
