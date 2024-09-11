import { Button } from "../UI/Button/Button";
import styles from "./Header.module.scss";

import SaveIcon from "../../assets/icon-save.svg";
import DeleteIcon from "../../assets/icon-delete.svg";
import DocumentIcon from "../../assets/icon-document.svg";
import LogoIcon from "../../assets/logo.svg";
import { useState } from "react";
import clsx from "clsx";

function Header() {
  return (
    <div className={styles.header}>
      <MenuButton />
      <HeaderLogo />
      <FileName />
      <Button>
        <img src={DeleteIcon} alt="delete file" />
      </Button>
      <Button>
        <img src={SaveIcon} alt="save changes" />
        <span>save changes</span>
      </Button>
    </div>
  );
}

function FileName() {
  return (
    <div className={styles.fileName}>
      <div className={styles.fileNameIcon}>
        <img src={DocumentIcon} alt="file" />
      </div>
      <div className={styles.fileNameField}>
        <label htmlFor="fileName">document name</label>
        <input type="text" id="fileName" value={"welcome.md"} />
      </div>
    </div>
  );
}

function HeaderLogo() {
  return (
    <div className={styles.headerLogo}>
      <img src={LogoIcon} alt="logo" />
    </div>
  );
}
function MenuButton() {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const toggleMenu = () => setIsOpenedMenu((prev) => !prev);

  const menuButtonStyles = clsx(
    styles.menuButton,
    isOpenedMenu && styles.menuButtonOpened
  );

  return (
    <button className={menuButtonStyles} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export { Header };
