'use client';

import { Skeleton } from 'shared-ui/skeleton';

interface CreateLoadingProps {
  width: number;
  height: number;
}

/* The code is defining a functional component called `CreateLoading`. It takes an object with `width`
and `height` properties as its props. The component returns another function called `Loading`, which
is also a functional component. */
export const CreateLoading: ({
  width,
  height
}: CreateLoadingProps) => () => JSX.Element = ({ width, height }) => {
  return function Loading() {
    return (
      <Skeleton
        style={{ width: width, height: height }}
        className='rounded-md bg-background'
      />
    );
  };
};
