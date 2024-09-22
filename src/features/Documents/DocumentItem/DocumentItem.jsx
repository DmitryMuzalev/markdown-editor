//_Utils:
import clsx from 'clsx';

//_Styles:
import styles from './DocumentItem.module.scss';

//_Images:
import DocumentIcon from '../../../assets/icon-document.svg';

function DocumentItem({ name, date, cb, isActive }) {
  const documentStyles = clsx(
    styles.document,
    isActive && styles.documentActive
  );

  return (
    <li>
      <button className={documentStyles} onClick={cb}>
        <div className="icon">
          <img src={DocumentIcon} alt="document icon" />
        </div>
        <div className={styles.documentInfo}>
          <span className="label-text">{date}</span>
          <p>{name}</p>
        </div>
      </button>
    </li>
  );
}
export { DocumentItem };
