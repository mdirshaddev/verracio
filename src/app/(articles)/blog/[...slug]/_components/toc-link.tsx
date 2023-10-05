'use client';

import { cn } from 'shared-lib/utils';

import { NextLink } from 'src/components/links';

type TOCLinkProps = {
  id: string;
  level: number;
  minLevel: number;
  text: string;
  activeSection: string | null;
};

export const TOCLink: React.FC<TOCLinkProps> = props => {
  const { id, level, minLevel, text, activeSection } = props;
  return (
    <NextLink
      href={`#${id}`}
      id={`link-${id}`}
      className={cn(
        'font-medium hover:text-gray-700 focus:outline-none dark:hover:text-gray-200',
        'focus-visible:text-gray-700 dark:focus-visible:text-gray-200',
        activeSection === id
          ? 'text-gray-900 dark:text-gray-100'
          : 'text-gray-400 dark:text-gray-500'
      )}
      style={{ marginLeft: (level - minLevel) * 16 }}>
      {text}
    </NextLink>
  );
};
