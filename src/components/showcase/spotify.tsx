'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import type {
  CurrentPlayingQuery,
  CurrentPlayingQueryVariables
} from 'generated/apollo/apollo-graphql-types';
import { SiSpotify } from 'react-icons/si';
import { CurrentPlaying } from 'src/graphql/apollo/spotify/CurrentPlaying';

import { useQueryPollingWhileWindowFocused } from 'src/modules/hooks/use-query-polling-while-window-foucsed';

// TODO: Call the api here and populate the data
export const SpotifyOverview: React.FC = (): JSX.Element => {
  const spotifyApolloQuery = useQuery<
    CurrentPlayingQuery,
    CurrentPlayingQueryVariables
  >(CurrentPlaying, {
    initialFetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first'
  });

  useQueryPollingWhileWindowFocused({
    pollInterval: 60 * 1000,
    ...spotifyApolloQuery
  });

  const { data, loading, error } = spotifyApolloQuery;

  return (
    <div className='h-[136px] w-[360px] cursor-pointer overflow-hidden rounded-xl bg-white dark:bg-[#0d1117] ring-[#1DB954] ring-1 p-[20px] transition-all hover:shadow-xl '>
      {loading && !data && !error && (
        <div className='flex h-full flex-col items-center justify-center'>
          <div className='text-white'>Loading...</div>
        </div>
      )}
      {!loading &&
        !error &&
        data?.currentPlaying &&
        data.currentPlaying.is_playing &&
        data.currentPlaying.currently_playing_type === 'track' && (
          <div className='flex flex-row items-start gap-4'>
            <Image
              className='rounded-md ring-1 ring-[#1DB954]'
              quality={100}
              src={data.currentPlaying.item?.album?.images[0].url as string}
              width={96}
              height={96}
              alt={data.currentPlaying.item?.album?.name as string}
            />
            <div className='flex w-full flex-col justify-between overflow-hidden'>
              <div>
                <p className='select-none overflow-hidden text-ellipsis whitespace-nowrap font-extrabold text-black  dark:text-white'>
                  {data.currentPlaying.item?.name}
                </p>
                <p className='select-none overflow-hidden text-ellipsis whitespace-nowrap text-xs text-black  dark:text-white'>
                  {data.currentPlaying.item?.album.name}
                </p>
                <p className='select-none overflow-hidden text-ellipsis whitespace-nowrap text-xs text-black  dark:text-white'>
                  {data.currentPlaying.item?.artists
                    .map(artist => artist.name)
                    .join(', ')}
                </p>
              </div>
              <div className='flex justify-end'>
                <SiSpotify className='h-7 w-7 text-[#1DB954]' />
              </div>
            </div>
          </div>
        )}
      {!loading && data?.currentPlaying && !data.currentPlaying.is_playing && (
        <div className='flex h-full flex-row items-center justify-center gap-8'>
          <SiSpotify className='h-16 w-16 text-[#1DB954]' />
          <p className='text-xl font-semibold text-black dark:text-white'>
            Not playing right now
          </p>
        </div>
      )}
    </div>
  );
};
