import clsx from "clsx";
import { Button } from "../../UI/Button/Button";
import styles from "./Documents.module.scss";

import DocumentIcon from "../../../assets/icon-document.svg";
import { useState } from "react";

function Documents({ classes = [] }) {
  const documentsStyles = clsx(styles.documents, ...classes);

  const testDocuments = [
    {
      id: "initDocsId1",
      createdAt: "04/01/2022",
      name: "document_1.md",
    },
    {
      id: "initDocsId2",
      createdAt: "04/01/2022",
      name: "document_2.md",
    },
    {
      id: "initDocsId3",
      createdAt: "04/05/2023",
      name: "document_3.md",
    },
    {
      id: "initDocsId4",
      createdAt: "04/04/2024",
      name: "document_4.md",
    },
    {
      id: "initDocsId5",
      createdAt: "04/01/2022",
      name: "document_5.md",
    },
    {
      id: "initDocsId6",
      createdAt: "04/01/2022",
      name: "document_6.md",
    },
    {
      id: "initDocsId7",
      createdAt: "04/05/2023",
      name: "document_7.md",
    },
    {
      id: "initDocsId8",
      createdAt: "04/04/2024",
      name: "document_8.md",
    },
    {
      id: "initDocsId9",
      createdAt: "04/01/2022",
      name: "document_9.md",
    },
    {
      id: "initDocsId10",
      createdAt: "04/05/2023",
      name: "document_10.md",
    },
    {
      id: "initDocsId11",
      createdAt: "04/04/2024",
      name: "document_11.md",
    },
    {
      id: "initDocsId12",
      createdAt: "04/01/2022",
      name: "document_12.md",
    },
    {
      id: "initDocsId13",
      createdAt: "04/01/2022",
      name: "document_13.md",
    },
    {
      id: "initDocsId14",
      createdAt: "04/05/2023",
      name: "document_14.md",
    },
    {
      id: "initDocsId15",
      createdAt: "04/04/2024",
      name: "document_15.md",
    },
  ];

  const [currentDocumentID, setCurrentDocumentID] = useState("initDocsId1");

  const handlerClickDocument = (id) => setCurrentDocumentID(id);

  return (
    <div className={documentsStyles}>
      <Button type="primary" classes={styles.documentsButton}>
        <span>+ New Document</span>
      </Button>
      <ul className={styles.documentsList}>
        {testDocuments.map((doc) => {
          return (
            <Document
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

function Document({ name, date, cb, isActive }) {
  const documentStyles = clsx(
    styles.document,
    isActive && styles.documentActive
  );

  return (
    <li>
      <button className={documentStyles} onClick={cb}>
        <div className={styles.documentIcon}>
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

export { Documents };
