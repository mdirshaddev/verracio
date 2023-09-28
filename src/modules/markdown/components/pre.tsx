'use client';

// react
import { useRef, useState } from 'react';

import { Icons } from 'shared-config/icons';
import { cn } from 'shared-lib/utils';
import { toast } from 'shared-ui/use-toast';

import { useCopyToClipboard } from 'src/modules/hooks/use-copy-to-clipboard';

type PreProps = React.ComponentPropsWithRef<'pre'>;

// TODO: Clean up to component with best pracises is required
/**
 * The code is defining a React functional component called `Pre`. It takes in a prop called `props`
which is of type `PreProps`.
 * @param {PreProps} props - PreProps
 * @returns 
 */
export const Pre: React.FC<PreProps> = props => {
  const { className, children, ...rest } = props;

  const preRef = useRef<HTMLPreElement>(null);

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [shouldWrap, setShouldWrap] = useState(false);

  const [copy] = useCopyToClipboard();

  return (
    // word-break: break-word;
    // @apply nx-whitespace-pre-wrap md:nx-whitespace-pre;
    <pre
      {...rest}
      ref={preRef}
      className={cn([
        'group relative',
        // 'whitespace-pre-wrap break-words',
        className
      ])}
      data-word-wrap={shouldWrap}>
      {children}
      <div
        className={cn(
          'opacity-0 transition focus-within:opacity-100 group-hover:opacity-100',
          'absolute right-0 top-0 z-10 m-[11px] flex gap-1'
        )}>
        <button
          onClick={() => setShouldWrap(prev => !prev)}
          title='Wrap code'
          className={cn([
            'md:hidden',
            'rounded p-1 text-lg transition-colors md:block',
            'border border-gray-300 dark:border-gray-600',
            'text-gray-700 dark:text-gray-300',
            'bg-[#f2f7fc] hover:bg-gray-100 dark:bg-[#22272e] dark:hover:bg-gray-700'
          ])}>
          <Icons.textWrap />
        </button>
        <button
          onClick={() => {
            copy(preRef?.current?.textContent ?? '')
              .then(() => {
                setIsCopied(true);
                toast({
                  title: 'Copied Successfully',
                  className: 'bg-[#facc15] dark:text-white'
                });
                setTimeout(() => setIsCopied(false), 1500);
              })
              .catch(err => {});
          }}
          title='Copy code'
          className={cn([
            'rounded p-1 text-lg transition-colors md:block',
            'border border-gray-300 dark:border-gray-600',
            'text-gray-700 dark:text-gray-300',
            'bg-[#f2f7fc] hover:bg-gray-100 dark:bg-[#22272e] dark:hover:bg-gray-700'
          ])}>
          {isCopied ? <Icons.check /> : <Icons.copy />}
        </button>
      </div>
    </pre>
  );
};
