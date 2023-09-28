'use client';

import dynamic from 'next/dynamic';

import { CreateLoading } from 'src/components/animations/create-loading';

/* The code is exporting a dynamic component called `SpotifyOverview`. */
export const SpotifyOverview = dynamic(
  () =>
    import('src/components/showcase/spotify').then(
      Spotify => Spotify.SpotifyOverview
    ),
  { ssr: false, loading: CreateLoading({ width: 360, height: 136 }) }
);
