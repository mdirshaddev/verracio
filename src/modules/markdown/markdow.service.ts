import { promises, readFileSync } from 'fs';
import { join } from 'path';

import readingTime, { type ReadTimeResults } from 'reading-time';
import type { ContentType } from 'src/types/frontmatters';

import { mdxBundlerConfig } from './config/mdx-bundler-config';

/**
 * The `MarkdownService` class provides methods for reading Markdown files, retrieving file lists, and
extracting file slugs. 
 */
export class MarkdownService {
  constructor() {}

  /**
   * The function `getFileBySlug` reads a file based on its type and slug, and returns the file's code
   * and frontmatter.
   * @param {ContentType} type - The `type` parameter represents the type of content you want to
   * retrieve. It could be a blog post, a page, or any other type of content.
   * @param {string} slug - The `slug` parameter is a string that represents the unique identifier for a
   * specific file. It is used to locate the file in the file system and retrieve its contents.
   * @returns The function `getFileBySlug` returns an object with two properties: `code` and
   * `frontmatter`. The `code` property contains the code extracted from the file specified by the `type`
   * and `slug` parameters. The `frontmatter` property is an object that contains additional metadata
   * about the file, such as the word count, reading time, and slug.
   */
  public async getFileBySlug(
    type: ContentType,
    slug: string
  ): Promise<
    | {
        code: string | undefined;
        frontmatter: {
          wordCount: number;
          readingTime: ReadTimeResults;
          slug: string | null;
          [key: string]: any;
        };
      }
    | undefined
  > {
    const source = slug
      ? readFileSync(
          join(process.cwd(), 'src', 'data', type, `${slug}.mdx`),
          'utf8'
        )
      : readFileSync(join(process.cwd(), 'src', 'data', `${type}.mdx`), 'utf8');

    try {
      const mdx = await mdxBundlerConfig(source);
      let code = mdx?.code;
      let extraFontMatter = mdx?.frontmatter;
      return {
        code,
        frontmatter: {
          wordCount: source.split(/\s+/gu).length,
          readingTime: readingTime(source),
          slug: slug || null,
          ...extraFontMatter
        }
      };
    } catch (err) {
      console.log(err);
      // TODO: Sentry error logging
    }
  }

  /**
   * The getFileList function recursively retrieves a list of all files in a given directory.
   * @param {string} dirName - The `dirName` parameter is a string that represents the directory name or
   * path from which you want to retrieve the file list.
   * @returns The function `getFileList` returns a promise that resolves to an array of strings
   * representing the file paths in the specified directory and its subdirectories.
   */
  public async getFileList(dirName: string): Promise<string[] | undefined> {
    let files: string[] = [];
    try {
      const items = await promises.readdir(dirName, { withFileTypes: true });

      for (const item of items) {
        if (item.isDirectory()) {
          files = [
            ...files,
            ...((await this.getFileList(`${dirName}/${item.name}`)) as string[])
          ];
        } else {
          files.push(`${dirName}/${item.name}`);
        }
      }

      return files;
    } catch (err) {
      // TODO: Sentry error log
    }
  }

  /**
   * The function `getFileSlugArray` takes a `type` parameter, retrieves a list of files from a specified
   * directory, and returns an array of slugs derived from the file paths.
   * @param {ContentType} type - The `type` parameter is of type `ContentType`. It is used to specify the
   * type of content for which the file slugs are being retrieved.
   * @returns the `slugArray` which is an array of file slugs.
   */
  async getFileSlugArray(type: ContentType) {
    try {
      const filePath = join(process.cwd(), 'src', 'data', type);
      let filesPathArray = await this.getFileList(filePath);
      const slugArray = filesPathArray?.forEach(path =>
        path
          .replace(filePath + '/', '')
          .replace('.mdx', '')
          .split('/')
      );
      return slugArray;
    } catch (err) {
      // TODO: Sentry error log
    }
  }
}
