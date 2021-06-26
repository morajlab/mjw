import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { URL as NodeURL, pathToFileURL } from 'url';
import { markdownToHtml, URL, Path } from '../utilities/.';
import matter from 'gray-matter';

/*const postsDirectory = join(
  process.cwd(),
  'apps',
  'official-website-cms',
  '_posts'
);*/

const pathClass = new Path();

const postsDirectory = new NodeURL(pathToFileURL(pathClass.get('POST')).href);

export const getPostSlugs = () => readdirSync(postsDirectory);

export const getPostBySlug = async <Type>(
  slug: string,
  fields: string[] = []
): Promise<Type> => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory.href, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    items[field] = data[field] ?? 1;

    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }
  });

  return (await normalizePostData(items)) as Promise<Type>;
};

export const getAllPosts = async <Type>(fields: string[] = []) => {
  const slugs = getPostSlugs();
  const posts = Promise.all(
    slugs.map((slug) => getPostBySlug<Type>(slug, fields))
  );

  return posts;
};

export interface INormalizePostData {
  content?: string;
  coverImage?: string;
  link?: string;
}

export const normalizePostData = async ({
  content,
  coverImage,
  link,
  ...rest
}: INormalizePostData): Promise<INormalizePostData> =>
  Object.assign(
    { ...rest },
    content
      ? {
          content: (await markdownToHtml(content)) || '',
        }
      : {},
    coverImage
      ? {
          coverImage: new URL().resolveURL(coverImage),
        }
      : {},
    link
      ? {
          link: `${pathClass.get('POST_URL')}/${(rest as any).slug}`,
        }
      : {}
  );
