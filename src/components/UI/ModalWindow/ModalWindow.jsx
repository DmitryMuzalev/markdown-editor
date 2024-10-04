//_Styles:
import styles from './ModalWindow.module.scss';

//_Hooks:
import { useEffect, useRef } from 'react';

//_Components:
import { Button } from '../Button/Button';

function ModalWindow({ children, onClose, onConfirm }) {
  const refModalWindow = useRef();

  useEffect(() => {
    const handleWrapperClick = (event) => {
      const { target } = event;
      if (target instanceof Node && refModalWindow.current === target) {
        onClose?.();
      }
    };

    const handleEscapePress = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('click', handleWrapperClick);
    window.addEventListener('keydown', handleEscapePress);

    return () => {
      window.removeEventListener('click', handleWrapperClick);
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [onClose]);

  return (
    <div className={styles.modalWindow} ref={refModalWindow}>
      <div className={styles.modalWindowContent}>
        {children}
        <div className={styles.modalWindowButtons}>
          <Button type="secondary" cb={onClose}>
            cancel
          </Button>
          <Button type="primary" cb={onConfirm}>
            confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
export { ModalWindow };
