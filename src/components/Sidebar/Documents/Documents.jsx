//_Utils:
import clsx from "clsx";

//_Hooks:
import { useState } from "react";

//_Styles:
import styles from "./Documents.module.scss";

//_Data:
import documents from "./data-test.json";

//_Components:
import { Button } from "../../UI/Button/Button";
import { DocumentItem } from "./DocumentItem/DocumentItem";

function Documents({ classes = [] }) {
  const documentsStyles = clsx(styles.documents, ...classes);

  const [currentDocumentID, setCurrentDocumentID] = useState("initDocsId1");

  const handlerClickDocument = (id) => setCurrentDocumentID(id);

  return (
    <div className={documentsStyles}>
      <Button type="primary">
        <span>+ New Document</span>
      </Button>
      <ul className={styles.documentsList + " " + "custom-scroll"}>
        {documents.map((doc) => {
          return (
            <DocumentItem
              key={doc.id}
              name={doc.name}
              date={doc.createdAt}
              isActive={doc.id === currentDocumentID}
              cb={() => handlerClickDocument(doc.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export { Documents };
