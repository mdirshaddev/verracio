import { type Metadata, type ResolvingMetadata } from 'next';

import { format } from 'date-fns';

import {
  BlogStats,
  TableOfContent
} from 'src/app/(articles)/blog/[...slug]/_components';

import { Icons } from 'shared-config/icons';
import { cn } from 'shared-lib/utils';

import { GiscusCommentBox } from 'src/components/embeddings';
import { NextCloudinaryImg } from 'src/components/images';
import { NextLink, StyledLink } from 'src/components/links';

import { MarkdownService } from 'src/modules/markdown/markdow.service';
import { MDXComponent } from 'src/modules/markdown/mdx-component';

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

  const blogPost = await getBlogPost(params);

  return {
    title: 'Md Irshad - 📖 ' + blogPost?.frontmatter.title,
    description: blogPost?.frontmatter.description
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages]
    // }
  };
}

// export async function generateStaticParams() {}

async function getBlogPost({ slug }: { slug: string }) {
  const markdownService = new MarkdownService();
  const posts = await markdownService.getFileBySlug('blog', slug);
  return posts;
}

const Page: React.FC<Props> = async ({
  params,
  searchParams
}): Promise<JSX.Element> => {
  const blogMatter = await getBlogPost(params);
  const frontmatter = blogMatter?.frontmatter;
  const code = blogMatter?.code;

  const COMMIT_HISTORY_LINK = `https://github.com/mdirshaddev/mdirshad/commits/main/src/contents/blog/${frontmatter?.slug}.mdx`;
  const GITHUB_EDIT_LINK = `https://github.com/mdirshaddev/mdirshad/blob/main/src/contents/blog/${frontmatter?.slug}.mdx`;
  return (
    <main className='relative min-h-[calc(100vh-64px)]'>
      <section className='mx-auto max-w-[1400px] py-4'>
        <article className='px-4 lg:px-8'>
          <NextCloudinaryImg
            publicId={`theodorusclarence/banner/${frontmatter?.banner}`}
            alt={`Photo from unsplash: ${frontmatter?.banner}`}
            width={1336}
            height={534.4}
            aspect={{ height: 2, width: 5 }}
          />

          <h1 className='mt-4 text-center'>{frontmatter?.title}</h1>

          <p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-300'>
            Written on{' '}
            {frontmatter?.publishedAt &&
              format(new Date(frontmatter?.publishedAt), 'MMMM dd, yyyy')}{' '}
            by Theodorus Clarence.
          </p>

          {frontmatter?.lastUpdated && (
            <div className='mt-2 flex flex-wrap justify-center gap-2 text-center text-sm text-gray-700 dark:text-gray-200'>
              <p>
                Last updated{' '}
                {format(new Date(frontmatter?.lastUpdated), 'MMMM dd, yyyy')}.
              </p>
              <NextLink
                href={COMMIT_HISTORY_LINK}
                className={cn(
                  'inline-flex items-center gap-1 rounded-sm font-medium',
                  'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-primary',
                  'focus-visible:ring-primary-300 focus:outline-none focus-visible:ring'
                )}>
                <Icons.history className='text-lg' />
                <span>See changes</span>
              </NextLink>
            </div>
          )}
          <div className='lg:grid lg:grid-cols-[250px,800px,auto] lg:gap-8'>
            <aside className='hidden py-4 lg:block'>
              <div className='sticky top-24'>
                {frontmatter && <TableOfContent frontmatter={frontmatter} />}
                <div className='flex items-center justify-center py-8'></div>
              </div>
            </aside>
            <div className='mdx prose mx-auto mt-4 w-full transition-colors dark:prose-invert'>
              {code && <MDXComponent code={code} />}
            </div>
            <aside className='hidden py-4 lg:block'>
              <div className='sticky top-24'>
                <BlogStats />
              </div>
            </aside>
          </div>
          {/* Comment box giscus */}
          <GiscusCommentBox />
          <div className='mt-8 flex flex-col items-start gap-4 md:flex-row-reverse md:justify-between'>
            <StyledLink href={GITHUB_EDIT_LINK}>Edit this on GitHub</StyledLink>
            <StyledLink
              href='/blog'
              className={cn(
                'inline-flex items-center gap-1 rounded-sm font-medium',
                'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-primary',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary'
              )}>
              ← Back to blog
            </StyledLink>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Page;
