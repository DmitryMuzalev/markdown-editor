//_Styles:
import styles from './Editor.module.scss';

//_Hooks:
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

//_Components:
import { Markdown } from './Markdown/Markdown';
import { Preview } from './Preview/Preview';

function Editor() {
  const showPreview = useSelector((state) => state.showPreview);
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={styles.editor}>
      {!showPreview && <Markdown />}
      {isTablet ? showPreview && <Preview /> : <Preview />}
    </div>
  );
}

export { Editor };
