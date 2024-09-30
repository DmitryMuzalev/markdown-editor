import styles from "./EmptyList.module.scss";
import { CreateDocumentButton } from "../CreateDocumentButton/CreateDocumentButton";

function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <div className={styles.emptyListContent}>
        <p>The list of documents is empty. Please, create a new document</p>
        <CreateDocumentButton />
      </div>
    </div>
  );
}
export { EmptyList };
