import { useCallback, useRef } from 'react';

const useToggleBackgroundHeader = () => {
  const headerRef = useRef<HTMLElement | null>(null);

  const handlerTogglerHeaderBackground = useCallback(
    (targetElement: HTMLElement | null) => {
      headerRef.current = document.getElementById('header');
      targetElement = targetElement;
      if (targetElement) {
        if (headerRef.current) {
          headerRef.current.style.background = 'transparent';
        }

        if (targetElement.clientHeight && headerRef.current?.clientHeight) {
          if (
            window.pageYOffset >=
            targetElement.clientHeight - headerRef.current?.clientHeight
          ) {
            headerRef.current.style.removeProperty('background');
          } else {
            headerRef.current.style.background = 'transparent';
          }
        }
      }
    },
    []
  );

  return { handlerTogglerHeaderBackground };
};

export { useToggleBackgroundHeader };
