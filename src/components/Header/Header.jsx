//_Hooks:
import { useMediaQuery } from "react-responsive";

//_Styles:
import styles from "./Header.module.scss";

//_Images:
import SaveIcon from "../../assets/icon-save.svg";
import DeleteIcon from "../../assets/icon-delete.svg";

//_Components:
import { FileName } from "./FileName/FileName";
import { Button } from "../UI/Button/Button";
import { Logo } from "../Logo/Logo";
import { SidebarSwitcher } from "../../features/SidebarSwitcher/SidebarSwitcher";
import { useDispatch } from "react-redux";
import {
  deleteDocument,
  saveDocument,
} from "../../features/Documents/documents-slice";

function Header() {
  const isSmallDesktop = useMediaQuery({ query: "(max-width: 992px)" });

  return (
    <div className={styles.header}>
      <SidebarSwitcher />
      {!isSmallDesktop && <Logo />}
      <FileName classes={[styles.headerField]} />
      <HeaderButtons />
    </div>
  );
}

function HeaderButtons() {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const dispatch = useDispatch();

  return (
    <div className={styles.headerButtons}>
      <Button cb={() => dispatch(deleteDocument())}>
        <img src={DeleteIcon} alt="delete file" />
      </Button>
      <Button type="primary" cb={() => dispatch(saveDocument())}>
        <img src={SaveIcon} alt="save changes" />
        {!isTablet && <span>save changes</span>}
      </Button>
    </div>
  );
}

export { Header };
