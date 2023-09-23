'use client';

// react
import { Fragment, useMemo } from 'react';

// mdx bundler client component
import { getMDXComponent } from 'mdx-bundler/client';

// Shared images
import { Split } from 'src/components/images/split';
import { SplitImage } from 'src/components/images/split-image';
import { NextCloudinaryImg } from 'src/components/images/next-cloudinary-image';

// Shared links
import { StyledLink } from 'src/components/links/styled-link';

// TODO: We cannot keep any here as type
const MarkdownComponent: any = {
  a: StyledLink,
  Split,
  SplitImage,
  NextCloudinaryImg
};

/**
 * The `MDXComponent` function is a React functional component that takes in a `code` prop and returns
 * a JSX element that renders the component generated from the given MDX code.
 * @param props - The `props` parameter is an object that contains the properties passed to the
 * `MDXComponent` component. In this case, it expects a `code` property which is a string.
 * @returns The MDXComponent is returning a JSX element.
 */
export const MDXComponent: React.FC<{ code: string }> = (
  props
): JSX.Element => {
  const { code } = props;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Fragment>
      <Component
        components={{
          ...MarkdownComponent
        }}
      />
    </Fragment>
  );
};
