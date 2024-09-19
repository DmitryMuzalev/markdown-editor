//_Styles:
import styles from './PreviewSwitcher.module.scss';

//_Images:
import HidePreviewIcon from '../../../assets/icon-hide-preview.svg';
import ShowPreviewIcon from '../../../assets/icon-show-preview.svg';

function PreviewSwitcher({ cb, isShow }) {
  return (
    <button onClick={cb} className={styles.previewSwitcher}>
      {isShow ? (
        <img src={HidePreviewIcon} alt="hide preview" />
      ) : (
        <img src={ShowPreviewIcon} alt="show preview" />
      )}
    </button>
  );
}
export { PreviewSwitcher };
