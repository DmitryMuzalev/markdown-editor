//_Utils:
import clsx from 'clsx';

//_Hooks:
import { useMediaQuery } from 'react-responsive';

//_Styles:
import styles from './Markdown.module.scss';

//_Components:
import { PreviewSwitcher } from '../../../features/PreviewSwitcher/PreviewSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import { updateContentDocument } from '../../../features/Documents/documents-slice';
import { useEffect } from 'react';

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
  const { currentDocument } = useSelector((state) => state.documents);
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
        value={currentDocument?.content}
        onChange={handlerTextarea}
      />
    </div>
  );
}
export { Markdown };
