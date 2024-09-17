import { useState } from 'react';
import styles from './Editor.module.scss';
import { Markdown } from './Markdown/Markdown';
import { Preview } from './Preview/Preview';
import { useMediaQuery } from 'react-responsive';

function Editor() {
  const [isShow, setIsShow] = useState(true);

  const toggleIsShow = () => setIsShow((prev) => !prev);

  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={styles.editor}>
      {isShow && <Markdown cb={toggleIsShow} />}
      {!isTablet && <Preview cb={toggleIsShow} />}
      {isTablet && !isShow && <Preview cb={toggleIsShow} />}
    </div>
  );
}
export { Editor };
