'use client';

// react
// next themes
import React from 'react';

import { useTheme } from 'next-themes';

// shared config
import { Icons } from 'shared-config/icons';
import { Button } from 'shared-ui/button';

export const ThemeToggle: React.FC = (): JSX.Element => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Icons.theme.sun className='h-[1.5rem] w-[1.3rem] dark:hidden' />
      <Icons.theme.moon className='hidden h-5 w-5 dark:block' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};
