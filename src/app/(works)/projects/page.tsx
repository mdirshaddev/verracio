import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Md Irshad - 💼 All Projects',
  description: '💼 POCs, Fullstack, MERN stack etc'
};

const Page: React.FC = async (): Promise<JSX.Element> => {
  return (
    <main className='relative min-h-[calc(100vh-64px)]'>
      <section className='mx-auto max-w-[1400px]'>
        <article className='px-4 lg:px-8'>
          <div>Projects page</div>
        </article>
      </section>
    </main>
  );
};

export default Page;
