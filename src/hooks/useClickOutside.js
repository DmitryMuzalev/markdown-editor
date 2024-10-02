import { useEffect } from "react";

 const useClickOutside = (ref, isOpenModalWindow, cb) => {
  const handlerClick = (e) => {
    e.stopPropagation();
    if (ref.current && !ref.current.contains(e.target) && isOpenModalWindow) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handlerClick);
    return () => document.removeEventListener("click", handlerClick);
  });
};


export { useClickOutside };