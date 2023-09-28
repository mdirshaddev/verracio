import { Tweet, TweetProps } from 'react-twitter-widgets';

import { cn } from 'shared-lib/utils';

type TweetCardProps = {
  className?: string;
} & TweetProps;

export const TweetCard: React.FC<TweetCardProps> = ({ tweetId, className }) => {
  return (
    /** Adding width 99% because iframe cuts border
     * @see https://stackoverflow.com/questions/20039576/show-right-border-on-inner-iframe-which-is-being-cut-off-on-100-width/20039683
     */
    <div className={cn('not-prose w-[99%] ', className)}>
      <Tweet tweetId={tweetId} />
    </div>
  );
};
