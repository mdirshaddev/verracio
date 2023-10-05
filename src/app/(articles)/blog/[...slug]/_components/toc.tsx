'use client';

import { useEffect, useRef } from 'react';

import { ScrollArea, ScrollBar } from 'shared-ui/scroll-area';
import { Separator } from 'shared-ui/separator';

import { TOCLink } from './toc-link';

type TableOfContentsProps = {
  toc?: HeadingScrollSpy;
  activeSection: string | null;
  minLevel: number;
};

export type HeadingScrollSpy = Array<{
  id: string;
  level: number;
  text: string;
}>;

/**
 * The code is defining a React functional component called `TOC` (Table of Contents). It takes in
props of type `TableOfContentsProps` which includes properties like `toc`, `minLevel`, and
`activeSection`.
 */
export const TOC: React.FC<TableOfContentsProps> = (props): JSX.Element => {
  const { toc, minLevel, activeSection } = props;
  //#region  //*=========== Scroll into view ===========
  const lastPosition = useRef<number>(0);

  useEffect(() => {
    const container = document.getElementById('toc-container');
    const activeLink = document.getElementById(`link-${activeSection}`);

    if (container && activeLink) {
      // Get container properties
      const cTop = container.scrollTop;
      const cBottom = cTop + container.clientHeight;

      // Get activeLink properties
      const lTop = activeLink.offsetTop - container.offsetTop;
      const lBottom = lTop + activeLink.clientHeight;

      // Check if in view
      const isTotal = lTop >= cTop && lBottom <= cBottom;

      const isScrollingUp = lastPosition.current > window.scrollY;
      lastPosition.current = window.scrollY;

      if (!isTotal) {
        // Scroll by the whole clientHeight
        const offset = 25;
        const top = isScrollingUp
          ? lTop - container.clientHeight + offset
          : lTop - offset;

        container.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [activeSection]);
  //#endregion  //*======== Scroll into view ===========

  return (
    <div className='rounded-lg border pb-2'>
      <h3 className='hidden cursor-pointer select-none px-4 pb-2 pt-4 text-gray-900 dark:text-gray-100 md:text-xl lg:block'>
        Table of Contents
      </h3>
      <Separator />
      <ScrollArea>
        <div
          id='toc-container'
          className='hidden max-h-[calc(100vh-12rem-113px)] p-4 pb-4 lg:block'>
          <div className='mb-4 mt-0 flex flex-col space-y-2 text-sm'>
            {toc
              ? toc.map(({ id, level, text }) => (
                  <TOCLink
                    key={id}
                    id={id}
                    activeSection={activeSection}
                    level={level}
                    minLevel={minLevel}
                    text={text}
                  />
                ))
              : null}
          </div>
        </div>
        <ScrollBar />
      </ScrollArea>
    </div>
  );
};
