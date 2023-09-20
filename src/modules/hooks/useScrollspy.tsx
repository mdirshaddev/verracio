import { useState, useEffect } from "react";

import throttle from "lodash/throttle";

// originally based on
// https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/block.tsx#L128-L161

/**
 * The `useScrollSpy` function is a custom React hook that tracks the active section on a page based on
 * the user's scroll position.
 * @returns The `useScrollSpy` function returns the `activeSection` state variable, which is a string
 * representing the currently active section based on the scroll position.
 */
export const useScrollSpy: React.FC = (): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const throttleMs = 100;

  const actionSectionScrollSpy = throttle(() => {
    const sections = document.getElementsByClassName("hash-anchor");

    let prevBBox: DOMRect | null = null;
    let currentSectionId = activeSection;

    for (let i = 0; i < sections.length; ++i) {
      const section = sections[i];

      if (!currentSectionId) {
        currentSectionId = section.getAttribute("href")?.split("#")[1] ?? null;
      }

      const bbox = section.getBoundingClientRect();
      const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0;
      const offset = Math.max(200, prevHeight / 4);

      // GetBoundingClientRect returns values relative to viewport
      if (bbox.top - offset < 0) {
        currentSectionId = section.getAttribute("href")?.split("#")[1] ?? null;

        prevBBox = bbox;
        continue;
      }

      // No need to continue loop, if last element has been detected
      break;
    }

    setActiveSection(currentSectionId);
  }, throttleMs);

  useEffect(() => {
    window.addEventListener("scroll", actionSectionScrollSpy);

    actionSectionScrollSpy();

    return () => {
      window.removeEventListener("scroll", actionSectionScrollSpy);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeSection;
};
