import { type Metadata } from 'next';

import { FadeInContainer } from 'src/components/animations';
import { GiscusCommentBox } from 'src/components/embeddings';

export const metadata: Metadata = {
  title: 'Md Irshad - 📔 Guestbook',
  description: '📝 Comment on my work'
};

const Page: React.FC = async (): Promise<JSX.Element> => {
  return (
    <main className='relative min-h-[calc(100vh-64px)]'>
      <section className='mx-auto mb-8 mt-10 h-full max-w-[1400px] px-4 md:mb-[unset] lg:px-8'>
        <FadeInContainer>
          <p data-fade='0' className='pb-2 text-4xl font-bold'>
            Guestbook
          </p>
          <p data-fade='1' className='pb-2'>
            Leave whatever you like to say—message, appreciation, suggestions.
            If you got some questions, you can leave them on the{' '}
            <a
              target='_blank'
              href='https://github.com/mdirshaddev/mdirshad/discussions/2'
              className='cursor-newtab font-bold underline'>
              AKA discussions
            </a>
          </p>
          <figure className='mt-12 mr-1'>
            <GiscusCommentBox />
          </figure>
        </FadeInContainer>
      </section>
    </main>
  );
};

export default Page;
