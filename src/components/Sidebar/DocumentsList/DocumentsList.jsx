import clsx from 'clsx';
import { Button } from '../../UI/Button/Button';
import styles from './DocumentsList.module.scss';

function DocumentsList({ classes = [] }) {
  const documentsListStyles = clsx(styles.documentsList, ...classes);

  return (
    <div className={documentsListStyles}>
      <Button type="primary" classes={styles.documentsListButton}>
        <span>+ New Document</span>
      </Button>
      DocumentsList
    </div>
  );
}
export { DocumentsList };
