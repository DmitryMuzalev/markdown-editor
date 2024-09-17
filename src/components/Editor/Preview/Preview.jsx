import styles from "./Preview.module.scss";

function Preview({ cb }) {
  return (
    <div className={styles.preview}>
      <span>Preview</span>
      <br />
      <br />
      <button onClick={cb}>Click</button>
    </div>
  );
}
export { Preview };
