//_Utils:
import clsx from 'clsx';

//_Styles:
import styles from './FileName.module.scss';

//_Images:
import DocumentIcon from '../../../assets/icon-document.svg';

//_Hooks:
import { useDispatch, useSelector } from 'react-redux';

//_Actions:
import { renameDocument } from '../../../features/Documents/documents-slice';

function FileName({ classes = [] }) {
  const fileNameStyles = clsx(styles.fileName, ...classes);

  const dispatch = useDispatch();
  const { currentDocument } = useSelector((state) => state.documents);

  const handlerInput = (e) => dispatch(renameDocument(e.target.value));

  return (
    <div className={fileNameStyles}>
      <div className="icon">
        <img src={DocumentIcon} alt="file" />
      </div>
      <div className={styles.fileNameField}>
        <label className="label-text" htmlFor="fileName">
          document name
        </label>
        <input
          id="fileName"
          type="text"
          autoComplete="off"
          onChange={handlerInput}
          value={currentDocument?.name || ''}
          disabled={!currentDocument}
        />
      </div>
    </div>
  );
}
export { FileName };
