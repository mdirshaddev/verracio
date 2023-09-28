'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

/**
 * The `GiscusCommentBox` component is a TypeScript React component that renders a comment box using
 * the Giscus library, with various props for customization.
 */
export const GiscusCommentBox = () => {
  const { theme } = useTheme();
  return (
    <Giscus
      repo={`${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/mdirshad`}
      repoId={process.env.NEXT_PUBLIC_GITHUB_REPO_ID}
      category='General'
      categoryId='DIC_kwDOKVdfq84CZfTc'
      strict='1'
      mapping='pathname'
      inputPosition={'top'}
      theme={theme}
      lang={'en'}
      loading='lazy'
      emitMetadata='1'
      reactionsEnabled='1'
    />
  );
};
