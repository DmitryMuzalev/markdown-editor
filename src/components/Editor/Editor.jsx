//_Hooks:
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

//_Styles:
import styles from "./Editor.module.scss";

//_Components:
import { Markdown } from "./Markdown/Markdown";
import { Preview } from "./Preview/Preview";

function Editor() {
  const showPreview = useSelector((state) => state.showPreview);
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.editor}>
      {!showPreview && <Markdown />}
      {!isTablet && <Preview />}
      {isTablet && showPreview && <Preview />}
    </div>
  );
}

export { Editor };
