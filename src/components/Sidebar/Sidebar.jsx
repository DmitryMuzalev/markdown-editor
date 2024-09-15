//_Styles:
import styles from './Sidebar.module.scss';

//_Components:
import { Logo } from '../Logo/Logo';
import { DocumentsList } from './DocumentsList/DocumentsList';
import { ThemSwitcher } from './ThemSwitcher/ThemSwitcher';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <p className="section-title">my documents</p>
      <DocumentsList classes={[styles.sidebarDocumentsList]} />
      <ThemSwitcher />
    </div>
  );
}
export { Sidebar };
