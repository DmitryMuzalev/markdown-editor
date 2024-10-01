//_Utils:
import clsx from "clsx";

//_Styles:
import styles from "./Button.module.scss";

function Button({
  children,
  cb = () => {},
  type = "default",
  classes = [],
  disabled = false,
}) {
  const buttonStyles = clsx(
    styles.button,
    type === "primary" && styles.buttonPrimary,
    type === "secondary" && styles.buttonSecondary,
    ...classes
  );

  return (
    <button className={buttonStyles} onClick={cb} disabled={disabled}>
      {children}
    </button>
  );
}
export { Button };
