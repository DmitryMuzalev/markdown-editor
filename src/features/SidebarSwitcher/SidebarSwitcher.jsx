//_Utils:
import clsx from 'clsx';

//_Hooks:
import { useDispatch, useSelector } from 'react-redux';

//_Styles:
import styles from './SidebarSwitcher.module.scss';
import { toggleShowSidebar } from './sidebar-slice';

function SidebarSwitcher() {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.showSidebar);

  const menuButtonStyles = clsx(
    styles.sidebarSwitcher,
    showSidebar && styles.sidebarSwitcherActive
  );

  return (
    <button
      className={menuButtonStyles}
      onClick={() => dispatch(toggleShowSidebar())}
    >
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
    </button>
  );
}
export { SidebarSwitcher };
