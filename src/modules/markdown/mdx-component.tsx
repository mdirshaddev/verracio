'use client';

import { Fragment, useMemo } from 'react';

import { getMDXComponent } from 'mdx-bundler/client';

import { TweetCard, YoutubeEmbed } from 'src/components/embeddings';
import { NextCloudinaryImg, Split, SplitImage } from 'src/components/images';
import { StyledLink } from 'src/components/links';

import { Pre } from './components/pre';

// TODO: We cannot keep any here as type
const MarkdownComponent: any = {
  a: StyledLink,
  pre: Pre,
  Split,
  SplitImage,
  NextCloudinaryImg,
  TweetCard,
  YoutubeEmbed
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
