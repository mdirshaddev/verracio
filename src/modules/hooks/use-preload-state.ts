'use client';

// react
import { useContext } from 'react';

// preload context
import { PreloadContext } from 'src/modules/contexts/preload-context';

/**
 * The usePreloadState function returns the boolean value from the PreloadContext.
 */
export const usePreloadState: () => boolean = (): boolean =>
  useContext(PreloadContext);
