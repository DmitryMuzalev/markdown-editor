//_Utils:
import clsx from 'clsx';

//_Styles:
import styles from './Markdown.module.scss';

//_Hooks:
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

//_Components:
import { PreviewSwitcher } from '../../../features/PreviewSwitcher/PreviewSwitcher';

//_Actions:
import { updateContentDocument } from '../../../features/Documents/documents-slice';

function Markdown() {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  const markdownStyles = clsx(styles.markdown, 'editor-window');

  const markdownHeaderStyles = clsx(
    styles.markdownHeader,
    'editor-window-header'
  );
  const markdownBodyStyles = clsx(
    styles.markdownBody,
    'editor-window-body',
    'custom-scroll'
  );

  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.documents.currentDocument);
  const showSidebar = useSelector((state) => state.showSidebar);

  const handlerTextarea = (e) => {
    dispatch(updateContentDocument(e.target.value));
  };

  useEffect(() => {
    if (!showSidebar) {
      document.getElementById('markdown').focus();
    }
  }, [showSidebar]);

  return (
    <div className={markdownStyles}>
      <div className={markdownHeaderStyles}>
        <span className="section-title ">markdown</span>
        {isTablet && <PreviewSwitcher />}
      </div>
      <textarea
        id="markdown"
        className={markdownBodyStyles}
        value={content}
        onChange={handlerTextarea}
      />
    </div>
  );
}
export { Markdown };
