//_Utils:
import clsx from "clsx";
import Markdown from "react-markdown";

//_Styles:
import styles from "./Preview.module.scss";

//_Components:
import { PreviewSwitcher } from "../../../features/PreviewSwitcher/PreviewSwitcher";
import { useSelector } from "react-redux";

const previewStyles = clsx(styles.preview, "editor-window");
const previewHeaderStyles = clsx(styles.previewHeader, "editor-window-header");
const previewBodyStyles = clsx(
  styles.previewBody,
  "editor-window-body",
  "custom-scroll"
);

function Preview() {
  const { currentDocument } = useSelector((state) => state.documents);

  return (
    <div className={previewStyles}>
      <div className={previewHeaderStyles}>
        <span className="section-title">preview</span>
        <PreviewSwitcher />
      </div>
      <div className={previewBodyStyles}>
        <Markdown>{currentDocument?.content}</Markdown>
      </div>
    </div>
  );
}
export { Preview };
