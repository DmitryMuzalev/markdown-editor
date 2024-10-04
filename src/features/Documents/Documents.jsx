//_Utils:
import clsx from 'clsx';

//_Styles:
import styles from './Documents.module.scss';

//_Hooks:
import { useDispatch, useSelector } from 'react-redux';

//_Components:
import { DocumentItem } from './DocumentItem/DocumentItem';
import { CreateDocumentButton } from '../../components/CreateDocumentButton/CreateDocumentButton';

//Actions:
import { selectDocument } from './documents-slice';

function Documents({ classes = [] }) {
  const documentsStyles = clsx(styles.documents, ...classes);
  const { documentsList, currentDocument } = useSelector(
    (state) => state.documents
  );
  const dispatch = useDispatch();

  return (
    <div className={documentsStyles}>
      <CreateDocumentButton />
      <ul className={styles.documentsList + ' ' + 'custom-scroll'}>
        {documentsList.map((doc) => {
          const { id, name, createdAt } = doc;
          return (
            <DocumentItem
              key={id}
              name={name}
              date={createdAt}
              isActive={id === currentDocument.id}
              cb={() => dispatch(selectDocument(id))}
            />
          );
        })}
      </ul>
    </div>
  );
}

export { Documents };
