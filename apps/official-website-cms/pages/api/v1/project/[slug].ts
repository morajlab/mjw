import {
  getPostBySlug,
  errorResponse,
  successResponse,
} from '../../../../lib/.';
import { markdownToHtml } from '../../../../utilities/.';
import type { IProjectPost } from '../../../../types/.';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async ({ query }: NextApiRequest, response: NextApiResponse) => {
  const { slug } = query;

  try {
    const post = getPostBySlug(slug as string, [
      'title',
      'slug',
      'content',
      'coverImage',
    ]);
    const content = Object.assign(post, {
      content: await markdownToHtml(post.content || ''),
    });

    successResponse<Partial<IProjectPost>>({ response, content });
  } catch (error) {
    errorResponse({ response, error });
  }
};
