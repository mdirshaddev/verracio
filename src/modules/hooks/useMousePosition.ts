import { useState, useEffect } from 'react';

/**
 * The `useMousePosition` function is a custom hook in TypeScript that tracks the mouse position within
 * a specified HTMLDivElement.
 * @param {HTMLDivElement | null} Element - The `Element` parameter is a reference to an HTMLDivElement
 * or null. It is used to specify the element on which the mouse movement should be tracked. If the
 * `Element` is not null, the `mousemove` event listener is added to the element and the mouse position
 * is updated accordingly. If
 * @returns The `useMousePosition` function returns the `mousePosition` object, which contains the
 * current x and y coordinates of the mouse.
 */
const useMousePosition = (Element: HTMLDivElement | null) => {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null
  });

  const updateMousePosition = (e: MouseEvent) => {
    console.log(e);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (Element) {
      Element.addEventListener('mousemove', updateMousePosition);

      return () =>
        Element.removeEventListener('mousemove', updateMousePosition);
    }
  }, [Element]);

  return mousePosition;
};

export { useMousePosition };
