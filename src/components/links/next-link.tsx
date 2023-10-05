'use client';

import Link, { LinkProps } from 'next/link';

import { cn } from 'shared-lib/utils';

export type NextLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

/**
 * The NextLink component is a wrapper that conditionally renders either a Next.js Link or a regular
 * anchor tag based on the href and openNewTab props.
 * @returns The `NextLink` component returns either a `Link` component or an `a` element depending on
 * the value of the `openNewTab` prop and the `href` prop. If `openNewTab` is `true` or if `href` does
 * not start with '/' or '#', then a `Link` component is returned. Otherwise, an `a` element with
 * `target
 */
export const NextLink: React.FC<NextLinkProps> = props => {
  const { children, className = '', href, openNewTab, ...rest } = props;

  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith('/') && !href.startsWith('#');

  if (!isNewTab) {
    return (
      <Link href={href} {...rest} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      {...rest}
      className={cn(className, 'cursor-newtab')}>
      {children}
    </a>
  );
};
