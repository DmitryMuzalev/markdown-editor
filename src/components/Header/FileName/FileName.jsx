//_Utils:
import clsx from "clsx";

//_Hooks:
import { useMediaQuery } from "react-responsive";

//_Styles:
import styles from "./FileName.module.scss";

//_Images:
import DocumentIcon from "../../../assets/icon-document.svg";
import { useDispatch, useSelector } from "react-redux";
import { renameDocument } from "../../../features/Documents/documents-slice";

function FileName({ classes = [] }) {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const fileNameStyles = clsx(styles.fileName, ...classes);

  const dispatch = useDispatch();
  const { currentDocument } = useSelector((state) => state.documents);

  const handlerInput = (e) => {
    const inputValue = e.target.value;
    dispatch(renameDocument(inputValue));
  };

  return (
    <div className={fileNameStyles}>
      <div className="icon">
        <img src={DocumentIcon} alt="file" />
      </div>
      <div className={styles.fileNameField}>
        {!isTablet && (
          <label className="label-text" htmlFor="fileName">
            document name
          </label>
        )}
        <input
          autoComplete="off"
          type="text"
          id="fileName"
          value={currentDocument?.name}
          onChange={handlerInput}
        />
      </div>
    </div>
  );
}
export { FileName };
