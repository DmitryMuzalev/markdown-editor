//_Utils:
import clsx from 'clsx';
import Markdown from 'react-markdown';

//_Styles:
import styles from './Preview.module.scss';

//_Hooks:
import { useSelector } from 'react-redux';

//_Components:
import { PreviewSwitcher } from '../../../features/PreviewSwitcher/PreviewSwitcher';

const previewStyles = clsx(styles.preview, 'editor-window');
const previewHeaderStyles = clsx(styles.previewHeader, 'editor-window-header');
const previewBodyStyles = clsx(
  styles.previewBody,
  'editor-window-body',
  'custom-scroll'
);

function Preview() {
  const { content } = useSelector((state) => state.documents.currentDocument);

  return (
    <div className={previewStyles}>
      <div className={previewHeaderStyles}>
        <span className="section-title">preview</span>
        <PreviewSwitcher />
      </div>
      <div className={previewBodyStyles}>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
export { Preview };
