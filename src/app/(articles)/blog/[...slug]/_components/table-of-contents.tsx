'use client';

import { Fragment, useEffect, useState } from 'react';

import type { ReadTimeResults } from 'reading-time';

import { useScrollSpy } from 'src/modules/hooks/use-scrollspy';

import { TOC, type HeadingScrollSpy } from './toc';

/**
 * The `TableOfContent` component is a TypeScript React component that generates a table of contents
 * based on the headings in the Markdown content.
 * @param props - The `props` parameter is an object that contains the following properties:
 * @returns The `TableOfContent` component is returning a JSX element.
 */
export const TableOfContent: React.FC<{
  frontmatter: {
    wordCount: number;
    readingTime: ReadTimeResults;
    slug: string | null;
    [key: string]: any;
  };
}> = (props): JSX.Element => {
  const { frontmatter } = props;
  //#region  //*=========== Scrollspy ===========
  const activeSection = useScrollSpy();

  const [toc, setToc] = useState<HeadingScrollSpy>();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    const headingArr: HeadingScrollSpy = [];
    headings.forEach(heading => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [frontmatter.slug]);
  //#endregion  //*======== Scrollspy ===========
  return (
    <Fragment>
      <TOC toc={toc} minLevel={minLevel} activeSection={activeSection} />
    </Fragment>
  );
};
