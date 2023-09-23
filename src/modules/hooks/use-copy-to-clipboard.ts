'use client';

// hooks
import type { CopyFn, CopiedValue } from 'src/types/hooks';

// react
import { useState } from 'react';

/**
 * The `useCopyToClipboard` function is a custom React hook that allows you to copy text to the
 * clipboard and keeps track of the copied text.
 * @returns The function `useCopyToClipboard` returns an array with two elements: a function `copy` and
 * a value `copiedText`.
 * @see https://usehooks-ts.com/react-hook/use-copy-to-clipboard
 */
export const useCopyToClipboard = (): [CopyFn, CopiedValue] => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async text => {
    if (!navigator?.clipboard) {
      // eslint-disable-next-line no-console
      console.warn('Clipboard not supported');
      // TODO: Sentry monitoring logging
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Copy failed', error);
      setCopiedText(null);
      // TODO: Sentry monitoring logging
      return false;
    }
  };

  return [copy, copiedText];
};
