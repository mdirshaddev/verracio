'use client';

import { cn } from 'shared-lib/utils';

import { NextLink, type NextLinkProps } from './next-link';

export const StyledLink: React.FC<NextLinkProps> = props => {
  const { children, className = '', ...rest } = props;
  return (
    <NextLink
      {...rest}
      className={cn(
        'animated-underline custom-link inline-flex items-center font-medium',
        'focus:outline-none focus-visible:ring focus-visible:ring-[#6199f3]',
        'border-b border-dotted border-[#222] hover:border-black/0',
        className
      )}>
      <span className='dark:bg-gradient-to-tr dark:from-[#6199f3] dark:to-[#0062ff] dark:bg-clip-text dark:text-transparent'>
        {children}
      </span>
    </NextLink>
  );
};
