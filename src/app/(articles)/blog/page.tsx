import { type Metadata } from 'next';

import { StyledLink } from 'src/components/links';

export const metadata: Metadata = {
  title: 'Md Irshad - 📑 Blog',
  description: '📖 Posts on Technical, Theoretical and Demo projects'
};

const Page: React.FC = async (): Promise<JSX.Element> => {
  return (
    <main className='relative min-h-[calc(100vh-64px)]'>
      <section className='mx-auto max-w-[1400px]'>
        <article className='px-4 lg:px-8'>
          <div>Blog page</div>
          <StyledLink className='' href={'/blog/2021-retrospective'}>
            Nextjs Fetch method
          </StyledLink>
        </article>
      </section>
    </main>
  );
};

export default Page;
