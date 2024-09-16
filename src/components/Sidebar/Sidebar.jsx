//_Styles:
import styles from "./Sidebar.module.scss";

//_Components:
import { Logo } from "../Logo/Logo";
import { Documents } from "./Documents/Documents";
import { ThemSwitcher } from "./ThemSwitcher/ThemSwitcher";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <p className="section-title">my documents</p>
      <Documents classes={[styles.sidebarDocuments]} />
      <ThemSwitcher />
    </div>
  );
}
export { Sidebar };
