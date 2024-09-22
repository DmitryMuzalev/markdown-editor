//_Utils:
import clsx from 'clsx';

//_Hooks:
import { useDispatch, useSelector } from 'react-redux';

//_Styles:
import styles from './Documents.module.scss';

//_Components:
import { Button } from '../../components/UI/Button/Button';
import { DocumentItem } from './DocumentItem/DocumentItem';

//Actions:
import { createDocument, selectDocument } from './documents-slice';

function Documents({ classes = [] }) {
  const documentsStyles = clsx(styles.documents, ...classes);
  const { documentsList, currentDocumentID } = useSelector(
    (state) => state.documents
  );
  const dispatch = useDispatch();

  return (
    <div className={documentsStyles}>
      <Button type="primary" cb={() => dispatch(createDocument())}>
        <span>+ New Document</span>
      </Button>
      <ul className={styles.documentsList + ' ' + 'custom-scroll'}>
        {documentsList.map((doc) => {
          return (
            <DocumentItem
              key={doc.id}
              name={doc.name}
              date={doc.createdAt}
              isActive={doc.id === currentDocumentID}
              cb={() => dispatch(selectDocument(doc.id))}
            />
          );
        })}
      </ul>
    </div>
  );
}

export { Documents };
