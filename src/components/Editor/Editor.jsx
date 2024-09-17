import { useState } from "react";
import styles from "./Editor.module.scss";
import { Markdown } from "./Markdown/Markdown";
import { Preview } from "./Preview/Preview";

function Editor() {
  const [isShow, setIsShow] = useState(true);

  const toggleIsShow = () => setIsShow((prev) => !prev);
  return (
    <div className={styles.editor}>
      {isShow && <Markdown />}
      <Preview cb={toggleIsShow} />
    </div>
  );
}
export { Editor };
