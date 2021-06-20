import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(
  process.cwd(),
  'apps',
  'official-website-cms',
  '_posts'
);

export const getPostSlugs = () => readdirSync(postsDirectory);

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
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

  return items;
};

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));

  return posts;
};
