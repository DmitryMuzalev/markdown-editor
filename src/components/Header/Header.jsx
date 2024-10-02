//_Hooks:
import { useDispatch, useSelector } from "react-redux";
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

//_Actions:
import { saveDocument } from "../../features/Documents/documents-slice";
import { toggleShowDeleteMenu } from "../../features/DeleteMenu/delite-menu-slice";
import { checkDocumentBeforeSave } from "../../helpers/checkDocumentBeforeSave";

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
  const { currentDocument, documentsList } = useSelector(
    (state) => state.documents
  );

  const dispatch = useDispatch();

  const handlerSaveDocument = () => {
    const isCheck = checkDocumentBeforeSave(currentDocument, documentsList);

    if (isCheck) {
      dispatch(saveDocument());
    } else {
      document.getElementById("fileName").focus();
    }
  };

  const handlerDeleteDocument = () => dispatch(toggleShowDeleteMenu());

  return (
    <div className={styles.headerButtons}>
      <Button cb={handlerDeleteDocument} disabled={!documentsList.length}>
        <img src={DeleteIcon} alt="delete file" />
      </Button>
      <Button
        type="primary"
        cb={handlerSaveDocument}
        disabled={!documentsList.length}
      >
        <img src={SaveIcon} alt="save changes" />
        {!isTablet && <span>save changes</span>}
      </Button>
    </div>
  );
}

export { Header };
