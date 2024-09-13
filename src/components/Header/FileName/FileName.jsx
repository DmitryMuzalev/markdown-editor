//_Utils:
import clsx from 'clsx';

//_Hooks:
import { useMediaQuery } from 'react-responsive';

//_Styles:
import styles from './FileName.module.scss';

//_Images:
import DocumentIcon from '../../../assets/icon-document.svg';

function FileName({ classes }) {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  const fileNameStyles = clsx(styles.fileName, classes);

  return (
    <div className={fileNameStyles}>
      <div className={styles.fileNameIcon}>
        <img src={DocumentIcon} alt="file" />
      </div>
      <div className={styles.fileNameField}>
        {!isTablet && (
          <label className="label-text" htmlFor="fileName">
            document name
          </label>
        )}
        <input type="text" id="fileName" value={'welcome.md'} />
      </div>
    </div>
  );
}
export { FileName };
