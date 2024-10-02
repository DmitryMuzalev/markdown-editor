//_Hooks:
import { useMediaQuery } from "react-responsive";

//_Styles:
import styles from "./Header.module.scss";

//_Components:
import { FileName } from "./FileName/FileName";
import { Logo } from "../Logo/Logo";
import { SidebarSwitcher } from "../../features/SidebarSwitcher/SidebarSwitcher";
import { SaveButton } from "./SaveButton/SaveButton";
import { DeleteButton } from "./DeleteButton/DeleteButton";

//_Actions:

function Header() {
  const isSmallDesktop = useMediaQuery({ query: "(max-width: 992px)" });

  return (
    <div className={styles.header}>
      <SidebarSwitcher />
      {!isSmallDesktop && <Logo />}
      <FileName classes={[styles.headerField]} />
      <div className={styles.headerButtons}>
        <DeleteButton />
        <SaveButton />
      </div>
    </div>
  );
}

export { Header };
