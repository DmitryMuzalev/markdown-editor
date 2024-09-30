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
import { useDispatch, useSelector } from "react-redux";
import { saveDocument } from "../../features/Documents/documents-slice";
import toast from "react-hot-toast";
import { toggleShowDeleteMenu } from "../../features/DeleteMenu/delite-menu-slice";

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

  return (
    <div className={styles.headerButtons}>
      <Button cb={() => dispatch(toggleShowDeleteMenu())}>
        <img src={DeleteIcon} alt="delete file" />
      </Button>
      <Button
        type="primary"
        cb={() => {
          const name = currentDocument?.name.trim();

          if (name.length) {
            const document = documentsList.find(
              (doc) => doc.name === currentDocument?.name
            );
            if (document && document.id !== currentDocument?.id) {
              toast.error(
                `${name} already exists. \n Please change the document name.`
              );
            } else {
              dispatch(saveDocument());
              toast.success("Document saved");
            }
          } else {
            toast.error(
              "Document name cannot be an empty string. Document not saved."
            );
            document.getElementById("fileName").focus();
          }
        }}
      >
        <img src={SaveIcon} alt="save changes" />
        {!isTablet && <span>save changes</span>}
      </Button>
    </div>
  );
}

export { Header };
