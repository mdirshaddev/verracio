import LiteYoutubeEmbed from 'react-lite-youtube-embed';
import type { YoutubeEmbedProps } from 'src/types/embeddings';

import { cn } from 'shared-lib/utils';

/**
 * The `YoutubeEmbed` component is a TypeScript React component that renders a YouTube video embed with
 * a rounded and shadowed appearance.
 * @param  - - `className`: A string representing the additional CSS classes to be applied to the
 * `figure` element.
 * @returns The `YoutubeEmbed` component is being returned.
 */
export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
  className,
  ...rest
}) => {
  return (
    <figure className={cn('rounded shadow-lg', className)}>
      <LiteYoutubeEmbed {...rest} noCookie={true} />
    </figure>
  );
};
