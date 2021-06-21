import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { markdownToHtml, URL } from '../utilities/.';
import matter from 'gray-matter';

const postsDirectory = join(
  process.cwd(),
  'apps',
  'official-website-cms',
  '_posts'
);

export const getPostSlugs = () => readdirSync(postsDirectory);

export const getPostBySlug = async <Type>(
  slug: string,
  fields: string[] = []
): Promise<Type> => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
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
}

export const normalizePostData = async ({
  content,
  coverImage,
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
      : {}
  );
