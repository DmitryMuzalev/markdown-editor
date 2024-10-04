//_Utils:
import clsx from 'clsx';

//_Styles:
import styles from './Sidebar.module.scss';

//_Hooks:
import { useSelector } from 'react-redux';

//_Components:
import { Logo } from '../Logo/Logo';
import { Documents } from '../../features/Documents/Documents';
import { ThemSwitcher } from '../../features/ThemSwitcher/ThemSwitcher';

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
