import { markdownToHtml, URL, Path } from '../utilities/.';
import matter from 'gray-matter';

export const getPostBySlug = async <Type>(
  file: string,
  fields: string[] = []
): Promise<Type> => {
  const path = new Path();
  const slug = file.replace(/\.md$/, '');
  const rawResponse = await fetch(`${path.get('POST')}/${file}`);
  const rawContent = await rawResponse.text();
  const { data, content } = matter(rawContent);
  const items: Object = {};

  fields.forEach((field) => {
    items[field] = Object.assign(data, { slug, content })[field] ?? 1;
  });

  return (await normalizePostData(items)) as Promise<Type>;
};

export const getAllPosts = async <Type>(fields: string[] = []) => {
  const path = new Path();
  let response = await fetch(`${path.get('GLOBAL_ASSETS_API')}/posts.json`);
  response = await response.json();

  const posts = Promise.all(
    (response as any).content.map(({ file }) =>
      getPostBySlug<Type>(file, fields)
    )
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
          link: `${new Path().get('POST_URL')}/${(rest as any).slug}`,
        }
      : {}
  );
