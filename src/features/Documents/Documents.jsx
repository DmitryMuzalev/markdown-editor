//_Utils:
import clsx from "clsx";

//_Hooks:
import { useDispatch, useSelector } from "react-redux";

//_Styles:
import styles from "./Documents.module.scss";

//_Components:
import { DocumentItem } from "./DocumentItem/DocumentItem";

//Actions:
import { selectDocument } from "./documents-slice";
import { CreateDocumentButton } from "../../components/CreateDocumentButton/CreateDocumentButton";

function Documents({ classes = [] }) {
  const documentsStyles = clsx(styles.documents, ...classes);
  const { documentsList, currentDocument } = useSelector(
    (state) => state.documents
  );
  const dispatch = useDispatch();

  return (
    <div className={documentsStyles}>
      <CreateDocumentButton />
      <ul className={styles.documentsList + " " + "custom-scroll"}>
        {documentsList.map((doc) => {
          return (
            <DocumentItem
              key={doc.id}
              name={doc.name}
              date={doc.createdAt}
              isActive={doc.id === currentDocument?.id}
              cb={() => dispatch(selectDocument(doc.id))}
            />
          );
        })}
      </ul>
    </div>
  );
}

export { Documents };
