'use client';

import type { FadeInContainerProps } from 'src/types/animations';

import { cn } from 'shared-lib/utils';

import { useLoaded } from 'src/modules/hooks/use-loaded';

/**
 * The FadeInContainer component is a TypeScript React component that conditionally applies a fade-in
 * animation class to its children based on the isLoaded state.
 * @param props - The `props` parameter is an object that contains the properties passed to the
 * `FadeInContainer` component. These properties can be accessed using destructuring assignment. In
 * this case, the `className` and `children` properties are being extracted from the `props` object.
 * @returns The `FadeInContainer` component is returning a JSX element.
 */
export const FadeInContainer: React.FC<FadeInContainerProps> = (
  props
): JSX.Element => {
  const isLoaded = useLoaded();

  const { className, children } = props;
  return (
    <div className={cn(isLoaded && 'fade-in-start', className)}>{children}</div>
  );
};
