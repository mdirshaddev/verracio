import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Md Irshad - 📚 Documentation',
  description:
    '🌟 Best Practises for development and deployment of applications'
};

const Page: React.FC = async (): Promise<JSX.Element> => {
  return (
    <main className='relative min-h-[calc(100vh-64px)]'>
      <section className='mx-auto max-w-[1400px]'>
        <article className='px-4 lg:px-8'>
          <div>Docs page</div>
        </article>
      </section>
    </main>
  );
};

export default Page;
