//_Hooks:
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

//_Styles:
import styles from './Editor.module.scss';

//_Components:
import { Markdown } from './Markdown/Markdown';
import { Preview } from './Preview/Preview';

function Editor() {
  const [isShowPreview, changeIsShowPreview] = useState(false);

  const toggleIsShow = () => changeIsShowPreview((prev) => !prev);

  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={styles.editor}>
      {!isShowPreview && <Markdown isShow={isShowPreview} cb={toggleIsShow} />}
      {!isTablet && <Preview isShow={isShowPreview} cb={toggleIsShow} />}
      {isTablet && isShowPreview && (
        <Preview isShow={isShowPreview} cb={toggleIsShow} />
      )}
    </div>
  );
}

export { Editor };
