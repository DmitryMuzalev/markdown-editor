import { useState } from "react";
import styles from "./Editor.module.scss";
import { Markdown } from "./Markdown/Markdown";
import { Preview } from "./Preview/Preview";
import { useMediaQuery } from "react-responsive";

function Editor() {
  const [isShowPreview, changeIsShowPreview] = useState(false);

  const toggleIsShow = () => changeIsShowPreview((prev) => !prev);

  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.editor}>
      {!isShowPreview && <Markdown isShow={isShowPreview} cb={toggleIsShow} />}
      {!isTablet && <Preview isShow={isShowPreview} cb={toggleIsShow} />}
      {isTablet && isShowPreview && (
        <Preview isShow={isShowPreview} cb={toggleIsShow} />
      )}
    </div>
  );
}

/* function PreviewSwitcher() {
  return (
    <button>
      <img src={HidePreviewIcon} alt="delete file" />
    </button>
  );
} */

export { Editor };
