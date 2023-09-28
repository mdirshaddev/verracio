'use client';

import dynamic from 'next/dynamic';

import { CreateLoading } from 'src/components/animations/create-loading';

/* The code is using the `dynamic` function from the `next/dynamic` package to dynamically import the
`GithubOverview` component from the `src/components/showcase/github` module. */
export const GithubOverview = dynamic(
  () =>
    import('src/components/showcase/github').then(
      GitHub => GitHub.GithubOverview
    ),
  { ssr: false, loading: CreateLoading({ width: 360, height: 264 }) }
);
