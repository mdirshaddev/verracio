'use client';

import dynamic from 'next/dynamic';

import { CreateLoading } from 'src/components/animations/create-loading';

/* The code is exporting a dynamic component called `WeatherOverview`. */
export const WeatherOverview = dynamic(
  () =>
    import('src/components/showcase/weather').then(
      Weather => Weather.WeatherOverview
    ),
  { ssr: false, loading: CreateLoading({ width: 360, height: 264 }) }
);
