import { type Metadata, type ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // // fetch data
  // const product = await fetch(`https://.../${slug}`).then(res => res.json());

  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: ''
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages]
    // }
  };
}

const Page: React.FC<Props> = ({ params, searchParams }): JSX.Element => {
  return (
    <main className='relative min-h-[calc(100vh-64px)]'>
      <section className='mx-auto max-w-[1400px]'>
        <article className='px-4 lg:px-8'>
          <div>Projects article page</div>
          <div>{JSON.stringify(params)}</div>
          <div>{JSON.stringify(searchParams)}</div>
        </article>
      </section>
    </main>
  );
};

export default Page;
