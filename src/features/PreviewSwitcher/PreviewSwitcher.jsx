//_Styles:
import styles from './PreviewSwitcher.module.scss';

//_Images:
import HidePreviewIcon from '../../assets/icon-hide-preview.svg';
import ShowPreviewIcon from '../../assets/icon-show-preview.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowPreview } from './preview-slice';

function PreviewSwitcher() {
  const dispatch = useDispatch();
  const showPreview = useSelector((state) => state.showPreview);

  return (
    <button
      onClick={() => dispatch(toggleShowPreview())}
      className={styles.previewSwitcher}
    >
      {showPreview ? (
        <img src={HidePreviewIcon} alt="hide preview" />
      ) : (
        <img src={ShowPreviewIcon} alt="show preview" />
      )}
    </button>
  );
}
export { PreviewSwitcher };
