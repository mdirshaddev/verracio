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
        'focus:outline-none focus-visible:ring focus-visible:ring-[#facc15]',
        'border-b border-dotted border-[#222] hover:border-black/0',
        className
      )}>
      <span className='dark:bg-gradient-to-tr dark:from-[#fdd842] dark:to-[#facc15] dark:bg-clip-text dark:text-transparent'>
        {children}
      </span>
    </NextLink>
  );
};
