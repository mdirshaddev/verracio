'use client';

import { Fragment } from 'react';

import { socialAccountsConfig } from 'shared-config/social-accounts';
import { cn } from 'shared-lib/utils';
import { buttonVariants } from 'shared-ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from 'shared-ui/hover-card';

/* The code is defining a functional component called `SocialAccountTooltip` in TypeScript React. */
export const SocialAccountTooltip: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      {socialAccountsConfig.map(
        ({ name, href, AccountIcon, ContentForTooltip }) => (
          <HoverCard key={href}>
            <HoverCardTrigger asChild>
              <a
                href={href}
                target='_blank'
                className={cn(
                  buttonVariants({
                    size: 'icon',
                    variant: 'ghost'
                  }),
                  'cursor-pointer'
                )}>
                <AccountIcon className='h-6 w-6 text-black dark:text-white' />
                <span className='sr-only'>{name}</span>
              </a>
            </HoverCardTrigger>
            <HoverCardContent className='w-80 '>
              <ContentForTooltip />
            </HoverCardContent>
          </HoverCard>
        )
      )}
    </Fragment>
  );
};
