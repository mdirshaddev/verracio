import { bundleMDX } from 'mdx-bundler';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/**
 * The `mdxConfig` function is an async function that takes a `source` string as input and returns an
 * object containing the compiled code, frontmatter, matter, and any errors encountered during the
 * process.
 * @param {string} source - The `source` parameter is a string that represents the content of an MDX
 * file. It is the source code that will be transformed and bundled into JavaScript code.
 * @returns The `mdxConfig` function returns an object with the following properties:
 */
export async function mdxBundlerConfig(source: string) {
  try {
    const { code, frontmatter, errors, matter } = await bundleMDX({
      source,
      mdxOptions(options) {
        options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
        options.rehypePlugins = [
          ...(options?.rehypePlugins ?? []),
          rehypeSlug,
          () =>
            rehypePrettyCode({
              theme: 'css-variables'
            }),
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ['hash-anchor']
              }
            }
          ]
        ];

        return options;
      }
    });
    return {
      code,
      frontmatter,
      matter,
      errors
    };
  } catch (e) {
    // TODO: Sentry error reporting
  }
}
