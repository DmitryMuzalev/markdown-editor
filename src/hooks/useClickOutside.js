import { useEffect } from "react";

export const useClickOutside = (ref, cb, isOpenModalWindow) => {
  const handlerClick = (e) => {
    e.stopPropagation();
    if (ref.current && !ref.current.contains(e.target) && isOpenModalWindow) {
      cb();
    }
  };

  const pressEscape = (e) => {
    if (e.keyCode === 27) handlerClick();
  };

  useEffect(() => {
    document.addEventListener("keypress", pressEscape);
    return () => document.removeEventListener("keypress", pressEscape);
  });
};
