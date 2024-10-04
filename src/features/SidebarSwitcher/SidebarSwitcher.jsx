//_Utils:
import clsx from 'clsx';

//_Styles:
import styles from './SidebarSwitcher.module.scss';

//_Hooks:
import { useDispatch, useSelector } from 'react-redux';

//_Actions:
import { toggleShowSidebar } from './sidebar-slice';

function SidebarSwitcher() {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.showSidebar);

  const menuButtonStyles = clsx(
    styles.sidebarSwitcher,
    showSidebar && styles.sidebarSwitcherActive
  );

  const handlerSidebarSwitcher = () => dispatch(toggleShowSidebar());

  return (
    <button className={menuButtonStyles} onClick={handlerSidebarSwitcher}>
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
